"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const approachColumns = [
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

const principles = [
  {
    title: "STRATEGY BEFORE AESTHETICS",
    desc: "Beautiful design matters. Purpose matters more. We ground every visual decision in business strategy.",
  },
  {
    title: "TECHNOLOGY WITH INTENTION",
    desc: "We use modern technology where it creates meaningful value — not because it is fashionable.",
  },
  {
    title: "PERFORMANCE MATTERS",
    desc: "Premium experiences should still be fast, responsive and accessible on every device.",
  },
  {
    title: "BUILT TO EVOLVE",
    desc: "We create digital foundations that can grow with your business, not lock you in.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-brand-white text-brand-black light-section" data-theme="light">
      {/* Hero */}
      <div className="pt-32 pb-16 container mx-auto px-6 md:px-12 max-w-4xl">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm font-semibold tracking-widest uppercase text-brand-accent block mb-6"
        >
          About Trinetra Arc
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight"
        >
          We Build Digital Experiences For Businesses Ready To Move Forward.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-brand-charcoal/80 font-light leading-relaxed"
        >
          Trinetra Arc is a digital partner for ambitious small businesses. We combine strategy, design, development, technology, and growth to build high-performance websites and digital experiences that deliver real business outcomes.
        </motion.p>
      </div>

      {/* Vision blocks */}
      <div className="container mx-auto px-6 md:px-12 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
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
            transition={{ duration: 0.7, delay: 0.15 }}
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

        {/* Who we help */}
        <div className="max-w-3xl mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold tracking-tight mb-6"
          >
            Who We Work With
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-xl text-brand-charcoal/70 font-light leading-relaxed"
          >
            We specialize in helping ambitious US small businesses — from independent service providers and local professionals to boutique restaurants, healthcare practices, and specialty retailers — build digital presences that match the quality of their physical work.
          </motion.p>
        </div>
      </div>

      {/* Our Approach — dark section */}
      <section className="py-20 md:py-28 bg-brand-black text-brand-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <span className="text-sm font-semibold tracking-widest uppercase text-brand-accent block mb-4">Our Approach</span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold tracking-tight"
            >
              Three Perspectives.<br />One Vision.
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {approachColumns.map((col, index) => (
              <motion.div
                key={col.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-14 h-14 border border-white/20 rounded-full flex items-center justify-center mb-8 text-brand-accent font-mono text-sm">
                  {col.num}
                </div>
                <h3 className="text-xl font-semibold mb-4 tracking-wide">{col.title}</h3>
                <p className="text-brand-gray font-light leading-relaxed">{col.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles — charcoal section */}
      <section className="py-20 md:py-28 bg-brand-charcoal text-brand-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-16">
            <span className="text-sm font-semibold tracking-widest uppercase text-brand-accent block mb-4">Our Principles</span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold tracking-tight"
            >
              Built Differently.
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {principles.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col border-t border-white/10 pt-8"
              >
                <span className="text-brand-accent font-mono text-sm mb-4">0{index + 1}</span>
                <h3 className="text-xl font-semibold tracking-wide mb-4">{point.title}</h3>
                <p className="text-brand-gray font-light leading-relaxed">{point.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="py-20 bg-brand-black text-brand-white text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-8"
        >
          Let&apos;s talk about your next project.
        </motion.h2>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-white text-brand-black text-sm font-semibold rounded-full hover:bg-brand-accent hover:text-white transition-all duration-300"
        >
          Start the Conversation
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
