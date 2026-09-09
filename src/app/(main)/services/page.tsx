"use client";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const detailedServices = [
  {
    id: "web-design-development",
    title: "Web Design & Development",
    desc: "High-performance websites designed around the business, brand and customer journey.",
    details: "Your website is often the first interaction a customer has with your business. We craft intentional, premium interfaces and build them on solid technical foundations. Our approach ensures your site loads instantly, performs flawlessly across all devices, and is architected to scale effortlessly as your business grows.",
  },
  {
    id: "local-growth",
    title: "Local Growth",
    desc: "Local SEO and digital presence strategies designed to help businesses become easier to discover.",
    details: "A beautiful website is useless if no one can find it. We engineer our sites with technical SEO best practices from day one. We help you build a foundational strategy that improves local search rankings, drives organic traffic, and ensures your business dominates your specific market.",
  },
  {
    id: "conversion-lead-gen",
    title: "Conversion & Lead Generation",
    desc: "Landing pages, forms and conversion-focused experiences designed to turn visitors into inquiries.",
    details: "Traffic without conversion is a missed opportunity. We design frictionless user journeys, high-converting landing pages, and smart lead-capture forms that guide visitors directly toward meaningful action, ultimately turning clicks into qualified business leads.",
  },
  {
    id: "digital-experiences",
    title: "Digital Experiences",
    desc: "Interactive, modern and memorable digital experiences that help businesses stand apart.",
    details: "In a crowded digital landscape, standing out requires more than just good layout. We integrate lightweight, performant 3D elements and strategic micro-interactions that capture attention and create memorable brand experiences, ensuring your business is remembered long after the user leaves.",
  },
];

const steps = [
  { num: "01", title: "DISCOVER", desc: "Understand the business, audience and goals." },
  { num: "02", title: "DEFINE", desc: "Create the structure, strategy and direction." },
  { num: "03", title: "DESIGN", desc: "Turn strategy into a distinctive visual experience." },
  { num: "04", title: "DEVELOP", desc: "Build a fast, responsive and scalable website." },
  { num: "05", title: "LAUNCH", desc: "Test, optimize and deploy." },
];

function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  return (
    <section
      ref={containerRef}
      className="py-20 md:py-28 bg-brand-white text-brand-black relative light-section"
      data-theme="light"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 text-center">
          <h2 className="text-sm font-semibold tracking-widest uppercase text-brand-accent mb-4">Our Process</h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight">From Idea to Launch.</h3>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Progress Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-brand-charcoal/10 -translate-x-1/2 hidden md:block" />
          <motion.div
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-brand-accent -translate-x-1/2 hidden md:block origin-top"
            style={{ scaleY: scrollYProgress }}
          />

          <div className="flex flex-col gap-12 md:gap-16">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={step.num} className="relative flex flex-col md:flex-row items-center md:justify-between">
                  {/* Left (even = content, odd = empty) */}
                  <div className={`w-full md:w-5/12 ${isEven ? "md:text-right" : "hidden md:block"}`}>
                    {isEven && (
                      <div className="hidden md:block">
                        <span className="text-brand-accent font-mono text-sm block mb-2">{step.num}</span>
                        <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                        <p className="text-brand-charcoal/70 text-base font-light leading-relaxed">{step.desc}</p>
                      </div>
                    )}
                  </div>

                  {/* Center Node */}
                  <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-brand-white border-2 border-brand-charcoal/20 flex items-center justify-center z-10 hidden md:flex">
                    <div className="w-2.5 h-2.5 rounded-full bg-brand-accent" />
                  </div>

                  {/* Right (odd = content) + mobile always-show */}
                  <div className="w-full md:w-5/12">
                    <div className={`md:${isEven ? "hidden" : "block"}`}>
                      <span className="text-brand-accent font-mono text-sm block mb-2">{step.num}</span>
                      <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                      <p className="text-brand-charcoal/70 text-base font-light leading-relaxed">{step.desc}</p>
                    </div>
                    {isEven && (
                      <div className="md:hidden block">
                        <span className="text-brand-accent font-mono text-sm block mb-2">{step.num}</span>
                        <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                        <p className="text-brand-charcoal/70 text-base font-light leading-relaxed">{step.desc}</p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="pt-32 pb-16 bg-brand-black text-brand-white">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
          >
            Capabilities
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-brand-gray font-light leading-relaxed"
          >
            An integrated suite of services designed to build, launch, and grow premium digital experiences.
          </motion.p>
        </div>
      </div>

      {/* Services List */}
      <div className="pb-24 bg-brand-black text-brand-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col gap-20">
            {detailedServices.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 pt-8 border-t border-white/10 scroll-mt-32"
              >
                <div className="md:col-span-4">
                  <span className="text-brand-accent font-mono text-sm block mb-4">0{index + 1}</span>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">{service.title}</h2>
                </div>
                <div className="md:col-span-8">
                  <h3 className="text-xl font-medium mb-5 text-brand-white">{service.desc}</h3>
                  <p className="text-brand-gray text-lg font-light leading-relaxed mb-8">{service.details}</p>
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

      {/* Process Timeline */}
      <ProcessSection />

      {/* CTA */}
      <div className="py-20 bg-brand-black text-brand-white border-t border-white/10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to start your project?</h2>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 bg-brand-white text-brand-black text-sm font-semibold rounded-full hover:bg-brand-accent hover:text-white transition-all duration-300"
        >
          Start a Project
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
