"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ArrowRight, X, Menu, MapPin, Phone, Clock, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// ─────────────────────────────────────────────
//  TYPES
// ─────────────────────────────────────────────
type FormStatus = "idle" | "submitting" | "success";

// ─────────────────────────────────────────────
//  DATA
// ─────────────────────────────────────────────
const services = [
  {
    num: "01",
    title: "Paint Correction",
    desc: "Multi-stage machine polishing to permanently remove swirl marks, scratches, and oxidation. We restore paint to a flawless, glass-like clarity.",
    accent: "bg-[#C0A46B]",
  },
  {
    num: "02",
    title: "Ceramic Coating",
    desc: "Professional-grade nano-ceramic technology bonded to your paint surface for semi-permanent hydrophobic protection and depth of shine.",
    accent: "bg-white/30",
  },
  {
    num: "03",
    title: "Interior Detailing",
    desc: "Deep cleaning and conditioning of every interior surface — leather, alcantara, carbon fiber — restoring factory-fresh cleanliness and scent.",
    accent: "bg-[#C0A46B]",
  },
  {
    num: "04",
    title: "Paint Protection Film",
    desc: "Optically-clear urethane film installed on high-impact areas, providing invisible armor against stone chips, road debris, and UV damage.",
    accent: "bg-white/30",
  },
  {
    num: "05",
    title: "Vehicle Customization",
    desc: "Precision vinyl wraps, chrome deletes, and bespoke exterior treatments that transform the visual personality of your vehicle.",
    accent: "bg-[#C0A46B]",
  },
  {
    num: "06",
    title: "Maintenance Detailing",
    desc: "Ongoing protection programs to maintain your vehicle's coating, paint, and interior between major services. Scheduled. Precise.",
    accent: "bg-white/30",
  },
];

const showcaseProjects = [
  {
    id: "01",
    vehicle: "Porsche 911 GT3",
    work: "Paint Correction + Ceramic Coating",
    finish: "Gloss Black",
    image: "/images/apex-auto-haus/showcase-porsche.jpg",
    duration: "3 Days",
    tag: "Porsche 911",
  },
  {
    id: "02",
    vehicle: "Range Rover Autobiography",
    work: "Full Exterior + Interior Restoration",
    finish: "Graphite",
    image: "/images/apex-auto-haus/showcase-suv.jpg",
    duration: "4 Days",
    tag: "Range Rover",
  },
  {
    id: "03",
    vehicle: "BMW M4 Competition",
    work: "PPF + Premium Detail",
    finish: "Isle of Man Blue",
    image: "/images/apex-auto-haus/showcase-bmw.jpg",
    duration: "2 Days",
    tag: "BMW M4",
  },
  {
    id: "04",
    vehicle: "Mercedes-AMG GT",
    work: "Premium Finish Restoration",
    finish: "Designo White",
    image: "/images/apex-auto-haus/showcase-mercedes.jpg",
    duration: "3 Days",
    tag: "Mercedes-AMG",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Inspect",
    desc: "A thorough paint inspection under controlled lighting to identify every imperfection, scratch, and area of concern — documented before any work begins.",
  },
  {
    step: "02",
    title: "Plan",
    desc: "A tailored service plan built specifically for your vehicle — no templated packages, no guesswork. You approve every step.",
  },
  {
    step: "03",
    title: "Refine",
    desc: "Multi-stage machine compounding and polishing to bring the paint back to its maximum potential clarity.",
  },
  {
    step: "04",
    title: "Protect",
    desc: "Application of ceramic coating, PPF, or protection of choice — executed with clinical precision in a controlled environment.",
  },
  {
    step: "05",
    title: "Deliver",
    desc: "Final quality inspection under multiple light sources. Your vehicle only leaves our hands when we are satisfied with the result.",
  },
];

const whyApex = [
  {
    title: "Meticulous Workmanship",
    desc: "We spend the time that each vehicle deserves. No shortcuts, no cutting corners, no rushed finishes.",
  },
  {
    title: "Premium Products Only",
    desc: "We work exclusively with industry-leading ceramic, PPF, and detailing products — selected for proven performance.",
  },
  {
    title: "Vehicle-Specific Care",
    desc: "Every make, model, and finish receives a customized approach. Your Porsche is not treated like your neighbor's sedan.",
  },
  {
    title: "Transparent Communication",
    desc: "We explain every step, every product, and every outcome clearly — before and after the work.",
  },
];

// ─────────────────────────────────────────────
//  COMPONENT
// ─────────────────────────────────────────────
export function ApexAutoHausPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const [activeShowcase, setActiveShowcase] = useState(0);

  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (bookingOpen || mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [bookingOpen, mobileMenuOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setBookingOpen(false); setMobileMenuOpen(false); }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    setTimeout(() => setFormStatus("success"), 1600);
  };

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Our Work", href: "#our-work" },
    { label: "Process", href: "#process" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className="bg-[#0A0A0A] text-[#E8E6E0] min-h-screen font-sans selection:bg-[#C0A46B]/30 overflow-x-hidden">

      {/* ── BOOKING MODAL ── */}
      <AnimatePresence>
        {bookingOpen && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
            onClick={(e) => { if (e.target === e.currentTarget) { setBookingOpen(false); setFormStatus("idle"); }}}
          >
            <motion.div
              initial={{ y: 60, opacity: 0, scale: 0.97 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 60, opacity: 0, scale: 0.97 }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              className="bg-[#111111] border border-white/10 w-full max-w-2xl p-8 md:p-12 relative my-auto mt-20"
            >
              <button
                onClick={() => { setBookingOpen(false); setFormStatus("idle"); }}
                className="absolute top-5 right-5 text-white/40 hover:text-white transition-colors"
                aria-label="Close booking form"
              >
                <X size={22} />
              </button>

              {formStatus === "success" ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                  className="text-center py-16"
                >
                  <div className="w-14 h-14 border border-[#C0A46B]/40 rounded-full flex items-center justify-center mx-auto mb-8">
                    <svg className="w-7 h-7 text-[#C0A46B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-light tracking-tight mb-4">Request received.</h3>
                  <p className="text-[#E8E6E0]/60 font-light text-sm max-w-sm mx-auto leading-relaxed">
                    We&apos;ll review your details and reach out within one business day to confirm your appointment.
                  </p>
                  <button
                    onClick={() => { setBookingOpen(false); setFormStatus("idle"); }}
                    className="mt-10 text-[11px] font-semibold tracking-[0.2em] uppercase text-[#C0A46B] border-b border-[#C0A46B]/40 pb-0.5 hover:border-[#C0A46B] transition-colors"
                  >
                    Close
                  </button>
                </motion.div>
              ) : (
                <>
                  <div className="mb-10">
                    <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#C0A46B] mb-3">Apex Auto Haus</p>
                    <h2 className="text-2xl md:text-3xl font-light tracking-tight">Book your service.</h2>
                  </div>
                  <form onSubmit={handleFormSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-[10px] font-semibold tracking-[0.2em] uppercase text-[#E8E6E0]/40 mb-2">Name</label>
                        <input type="text" required className="w-full bg-white/[0.03] border border-white/10 px-4 py-3 text-[#E8E6E0] text-sm focus:outline-none focus:border-[#C0A46B]/60 transition-colors rounded-sm placeholder:text-white/20" placeholder="Your name" />
                      </div>
                      <div>
                        <label className="block text-[10px] font-semibold tracking-[0.2em] uppercase text-[#E8E6E0]/40 mb-2">Email</label>
                        <input type="email" required className="w-full bg-white/[0.03] border border-white/10 px-4 py-3 text-[#E8E6E0] text-sm focus:outline-none focus:border-[#C0A46B]/60 transition-colors rounded-sm placeholder:text-white/20" placeholder="your@email.com" />
                      </div>
                      <div>
                        <label className="block text-[10px] font-semibold tracking-[0.2em] uppercase text-[#E8E6E0]/40 mb-2">Phone</label>
                        <input type="tel" className="w-full bg-white/[0.03] border border-white/10 px-4 py-3 text-[#E8E6E0] text-sm focus:outline-none focus:border-[#C0A46B]/60 transition-colors rounded-sm placeholder:text-white/20" placeholder="(602) 000-0000" />
                      </div>
                      <div>
                        <label className="block text-[10px] font-semibold tracking-[0.2em] uppercase text-[#E8E6E0]/40 mb-2">Vehicle</label>
                        <input type="text" required className="w-full bg-white/[0.03] border border-white/10 px-4 py-3 text-[#E8E6E0] text-sm focus:outline-none focus:border-[#C0A46B]/60 transition-colors rounded-sm placeholder:text-white/20" placeholder="Year, Make, Model" />
                      </div>
                      <div>
                        <label className="block text-[10px] font-semibold tracking-[0.2em] uppercase text-[#E8E6E0]/40 mb-2">Service</label>
                        <select required className="w-full bg-[#111111] border border-white/10 px-4 py-3 text-[#E8E6E0] text-sm focus:outline-none focus:border-[#C0A46B]/60 transition-colors rounded-sm appearance-none">
                          <option value="">Select a service…</option>
                          <option>Paint Correction</option>
                          <option>Ceramic Coating</option>
                          <option>Interior Detailing</option>
                          <option>Paint Protection Film</option>
                          <option>Vehicle Customization</option>
                          <option>Maintenance Detailing</option>
                          <option>Full Detail Package</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-[10px] font-semibold tracking-[0.2em] uppercase text-[#E8E6E0]/40 mb-2">Preferred Date</label>
                        <input type="date" className="w-full bg-white/[0.03] border border-white/10 px-4 py-3 text-[#E8E6E0] text-sm focus:outline-none focus:border-[#C0A46B]/60 transition-colors rounded-sm" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[10px] font-semibold tracking-[0.2em] uppercase text-[#E8E6E0]/40 mb-2">Message</label>
                      <textarea rows={3} className="w-full bg-white/[0.03] border border-white/10 px-4 py-3 text-[#E8E6E0] text-sm focus:outline-none focus:border-[#C0A46B]/60 transition-colors rounded-sm resize-none placeholder:text-white/20" placeholder="Any specific concerns or requests…" />
                    </div>
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={formStatus === "submitting"}
                        className="w-full bg-[#C0A46B] text-[#0A0A0A] text-[11px] font-bold tracking-[0.2em] uppercase py-4 hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {formStatus === "submitting" ? "Submitting…" : "Request Service Appointment"}
                      </button>
                    </div>
                  </form>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── NAVIGATION ── */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? "bg-[#0A0A0A]/95 backdrop-blur-xl border-b border-white/[0.06] py-3.5" : "bg-transparent py-6"}`}>
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link href="#top" className="flex flex-col leading-none group" aria-label="Apex Auto Haus Home">
            <span className="text-[12px] font-bold tracking-[0.25em] uppercase text-[#E8E6E0] group-hover:text-[#C0A46B] transition-colors">APEX</span>
            <span className="text-[8px] font-light tracking-[0.32em] uppercase text-[#E8E6E0]/35">Auto Haus</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[#E8E6E0]/50 hover:text-[#E8E6E0] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Header CTA — restrained */}
          <div className="hidden md:flex items-center">
            <button
              onClick={() => setBookingOpen(true)}
              className="text-[10px] font-semibold tracking-[0.18em] uppercase border border-[#C0A46B]/50 text-[#C0A46B] px-4 py-2 hover:bg-[#C0A46B] hover:text-[#0A0A0A] transition-colors"
            >
              Book Your Service
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-[#E8E6E0] z-50 relative"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* ── MOBILE MENU ── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#0A0A0A] flex flex-col items-center justify-center gap-8 pt-20"
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xl font-light tracking-[0.12em] uppercase text-[#E8E6E0]/80 hover:text-[#C0A46B] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => { setMobileMenuOpen(false); setBookingOpen(true); }}
              className="mt-4 text-[11px] font-bold tracking-[0.2em] uppercase border border-[#C0A46B] text-[#C0A46B] px-8 py-4 hover:bg-[#C0A46B] hover:text-[#0A0A0A] transition-colors"
            >
              Book Your Service
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ══════════════════════════════════════
          1. HERO
      ══════════════════════════════════════ */}
      <section id="top" ref={heroRef} className="relative w-full h-screen min-h-[640px] flex items-end overflow-hidden">
        {/* Background image with parallax */}
        <motion.div style={{ y: heroY, scale: heroScale }} className="absolute inset-0 z-0">
          <Image
            src="/images/apex-auto-haus/hero.jpg"
            alt="Apex Auto Haus — Premium Automotive Studio"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          {/* Gradient overlays for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/60 via-transparent to-transparent" />
        </motion.div>

        {/* Subtle grid texture */}
        <div
          className="absolute inset-0 z-[1] opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "80px 80px" }}
        />

        {/* Hero content */}
        <motion.div style={{ opacity: heroOpacity }} className="relative z-10 w-full pb-16 md:pb-24 px-6 md:px-12">
          <div className="container mx-auto max-w-[1400px]">
            <motion.div
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-[10px] font-semibold tracking-[0.32em] uppercase text-[#C0A46B] mb-5">
                Scottsdale, Arizona — Premium Automotive Studio
              </p>
              <h1 className="text-[clamp(2.4rem,5vw,4.5rem)] font-light tracking-[-0.02em] leading-[1.05] text-[#E8E6E0] mb-5 max-w-2xl">
                Precision for<br />
                <em className="not-italic font-extralight text-[#E8E6E0]/65">Every Drive.</em>
              </h1>
              <p className="text-sm md:text-base font-light text-[#E8E6E0]/55 leading-relaxed mb-9 max-w-md">
                Premium detailing, protection, and automotive craftsmanship for vehicles that deserve more.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 items-start sm:items-center">
                <button
                  onClick={() => setBookingOpen(true)}
                  className="text-[11px] font-bold tracking-[0.2em] uppercase bg-[#C0A46B] text-[#0A0A0A] px-7 py-3.5 hover:bg-white transition-colors inline-flex items-center gap-2"
                >
                  Book Your Service <ArrowRight size={13} />
                </button>
                <Link
                  href="#our-work"
                  className="text-[11px] font-medium tracking-[0.18em] uppercase text-[#E8E6E0]/50 hover:text-[#E8E6E0] transition-colors inline-flex items-center gap-2"
                >
                  Explore Our Work <ArrowRight size={12} />
                </Link>
              </div>
            </motion.div>

            {/* Floating spec card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="hidden lg:flex absolute bottom-24 right-12 bg-black/40 backdrop-blur-xl border border-white/[0.09] px-6 py-4 gap-7 items-center"
            >
              <div className="text-center">
                <p className="text-[9px] tracking-[0.22em] uppercase text-[#E8E6E0]/35 mb-1">Est.</p>
                <p className="text-base font-light tracking-wide text-[#C0A46B]">2016</p>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div className="text-center">
                <p className="text-[9px] tracking-[0.22em] uppercase text-[#E8E6E0]/35 mb-1">Location</p>
                <p className="text-sm font-light text-[#E8E6E0]/75">Scottsdale, AZ</p>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div className="text-center">
                <p className="text-[9px] tracking-[0.22em] uppercase text-[#E8E6E0]/35 mb-1">Specialty</p>
                <p className="text-sm font-light text-[#E8E6E0]/75">Premium Detail</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-7 left-1/2 -translate-x-1/2 z-10 text-white/15 flex flex-col items-center"
        >
          <ChevronDown size={16} />
        </motion.div>
      </section>

      {/* ══════════════════════════════════════
          2. SERVICES
      ══════════════════════════════════════ */}
      <section id="services" className="py-24 md:py-36 px-6 md:px-12 bg-[#0A0A0A] relative z-10">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="container mx-auto max-w-[1400px]">
          {/* Section header */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16">
            <div className="md:col-span-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7 }}
              >
                <p className="text-[10px] font-semibold tracking-[0.28em] uppercase text-[#C0A46B] mb-4">Services</p>
                <h2 className="text-2xl md:text-3xl font-light tracking-tight leading-snug text-[#E8E6E0]">
                  Crafted for the discerning owner.
                </h2>
              </motion.div>
            </div>
            <div className="md:col-span-6 md:col-start-6 flex items-end">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-sm font-light text-[#E8E6E0]/62 leading-relaxed"
              >
                Every service at Apex Auto Haus is performed by specialists who understand the differences between finishes, substrates, and coating chemistries. We treat your vehicle as the investment it is.
              </motion.p>
            </div>
          </div>

          {/* Services grid — with perspective depth */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06]" style={{ perspective: "1200px" }}>
            {services.map((service, i) => (
              <motion.div
                key={service.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.55, delay: i * 0.06 }}
                whileHover={{ y: -4, transition: { duration: 0.22 } }}
                className="bg-[#0A0A0A] p-8 md:p-10 group hover:bg-[#0E0E0E] transition-colors duration-300 cursor-default relative overflow-hidden border-l-2 border-transparent hover:border-[#C0A46B]/50 transition-[border-color] duration-400"
              >
                {/* Ghost number for depth */}
                <span className="absolute top-3 right-5 text-[5rem] font-bold text-white/[0.03] leading-none select-none pointer-events-none">
                  {service.num}
                </span>

                {/* Visible service number */}
                <p className="text-[9px] font-bold tracking-[0.3em] uppercase text-[#C0A46B]/50 mb-5 group-hover:text-[#C0A46B] transition-colors duration-300">
                  {service.num}
                </p>

                <h3 className="text-[15px] font-light tracking-tight text-[#E8E6E0] mb-3 group-hover:text-[#C0A46B] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-[13px] font-light text-[#E8E6E0]/58 leading-relaxed">
                  {service.desc}
                </p>

                {/* Bottom accent on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-[#C0A46B]/0 group-hover:bg-[#C0A46B]/20 transition-colors duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          3. SHOWCASE / OUR WORK
      ══════════════════════════════════════ */}
      <section id="our-work" className="py-24 md:py-36 bg-[#0D0D0D] relative z-10">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="container mx-auto max-w-[1400px] px-6 md:px-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[10px] font-semibold tracking-[0.28em] uppercase text-[#C0A46B] mb-4">Our Work</p>
            <h2 className="text-2xl md:text-3xl font-light tracking-tight text-[#E8E6E0] max-w-lg">
              Every vehicle. Treated as a work of art.
            </h2>
          </motion.div>
        </div>

        {/* Vehicle selector tabs */}
        <div className="container mx-auto max-w-[1400px] px-6 md:px-12 mb-8">
          <div className="flex gap-0 overflow-x-auto pb-1 no-scrollbar border-b border-white/[0.06]">
            {showcaseProjects.map((project, i) => (
              <button
                key={project.id}
                onClick={() => setActiveShowcase(i)}
                className={`flex-shrink-0 text-[10px] font-semibold tracking-[0.18em] uppercase px-5 py-3.5 transition-all duration-200 border-b-2 -mb-px ${
                  activeShowcase === i
                    ? "text-[#C0A46B] border-[#C0A46B]"
                    : "text-[#E8E6E0]/35 border-transparent hover:text-[#E8E6E0]/70"
                }`}
              >
                {project.tag}
              </button>
            ))}
          </div>
        </div>

        {/* Active showcase panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeShowcase}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="container mx-auto max-w-[1400px] px-6 md:px-12"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              {/* Image — takes most of the width */}
              <div className="lg:col-span-9 relative overflow-hidden bg-[#111111] aspect-[16/9]">
                <Image
                  src={showcaseProjects[activeShowcase].image}
                  alt={showcaseProjects[activeShowcase].vehicle}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 75vw"
                />
                {/* Bottom info overlay on the image */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 md:p-8">
                  <div className="flex flex-wrap items-end justify-between gap-4">
                    <div>
                      <p className="text-[10px] font-semibold tracking-[0.25em] uppercase text-[#C0A46B] mb-1.5">
                        {showcaseProjects[activeShowcase].id} / {String(showcaseProjects.length).padStart(2,"0")}
                      </p>
                      <h3 className="text-xl md:text-2xl font-light tracking-tight text-white">
                        {showcaseProjects[activeShowcase].vehicle}
                      </h3>
                    </div>
                    <div className="hidden md:flex items-center gap-6 text-right">
                      <div>
                        <p className="text-[9px] font-semibold tracking-[0.2em] uppercase text-white/40 mb-0.5">Services</p>
                        <p className="text-xs font-light text-white/75">{showcaseProjects[activeShowcase].work}</p>
                      </div>
                      <div className="w-px h-8 bg-white/15" />
                      <div>
                        <p className="text-[9px] font-semibold tracking-[0.2em] uppercase text-white/40 mb-0.5">Duration</p>
                        <p className="text-xs font-light text-[#C0A46B]">{showcaseProjects[activeShowcase].duration}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right metadata panel */}
              <div className="lg:col-span-3 bg-[#111111] border-l border-white/[0.06] flex flex-col justify-between p-7 md:p-8 gap-8">
                <div className="flex flex-col gap-6">
                  <div>
                    <p className="text-[9px] font-semibold tracking-[0.25em] uppercase text-[#E8E6E0]/30 mb-2">Vehicle</p>
                    <p className="text-sm font-light text-[#E8E6E0]">{showcaseProjects[activeShowcase].vehicle}</p>
                  </div>
                  <div>
                    <p className="text-[9px] font-semibold tracking-[0.25em] uppercase text-[#E8E6E0]/30 mb-2">Services</p>
                    <p className="text-sm font-light text-[#E8E6E0]/70 leading-snug">{showcaseProjects[activeShowcase].work}</p>
                  </div>
                  <div>
                    <p className="text-[9px] font-semibold tracking-[0.25em] uppercase text-[#E8E6E0]/30 mb-2">Finish</p>
                    <p className="text-sm font-light text-[#E8E6E0]/70">{showcaseProjects[activeShowcase].finish}</p>
                  </div>
                  <div>
                    <p className="text-[9px] font-semibold tracking-[0.25em] uppercase text-[#E8E6E0]/30 mb-2">Duration</p>
                    <p className="text-sm font-light text-[#C0A46B]">{showcaseProjects[activeShowcase].duration}</p>
                  </div>
                </div>
                {/* Nav arrows */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
                  <button
                    onClick={() => setActiveShowcase((activeShowcase - 1 + showcaseProjects.length) % showcaseProjects.length)}
                    className="w-8 h-8 border border-white/15 flex items-center justify-center text-white/40 hover:border-[#C0A46B]/50 hover:text-[#C0A46B] transition-colors"
                    aria-label="Previous vehicle"
                  >
                    <ArrowRight size={13} className="rotate-180" />
                  </button>
                  <button
                    onClick={() => setActiveShowcase((activeShowcase + 1) % showcaseProjects.length)}
                    className="w-8 h-8 border border-white/15 flex items-center justify-center text-white/40 hover:border-[#C0A46B]/50 hover:text-[#C0A46B] transition-colors"
                    aria-label="Next vehicle"
                  >
                    <ArrowRight size={13} />
                  </button>
                  <span className="ml-auto text-[9px] tracking-widest text-white/25 font-mono">
                    {String(activeShowcase + 1).padStart(2,"0")} / {String(showcaseProjects.length).padStart(2,"0")}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* ══════════════════════════════════════
          4. DETAIL WORK STRIP (visual break)
      ══════════════════════════════════════ */}
      <section className="relative h-[38vh] min-h-[260px] overflow-hidden z-10">
        <Image
          src="/images/apex-auto-haus/detail-work.jpg"
          alt="Precision automotive detailing at Apex Auto Haus"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#0A0A0A]/65" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="text-center px-6"
          >
            <p className="text-[10px] font-semibold tracking-[0.32em] uppercase text-[#C0A46B] mb-4">The Craft</p>
            <p className="text-xl md:text-3xl font-light tracking-tight text-[#E8E6E0] max-w-2xl mx-auto leading-snug">
              Every panel. Every surface.<br className="hidden md:block" /> Attended to with the same meticulous care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          5. PROCESS
      ══════════════════════════════════════ */}
      <section id="process" className="py-24 md:py-36 px-6 md:px-12 bg-[#0A0A0A] relative z-10">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="container mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            {/* Left — sticky label */}
            <div className="lg:col-span-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7 }}
                className="lg:sticky lg:top-32"
              >
                <p className="text-[10px] font-semibold tracking-[0.28em] uppercase text-[#C0A46B] mb-4">Process</p>
                <h2 className="text-2xl md:text-3xl font-light tracking-tight text-[#E8E6E0] leading-snug mb-6">
                  A defined process.<br />A consistent result.
                </h2>
                <p className="text-sm font-light text-[#E8E6E0]/55 leading-relaxed">
                  We follow the same rigorous sequence for every vehicle — regardless of make, model, or service complexity.
                </p>
                {/* Decorative vertical accent */}
                <div className="hidden lg:block mt-10 w-px h-24 bg-gradient-to-b from-[#C0A46B]/40 to-transparent" />
              </motion.div>
            </div>

            {/* Right — steps */}
            <div className="lg:col-span-8">
              {processSteps.map((step, i) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.55, delay: i * 0.07 }}
                  className="flex gap-8 py-8 border-b border-white/[0.06] group last:border-0 relative overflow-hidden"
                >
                  {/* Large background step number */}
                  <span className="absolute right-0 top-1/2 -translate-y-1/2 text-[6rem] font-bold text-white/[0.02] leading-none select-none pointer-events-none">
                    {step.step}
                  </span>

                  {/* Step circle */}
                  <div className="flex-shrink-0 w-10 h-10 rounded-full border border-[#C0A46B]/25 flex items-center justify-center group-hover:border-[#C0A46B]/70 group-hover:bg-[#C0A46B]/08 transition-all duration-300 mt-0.5">
                    <span className="text-[9px] font-bold tracking-wider text-[#C0A46B]/70 group-hover:text-[#C0A46B] transition-colors">{step.step}</span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-base md:text-lg font-light text-[#E8E6E0] tracking-tight mb-2 group-hover:text-[#C0A46B] transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-sm font-light text-[#E8E6E0]/58 leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          6. WHY APEX
      ══════════════════════════════════════ */}
      <section className="py-24 md:py-36 px-6 md:px-12 bg-[#0D0D0D] relative z-10 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        {/* Subtle background texture */}
        <div
          className="absolute inset-0 opacity-[0.018] pointer-events-none"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)", backgroundSize: "60px 60px" }}
        />

        <div className="container mx-auto max-w-[1400px] relative">
          {/* Section header — above the grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <p className="text-[10px] font-semibold tracking-[0.28em] uppercase text-[#C0A46B] mb-4">Why Apex</p>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <h2 className="text-2xl md:text-3xl font-light tracking-tight text-[#E8E6E0] leading-tight max-w-sm">
                The standard others<br />are compared to.
              </h2>
              <p className="text-sm font-light text-[#E8E6E0]/55 leading-relaxed max-w-md">
                Apex Auto Haus has operated in Scottsdale since 2016, serving a clientele who expect nothing short of perfection — and receiving it, consistently.
              </p>
            </div>
          </motion.div>

          {/* Principles grid — 2×2 on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.06]">
            {whyApex.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="bg-[#0D0D0D] p-10 md:p-12 group hover:bg-[#111111] transition-colors duration-300 relative overflow-hidden"
              >
                {/* Large ghost index number */}
                <span className="absolute bottom-4 right-6 text-[5.5rem] font-bold text-white/[0.025] leading-none select-none pointer-events-none">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Visible principle number */}
                <p className="text-[9px] font-bold tracking-[0.35em] uppercase text-[#C0A46B]/55 mb-6 group-hover:text-[#C0A46B] transition-colors duration-300">
                  {String(i + 1).padStart(2, "0")}
                </p>

                <h3 className="text-base md:text-[17px] font-light tracking-tight text-[#E8E6E0] mb-4 group-hover:text-[#C0A46B] transition-colors duration-300 leading-snug">
                  {item.title}
                </h3>
                <p className="text-[13px] font-light text-[#E8E6E0]/60 leading-relaxed max-w-sm">
                  {item.desc}
                </p>

                {/* Top-left corner accent */}
                <div className="absolute top-0 left-0 w-12 h-px bg-[#C0A46B]/20 group-hover:w-20 group-hover:bg-[#C0A46B]/50 transition-all duration-400" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          7. ABOUT
      ══════════════════════════════════════ */}
      <section id="about" className="py-24 md:py-36 bg-[#0A0A0A] relative z-10 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="container mx-auto max-w-[1400px] px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 relative aspect-[4/3] overflow-hidden bg-[#111111]"
            >
              <Image
                src="/images/apex-auto-haus/about.jpg"
                alt="Apex Auto Haus Studio — Scottsdale, Arizona"
                fill
                className="object-cover hover:scale-[1.02] transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0A0A0A]/25 to-transparent" />
              <div className="absolute bottom-5 left-5 bg-black/55 backdrop-blur-md px-5 py-3 border border-white/10">
                <p className="text-[10px] font-semibold tracking-[0.25em] uppercase text-[#C0A46B]">The Studio</p>
                <p className="text-xs text-white/55 mt-0.5">Scottsdale, Arizona</p>
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="lg:col-span-6"
            >
              <p className="text-[10px] font-semibold tracking-[0.28em] uppercase text-[#C0A46B] mb-5">About Apex</p>
              <h2 className="text-2xl md:text-3xl font-light tracking-tight text-[#E8E6E0] mb-7 leading-tight">
                An independent studio built around one idea: precision.
              </h2>
              <div className="space-y-4 text-[13px] font-light text-[#E8E6E0]/62 leading-relaxed">
                <p>
                  Apex Auto Haus opened its doors in Scottsdale in 2016 with a straightforward purpose — to provide a level of automotive care that matched the vehicles we service. No rushing. No cutting corners. No excuses.
                </p>
                <p>
                  Our team comprises specialists who come from backgrounds in professional paint correction, ceramic coating installation, and custom film application. Each brings a level of technical depth that goes well beyond what a traditional detailer offers.
                </p>
                <p>
                  We work with a carefully controlled client volume. This is intentional. It allows us to give every vehicle the undivided attention it requires — from inspection to delivery, nothing is delegated to someone without the expertise to perform it correctly.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          8. FINAL CTA — "Your Vehicle. Elevated."
      ══════════════════════════════════════ */}
      <section className="py-28 md:py-40 relative z-10 overflow-hidden bg-[#0D0D0D]">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C0A46B]/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        {/* Subtle gold dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle at 2px 2px, rgba(192,164,107,1) 1px, transparent 0)", backgroundSize: "48px 48px" }}
        />
        <div className="container mx-auto max-w-[1400px] px-6 md:px-12 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.85 }}
          >
            {/* Gold accent bar */}
            <div className="w-8 h-px bg-[#C0A46B] mx-auto mb-8" />
            <p className="text-[10px] font-semibold tracking-[0.35em] uppercase text-[#C0A46B] mb-6">Ready?</p>
            <h2 className="text-3xl md:text-5xl font-light tracking-[-0.02em] leading-tight text-[#E8E6E0] mb-5 max-w-2xl mx-auto">
              Your Vehicle.<br />
              <span className="text-[#E8E6E0]/45">Elevated.</span>
            </h2>
            <p className="text-sm font-light text-[#E8E6E0]/45 leading-relaxed mb-10 max-w-md mx-auto">
              Give your vehicle the finish, protection, and attention it deserves.
            </p>
            <button
              onClick={() => setBookingOpen(true)}
              className="text-[11px] font-bold tracking-[0.22em] uppercase bg-[#C0A46B] text-[#0A0A0A] px-10 py-4 hover:bg-white transition-colors inline-flex items-center gap-2"
            >
              Book Your Service <ArrowRight size={13} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          9. LOCATION / CONTACT
      ══════════════════════════════════════ */}
      <section id="contact" className="py-24 md:py-36 px-6 md:px-12 bg-[#0A0A0A] relative z-10">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="container mx-auto max-w-[1400px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="mb-14"
          >
            <p className="text-[10px] font-semibold tracking-[0.28em] uppercase text-[#C0A46B] mb-4">Visit</p>
            <h2 className="text-2xl md:text-3xl font-light tracking-tight text-[#E8E6E0]">
              Find us in Scottsdale.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Info column */}
            <div className="lg:col-span-4 flex flex-col gap-px bg-white/[0.06]">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55 }}
                className="bg-[#0A0A0A] p-7 flex-1"
              >
                <MapPin size={15} className="text-[#C0A46B] mb-4" />
                <p className="text-[9px] font-semibold tracking-[0.22em] uppercase text-[#C0A46B]/70 mb-2">Address</p>
                <p className="text-[13px] font-light text-[#E8E6E0]/80 leading-relaxed">
                  Scottsdale, Arizona 85251<br />
                  Serving Scottsdale, Paradise Valley &amp; Greater Phoenix
                </p>
                <a
                  href="https://maps.google.com/?q=Scottsdale,+Arizona"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-5 text-[9px] font-semibold tracking-[0.22em] uppercase text-[#C0A46B] hover:text-white transition-colors"
                >
                  Get Directions <ArrowRight size={11} />
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: 0.07 }}
                className="bg-[#0A0A0A] p-7 flex-1"
              >
                <Phone size={15} className="text-[#C0A46B] mb-4" />
                <p className="text-[9px] font-semibold tracking-[0.22em] uppercase text-[#C0A46B]/70 mb-2">Phone</p>
                <p className="text-[13px] font-light text-[#E8E6E0]/80">(602) 000-0000</p>
                <p className="text-[9px] text-[#E8E6E0]/30 mt-1.5">Concept demo — not a real number</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: 0.13 }}
                className="bg-[#0A0A0A] p-7 flex-1"
              >
                <Clock size={15} className="text-[#C0A46B] mb-4" />
                <p className="text-[9px] font-semibold tracking-[0.22em] uppercase text-[#C0A46B]/70 mb-3">Hours</p>
                <div className="space-y-2.5 text-[13px] font-light text-[#E8E6E0]/72">
                  <div className="flex justify-between gap-4">
                    <span>Monday – Friday</span>
                    <span className="text-[#E8E6E0]/45">8:00 AM – 6:00 PM</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span>Saturday</span>
                    <span className="text-[#E8E6E0]/45">9:00 AM – 4:00 PM</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span>Sunday</span>
                    <span className="text-[#E8E6E0]/45">By Appointment</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Map — full height, integrated framing */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-8 relative min-h-[460px] bg-[#111111] border border-white/[0.07] border-t-[#C0A46B]/30 overflow-hidden"
              style={{ borderTopWidth: "2px", borderTopColor: "rgba(192,164,107,0.3)" }}
            >
              <iframe
                title="Apex Auto Haus Location — Scottsdale, Arizona"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106537.33673286814!2d-111.98773355!3d33.4941704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b08e8c1cb3b21%3A0x59f1e9aafd9aae12!2sScottsdale%2C%20AZ!5e0!3m2!1sen!2sus!4v1693900000000!5m2!1sen!2sus"
                className="absolute inset-0 w-full h-full border-0 grayscale opacity-60 hover:opacity-80 hover:grayscale-0 transition-all duration-500"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              {/* Branded map overlay — top left */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#C0A46B]/40 via-[#C0A46B]/10 to-transparent pointer-events-none" />
              <div className="absolute top-4 left-4 bg-[#0A0A0A]/85 backdrop-blur-md px-4 py-3 border border-white/10 pointer-events-none">
                <p className="text-[9px] font-semibold tracking-[0.25em] uppercase text-[#C0A46B]">Apex Auto Haus</p>
                <p className="text-[10px] text-[#E8E6E0]/55 mt-0.5">Scottsdale, Arizona</p>
              </div>
              {/* Bottom overlay — design integration */}
              <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-[#0A0A0A]/30 to-transparent pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-12 px-6 md:px-12 bg-[#060606] border-t border-white/[0.05] relative z-10">
        <div className="container mx-auto max-w-[1400px]">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-8">
            <div>
              <p className="text-[12px] font-bold tracking-[0.25em] uppercase text-[#E8E6E0]">APEX</p>
              <p className="text-[8px] font-light tracking-[0.32em] uppercase text-[#E8E6E0]/25">Auto Haus</p>
            </div>
            <nav className="flex flex-wrap gap-x-7 gap-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[#E8E6E0]/25 hover:text-[#E8E6E0] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="border-t border-white/[0.04] pt-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
            <p className="text-[10px] text-[#E8E6E0]/18 tracking-widest uppercase">
              &copy; {new Date().getFullYear()} Apex Auto Haus &mdash; Scottsdale, Arizona
            </p>
            <p className="text-[10px] text-[#E8E6E0]/12 tracking-widest uppercase">
              Concept Demo — Trinetra ARC Portfolio
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}
