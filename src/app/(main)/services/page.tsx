"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const detailedServices = [
  {
    id: "web-design-development",
    title: "Web Design & Development",
    desc: "High-performance websites designed around the business, brand and customer journey.",
    details: "Your website is often the first interaction a customer has with your business. We craft intentional, premium interfaces and build them on solid technical foundations. Our approach ensures your site loads instantly, performs flawlessly across all devices, and is architected to scale effortlessly as your business grows."
  },
  {
    id: "local-growth",
    title: "Local Growth",
    desc: "Local SEO and digital presence strategies designed to help businesses become easier to discover.",
    details: "A beautiful website is useless if no one can find it. We engineer our sites with technical SEO best practices from day one. We help you build a foundational strategy that improves local search rankings, drives organic traffic, and ensures your business dominates your specific market."
  },
  {
    id: "conversion-lead-gen",
    title: "Conversion & Lead Generation",
    desc: "Landing pages, forms and conversion-focused experiences designed to turn visitors into inquiries.",
    details: "Traffic without conversion is a missed opportunity. We design frictionless user journeys, high-converting landing pages, and smart lead-capture forms that guide visitors directly toward meaningful action, ultimately turning clicks into qualified business leads."
  },
  {
    id: "digital-experiences",
    title: "Digital Experiences",
    desc: "Interactive, modern and memorable digital experiences that help businesses stand apart.",
    details: "In a crowded digital landscape, standing out requires more than just good layout. We integrate lightweight, performant 3D elements and strategic micro-interactions that capture attention and create memorable brand experiences, ensuring your business is remembered long after the user leaves."
  }
];

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-24 bg-brand-black text-brand-white min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-24 max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-8"
          >
            Capabilities
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-brand-gray font-light leading-relaxed"
          >
            We provide an integrated suite of services designed to build, launch, and grow premium digital experiences.
          </motion.p>
        </div>

        <div className="flex flex-col gap-32">
          {detailedServices.map((service, index) => (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 pt-8 border-t border-white/10 scroll-mt-32"
            >
              <div className="md:col-span-4">
                <span className="text-brand-accent font-mono text-sm block mb-4">0{index + 1}</span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{service.title}</h2>
              </div>
              <div className="md:col-span-8">
                <h3 className="text-2xl font-medium mb-6 text-brand-white">
                  {service.desc}
                </h3>
                <p className="text-brand-gray text-lg font-light leading-relaxed mb-8">
                  {service.details}
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand-white hover:text-brand-accent transition-colors group"
                >
                  Discuss this service
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
