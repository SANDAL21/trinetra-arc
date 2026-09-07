"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="relative py-32 md:py-48 bg-brand-black text-brand-white overflow-hidden">
      
      {/* Subtle Arc Background Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] border border-white/5 rounded-full pointer-events-none" />
      
      {/* Gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-accent/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 md:px-12 text-center flex flex-col items-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8"
        >
          READY TO SEE <br className="hidden md:block" />
          WHAT&apos;S POSSIBLE?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-brand-gray max-w-2xl mx-auto mb-12 font-light"
        >
          Let&apos;s build a digital experience that moves your business forward.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          <Link
            href="/contact"
            className="group flex items-center justify-center gap-2 px-10 py-5 bg-brand-white text-brand-black text-sm font-bold tracking-wide rounded-full hover:bg-brand-accent hover:text-white transition-all duration-300 min-w-[200px]"
          >
            Start a Project
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link
            href="/work"
            className="group flex items-center justify-center gap-2 px-10 py-5 bg-transparent border border-white/20 text-brand-white text-sm font-bold tracking-wide rounded-full hover:border-brand-white transition-all duration-300 min-w-[200px]"
          >
            View Our Work
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
