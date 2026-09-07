"use client";
import { imagePath } from "@/lib/imagePath";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, MapPin, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export function SummitPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full flex flex-col min-h-screen">
      {/* 0. NAVIGATION */}
      <nav className="w-full py-6 px-6 md:px-12 flex items-center justify-between bg-[#2C2C2C] text-[#FAF9F6] sticky top-0 z-50">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-8 h-8 bg-[#D97736] flex items-center justify-center font-bold text-white tracking-tighter">
            S
          </div>
          <span className="font-bold tracking-wide uppercase text-sm">Summit Roofing Co.</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#FAF9F6]/80">
          <Link href="#services" className="hover:text-white transition-colors">Services</Link>
          <Link href="#work" className="hover:text-white transition-colors">Our Work</Link>
          <Link href="#about" className="hover:text-white transition-colors">About</Link>
        </div>
        <div className="flex items-center gap-4">
          <Link href="#quote" className="hidden sm:inline-block px-6 py-2.5 bg-[#D97736] text-white text-sm font-semibold hover:bg-[#C2652B] transition-colors">
            Get a Quote
          </Link>
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle Menu">
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            )}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-[#2C2C2C] text-[#FAF9F6] pt-24 px-6 pb-12 flex flex-col">
          <div className="flex flex-col gap-8 text-2xl font-bold tracking-tight">
            <Link href="#services" onClick={() => setIsMenuOpen(false)}>Services</Link>
            <Link href="#work" onClick={() => setIsMenuOpen(false)}>Our Work</Link>
            <Link href="#about" onClick={() => setIsMenuOpen(false)}>About Us</Link>
            <Link href="#quote" onClick={() => setIsMenuOpen(false)} className="text-[#D97736]">Get a Quote</Link>
          </div>
        </div>
      )}

      {/* 1. HERO */}
      <section className="relative w-full min-h-[85vh] flex items-center bg-[#2C2C2C] text-[#FAF9F6] overflow-hidden">
        <div className="absolute inset-0">
          <Image src={imagePath("/images/summit-roofing/hero.jpg")} alt="Premium Modern Residential Home Roof" fill className="object-cover opacity-40 mix-blend-overlay" priority />
        </div>
        <div className="container mx-auto px-6 md:px-12 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]"
            >
              Roofing built to last.<br />
              <span className="text-[#D97736]">Confidence built in.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-[#FAF9F6]/70 mb-10 max-w-lg"
            >
              Dependable roofing solutions for Austin homeowners. We protect your biggest investment with professional workmanship and honest pricing.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="#quote" className="w-full sm:w-auto px-8 py-4 bg-[#D97736] text-white font-semibold flex items-center justify-center gap-2 hover:bg-[#C2652B] transition-colors">
                Get a Free Estimate <ArrowRight size={18} />
              </Link>
              <Link href="#work" className="w-full sm:w-auto px-8 py-4 bg-transparent border border-[#FAF9F6]/20 font-semibold flex items-center justify-center hover:bg-white/5 transition-colors">
                Explore Our Work
              </Link>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-12 flex items-center gap-6 text-sm text-[#FAF9F6]/60 font-medium"
            >
              <span className="flex items-center gap-2"><ShieldCheck size={16} className="text-[#D97736]" /> Licensed & Insured</span>
              <span className="flex items-center gap-2"><MapPin size={16} className="text-[#D97736]" /> Local Austin Team</span>
            </motion.div>
          </div>
          <div className="hidden md:block relative h-full min-h-[500px]">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#D97736] rotate-3 opacity-10 rounded-sm"></div>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 w-full h-[80%] bg-[#363636] shadow-2xl border border-white/5 overflow-hidden flex items-center justify-center relative">
              <Image src={imagePath("/images/summit-roofing/hero.jpg")} alt="Roofing Project Detail" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES */}
      <section id="services" className="py-24 bg-[#FAF9F6] text-[#2C2C2C]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-16 max-w-2xl">
            <h2 className="text-[#D97736] font-bold tracking-widest uppercase text-sm mb-4">Our Services</h2>
            <h3 className="text-3xl md:text-5xl font-bold tracking-tight">Everything you need to protect your home.</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Roof Replacement", desc: "Complete tear-off and replacement using premium, durable materials built for Texas weather." },
              { title: "Roof Repair", desc: "Fast, reliable repairs for leaks, missing shingles, and structural wear to extend your roof's life." },
              { title: "Storm Damage", desc: "Emergency tarping and comprehensive restoration following severe hail and wind storms." },
              { title: "Roof Inspections", desc: "Thorough, honest evaluations with detailed reports so you know exactly where you stand." },
              { title: "Residential Roofing", desc: "Specialized solutions for Austin homes, prioritizing aesthetic appeal and long-term protection." }
            ].map((srv, i) => (
              <div key={i} className="group p-8 bg-white border border-neutral-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-1 bg-[#D97736] mb-6 group-hover:w-24 transition-all duration-300"></div>
                <h4 className="text-xl font-bold mb-3">{srv.title}</h4>
                <p className="text-[#2C2C2C]/70 leading-relaxed">{srv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WHY SUMMIT */}
      <section className="py-24 bg-[#2C2C2C] text-[#FAF9F6]">
        <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-12 gap-16 items-center">
          <div className="md:col-span-5 relative">
            <div className="aspect-[3/4] bg-[#363636] border border-white/10 flex items-center justify-center shadow-xl relative overflow-hidden">
               <Image src={imagePath("/images/summit-roofing/quality.jpg")} alt="Quality Workmanship" fill className="object-cover" />
            </div>
          </div>
          <div className="md:col-span-7">
            <h2 className="text-[#D97736] font-bold tracking-widest uppercase text-sm mb-4">The Summit Difference</h2>
            <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">Professional standards from start to finish.</h3>
            <p className="text-lg text-[#FAF9F6]/70 mb-12">
              We know that hiring a contractor can be stressful. That&apos;s why we focus on clear communication, transparent estimates, and arriving on schedule. We treat your property with respect and stand behind every roof we install.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {["Clear communication", "Quality workmanship", "Reliable scheduling", "Transparent estimates", "Local service", "Attention to detail"].map((point, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-[#D97736] shrink-0" size={20} />
                  <span className="font-medium">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. PROJECT SHOWCASE */}
      <section id="work" className="py-24 bg-[#FAF9F6]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-16 max-w-2xl">
            <h2 className="text-[#D97736] font-bold tracking-widest uppercase text-sm mb-4">Our Work</h2>
            <h3 className="text-3xl md:text-5xl font-bold tracking-tight">Recent projects across Austin.</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Modern Hill Country Residence", loc: "Westlake", img: imagePath("/images/summit-roofing/project1.jpg") },
              { name: "East Austin Renovation", loc: "East Austin", img: imagePath("/images/summit-roofing/project2.jpg") },
              { name: "Lakeway Residential Roof", loc: "Lakeway", img: imagePath("/images/summit-roofing/project3.jpg") }
            ].map((proj, i) => (
              <div key={i} className="group">
                <div className={`aspect-[4/3] bg-neutral-800 mb-6 overflow-hidden flex items-center justify-center relative`}>
                  <Image src={proj.img} alt={proj.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <h4 className="text-xl font-bold mb-2">{proj.name}</h4>
                <p className="text-[#2C2C2C]/60 text-sm font-medium uppercase tracking-widest">{proj.loc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PROCESS */}
      <section className="py-24 bg-white border-t border-neutral-100">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-[#D97736] font-bold tracking-widest uppercase text-sm mb-4">How It Works</h2>
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight">A simple, stress-free process.</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
            <div className="hidden md:block absolute top-6 left-[12.5%] right-[12.5%] h-px bg-neutral-200"></div>
            {[
              { num: "01", title: "Schedule", desc: "Contact us to set up a convenient time for an evaluation." },
              { num: "02", title: "Inspect", desc: "We perform a thorough, honest assessment of your roof." },
              { num: "03", title: "Plan", desc: "Review a transparent, no-obligation estimate and timeline." },
              { num: "04", title: "Build", desc: "Our team executes the project with precision and cleans up completely." }
            ].map((step, i) => (
              <div key={i} className="relative bg-white z-10 flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-[#2C2C2C] text-white rounded-full flex items-center justify-center font-bold text-lg mb-6 shadow-md shadow-neutral-200">
                  {step.num}
                </div>
                <h4 className="text-xl font-bold mb-3">{step.title}</h4>
                <p className="text-[#2C2C2C]/70">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. STORM DAMAGE / EMERGENCY CTA */}
      <section className="py-24 bg-[#D97736] text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src={imagePath("/images/summit-roofing/storm.jpg")} alt="Storm Damage" fill className="object-cover opacity-30 mix-blend-multiply" />
        </div>
        <div className="container mx-auto px-6 md:px-12 text-center relative z-10">
          <h2 className="text-3xl md:text-6xl font-bold tracking-tight mb-8">
            Damage happens.<br />We&apos;re ready when it does.
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Texas weather is unpredictable. If your home has been hit by hail or high winds, don&apos;t wait. We provide fast inspections and emergency tarping to prevent further damage.
          </p>
          <Link href="#quote" className="w-full sm:w-auto inline-block px-10 py-5 bg-[#2C2C2C] text-white font-bold tracking-wide hover:bg-black transition-colors shadow-xl">
            Request a Storm Inspection
          </Link>
        </div>
      </section>

      {/* 7. ABOUT / LOCAL PRESENCE */}
      <section id="about" className="py-24 bg-[#FAF9F6]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-[#D97736] font-bold tracking-widest uppercase text-sm mb-6">About Us</h2>
              <h3 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-8">
                Local knowledge. Professional standards. Roofing designed for Texas homes.
              </h3>
              <p className="text-lg text-[#2C2C2C]/70 leading-relaxed mb-6">
                Serving Austin-area homeowners with dependable residential roofing. We know that hiring a contractor can be stressful, which is why we prioritize clear communication, quality workmanship, and straightforward estimates.
              </p>
              <p className="text-lg text-[#2C2C2C]/70 leading-relaxed mb-8">
                From minor repairs to complete roof replacements, we treat your property with respect and stand behind every roof we install.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-2xl">
              <Image src={imagePath("/images/summit-roofing/about.jpg")} alt="Summit Roofing Team" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <section className="py-32 bg-[#2C2C2C] text-[#FAF9F6] border-b border-white/10">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-4xl md:text-7xl font-bold tracking-tight mb-12">
            Ready for a roof<br />you can count on?
          </h2>
          <Link href="#quote" className="w-full sm:w-auto inline-block px-10 py-5 bg-[#D97736] text-white font-bold tracking-wide hover:bg-[#C2652B] transition-colors shadow-xl text-lg">
            Get a Free Estimate
          </Link>
        </div>
      </section>

      {/* 8.5. QUOTE FORM */}
      <section id="quote" className="py-24 bg-[#FAF9F6] text-[#2C2C2C]">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-[#D97736] font-bold tracking-widest uppercase text-sm mb-4">Get a Quote</h2>
            <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Let&apos;s protect your home.</h3>
            <p className="text-lg text-[#2C2C2C]/70">Tell us about your property and roofing needs, and we&apos;ll get back to you with a transparent, no-obligation estimate.</p>
          </div>
          
          <div className="bg-white p-8 md:p-12 shadow-xl border border-neutral-200 rounded-sm">
            {formSubmitted ? (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="text-center py-16"
              >
                <div className="w-20 h-20 bg-[#D97736]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={40} className="text-[#D97736]" />
                </div>
                <h4 className="text-3xl font-bold mb-4">Thanks — your request has been received.</h4>
                <p className="text-xl text-[#2C2C2C]/70">Summit Roofing Co. will be in touch shortly.</p>
              </motion.div>
            ) : (
              <form 
                onSubmit={(e) => { e.preventDefault(); setFormSubmitted(true); }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-bold uppercase tracking-widest text-[#2C2C2C]/70">Name</label>
                  <input required type="text" id="name" className="p-4 bg-[#FAF9F6] border border-neutral-200 focus:outline-none focus:border-[#D97736] transition-colors" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-bold uppercase tracking-widest text-[#2C2C2C]/70">Email</label>
                  <input required type="email" id="email" className="p-4 bg-[#FAF9F6] border border-neutral-200 focus:outline-none focus:border-[#D97736] transition-colors" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-sm font-bold uppercase tracking-widest text-[#2C2C2C]/70">Phone</label>
                  <input required type="tel" id="phone" className="p-4 bg-[#FAF9F6] border border-neutral-200 focus:outline-none focus:border-[#D97736] transition-colors" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="address" className="text-sm font-bold uppercase tracking-widest text-[#2C2C2C]/70">Property Address</label>
                  <input required type="text" id="address" className="p-4 bg-[#FAF9F6] border border-neutral-200 focus:outline-none focus:border-[#D97736] transition-colors" />
                </div>
                <div className="flex flex-col gap-2 md:col-span-2">
                  <label htmlFor="service" className="text-sm font-bold uppercase tracking-widest text-[#2C2C2C]/70">Service Needed</label>
                  <select required id="service" defaultValue="" className="p-4 bg-[#FAF9F6] border border-neutral-200 focus:outline-none focus:border-[#D97736] transition-colors appearance-none">
                    <option value="" disabled>Select a service</option>
                    <option value="Replacement">Roof Replacement</option>
                    <option value="Repair">Roof Repair</option>
                    <option value="Storm">Storm Damage</option>
                    <option value="Inspection">Roof Inspection</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2 md:col-span-2">
                  <label htmlFor="message" className="text-sm font-bold uppercase tracking-widest text-[#2C2C2C]/70">Message</label>
                  <textarea required id="message" rows={4} className="p-4 bg-[#FAF9F6] border border-neutral-200 focus:outline-none focus:border-[#D97736] transition-colors resize-none"></textarea>
                </div>
                <div className="md:col-span-2 mt-4">
                  <button type="submit" className="w-full py-5 bg-[#D97736] text-white font-bold tracking-wide hover:bg-[#C2652B] transition-colors text-lg">
                    Request My Estimate
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 9. FOOTER */}
      <footer className="bg-[#2C2C2C] text-[#FAF9F6] py-16">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-[#D97736] flex items-center justify-center font-bold text-white tracking-tighter">S</div>
                <span className="font-bold tracking-wide uppercase text-sm">Summit Roofing Co.</span>
              </div>
              <p className="text-[#FAF9F6]/60 text-sm">
                Austin, Texas
              </p>
            </div>
            
            <div>
              <h4 className="font-bold tracking-widest uppercase text-xs mb-6 text-[#FAF9F6]/40">Company</h4>
              <ul className="space-y-4 text-sm text-[#FAF9F6]/80">
                <li><Link href="#services" className="hover:text-white">Services</Link></li>
                <li><Link href="#work" className="hover:text-white">Our Work</Link></li>
                <li><Link href="#about" className="hover:text-white">About</Link></li>
                <li><Link href="#quote" className="hover:text-white">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold tracking-widest uppercase text-xs mb-6 text-[#FAF9F6]/40">Legal</h4>
              <ul className="space-y-4 text-sm text-[#FAF9F6]/80">
                <li><Link href="#" className="hover:text-white">Privacy</Link></li>
                <li><Link href="#" className="hover:text-white">Terms</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#FAF9F6]/40 font-medium">
            <p>© {new Date().getFullYear()} Summit Roofing Co. All rights reserved.</p>
            <p>Demo project by Trinetra ARC.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}