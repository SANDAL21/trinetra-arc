"use client";

import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "WEB DESIGN & DEVELOPMENT",
    desc: "High-performance websites designed around the business, brand and customer journey.",
  },
  {
    num: "02",
    title: "LOCAL GROWTH",
    desc: "Local SEO and digital presence strategies designed to help businesses become easier to discover.",
  },
  {
    num: "03",
    title: "CONVERSION & LEAD GENERATION",
    desc: "Landing pages, forms and conversion-focused experiences designed to turn visitors into inquiries.",
  },
  {
    num: "04",
    title: "DIGITAL EXPERIENCES",
    desc: "Interactive, modern and memorable digital experiences that help businesses stand apart.",
  }
];

export function Services() {
  return (
    <section className="py-24 md:py-32 bg-brand-black text-brand-white border-t border-white/5" id="services">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="mb-20">
          <h2 className="text-sm font-semibold tracking-widest uppercase text-brand-accent mb-4">WHAT WE DO</h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            WE BUILD DIGITAL EXPERIENCES.
          </h3>
        </div>

        <div className="flex flex-col border-t border-white/10">
          {services.map((service, index) => (
            <motion.div
              key={service.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col md:flex-row md:items-center py-10 md:py-12 border-b border-white/10 hover:bg-white/[0.02] transition-colors duration-300"
            >
              <div className="md:w-1/4 mb-4 md:mb-0">
                <span className="text-brand-gray font-mono text-sm">{service.num}</span>
              </div>
              <div className="md:w-1/3 mb-4 md:mb-0">
                <h4 className="text-2xl font-semibold tracking-wide group-hover:text-brand-accent transition-colors duration-300">
                  {service.title}
                </h4>
              </div>
              <div className="md:w-5/12">
                <p className="text-brand-gray leading-relaxed text-lg font-light">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
