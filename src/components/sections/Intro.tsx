"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function Intro() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 md:py-48 bg-brand-white text-brand-black" id="intro">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center" ref={ref}>
          {/* Animated Trinetra Arc visual element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-12 h-12 mx-auto mb-12 flex flex-col items-center justify-between text-brand-accent"
          >
             <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full stroke-current stroke-2">
                <path d="M3 12C3 12 7 5 12 5C17 5 21 12 21 12" strokeLinecap="round" />
                <circle cx="12" cy="12" r="3" />
                <path d="M12 18V21" strokeLinecap="round" />
             </svg>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8"
          >
            WE SEE WHAT&apos;S NEXT.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-brand-charcoal/80 leading-relaxed font-light mx-auto"
          >
            Your website is more than a digital brochure. It&apos;s often the first interaction someone has with your business. We combine strategy, design and technology to create experiences that earn attention and drive action.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
