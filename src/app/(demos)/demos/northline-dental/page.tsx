import { NorthlinePage } from "@/components/demos/northline-dental/NorthlinePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Northline Dental Studio | Modern Dentistry in Austin",
  description: "A healthier smile starts with a better experience. Modern dental care designed around your comfort, your goals, and your long-term oral health.",
};

export default function Page() {
  return <NorthlinePage />;
}
