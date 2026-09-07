"use client";

import { motion } from "framer-motion";

const points = [
  {
    title: "STRATEGY BEFORE AESTHETICS",
    desc: "Beautiful design matters. Purpose matters more.",
  },
  {
    title: "TECHNOLOGY WITH INTENTION",
    desc: "We use modern technology where it creates meaningful value.",
  },
  {
    title: "PERFORMANCE MATTERS",
    desc: "Premium experiences should still be fast, responsive and accessible.",
  },
  {
    title: "BUILT TO EVOLVE",
    desc: "We create digital foundations that can grow with your business.",
  },
];

export function WhyUs() {
  return (
    <section className="py-24 md:py-32 bg-brand-charcoal text-brand-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
          >
            BUILT DIFFERENTLY.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
          {points.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col border-t border-white/10 pt-8"
            >
              <span className="text-brand-accent font-mono text-sm mb-4">0{index + 1}</span>
              <h3 className="text-2xl font-semibold tracking-wide mb-4">{point.title}</h3>
              <p className="text-brand-gray text-lg font-light leading-relaxed">
                {point.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
