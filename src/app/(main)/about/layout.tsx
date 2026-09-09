import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Trinetra Arc",
  description: "Trinetra Arc is a digital partner for ambitious small businesses. Learn about our philosophy, approach, and the principles behind our work.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
