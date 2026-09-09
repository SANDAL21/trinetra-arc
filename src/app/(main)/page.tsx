import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Intro } from "@/components/sections/Intro";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Trinetra Arc — Digital Experiences That Move Businesses Forward",
  description: "Trinetra Arc designs and builds high-performance websites and digital experiences for ambitious small businesses. Strategy, design, development.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <FeaturedWork />
      <ServicesPreview />
      <FinalCTA />
    </>
  );
}
