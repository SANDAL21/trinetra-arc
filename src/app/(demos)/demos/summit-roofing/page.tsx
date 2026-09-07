import { Metadata } from "next";
import { SummitPage } from "@/components/demos/summit-roofing/SummitPage";

export const metadata: Metadata = {
  title: "Summit Roofing Co. | Austin, TX",
  description: "Dependable roofing solutions for Austin homeowners.",
};

export default function SummitRoofingDemo() {
  return (
    <div className="bg-[#FAF9F6] text-[#2C2C2C] font-sans antialiased selection:bg-[#D97736] selection:text-white">
      <SummitPage />
    </div>
  );
}
