"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const serviceItems = [
  {
    num: "01",
    title: "Web Design & Development",
    desc: "High-performance websites designed around your business, brand and customer journey.",
  },
  {
    num: "02",
    title: "Local Growth",
    desc: "Local SEO and digital presence strategies that help businesses become easier to discover.",
  },
  {
    num: "03",
    title: "Conversion & Lead Generation",
    desc: "Landing pages and conversion-focused experiences that turn visitors into inquiries.",
  },
  {
    num: "04",
    title: "Digital Experiences",
    desc: "Interactive, modern and memorable digital experiences that help businesses stand apart.",
  },
];

export function ServicesPreview() {
  return (
    <section className="py-24 md:py-32 bg-brand-black text-brand-white border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-sm font-semibold tracking-widest uppercase text-brand-accent mb-4">What We Do</h2>
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight">We Build Digital Experiences.</h3>
          </div>
          <Link
            href="/services"
            className="flex-shrink-0 inline-flex items-center gap-2 text-sm font-semibold text-brand-white hover:text-brand-accent transition-colors group"
          >
            Explore Services
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10">
          {serviceItems.map((service, index) => (
            <motion.div
              key={service.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-brand-black p-8 md:p-10 group hover:bg-white/[0.03] transition-colors duration-300"
            >
              <span className="text-brand-accent font-mono text-sm block mb-4">{service.num}</span>
              <h4 className="text-xl font-semibold mb-3 group-hover:text-brand-accent transition-colors duration-300">
                {service.title}
              </h4>
              <p className="text-brand-gray leading-relaxed font-light">{service.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-brand-white text-sm font-semibold rounded-full hover:bg-white/5 hover:border-brand-white transition-all duration-300"
          >
            View All Services
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
