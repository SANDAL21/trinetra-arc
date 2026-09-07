"use client";

import { motion } from "framer-motion";
import { FormEvent, useState } from "react";

// ── Types ────────────────────────────────────────────────────────────────────
interface FormData {
  name: string;
  email: string;
  company: string;
  services: string[];
  details: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  details?: string;
  general?: string;
}

// ── Helpers ──────────────────────────────────────────────────────────────────
const SERVICES = [
  "New Website",
  "Website Redesign",
  "E-commerce",
  "3D / Interactive Experience",
  "AI / Automation",
  "SEO / Growth",
  "Other",
];

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = "Name is required.";
  if (!data.email.trim()) errors.email = "Email is required.";
  else if (!isValidEmail(data.email)) errors.email = "Please enter a valid email address.";
  if (!data.details.trim()) errors.details = "Please tell us about your project.";
  return errors;
}

// ── Component ────────────────────────────────────────────────────────────────
export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    services: [],
    details: "",
  });
  const [errors, setErrors]           = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess]     = useState(false);

  // ── Field handlers ─────────────────────────────────────────────────────────
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  // ── Submit ─────────────────────────────────────────────────────────────────
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    if (!supabaseUrl) {
      setErrors({ general: "Service is temporarily unavailable. Please email us directly at hello@trinetra-arc.com" });
      setIsSubmitting(false);
      return;
    }

    const edgeFunctionUrl = `${supabaseUrl}/functions/v1/submit-contact-inquiry`;

    try {
      const res = await fetch(edgeFunctionUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name:            formData.name.trim(),
          email:           formData.email.trim(),
          company:         formData.company.trim(),
          services:        formData.services,
          project_details: formData.details.trim(),
          source:          "website-contact-form",
        }),
      });

      const json = await res.json().catch(() => ({}));

      if (res.ok && json.success) {
        setIsSuccess(true);
        setFormData({ name: "", email: "", company: "", services: [], details: "" });
      } else {
        setErrors({
          general:
            json.error ||
            "Something went wrong. Please try again or email us at hello@trinetra-arc.com",
        });
      }
    } catch {
      setErrors({
        general:
          "Could not reach the server. Please check your connection or email us at hello@trinetra-arc.com",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // ── Success state ──────────────────────────────────────────────────────────
  if (isSuccess) {
    return (
      <div className="pt-32 pb-24 bg-brand-black text-brand-white min-h-screen">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="mb-6 w-12 h-12 rounded-full bg-brand-accent/10 border border-brand-accent/30 flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-accent">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Message received.
            </h1>
            <p className="text-xl text-brand-gray font-light leading-relaxed mb-10">
              Thank you for reaching out. We&apos;ve received your inquiry and will be in touch within one business day.
            </p>
            <button
              onClick={() => setIsSuccess(false)}
              className="px-8 py-3 border border-white/20 text-sm font-medium rounded-full hover:bg-brand-white/5 transition-colors"
            >
              Send another message
            </button>
          </motion.div>
        </div>
      </div>
    );
  }

  // ── Form ───────────────────────────────────────────────────────────────────
  return (
    <div className="pt-32 pb-24 bg-brand-black text-brand-white min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

          {/* Left — info */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="sticky top-32"
            >
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-8">
                Let&apos;s build something better.
              </h1>
              <p className="text-xl text-brand-gray font-light leading-relaxed mb-12">
                Tell us what you&apos;re building, where you&apos;re stuck, or where you want to go. We&apos;ll figure out the next step together.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xs font-mono tracking-widest uppercase text-brand-gray mb-2">Email</h3>
                  <a href="mailto:hello@trinetra-arc.com" className="text-lg font-medium hover:text-brand-accent transition-colors">
                    hello@trinetra-arc.com
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-7">
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              onSubmit={handleSubmit}
              noValidate
              className="space-y-8"
            >
              {/* Name + Company */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <input
                    required
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full bg-brand-white/5 border rounded-sm px-4 py-3 focus:outline-none transition-colors ${
                      errors.name ? "border-red-400/70" : "border-white/10 focus:border-brand-accent"
                    }`}
                    placeholder="Jane Doe"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium">Business / Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-brand-white/5 border border-white/10 rounded-sm px-4 py-3 focus:outline-none focus:border-brand-accent transition-colors"
                    placeholder="Acme Corp"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <input
                  required
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full bg-brand-white/5 border rounded-sm px-4 py-3 focus:outline-none transition-colors ${
                    errors.email ? "border-red-400/70" : "border-white/10 focus:border-brand-accent"
                  }`}
                  placeholder="jane@example.com"
                />
                {errors.email && (
                  <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              {/* Services */}
              <div className="space-y-4">
                <label className="text-sm font-medium block">What do you need?</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {SERVICES.map((service) => (
                    <label
                      key={service}
                      className="flex items-center gap-3 p-4 border border-white/10 rounded-sm cursor-pointer hover:bg-brand-white/5 transition-colors"
                    >
                      <input
                        type="checkbox"
                        name="services"
                        value={service}
                        checked={formData.services.includes(service)}
                        onChange={() => handleServiceToggle(service)}
                        className="accent-brand-accent w-4 h-4"
                      />
                      <span className="text-sm">{service}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Project details */}
              <div className="space-y-2">
                <label htmlFor="details" className="text-sm font-medium">Project Details</label>
                <textarea
                  required
                  id="details"
                  name="details"
                  rows={5}
                  value={formData.details}
                  onChange={handleChange}
                  className={`w-full bg-brand-white/5 border rounded-sm px-4 py-3 focus:outline-none transition-colors resize-none ${
                    errors.details ? "border-red-400/70" : "border-white/10 focus:border-brand-accent"
                  }`}
                  placeholder="Tell us more about your project goals..."
                />
                {errors.details && (
                  <p className="text-red-400 text-xs mt-1">{errors.details}</p>
                )}
              </div>

              {/* General error */}
              {errors.general && (
                <div className="px-4 py-3 border border-red-400/30 bg-red-400/5 rounded-sm">
                  <p className="text-red-400 text-sm">{errors.general}</p>
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-10 py-4 bg-brand-white text-brand-black text-sm font-bold tracking-wide rounded-full hover:bg-brand-accent hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending…" : "Start the Conversation"}
              </button>

            </motion.form>
          </div>

        </div>
      </div>
    </div>
  );
}


