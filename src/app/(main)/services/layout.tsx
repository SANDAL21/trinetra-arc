import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — Trinetra Arc",
  description: "Web design, development, local SEO, conversion optimization and digital experience services for ambitious US small businesses.",
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
