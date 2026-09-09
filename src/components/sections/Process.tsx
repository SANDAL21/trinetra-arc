"use client";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "DISCOVER",
    desc: "Understand the business, audience and goals.",
  },
  {
    num: "02",
    title: "DEFINE",
    desc: "Create the structure, strategy and direction.",
  },
  {
    num: "03",
    title: "DESIGN",
    desc: "Turn strategy into a distinctive visual experience.",
  },
  {
    num: "04",
    title: "DEVELOP",
    desc: "Build a fast, responsive and scalable website.",
  },
  {
    num: "05",
    title: "LAUNCH",
    desc: "Test, optimize and deploy.",
  },
];

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  return (
    <section 
      ref={containerRef}
      className="py-24 md:py-32 bg-brand-white text-brand-black relative light-section"
      data-theme="light"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-24 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            FROM IDEA TO LAUNCH.
          </h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Progress Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-brand-charcoal/10 -translate-x-1/2 hidden md:block" />
          
          <motion.div 
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-brand-accent -translate-x-1/2 hidden md:block origin-top"
            style={{ scaleY: scrollYProgress }}
          />

          <div className="flex flex-col gap-16 md:gap-24">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={step.num} className="relative flex flex-col md:flex-row items-center md:justify-between">
                  
                  {/* Left Side (Empty for odd, Content for even on Desktop) */}
                  <div className={`w-full md:w-5/12 text-left md:${isEven ? "text-right" : "text-left hidden md:block"}`}>
                    {isEven && (
                      <div className="hidden md:block">
                        <span className="text-brand-accent font-mono text-sm block mb-2">{step.num}</span>
                        <h3 className="text-3xl font-semibold mb-4">{step.title}</h3>
                        <p className="text-brand-charcoal/70 text-lg font-light leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Center Node */}
                  <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-brand-white border-2 border-brand-charcoal/20 flex items-center justify-center z-10 hidden md:flex">
                    <div className="w-3 h-3 rounded-full bg-brand-accent" />
                  </div>

                  {/* Right Side (Content for odd, Empty for even on Desktop) */}
                  <div className={`w-full md:w-5/12 text-left`}>
                    {/* Mobile always shows here, Desktop shows if odd */}
                    <div className={`md:${isEven ? "hidden" : "block"}`}>
                      <span className="text-brand-accent font-mono text-sm block mb-2">{step.num}</span>
                      <h3 className="text-3xl font-semibold mb-4">{step.title}</h3>
                      <p className="text-brand-charcoal/70 text-lg font-light leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                    {/* Mobile fallback for even steps */}
                    {isEven && (
                      <div className="md:hidden block mt-8">
                        <span className="text-brand-accent font-mono text-sm block mb-2">{step.num}</span>
                        <h3 className="text-3xl font-semibold mb-4">{step.title}</h3>
                        <p className="text-brand-charcoal/70 text-lg font-light leading-relaxed">
                          {step.desc}
                        </p>
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
