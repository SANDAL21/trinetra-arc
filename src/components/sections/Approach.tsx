"use client";

import { motion } from "framer-motion";

const columns = [
  {
    num: "01",
    title: "DISCOVER",
    desc: "We start by understanding your business, your market, and what you actually need to achieve. No assumptions, just clarity.",
  },
  {
    num: "02",
    title: "CREATE",
    desc: "We design and engineer high-performance digital experiences tailored to your goals, keeping you informed at every step.",
  },
  {
    num: "03",
    title: "FORWARD",
    desc: "We launch, test, and optimize. We build scalable foundations so your digital presence grows alongside your business.",
  },
];

export function Approach() {
  return (
    <section className="py-24 md:py-32 bg-brand-white text-brand-black">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8"
          >
            THREE PERSPECTIVES.<br />
            ONE VISION.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {columns.map((col, index) => (
            <motion.div
              key={col.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 border border-brand-charcoal/20 rounded-full flex items-center justify-center mb-8 text-brand-accent font-mono text-sm">
                {col.num}
              </div>
              <h3 className="text-2xl font-semibold mb-4 tracking-wide">{col.title}</h3>
              <p className="text-brand-charcoal/70 text-lg font-light leading-relaxed">
                {col.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
