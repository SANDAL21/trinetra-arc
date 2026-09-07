"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";
import { ArrowRight } from "lucide-react";

const Hero3D = dynamic(() => import("@/components/3d/Hero3D").then((mod) => mod.Hero3D), {
  ssr: false,
});

export function Hero() {
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-brand-black">
      {/* 3D Background */}
      <Hero3D />

      {/* Content overlay */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 flex flex-col items-center text-center pointer-events-none mt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block tracking-[0.2em] text-xs font-semibold text-brand-accent mb-6 uppercase">
            Trinetra Arc
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-tight"
        >
          See Beyond. <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-white to-brand-gray">Build Forward.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-brand-gray text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light"
        >
          We build high-performance websites and digital experiences designed to help ambitious small businesses grow, earn trust, and stand apart.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-4 pointer-events-auto"
        >
          <Link
            href="/contact"
            className="group flex items-center justify-center gap-2 px-8 py-4 bg-brand-white text-brand-black text-sm font-semibold rounded-full hover:bg-brand-accent hover:text-white transition-all duration-300 min-w-[180px] shadow-lg shadow-brand-white/10"
          >
            Start a Project
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/work"
            className="group flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-white/20 text-brand-white text-sm font-semibold rounded-full hover:bg-white/5 transition-all duration-300 min-w-[180px]"
          >
            View Our Work
          </Link>
        </motion.div>
      </div>

      {/* Gradient overlay for blending */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-black to-transparent z-10 pointer-events-none" />
    </section>
  );
}
