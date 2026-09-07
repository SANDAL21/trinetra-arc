"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 bg-brand-white text-brand-black min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight"
          >
            WE BUILD DIGITAL EXPERIENCES FOR BUSINESSES READY TO MOVE FORWARD.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-brand-charcoal/80 font-light leading-relaxed max-w-3xl"
          >
            Trinetra Arc is a digital partner for ambitious small businesses. We combine strategy, design, development, technology, and growth to build high-performance websites and digital experiences that deliver real business outcomes.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32">
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="aspect-square bg-brand-offwhite border border-brand-charcoal/10 flex flex-col items-center justify-center p-12 text-center"
          >
             <div className="w-16 h-16 border border-brand-charcoal/20 rounded-full flex items-center justify-center mb-8 text-brand-accent">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 stroke-current stroke-2">
                    <path d="M3 12C3 12 7 5 12 5C17 5 21 12 21 12" strokeLinecap="round" />
                    <circle cx="12" cy="12" r="3" />
                </svg>
             </div>
             <h2 className="text-2xl font-bold mb-4">Vision & Insight</h2>
             <p className="text-brand-charcoal/70 font-light leading-relaxed">
               We believe the best digital products are born from deep understanding. We take the time to learn your business, your audience, and your unique challenges before writing a single line of code.
             </p>
          </motion.div>
          
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="aspect-square bg-brand-charcoal text-brand-white flex flex-col items-center justify-center p-12 text-center"
          >
             <div className="w-16 h-16 border border-white/20 rounded-full flex items-center justify-center mb-8 text-brand-accent">
                 <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 stroke-current stroke-2">
                    <path d="M12 18V21" strokeLinecap="round" />
                    <path d="M12 3V6" strokeLinecap="round" />
                    <path d="M5 12H2" strokeLinecap="round" />
                    <path d="M22 12H19" strokeLinecap="round" />
                 </svg>
             </div>
             <h2 className="text-2xl font-bold mb-4">Forward Momentum</h2>
             <p className="text-brand-gray font-light leading-relaxed">
               A website should be a living asset, not a static brochure. We build robust, scalable architectures that adapt and grow alongside your business, ensuring you stay ahead of the curve.
             </p>
          </motion.div>
        </div>

        <div className="text-center py-16 border-t border-brand-charcoal/10">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Let&apos;s talk about your next project.</h2>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-black text-brand-white text-sm font-semibold rounded-full hover:bg-brand-accent transition-all duration-300"
          >
            Start the Conversation
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
