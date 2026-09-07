// Supabase Edge Function: submit-contact-inquiry
// Deno runtime — no Node.js imports

import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

// Simple email regex
function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function sanitize(str: string, maxLen: number): string {
  return String(str ?? "").trim().slice(0, maxLen);
}

Deno.serve(async (req) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: CORS_HEADERS });
  }

  if (req.method !== "POST") {
    return new Response(
      JSON.stringify({ error: "Method not allowed" }),
      { status: 405, headers: { ...CORS_HEADERS, "Content-Type": "application/json" } }
    );
  }

  // -- Parse body --------------------------------------------------------------
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return new Response(
      JSON.stringify({ error: "Invalid JSON body" }),
      { status: 400, headers: { ...CORS_HEADERS, "Content-Type": "application/json" } }
    );
  }

  // -- Validate & sanitize ------------------------------------------------------
  const name          = sanitize(body.name as string, 120);
  const email         = sanitize(body.email as string, 254);
  const company       = sanitize(body.company as string, 120);
  const projectType   = sanitize(body.project_type as string, 120);
  const projectDetails = sanitize(body.project_details as string, 5000);
  const source        = sanitize(body.source as string, 100) || "website-contact-form";

  // Sanitize services array
  const rawServices = Array.isArray(body.services) ? body.services : [];
  const services: string[] = rawServices
    .map((s: unknown) => sanitize(String(s), 80))
    .filter(Boolean)
    .slice(0, 10);

  const errors: string[] = [];
  if (!name) errors.push("Name is required.");
  if (!email) errors.push("Email is required.");
  else if (!isValidEmail(email)) errors.push("Email address is not valid.");
  if (!projectDetails) errors.push("Project details are required.");

  if (errors.length > 0) {
    return new Response(
      JSON.stringify({ error: errors.join(" ") }),
      { status: 422, headers: { ...CORS_HEADERS, "Content-Type": "application/json" } }
    );
  }

  // -- Supabase client (service-role — server-side only) ---------------------
  const supabaseUrl       = Deno.env.get("SUPABASE_URL")!;
  const serviceRoleKey    = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
  const resendApiKey      = Deno.env.get("RESEND_API_KEY")!;

  const supabase = createClient(supabaseUrl, serviceRoleKey, {
    auth: { persistSession: false },
  });

  // -- Insert inquiry --------------------------------------------------------
  const { data: inquiry, error: dbError } = await supabase
    .from("contact_inquiries")
    .insert({
      name,
      email,
      company,
      project_type: projectType,
      services,
      project_details: projectDetails,
      status: "new",
      email_sent: false,
      source,
    })
    .select("id, created_at")
    .single();

  if (dbError) {
    console.error("DB insert error:", dbError);
    return new Response(
      JSON.stringify({ error: "Failed to save inquiry. Please try again." }),
      { status: 500, headers: { ...CORS_HEADERS, "Content-Type": "application/json" } }
    );
  }

  // -- Send notification email via Resend ------------------------------------
  let emailSent = false;
  try {
    const servicesText = services.length > 0 ? services.join(", ") : "Not specified";
    const emailBody = `
New inquiry received via Trinetra ARC contact form.

Name:          ${name}
Email:         ${email}
Company:       ${company || "Not provided"}
Project Type:  ${projectType || "Not specified"}
Services:      ${servicesText}
Source:        ${source}

Project Details:
${projectDetails}

—
Inquiry ID: ${inquiry.id}
Submitted:  ${new Date(inquiry.created_at).toLocaleString("en-US", { timeZone: "UTC" })} UTC
    `.trim();

    const resendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Trinetra ARC <notifications@trinetra-arc.com>",
        to: ["hello@trinetra-arc.com"],
        reply_to: email,
        subject: `New Inquiry from ${name}${company ? ` (${company})` : ""}`,
        text: emailBody,
      }),
    });

    if (resendRes.ok) {
      emailSent = true;
      // Update email_sent flag
      await supabase
        .from("contact_inquiries")
        .update({ email_sent: true })
        .eq("id", inquiry.id);
    } else {
      const resendError = await resendRes.text();
      console.error("Resend error:", resendError);
    }
  } catch (emailErr) {
    console.error("Email send failed:", emailErr);
    // Inquiry is already saved — not a fatal error
  }

  return new Response(
    JSON.stringify({
      success: true,
      message: "Your inquiry has been received. We will be in touch shortly.",
      id: inquiry.id,
      email_sent: emailSent,
    }),
    { status: 200, headers: { ...CORS_HEADERS, "Content-Type": "application/json" } }
  );
});
