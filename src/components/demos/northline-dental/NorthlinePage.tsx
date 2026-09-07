"use client";

import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Menu, X, ArrowRight, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export function NorthlinePage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Parallax logic
  const { scrollY } = useScroll();
  
  // True spatial camera movements
  const heroScale = useTransform(scrollY, [0, 800], [1, 0.95]);
  const heroOpacity = useTransform(scrollY, [0, 800], [1, 0.5]);
  
  const clinicParallaxY = useTransform(scrollY, [0, 2000], [0, -150]);
  
  

  const services = [
    { num: "01", title: "General Dentistry", desc: "Routine examinations, preventive cleanings, and ongoing oral care tailored to your specific clinical needs." },
    { num: "02", title: "Cosmetic Dentistry", desc: "Thoughtful treatments designed to enhance the appearance and symmetry of your smile with natural results." },
    { num: "03", title: "Restorative Care", desc: "Modern restorative solutions for damaged or missing teeth, prioritizing both function and aesthetic harmony." },
    { num: "04", title: "Dental Implants", desc: "Permanent, structural replacements for missing teeth using advanced clinical techniques and materials." },
    { num: "05", title: "Preventive Care", desc: "Personalized guidance focused on maintaining long-term oral health and avoiding future complications." },
    { num: "06", title: "Emergency Care", desc: "Prompt, compassionate dental attention when unexpected problems, trauma, or pain arise." }
  ];

  const journey = [
    { step: "01", title: "Discover", desc: "Start with an open conversation about your clinical needs and personal goals in a comfortable setting." },
    { step: "02", title: "Plan", desc: "Review your oral health with clear digital imaging. We discuss your options transparently, without judgment." },
    { step: "03", title: "Treat", desc: "Create a customized treatment approach perfectly tailored to your timeline, comfort level, and budget." },
    { step: "04", title: "Care", desc: "Move forward with thoughtful, precise care using modern clinical techniques and soothing practice amenities." }
  ];

  return (
    <div className="w-full flex flex-col min-h-screen bg-[#F8F7F3] text-[#2C2E33] font-sans selection:bg-[#9BB0A5] selection:text-white overflow-x-hidden">
      
      {/* HEADER */}
      <header className="w-full py-5 px-6 md:px-12 flex items-center justify-between sticky top-0 z-50 bg-[#F8F7F3]/90 backdrop-blur-xl border-b border-[#2C2E33]/5 transition-all shadow-sm">
        <Link href="#top" className="flex flex-col cursor-pointer z-50">
          <span className="font-semibold tracking-[0.15em] uppercase text-sm leading-tight text-[#2C2E33]">Northline</span>
          <span className="font-light tracking-[0.2em] uppercase text-[10px] leading-tight text-[#7D8A82] mt-0.5">Dental Studio</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-10 text-[11px] font-medium tracking-[0.15em] uppercase text-[#2C2E33]/70">
          <Link href="#services" className="hover:text-[#2C2E33] transition-colors">Care</Link>
          <Link href="#approach" className="hover:text-[#2C2E33] transition-colors">Approach</Link>
          <Link href="#about" className="hover:text-[#2C2E33] transition-colors">Practice</Link>
          <Link href="#team" className="hover:text-[#2C2E33] transition-colors">Team</Link>
          <Link href="#visit" className="hover:text-[#2C2E33] transition-colors">Visit</Link>
        </nav>
        
        <div className="hidden md:block">
          <Link href="#appointment" className="text-[11px] font-semibold tracking-[0.15em] uppercase border-b border-[#2C2E33]/30 pb-1 hover:border-[#2C2E33] hover:text-[#2C2E33] transition-all">
            Book an Appointment
          </Link>
        </div>

        <button className="md:hidden z-50 text-[#2C2E33]" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle Menu">
          {isMenuOpen ? <X size={24} strokeWidth={1.2} /> : <Menu size={24} strokeWidth={1.2} />}
        </button>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            className="md:hidden fixed inset-0 z-40 bg-[#F8F7F3] pt-32 px-8 pb-12 flex flex-col justify-between"
          >
            <div className="flex flex-col gap-8 text-[clamp(2rem,6vw,3rem)] font-light tracking-tight">
              <Link href="#services" onClick={() => setIsMenuOpen(false)}>Care</Link>
              <Link href="#approach" onClick={() => setIsMenuOpen(false)}>Approach</Link>
              <Link href="#about" onClick={() => setIsMenuOpen(false)}>Practice</Link>
              <Link href="#team" onClick={() => setIsMenuOpen(false)}>Team</Link>
              <Link href="#visit" onClick={() => setIsMenuOpen(false)}>Visit</Link>
            </div>
            <div>
              <Link href="#appointment" onClick={() => setIsMenuOpen(false)} className="inline-block text-xs font-semibold tracking-[0.15em] uppercase border-b border-[#2C2E33]/30 pb-1">
                Book an Appointment
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main id="top">
        {/* 1. HERO - True Spatial Environment */}
        <section className="w-full px-6 md:px-12 pt-12 pb-32 md:pb-24 md:py-24 max-w-[1600px] mx-auto relative perspective-[2000px] transform-style-3d">
          
          <motion.div style={{ scale: heroScale, opacity: heroOpacity }} className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-center relative z-10 transform-style-3d">
            
            {/* TYPOGRAPHY - Foreground Z-40 */}
            <div className="md:col-span-6 lg:col-span-5 lg:pr-12 order-2 md:order-1 relative z-40 transform-style-3d translate-z-[30px]">
              <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <div className="mb-8">
                  <span className="block text-[11px] font-semibold tracking-[0.2em] uppercase text-[#7D8A82]">Northline Dental Studio</span>
                  <span className="block text-[11px] font-light tracking-[0.2em] uppercase text-[#2C2E33]/50 mt-1">Austin, Texas</span>
                </div>
                
                <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-light tracking-tight leading-[1.05] text-[#2C2E33] mb-8 drop-shadow-sm">
                  A healthier smile starts with a better experience.
                </h1>
                
                <p className="text-base md:text-lg font-light text-[#2C2E33]/80 leading-relaxed mb-10 max-w-md">
                  Modern dental care designed around your comfort, your goals, and your long-term oral health.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-8 sm:items-center">
                  <Link href="#appointment" className="text-[11px] font-semibold tracking-[0.15em] uppercase border-b border-[#2C2E33] pb-1 hover:text-[#7D8A82] hover:border-[#7D8A82] transition-all w-fit">
                    Book an Appointment
                  </Link>
                  <Link href="#services" className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#2C2E33]/60 hover:text-[#2C2E33] transition-all flex items-center gap-2 w-fit">
                    Explore Our Care <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* HERO PHOTOGRAPH - Background Z-20 */}
            <div className="md:col-span-6 lg:col-span-7 h-[50vh] md:h-[75vh] w-full relative order-1 md:order-2 overflow-hidden bg-[#EAE8E3] rounded-sm shadow-[0_30px_80px_rgba(0,0,0,0.08)] z-20">
              <motion.div 
                initial={{ scale: 1.05 }} animate={{ scale: 1 }} transition={{ duration: 2, ease: "easeOut" }}
                className="w-full h-full relative"
              >
                <Image src="/images/northline-dental/hero.jpg" alt="Premium Clinic Interior" fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 60vw" />
              </motion.div>
            </div>
          </motion.div>

          </section>

        {/* 2. PHILOSOPHY - Smooth entry */}
        <section className="py-24 md:py-32 px-6 md:px-12 bg-white relative z-40 overflow-hidden transform-style-3d shadow-[0_-20px_50px_rgba(0,0,0,0.02)]">
          <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 relative z-10">
            <div className="md:col-span-3">
              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#7D8A82]">Our Philosophy</span>
            </div>
            <div className="md:col-span-9 md:col-start-4 lg:col-span-7 transform-style-3d">
              {/* Lower threshold and strictly once=true so it never becomes invisible */}
              <motion.h2 
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.8 }}
                className="text-[clamp(2rem,4vw,3.5rem)] font-light tracking-tight leading-[1.15] mb-8 text-[#2C2E33]"
              >
                Modern dentistry should feel personal.
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.8, delay: 0.1 }}
                className="text-base md:text-lg font-light text-[#2C2E33]/80 leading-relaxed max-w-2xl"
              >
                From the first conversation to every visit that follows, we believe dental care should feel clear, comfortable and personal. We remove the anxiety from oral care by focusing on communication and a deeply human approach.
              </motion.p>
            </div>
          </div>
          
          {/* Spatial Environmental Object */}
          <motion.div 
            style={{ y: useTransform(scrollY, [0, 2500], [200, -300]), rotate: useTransform(scrollY, [0, 2500], [0, 90]) }}
            className="absolute top-1/4 -right-32 w-[600px] h-[600px] rounded-full border-[2px] border-[#F8F7F3] pointer-events-none z-0 opacity-40 hidden md:block"
          />
        </section>

        {/* 3. FULL-BLEED ARCHITECTURAL DEPTH */}
        <section className="w-full h-[60vh] md:h-[85vh] relative overflow-hidden bg-[#EAE8E3]">
          <motion.div
            style={{ y: clinicParallaxY }}
            className="w-full h-[140%] -top-[20%] relative"
          >
            <Image src="/images/northline-dental/philosophy.jpg" alt="The Northline Experience" fill className="object-cover" sizes="100vw" />
          </motion.div>
          <div className="absolute bottom-6 left-6 md:bottom-10 md:left-12 bg-white/95 backdrop-blur-md px-6 py-4 shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-sm">
            <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#2C2E33]">The Northline Experience</span>
          </div>
        </section>

        {/* 4. SERVICES - Spatial Cards */}
        <section id="services" className="py-24 md:py-32 px-6 md:px-12 bg-[#F8F7F3] perspective-[2000px] overflow-hidden">
          <div className="max-w-[1200px] mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.8 }} className="mb-20">
              <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-light tracking-tight mb-4 text-[#2C2E33]">Clinical Care</h2>
              <p className="text-base font-light text-[#2C2E33]/70 max-w-md">Comprehensive services tailored to your unique oral health needs and aesthetic goals.</p>
            </motion.div>

            <div className="border-t border-[#2C2E33]/10 flex flex-col">
              {services.map((srv, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, rotateX: 10, y: 20 }}
                  whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  whileHover={{ rotateX: 2, scale: 1.01, z: 20 }}
                  style={{ transformStyle: "preserve-3d" }}
                  className="group relative border-b border-[#2C2E33]/10 transition-colors duration-500 hover:border-transparent cursor-pointer bg-[#F8F7F3]"
                >
                  <div className="absolute inset-0 -mx-6 md:-mx-10 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.06)] pointer-events-none transform-style-3d translate-z-[-10px]"></div>
                  
                  <div className="relative py-8 md:py-10 px-6 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start md:items-center">
                    <div className="md:col-span-1">
                      <span className="text-[11px] font-medium text-[#2C2E33]/50 tracking-widest">{srv.num}</span>
                    </div>
                    <div className="md:col-span-5 lg:col-span-4 transform-style-3d translate-z-[15px]">
                      <h3 className="text-[clamp(1.25rem,2vw,1.75rem)] font-light tracking-tight text-[#2C2E33]">
                        {srv.title}
                      </h3>
                    </div>
                    {/* Fixed opacity bugs: No more md:opacity-50. Always readable. */}
                    <div className="md:col-span-6 lg:col-span-5 md:pl-8 transform-style-3d translate-z-[5px]">
                      <p className="text-sm md:text-base font-light text-[#2C2E33]/70 leading-relaxed transition-all duration-500">
                        {srv.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. PATIENT JOURNEY - True Spatial Progression */}
        <section id="approach" className="py-24 md:py-40 px-6 md:px-12 bg-white relative overflow-hidden perspective-[1500px]">
          <div className="max-w-[1200px] mx-auto relative z-10">
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#7D8A82] block mb-24 md:mb-40">The Process</motion.span>
            
            <div className="flex flex-col gap-20 md:gap-40 relative transform-style-3d before:content-[''] before:absolute before:left-6 md:before:left-1/2 before:top-0 before:bottom-0 before:w-px before:bg-gradient-to-b before:from-[#2C2E33]/0 before:via-[#2C2E33]/10 before:to-[#2C2E33]/0">
              {journey.map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, z: -100, y: 50 }} 
                  whileInView={{ opacity: 1, z: 0, y: 0 }} 
                  viewport={{ once: true, margin: "-20%" }} 
                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  className={`grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative pl-12 md:pl-0 transform-style-3d`}
                >
                  {/* Timeline Node */}
                  <div className={`absolute left-[20px] md:left-[calc(50%-4px)] top-4 md:top-1/2 w-2 h-2 rounded-full bg-[#7D8A82] shadow-[0_0_0_4px_white]`}></div>

                  <div className={`md:col-span-5 ${i % 2 !== 0 ? 'md:col-start-7' : 'md:col-start-2 text-left md:text-right'} relative`}>
                    <span className={`text-[clamp(5rem,12vw,10rem)] font-light text-[#F8F7F3] leading-none select-none tracking-tighter block mb-2 absolute top-1/2 -translate-y-1/2 -z-10 ${i % 2 !== 0 ? '-left-12' : '-right-12'}`}>{item.step}</span>
                    <h4 className="text-[clamp(1.5rem,3vw,2rem)] font-light tracking-tight mb-4 text-[#2C2E33]">{item.title}</h4>
                    <p className="text-base md:text-lg font-light text-[#2C2E33]/80 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. PRACTICE / ABOUT */}
        <section id="about" className="py-24 md:py-32 px-6 md:px-12 bg-[#F8F7F3] overflow-hidden">
          <div className="max-w-[1600px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.8 }} className="order-2 lg:order-1 relative aspect-[4/5] w-full max-w-2xl bg-[#EAE8E3] shadow-[0_30px_80px_rgba(0,0,0,0.06)] rounded-sm group overflow-hidden">
                <Image src="/images/northline-dental/about.jpg" alt="Northline Practice" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" sizes="(max-width: 1024px) 100vw, 50vw" />
              </motion.div>
              
              <div className="order-1 lg:order-2 max-w-xl">
                <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#7D8A82] block mb-8">About the Practice</motion.span>
                
                <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.8 }} className="text-[clamp(2rem,4vw,3.5rem)] font-light tracking-tight leading-[1.15] mb-8 text-[#2C2E33]">
                  A different kind of dental practice.
                </motion.h3>
                
                <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.8, delay: 0.1 }} className="text-base md:text-lg font-light text-[#2C2E33]/80 leading-relaxed mb-12">
                  Northline combines modern dentistry with a calm, personal approach to care. We designed our environment to ensure a comfortable experience while we help you maintain long-term oral health through clear communication and thoughtful treatment planning.
                </motion.p>
                
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.8, delay: 0.2 }} className="flex flex-col gap-6 text-[#2C2E33] font-light">
                  {["Personal attention", "Clear communication", "Thoughtful treatment planning", "Comfort-focused environment"].map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-4 border-b border-[#2C2E33]/10 pb-4">
                      <span className="w-1.5 h-1.5 bg-[#7D8A82] rounded-full shadow-sm"></span>
                      <span className="text-sm md:text-base">{feature}</span>
                    </div>
                  ))}
                </motion.div>
              </div>
              
            </div>
          </div>
        </section>

        {/* 7. MODERN DENTISTRY */}
        <section className="py-24 md:py-32 px-6 md:px-12 bg-white overflow-hidden">
          <div className="max-w-[1600px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1">
                <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.8 }} className="text-[clamp(2rem,4vw,3.5rem)] font-light tracking-tight leading-[1.15] mb-12 text-[#2C2E33]">
                  Modern tools.<br/>Thoughtful care.
                </motion.h3>
                
                <div className="flex flex-col gap-10">
                  <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: 0.1 }}>
                    <h4 className="text-[11px] font-semibold tracking-[0.2em] uppercase mb-3 text-[#2C2E33]">Digital Imaging</h4>
                    <p className="text-[#2C2E33]/80 text-sm md:text-base font-light leading-relaxed">Advanced imaging tools that support clearer treatment planning and accurate diagnostics.</p>
                  </motion.div>
                  <div className="w-full h-[1px] bg-[#2C2E33]/10"></div>
                  <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: 0.2 }}>
                    <h4 className="text-[11px] font-semibold tracking-[0.2em] uppercase mb-3 text-[#2C2E33]">Modern Environment</h4>
                    <p className="text-[#2C2E33]/80 text-sm md:text-base font-light leading-relaxed">A calm, architecturally thoughtful space designed entirely around the patient experience.</p>
                  </motion.div>
                </div>
              </div>
              
              <div className="lg:col-span-7 h-[50vh] lg:h-[80vh] relative overflow-hidden order-1 lg:order-2 flex items-center justify-center bg-[#F8F7F3] rounded-sm shadow-[inset_0_20px_50px_rgba(0,0,0,0.02)]">
                {/* 3D Glass Tech Sculpture with Parallax */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="w-[120%] h-[120%] relative mix-blend-multiply"
                >
                  <Image src="/images/northline-dental/3d-tech.jpg" alt="Abstract Modern 3D Technology Sculpture" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 60vw" />
                </motion.div>
              </div>
              
            </div>
          </div>
        </section>

        {/* 8. TEAM - Editorial 3-Column Layout with Depth */}
        <section id="team" className="py-24 md:py-32 px-6 md:px-12 bg-[#F8F7F3] overflow-hidden">
          <div className="max-w-[1600px] mx-auto">
            <div className="mb-20 text-center">
              <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-[clamp(2rem,4vw,3.5rem)] font-light tracking-tight text-[#2C2E33]">The Team</motion.h3>
              <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }} className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#7D8A82] block mt-4">Northline Professionals</motion.span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.8 }}
                className="flex flex-col group"
              >
                <div className="w-full aspect-[3/4] relative mb-6 overflow-hidden bg-[#EAE8E3] rounded-sm shadow-[0_20px_40px_rgba(0,0,0,0.05)] transform-style-3d">
                  <Image src="/images/northline-dental/team-maya-carter.jpg" alt="Dr. Maya Carter" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <h4 className="text-[clamp(1.25rem,2vw,1.75rem)] font-light tracking-tight mb-2 text-[#2C2E33]">Dr. Maya Carter</h4>
                <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[#7D8A82] mb-4">Lead Dentist</p>
                <p className="text-sm font-light text-[#2C2E33]/80 leading-relaxed">Dedicated to comprehensive care with a focus on functional harmony and patient comfort.</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.8, delay: 0.1 }}
                className="flex flex-col md:mt-12 group"
              >
                <div className="w-full aspect-[3/4] relative mb-6 overflow-hidden bg-[#EAE8E3] rounded-sm shadow-[0_20px_40px_rgba(0,0,0,0.05)] transform-style-3d">
                  <Image src="/images/northline-dental/team-ethan-brooks.jpg" alt="Dr. Ethan Brooks" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <h4 className="text-[clamp(1.25rem,2vw,1.75rem)] font-light tracking-tight mb-2 text-[#2C2E33]">Dr. Ethan Brooks</h4>
                <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[#7D8A82] mb-4">Cosmetic & Restorative</p>
                <p className="text-sm font-light text-[#2C2E33]/80 leading-relaxed">Specializing in minimally invasive aesthetics and advanced structural restorations.</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-col md:mt-24 group"
              >
                <div className="w-full aspect-[3/4] relative mb-6 overflow-hidden bg-[#EAE8E3] rounded-sm shadow-[0_20px_40px_rgba(0,0,0,0.05)] transform-style-3d">
                  <Image src="/images/northline-dental/team-olivia-bennett.jpg" alt="Olivia Bennett" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <h4 className="text-[clamp(1.25rem,2vw,1.75rem)] font-light tracking-tight mb-2 text-[#2C2E33]">Olivia Bennett</h4>
                <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[#7D8A82] mb-4">Patient Care Coordinator</p>
                <p className="text-sm font-light text-[#2C2E33]/80 leading-relaxed">Ensuring every stage of your treatment journey is clear, seamless, and comfortable.</p>
              </motion.div>

            </div>
          </div>
        </section>

        {/* 9. LOCATION / GOOGLE MAPS */}
        <section id="visit" className="py-24 md:py-32 px-6 md:px-12 bg-white overflow-hidden">
          <div className="max-w-[1600px] mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.8 }} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              <div className="lg:col-span-4">
                <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#7D8A82] block mb-6">Visit Northline</span>
                <h3 className="text-[clamp(2rem,4vw,3.5rem)] font-light tracking-tight leading-[1.15] mb-6 text-[#2C2E33]">
                  Find us in Austin.
                </h3>
                <p className="text-base md:text-lg font-light text-[#2C2E33]/80 leading-relaxed mb-10 max-w-sm">
                  Located in Austin, Texas, Northline Dental Studio is designed to make every visit feel simple, comfortable and personal.
                </p>
                
                <div className="mb-10">
                  <p className="text-sm font-medium tracking-widest uppercase text-[#2C2E33] mb-1">Northline Dental Studio</p>
                  <p className="text-sm font-light text-[#2C2E33]/80 mb-2">Austin, Texas</p>
                  <p className="text-[10px] font-semibold tracking-[0.2em] text-[#7D8A82] uppercase">Concept Location</p>
                </div>
                
                <a 
                  href="https://maps.google.com/?q=Austin,+TX" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.15em] uppercase border border-[#2C2E33]/20 px-6 py-3 rounded-full hover:bg-[#2C2E33] hover:text-white transition-all duration-300 text-[#2C2E33]"
                >
                  <MapPin size={14} /> Get Directions
                </a>
              </div>
              
              <div className="lg:col-span-8 w-full h-[400px] md:h-[500px] bg-[#EAE8E3] relative overflow-hidden rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-[#2C2E33]/5 group">
                <div className="absolute inset-0 bg-[#F8F7F3]/40 mix-blend-color z-10 pointer-events-none group-hover:opacity-0 transition-opacity duration-700"></div>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110116.14197368087!2d-97.82845618451163!3d30.29871638210168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b599a0cc032f%3A0x5d9b464bd469d57a!2sAustin%2C%20TX!5e0!3m2!1sen!2sus!4v1714400262104!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Northline Dental Studio Location"
                  className="grayscale-[50%] opacity-90 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100"
                ></iframe>
              </div>
              
            </motion.div>
          </div>
        </section>

        {/* 10. APPOINTMENT FORM - Spatial Resolution */}
        <section id="appointment" className="py-24 md:py-32 px-6 md:px-12 bg-[#F8F7F3] border-t border-[#2C2E33]/5 relative overflow-hidden transform-style-3d">
          
          <motion.div 
            className="absolute -right-20 top-0 w-[500px] h-[500px] rounded-full pointer-events-none z-0"
            style={{
              rotate: useTransform(scrollY, [0, 5000], [0, 90]), 
              scale: 1.2,
              background: 'radial-gradient(circle at 30% 30%, #ffffff, #eae8e3 40%, #d1ceca 80%, #b0ad9f 100%)',
              boxShadow: 'inset -20px -20px 40px rgba(0,0,0,0.05), 0 30px 60px rgba(0,0,0,0.1)',
              filter: 'blur(2px)'
            }}
          ></motion.div>

          <div className="max-w-5xl mx-auto relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.8 }} className="text-center mb-16 relative">
              <h3 className="text-[clamp(2rem,4vw,3.5rem)] font-light tracking-tight leading-[1.15] mb-6 text-[#2C2E33]">
                Ready for a better dental experience?
              </h3>
              <p className="text-base md:text-lg font-light text-[#2C2E33]/80">
                Tell us a little about what you need and we&apos;ll help you take the next step.
              </p>

              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="hidden lg:flex absolute top-10 -left-16 bg-white/70 backdrop-blur-xl border border-white shadow-[0_20px_50px_rgba(0,0,0,0.08)] px-6 py-4 rounded-2xl flex-col items-start transform-style-3d translate-z-[40px]"
              >
                <div className="flex items-center gap-3 mb-1">
                  <span className="w-2 h-2 rounded-full bg-[#7D8A82] animate-pulse"></span>
                  <span className="text-[9px] font-semibold tracking-[0.2em] uppercase text-[#2C2E33]">Next Available</span>
                </div>
                <span className="text-xs font-medium text-[#2C2E33]/80">Appointment this week</span>
              </motion.div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.8, delay: 0.1 }} className="bg-white/90 backdrop-blur-md p-8 md:p-12 border border-white shadow-[0_30px_80px_rgba(0,0,0,0.06)] rounded-2xl relative z-20">
              <AnimatePresence mode="wait">
                {formSubmitted ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                    className="text-center py-24"
                  >
                    <h4 className="text-2xl md:text-3xl font-light tracking-tight mb-4 text-[#2C2E33]">Thank you.</h4>
                    <p className="text-[#2C2E33]/80 font-light text-base md:text-lg">
                      Your appointment request has been received.<br/>
                      Our team will be in touch shortly.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    onSubmit={(e) => { e.preventDefault(); setFormSubmitted(true); }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12"
                  >
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#2C2E33]/70">Full Name</label>
                      <input required type="text" id="name" className="pb-2 bg-transparent border-b border-[#2C2E33]/20 focus:outline-none focus:border-[#7D8A82] transition-colors rounded-none font-light text-base text-[#2C2E33]" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#2C2E33]/70">Email</label>
                      <input required type="email" id="email" className="pb-2 bg-transparent border-b border-[#2C2E33]/20 focus:outline-none focus:border-[#7D8A82] transition-colors rounded-none font-light text-base text-[#2C2E33]" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="phone" className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#2C2E33]/70">Phone</label>
                      <input required type="tel" id="phone" className="pb-2 bg-transparent border-b border-[#2C2E33]/20 focus:outline-none focus:border-[#7D8A82] transition-colors rounded-none font-light text-base text-[#2C2E33]" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="date" className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#2C2E33]/70">Preferred Date</label>
                      <input required type="date" id="date" className="pb-2 bg-transparent border-b border-[#2C2E33]/20 focus:outline-none focus:border-[#7D8A82] transition-colors rounded-none font-light text-[#2C2E33] text-base" />
                    </div>
                    <div className="flex flex-col gap-2 md:col-span-2">
                      <label htmlFor="service" className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#2C2E33]/70">Service</label>
                      <select required id="service" defaultValue="" className="w-full pb-2 bg-transparent border-b border-[#2C2E33]/20 focus:outline-none focus:border-[#7D8A82] transition-colors appearance-none cursor-pointer rounded-none font-light text-[#2C2E33] text-base">
                        <option value="" disabled>Select a service...</option>
                        <option value="General Dentistry">General Dentistry</option>
                        <option value="Cosmetic Dentistry">Cosmetic Dentistry</option>
                        <option value="Restorative Care">Restorative Care</option>
                        <option value="Dental Implants">Dental Implants</option>
                        <option value="Teeth Whitening">Teeth Whitening</option>
                        <option value="Preventive Care">Preventive Care</option>
                        <option value="Emergency Dental Care">Emergency Dental Care</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-2 md:col-span-2">
                      <label htmlFor="message" className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#2C2E33]/70">Message</label>
                      <textarea id="message" rows={2} className="pb-2 bg-transparent border-b border-[#2C2E33]/20 focus:outline-none focus:border-[#7D8A82] transition-colors resize-none rounded-none font-light text-base text-[#2C2E33]"></textarea>
                    </div>
                    <div className="md:col-span-2 mt-4 flex justify-center">
                      <button type="submit" className="text-[11px] font-semibold tracking-[0.15em] uppercase border-b border-[#2C2E33] pb-1 hover:text-[#7D8A82] hover:border-[#7D8A82] transition-all text-[#2C2E33]">
                        Request an Appointment
                      </button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#2C2E33] text-[#F8F7F3] py-24 px-6 md:px-12 relative z-10">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-24">
            
            <div className="lg:col-span-2">
              <span className="block font-light tracking-tight text-[clamp(1.5rem,3vw,2.5rem)] mb-4">Northline Dental Studio</span>
              <p className="text-[#F8F7F3]/70 font-light text-base">Austin, Texas</p>
              <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#7D8A82] mt-6">Concept Project</p>
            </div>
            
            <div className="flex flex-col gap-4 text-xs font-medium tracking-[0.15em] uppercase">
              <Link href="#services" className="hover:text-[#7D8A82] transition-colors w-fit">Care</Link>
              <Link href="#approach" className="hover:text-[#7D8A82] transition-colors w-fit">Approach</Link>
              <Link href="#about" className="hover:text-[#7D8A82] transition-colors w-fit">Practice</Link>
              <Link href="#team" className="hover:text-[#7D8A82] transition-colors w-fit">Team</Link>
              <Link href="#visit" className="hover:text-[#7D8A82] transition-colors w-fit">Visit</Link>
            </div>
            
            <div className="flex flex-col gap-4 text-xs font-medium tracking-[0.15em] uppercase">
              <Link href="/privacy" className="hover:text-[#7D8A82] transition-colors w-fit">Privacy</Link>
              <Link href="/terms" className="hover:text-[#7D8A82] transition-colors w-fit">Terms</Link>
            </div>
          </div>
          
          <div className="pt-8 border-t border-[#F8F7F3]/10 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] font-medium tracking-[0.15em] uppercase text-[#F8F7F3]/40">
            <p>© {new Date().getFullYear()} Northline Dental Studio.</p>
            <p>Demo project by Trinetra ARC.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}