"use client";
import { imagePath } from "@/lib/imagePath";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Menu, X, MapPin, Phone, Clock } from "lucide-react";

export function EmberOakPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [reservationStatus, setReservationStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [fullMenuOpen, setFullMenuOpen] = useState(false);
  const [eventModalOpen, setEventModalOpen] = useState(false);
  const [eventStatus, setEventStatus] = useState<"idle" | "submitting" | "success">("idle");
  
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 1000], [0, 300]);
  const heroOpacity = useTransform(scrollY, [0, 800], [1, 0]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (fullMenuOpen || eventModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [fullMenuOpen, eventModalOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setFullMenuOpen(false);
        setEventModalOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleEventSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEventStatus("submitting");
    setTimeout(() => {
      setEventStatus("success");
    }, 1500);
  };

  const handleReservation = (e: React.FormEvent) => {
    e.preventDefault();
    setReservationStatus("submitting");
    setTimeout(() => {
      setReservationStatus("success");
    }, 1500);
  };

  return (
    <div className="bg-[#0E0D0C] text-[#EAE8E3] min-h-screen font-sans selection:bg-[#A38D75]/30">

      {/* FULL MENU MODAL */}
      <AnimatePresence>
        {fullMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0E0D0C]/95 backdrop-blur-md p-4 md:p-12 overflow-y-auto"
            onClick={(e) => { if (e.target === e.currentTarget) setFullMenuOpen(false); }}
          >
            <motion.div 
              initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 50, opacity: 0 }}
              className="bg-[#131110] border border-white/10 w-full max-w-4xl p-8 md:p-16 relative my-auto mt-24 md:mt-auto"
            >
              <button onClick={() => setFullMenuOpen(false)} className="absolute top-6 right-6 text-[#EAE8E3]/50 hover:text-white transition-colors" aria-label="Close menu">
                <X size={24} />
              </button>
              
              <div className="text-center mb-16">
                <h3 className="text-sm tracking-[0.2em] uppercase text-[#A38D75] mb-4">Ember & Oak</h3>
                <h2 className="text-4xl md:text-5xl font-serif tracking-[0.05em]">Full Menu</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <div>
                  <h4 className="text-lg font-serif tracking-[0.1em] mb-8 border-b border-white/10 pb-4">Starters</h4>
                  <ul className="space-y-6">
                    <li>
                      <div className="flex justify-between items-baseline mb-1">
                        <span className="font-medium tracking-wide">Wood-Fired Olives</span>
                        <span className="text-[#A38D75] text-sm">$9</span>
                      </div>
                      <p className="text-xs text-[#EAE8E3]/60 leading-relaxed">Citrus, garlic, rosemary</p>
                    </li>
                    <li>
                      <div className="flex justify-between items-baseline mb-1">
                        <span className="font-medium tracking-wide">Charred Octopus</span>
                        <span className="text-[#A38D75] text-sm">$22</span>
                      </div>
                      <p className="text-xs text-[#EAE8E3]/60 leading-relaxed">Smoked paprika aioli, fingerling potatoes, salsa verde</p>
                    </li>
                    <li>
                      <div className="flex justify-between items-baseline mb-1">
                        <span className="font-medium tracking-wide">Beef Tartare</span>
                        <span className="text-[#A38D75] text-sm">$24</span>
                      </div>
                      <p className="text-xs text-[#EAE8E3]/60 leading-relaxed">Bone marrow, quail egg, grilled sourdough</p>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-serif tracking-[0.1em] mb-8 border-b border-white/10 pb-4">Mains</h4>
                  <ul className="space-y-6">
                    <li>
                      <div className="flex justify-between items-baseline mb-1">
                        <span className="font-medium tracking-wide">Ember-Roasted Chicken</span>
                        <span className="text-[#A38D75] text-sm">$32</span>
                      </div>
                      <p className="text-xs text-[#EAE8E3]/60 leading-relaxed">Half bird, charred lemon, wild mushroom panzanella</p>
                    </li>
                    <li>
                      <div className="flex justify-between items-baseline mb-1">
                        <span className="font-medium tracking-wide">Whole Branzino</span>
                        <span className="text-[#A38D75] text-sm">$45</span>
                      </div>
                      <p className="text-xs text-[#EAE8E3]/60 leading-relaxed">Wood-grilled, shaved fennel, citrus vinaigrette</p>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-serif tracking-[0.1em] mb-8 border-b border-white/10 pb-4">From The Fire</h4>
                  <ul className="space-y-6">
                    <li>
                      <div className="flex justify-between items-baseline mb-1">
                        <span className="font-medium tracking-wide">32oz Dry-Aged Tomahawk</span>
                        <span className="text-[#A38D75] text-sm">$140</span>
                      </div>
                      <p className="text-xs text-[#EAE8E3]/60 leading-relaxed">Black garlic butter, roasted shallots</p>
                    </li>
                    <li>
                      <div className="flex justify-between items-baseline mb-1">
                        <span className="font-medium tracking-wide">16oz Prime Ribeye</span>
                        <span className="text-[#A38D75] text-sm">$65</span>
                      </div>
                      <p className="text-xs text-[#EAE8E3]/60 leading-relaxed">Smoked sea salt, chimichurri</p>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-serif tracking-[0.1em] mb-8 border-b border-white/10 pb-4">Desserts & Cocktails</h4>
                  <ul className="space-y-6">
                    <li>
                      <div className="flex justify-between items-baseline mb-1">
                        <span className="font-medium tracking-wide">Smoked Chocolate Tart</span>
                        <span className="text-[#A38D75] text-sm">$14</span>
                      </div>
                      <p className="text-xs text-[#EAE8E3]/60 leading-relaxed">Graham cracker crust, toasted marshmallow</p>
                    </li>
                    <li>
                      <div className="flex justify-between items-baseline mb-1">
                        <span className="font-medium tracking-wide">The Oak Old Fashioned</span>
                        <span className="text-[#A38D75] text-sm">$16</span>
                      </div>
                      <p className="text-xs text-[#EAE8E3]/60 leading-relaxed">Bourbon, smoked maple, bitters, orange peel</p>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* EVENT INQUIRY MODAL */}
      <AnimatePresence>
        {eventModalOpen && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0E0D0C]/95 backdrop-blur-md p-4 md:p-12 overflow-y-auto"
            onClick={(e) => { if (e.target === e.currentTarget) setEventModalOpen(false); }}
          >
            <motion.div 
              initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 50, opacity: 0 }}
              className="bg-[#131110] border border-white/10 w-full max-w-2xl p-8 md:p-16 relative my-auto mt-24 md:mt-auto"
            >
              <button onClick={() => setEventModalOpen(false)} className="absolute top-6 right-6 text-[#EAE8E3]/50 hover:text-white transition-colors" aria-label="Close inquiry">
                <X size={24} />
              </button>
              
              <div className="text-center mb-12">
                <h3 className="text-sm tracking-[0.2em] uppercase text-[#A38D75] mb-4">Private Dining</h3>
                <h2 className="text-4xl md:text-5xl font-serif tracking-[0.05em]">Plan your evening.</h2>
              </div>
              
              {eventStatus === "success" ? (
                <div className="text-center py-16">
                  <h4 className="text-xl md:text-2xl font-serif mb-4">Thank you. Your event inquiry has been received.</h4>
                  <p className="text-[#EAE8E3]/70 font-light mb-12">Our events coordinator will contact you shortly.</p>
                  <button onClick={() => setEventModalOpen(false)} className="text-xs font-semibold tracking-[0.15em] uppercase border-b border-[#A38D75] pb-1 text-[#A38D75] hover:text-white hover:border-white transition-colors">Close</button>
                </div>
              ) : (
                <form onSubmit={handleEventSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs tracking-widest uppercase text-[#EAE8E3]/50 mb-2">Name</label>
                      <input type="text" required className="w-full bg-[#0E0D0C] border border-white/10 px-4 py-3 text-[#EAE8E3] focus:outline-none focus:border-[#A38D75] transition-colors rounded-sm" />
                    </div>
                    <div>
                      <label className="block text-xs tracking-widest uppercase text-[#EAE8E3]/50 mb-2">Email</label>
                      <input type="email" required className="w-full bg-[#0E0D0C] border border-white/10 px-4 py-3 text-[#EAE8E3] focus:outline-none focus:border-[#A38D75] transition-colors rounded-sm" />
                    </div>
                    <div>
                      <label className="block text-xs tracking-widest uppercase text-[#EAE8E3]/50 mb-2">Phone</label>
                      <input type="tel" required className="w-full bg-[#0E0D0C] border border-white/10 px-4 py-3 text-[#EAE8E3] focus:outline-none focus:border-[#A38D75] transition-colors rounded-sm" />
                    </div>
                    <div>
                      <label className="block text-xs tracking-widest uppercase text-[#EAE8E3]/50 mb-2">Event Date</label>
                      <input type="date" required className="w-full bg-[#0E0D0C] border border-white/10 px-4 py-3 text-[#EAE8E3] focus:outline-none focus:border-[#A38D75] transition-colors rounded-sm" />
                    </div>
                    <div>
                      <label className="block text-xs tracking-widest uppercase text-[#EAE8E3]/50 mb-2">Guests</label>
                      <input type="number" min="1" required className="w-full bg-[#0E0D0C] border border-white/10 px-4 py-3 text-[#EAE8E3] focus:outline-none focus:border-[#A38D75] transition-colors rounded-sm" />
                    </div>
                    <div>
                      <label className="block text-xs tracking-widest uppercase text-[#EAE8E3]/50 mb-2">Event Type</label>
                      <select required className="w-full bg-[#0E0D0C] border border-white/10 px-4 py-3 text-[#EAE8E3] focus:outline-none focus:border-[#A38D75] transition-colors rounded-sm appearance-none">
                        <option value="">Select type...</option>
                        <option value="Private Dinner">Private Dinner</option>
                        <option value="Birthday / Celebration">Birthday / Celebration</option>
                        <option value="Corporate Dinner">Corporate Dinner</option>
                        <option value="Special Event">Special Event</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-[#EAE8E3]/50 mb-2">Message</label>
                    <textarea required rows={3} className="w-full bg-[#0E0D0C] border border-white/10 px-4 py-3 text-[#EAE8E3] focus:outline-none focus:border-[#A38D75] transition-colors rounded-sm resize-none"></textarea>
                  </div>
                  <div className="pt-4 text-center">
                    <button 
                      type="submit"
                      disabled={eventStatus === "submitting"}
                      className="text-xs font-semibold tracking-[0.15em] uppercase bg-[#A38D75] text-[#0E0D0C] px-10 py-4 hover:bg-white transition-colors disabled:opacity-50 inline-block w-full"
                    >
                      {eventStatus === "submitting" ? "Sending..." : "Send Inquiry"}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? "bg-[#0E0D0C]/95 backdrop-blur-md py-4 border-b border-white/5" : "bg-transparent py-6"}`}>
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link href="#top" className="text-xl md:text-2xl font-serif tracking-[0.1em] uppercase z-50 relative">
            Ember & Oak
          </Link>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            <Link href="#menu" className="text-xs tracking-[0.15em] uppercase hover:text-[#A38D75] transition-colors">Menu</Link>
            <Link href="#story" className="text-xs tracking-[0.15em] uppercase hover:text-[#A38D75] transition-colors">Our Story</Link>
            <Link href="#private-dining" className="text-xs tracking-[0.15em] uppercase hover:text-[#A38D75] transition-colors">Private Dining</Link>
            <Link href="#visit" className="text-xs tracking-[0.15em] uppercase hover:text-[#A38D75] transition-colors">Visit</Link>
            <Link href="#reservations" className="text-xs font-semibold tracking-[0.15em] uppercase border border-[#A38D75] text-[#A38D75] px-5 py-2.5 hover:bg-[#A38D75] hover:text-[#0E0D0C] transition-colors">
              Reserve a Table
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden z-50 relative text-[#EAE8E3]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-[#0E0D0C] z-40 flex flex-col items-center justify-center gap-8"
          >
            <Link href="#menu" onClick={() => setMobileMenuOpen(false)} className="text-xl font-serif tracking-widest uppercase hover:text-[#A38D75] transition-colors">Menu</Link>
            <Link href="#story" onClick={() => setMobileMenuOpen(false)} className="text-xl font-serif tracking-widest uppercase hover:text-[#A38D75] transition-colors">Our Story</Link>
            <Link href="#private-dining" onClick={() => setMobileMenuOpen(false)} className="text-xl font-serif tracking-widest uppercase hover:text-[#A38D75] transition-colors">Private Dining</Link>
            <Link href="#visit" onClick={() => setMobileMenuOpen(false)} className="text-xl font-serif tracking-widest uppercase hover:text-[#A38D75] transition-colors">Visit</Link>
            <Link href="#reservations" onClick={() => setMobileMenuOpen(false)} className="mt-4 text-sm font-semibold tracking-[0.15em] uppercase border border-[#A38D75] text-[#A38D75] px-8 py-3 hover:bg-[#A38D75] hover:text-[#0E0D0C] transition-colors">
              Reserve a Table
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="top" className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
          <Image src={imagePath("/images/ember-oak/hero.jpg")} alt="Ember & Oak Interior" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0E0D0C]/80 via-[#0E0D0C]/40 to-[#0E0D0C]"></div>
        </motion.div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-8xl font-serif tracking-tight mb-6 leading-[1.1]"
          >
            Good food.<br />Good fire.<br />Good company.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-sm md:text-lg font-light tracking-wide text-[#EAE8E3]/80 mb-10 max-w-lg mx-auto"
          >
            Seasonal American cooking, thoughtfully made in the heart of Charleston.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link href="#reservations" className="w-full sm:w-auto text-xs font-semibold tracking-[0.15em] uppercase bg-[#A38D75] text-[#0E0D0C] px-8 py-4 hover:bg-white transition-colors text-center">
              Reserve a Table
            </Link>
            <Link href="#menu" className="w-full sm:w-auto text-xs font-semibold tracking-[0.15em] uppercase border border-white/20 px-8 py-4 hover:border-white transition-colors text-center">
              Explore the Menu
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 md:py-32 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl md:text-4xl font-serif leading-relaxed text-[#EAE8E3]/90">
            EMBER & OAK is a neighborhood kitchen built around fire, seasonality, and the simple pleasure of gathering around a table.
          </h2>
          <div className="w-12 h-[1px] bg-[#A38D75] mx-auto mt-12"></div>
        </div>
      </section>

      {/* Signature Menu */}
      <section id="menu" className="py-24 px-6 bg-[#131110]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 md:mb-24">
            <h3 className="text-xs tracking-[0.2em] uppercase text-[#A38D75] mb-4">Our Menu</h3>
            <h2 className="text-3xl md:text-5xl font-serif">Seasonal & Wood-Fired</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
            {/* Menu Column 1 */}
            <div>
              <h4 className="text-xl font-serif border-b border-white/10 pb-4 mb-8">Starters</h4>
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="text-lg tracking-wide">Charred Octopus</span>
                    <span className="text-[#A38D75] font-light">$18</span>
                  </div>
                  <p className="text-sm font-light text-[#EAE8E3]/50">smoked paprika, citrus, herb oil</p>
                </div>
                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="text-lg tracking-wide">Wood-Roasted Oysters</span>
                    <span className="text-[#A38D75] font-light">$22</span>
                  </div>
                  <p className="text-sm font-light text-[#EAE8E3]/50">chili butter, breadcrumbs, lemon</p>
                </div>
                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="text-lg tracking-wide">Heirloom Tomato</span>
                    <span className="text-[#A38D75] font-light">$16</span>
                  </div>
                  <p className="text-sm font-light text-[#EAE8E3]/50">whipped ricotta, basil, aged balsamic</p>
                </div>
              </div>

              <h4 className="text-xl font-serif border-b border-white/10 pb-4 mb-8 mt-16">Mains</h4>
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="text-lg tracking-wide">Oak-Grilled Ribeye</span>
                    <span className="text-[#A38D75] font-light">$42</span>
                  </div>
                  <p className="text-sm font-light text-[#EAE8E3]/50">roasted shallot, seasonal vegetables, jus</p>
                </div>
                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="text-lg tracking-wide">Lowcountry Shrimp</span>
                    <span className="text-[#A38D75] font-light">$29</span>
                  </div>
                  <p className="text-sm font-light text-[#EAE8E3]/50">sweet corn, Carolina rice, herb butter</p>
                </div>
              </div>
            </div>

            {/* Menu Column 2 - Images */}
            <div className="space-y-8">
              <div className="aspect-[4/3] relative overflow-hidden rounded-sm">
                <Image src={imagePath("/images/ember-oak/food-ribeye.jpg")} alt="Oak-Grilled Ribeye" fill className="object-cover hover:scale-105 transition-transform duration-1000" />
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div className="aspect-square relative overflow-hidden rounded-sm">
                  <Image src={imagePath("/images/ember-oak/food-octopus.jpg")} alt="Charred Octopus" fill className="object-cover hover:scale-105 transition-transform duration-1000" />
                </div>
                <div className="aspect-square relative overflow-hidden rounded-sm">
                  <Image src={imagePath("/images/ember-oak/food-shrimp.jpg")} alt="Lowcountry Shrimp" fill className="object-cover hover:scale-105 transition-transform duration-1000" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-20 text-center">
            <button className="text-xs font-semibold tracking-[0.15em] uppercase border-b border-[#A38D75] pb-1 text-[#A38D75] hover:text-white hover:border-white transition-colors">
              View Full Menu
            </button>
          </div>
        </div>
      </section>

      {/* From The Fire */}
      <section className="py-24 md:py-32 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
            <div className="order-2 md:order-1 relative aspect-[3/4] md:aspect-[4/5] overflow-hidden rounded-sm">
              <Image src={imagePath("/images/ember-oak/fire.jpg")} alt="Open Fire Cooking" fill className="object-cover" />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-xs tracking-[0.2em] uppercase text-[#A38D75] mb-4">Philosophy</h3>
              <h2 className="text-4xl md:text-5xl font-serif mb-8">Built around fire.</h2>
              <p className="text-[#EAE8E3]/70 font-light leading-relaxed mb-6">
                Our kitchen is anchored by a custom wood-fired hearth. Cooking over live fire is primal and honest—it requires intuition, patience, and respect for the ingredients.
              </p>
              <p className="text-[#EAE8E3]/70 font-light leading-relaxed">
                We burn local oak and hickory, imparting a subtle, complex smokiness that defines our menu, from our charred vegetables to our dry-aged steaks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Space */}
      <section className="py-24 px-6 bg-[#131110]">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-16 md:mb-24 md:w-1/2">
            <h3 className="text-xs tracking-[0.2em] uppercase text-[#A38D75] mb-4">Atmosphere</h3>
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Stay awhile.</h2>
            <p className="text-[#EAE8E3]/70 font-light leading-relaxed max-w-lg">
              An intimate Charleston destination for dinner, drinks, celebrations, and long evenings around the table.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
            <div className="md:col-span-8 relative aspect-[16/9] md:aspect-auto md:h-[600px] overflow-hidden rounded-sm">
              <Image src={imagePath("/images/ember-oak/interior.jpg")} alt="Ember & Oak Interior" fill className="object-cover" />
            </div>
            <div className="md:col-span-4 flex flex-col gap-6 md:gap-8">
              <div className="relative flex-1 min-h-[250px] overflow-hidden rounded-sm">
                <Image src={imagePath("/images/ember-oak/hero.jpg")} alt="Restaurant Detail" fill className="object-cover" />
              </div>
              <div className="relative flex-1 min-h-[250px] overflow-hidden rounded-sm">
                <Image src={imagePath("/images/ember-oak/footer-cta.jpg")} alt="Evening Atmosphere" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section id="story" className="py-24 md:py-32 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
            <div>
              <h3 className="text-xs tracking-[0.2em] uppercase text-[#A38D75] mb-4">Our Story</h3>
              <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">Rooted in Charleston.<br/>Inspired by everywhere.</h2>
              <p className="text-[#EAE8E3]/70 font-light leading-relaxed mb-6">
                Ember & Oak combines contemporary American cooking with the warmth and historic character of Charleston. What started as a passion for open-fire cooking has evolved into a space dedicated to genuine hospitality.
              </p>
              <p className="text-[#EAE8E3]/70 font-light leading-relaxed">
                We partner with local farmers, fishermen, and purveyors who share our commitment to quality, ensuring that every dish tells a story of the region.
              </p>
            </div>
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
              <Image src={imagePath("/images/ember-oak/chef.jpg")} alt="Chef Portrait" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Private Dining */}
      <section id="private-dining" className="py-24 md:py-32 px-6 bg-[#131110]">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="order-2 lg:order-1 relative aspect-[4/3] lg:aspect-square overflow-hidden rounded-sm">
              <Image src={imagePath("/images/ember-oak/private-dining.jpg")} alt="Private Dining Room" fill className="object-cover" />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-xs tracking-[0.2em] uppercase text-[#A38D75] mb-4">Events</h3>
              <h2 className="text-4xl md:text-5xl font-serif mb-8">Private Dining</h2>
              <p className="text-[#EAE8E3]/70 font-light leading-relaxed mb-10">
                Whether it&apos;s an intimate birthday dinner, a corporate gathering, or a wedding celebration, our private dining spaces offer the perfect backdrop. Experience our signature hospitality and customized menus in an exclusive setting.
              </p>
              <button onClick={() => setEventModalOpen(true)} className="text-xs font-semibold tracking-[0.15em] uppercase border border-white/20 px-8 py-4 hover:border-white transition-colors">
                Plan Your Event
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Reservations & Visit */}
      <section className="py-24 md:py-32 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Reservation Form */}
            <div id="reservations">
              <h3 className="text-xs tracking-[0.2em] uppercase text-[#A38D75] mb-4">Bookings</h3>
              <h2 className="text-3xl md:text-4xl font-serif mb-8">Reserve a Table</h2>
              
              {reservationStatus === "success" ? (
                <div className="bg-[#131110] border border-[#A38D75]/30 p-8 text-center rounded-sm">
                  <div className="w-12 h-12 bg-[#A38D75]/10 rounded-full flex items-center justify-center mx-auto mb-4 text-[#A38D75]">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <h4 className="text-xl font-serif mb-2">Your reservation request has been received.</h4>
                  <p className="text-[#EAE8E3]/60 text-sm font-light">
                    This is a concept demo, so no actual table has been booked.
                  </p>
                  <button 
                    onClick={() => setReservationStatus("idle")}
                    className="mt-6 text-xs font-semibold tracking-[0.15em] uppercase text-[#A38D75] hover:text-white transition-colors"
                  >
                    Make Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleReservation} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs tracking-widest uppercase text-[#EAE8E3]/50 mb-2">Name</label>
                        <input type="text" required className="w-full bg-[#131110] border border-white/10 px-4 py-3 text-[#EAE8E3] focus:outline-none focus:border-[#A38D75] transition-colors rounded-sm" />
                      </div>
                      <div>
                        <label className="block text-xs tracking-widest uppercase text-[#EAE8E3]/50 mb-2">Email</label>
                        <input type="email" required className="w-full bg-[#131110] border border-white/10 px-4 py-3 text-[#EAE8E3] focus:outline-none focus:border-[#A38D75] transition-colors rounded-sm" />
                      </div>
                      <div>
                        <label className="block text-xs tracking-widest uppercase text-[#EAE8E3]/50 mb-2">Phone</label>
                        <input type="tel" required className="w-full bg-[#131110] border border-white/10 px-4 py-3 text-[#EAE8E3] focus:outline-none focus:border-[#A38D75] transition-colors rounded-sm" />
                      </div>
                      <div>
                        <label className="block text-xs tracking-widest uppercase text-[#EAE8E3]/50 mb-2">Date</label>
                        <input type="date" required className="w-full bg-[#131110] border border-white/10 px-4 py-3 text-[#EAE8E3] focus:outline-none focus:border-[#A38D75] transition-colors rounded-sm" />
                      </div>
                      <div>
                        <label className="block text-xs tracking-widest uppercase text-[#EAE8E3]/50 mb-2">Time</label>
                        <select required className="w-full bg-[#131110] border border-white/10 px-4 py-3 text-[#EAE8E3] focus:outline-none focus:border-[#A38D75] transition-colors rounded-sm appearance-none">
                          <option value="">Select time...</option>
                          <option value="17:00">5:00 PM</option>
                          <option value="18:00">6:00 PM</option>
                          <option value="19:00">7:00 PM</option>
                          <option value="20:00">8:00 PM</option>
                          <option value="21:00">9:00 PM</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs tracking-widest uppercase text-[#EAE8E3]/50 mb-2">Guests</label>
                        <select required className="w-full bg-[#131110] border border-white/10 px-4 py-3 text-[#EAE8E3] focus:outline-none focus:border-[#A38D75] transition-colors rounded-sm appearance-none">
                          <option value="1">1 Person</option>
                          <option value="2">2 People</option>
                          <option value="3">3 People</option>
                          <option value="4">4 People</option>
                          <option value="5">5 People</option>
                          <option value="6">6+ People</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs tracking-widest uppercase text-[#EAE8E3]/50 mb-2">Special Request</label>
                      <textarea rows={2} className="w-full bg-[#131110] border border-white/10 px-4 py-3 text-[#EAE8E3] focus:outline-none focus:border-[#A38D75] transition-colors rounded-sm resize-none"></textarea>
                    </div>
                    <button 
                      type="submit"
                      disabled={reservationStatus === "submitting"}
                      className="w-full text-xs font-semibold tracking-[0.15em] uppercase bg-[#A38D75] text-[#0E0D0C] px-8 py-4 hover:bg-white transition-colors mt-4 disabled:opacity-50"
                    >
                      {reservationStatus === "submitting" ? "Processing..." : "Request Reservation"}
                    </button>
                  </form>
              )}
            </div>

            {/* Visit Info */}
            <div id="visit" className="bg-[#131110] p-8 md:p-12 border border-white/5 rounded-sm flex flex-col">
              <h3 className="text-xs tracking-[0.2em] uppercase text-[#A38D75] mb-8">Location & Hours</h3>
              
              <div className="w-full h-48 mb-8 overflow-hidden rounded-sm grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3354.3413809633633!2d-79.93322138481545!3d32.77656608097125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88fe7a10738a0bc9%3A0xc39f835b0d0c3ebc!2s45%20King%20St%2C%20Charleston%2C%20SC%2029401!5e0!3m2!1sen!2sus!4v1684860475850!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ember and Oak Location"
                ></iframe>
              </div>

              <div className="space-y-8 flex-1">
                <div className="flex gap-4">
                  <MapPin className="text-[#A38D75] shrink-0" size={20} />
                  <div>
                    <h4 className="font-serif text-lg mb-1">Ember & Oak Kitchen</h4>
                    <p className="text-[#EAE8E3]/60 font-light text-sm">45 King Street<br/>Charleston, SC 29401</p>
                    <a href="https://maps.google.com/?q=45+King+Street,+Charleston,+SC+29401" target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-xs tracking-widest uppercase text-[#A38D75] hover:text-white transition-colors border-b border-[#A38D75]/30 pb-0.5">
                      Get Directions
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone className="text-[#A38D75] shrink-0" size={20} />
                  <div>
                    <p className="text-[#EAE8E3]/60 font-light text-sm mt-1">(843) 555-0188</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Clock className="text-[#A38D75] shrink-0" size={20} />
                  <div>
                    <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm font-light">
                      <span className="text-[#EAE8E3]/60">Mon – Thu</span>
                      <span className="text-[#EAE8E3]">5:00 PM – 10:00 PM</span>
                      
                      <span className="text-[#EAE8E3]/60">Fri – Sat</span>
                      <span className="text-[#EAE8E3]">5:00 PM – 11:00 PM</span>
                      
                      <span className="text-[#EAE8E3]/60">Sunday</span>
                      <span className="text-[#EAE8E3]">4:00 PM – 9:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src={imagePath("/images/ember-oak/footer-cta.jpg")} alt="Atmospheric Table" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif tracking-tight mb-10">Your table is waiting.</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="#reservations" className="w-full sm:w-auto text-xs font-semibold tracking-[0.15em] uppercase bg-[#A38D75] text-[#0E0D0C] px-8 py-4 hover:bg-white transition-colors text-center">
              Reserve a Table
            </Link>
            <Link href="#menu" className="w-full sm:w-auto text-xs font-semibold tracking-[0.15em] uppercase border border-white/20 px-8 py-4 hover:border-white transition-colors text-center">
              Explore the Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A0909] pt-20 pb-10 px-6 border-t border-white/5">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-serif tracking-widest uppercase mb-4">Ember & Oak<br/>Kitchen</h2>
              <p className="text-[#EAE8E3]/40 text-sm font-light">Charleston, South Carolina</p>
            </div>
            
            <div>
              <h4 className="text-xs tracking-widest uppercase text-[#EAE8E3]/30 mb-6">Explore</h4>
              <ul className="space-y-4">
                <li><Link href="#menu" className="text-sm font-light text-[#EAE8E3]/70 hover:text-white transition-colors">Menu</Link></li>
                <li><Link href="#story" className="text-sm font-light text-[#EAE8E3]/70 hover:text-white transition-colors">Our Story</Link></li>
                <li><Link href="#private-dining" className="text-sm font-light text-[#EAE8E3]/70 hover:text-white transition-colors">Private Dining</Link></li>
                <li><Link href="#visit" className="text-sm font-light text-[#EAE8E3]/70 hover:text-white transition-colors">Visit</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xs tracking-widest uppercase text-[#EAE8E3]/30 mb-6">Connect</h4>
              <ul className="space-y-4">
                <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-sm font-light text-[#EAE8E3]/70 hover:text-white transition-colors">Instagram</a></li>
                <li><Link href="#visit" className="text-sm font-light text-[#EAE8E3]/70 hover:text-white transition-colors">Contact</Link></li>
                <li><Link href="#reservations" className="text-sm font-light text-[#EAE8E3]/70 hover:text-white transition-colors">Reservations</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 gap-4">
            <p className="text-xs text-[#EAE8E3]/30 font-light">© {new Date().getFullYear()} Ember & Oak Kitchen. Concept Project.</p>
            <div className="flex gap-6">
              <Link href="#top" className="text-xs text-[#EAE8E3]/30 hover:text-white transition-colors">Privacy</Link>
              <Link href="#top" className="text-xs text-[#EAE8E3]/30 hover:text-white transition-colors">Terms</Link>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}