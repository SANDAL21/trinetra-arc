import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Start a Project — Trinetra Arc",
  description: "Ready to build something better? Tell us about your project and we will be in touch within one business day.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
