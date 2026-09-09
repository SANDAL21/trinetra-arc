import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work — Trinetra Arc",
  description: "Explore our portfolio of concept digital experiences built for US small businesses across roofing, dental, restaurant, and automotive industries.",
};

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
