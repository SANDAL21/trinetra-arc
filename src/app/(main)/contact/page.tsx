"use client";

import { motion } from "framer-motion";
import { FormEvent, useState } from "react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form submission handler placeholder
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // TODO: Connect this to an actual backend (e.g., Resend, Formspree, or custom API)
    console.log("Form submission triggered. Backend connection required.");
    
    // Simulate network request for UI feedback
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Form submission logic is ready. Please connect a backend service to process inquiries.");
    }, 1000);
  };

  return (
    <div className="pt-32 pb-24 bg-brand-black text-brand-white min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="sticky top-32"
            >
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-8">
                Let&apos;s build something better.
              </h1>
              <p className="text-xl text-brand-gray font-light leading-relaxed mb-12">
                Tell us what you&apos;re building, where you&apos;re stuck, or where you want to go. We&apos;ll figure out the next step together.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xs font-mono tracking-widest uppercase text-brand-gray mb-2">Email</h3>
                  <a href="mailto:hello@trinetra-arc.com" className="text-lg font-medium hover:text-brand-accent transition-colors">
                    hello@trinetra-arc.com
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              onSubmit={handleSubmit}
              className="space-y-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <input required type="text" id="name" name="name" className="w-full bg-brand-white/5 border border-white/10 rounded-sm px-4 py-3 focus:outline-none focus:border-brand-accent transition-colors" placeholder="Jane Doe" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium">Business / Company</label>
                  <input required type="text" id="company" name="company" className="w-full bg-brand-white/5 border border-white/10 rounded-sm px-4 py-3 focus:outline-none focus:border-brand-accent transition-colors" placeholder="Acme Corp" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <input required type="email" id="email" name="email" className="w-full bg-brand-white/5 border border-white/10 rounded-sm px-4 py-3 focus:outline-none focus:border-brand-accent transition-colors" placeholder="jane@example.com" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="website" className="text-sm font-medium">Website (optional)</label>
                  <input type="url" id="website" name="website" className="w-full bg-brand-white/5 border border-white/10 rounded-sm px-4 py-3 focus:outline-none focus:border-brand-accent transition-colors" placeholder="https://example.com" />
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-sm font-medium block">What do you need?</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {["New Website", "Website Redesign", "E-commerce", "3D / Interactive Experience", "AI / Automation", "SEO / Growth", "Other"].map((service) => (
                    <label key={service} className="flex items-center gap-3 p-4 border border-white/10 rounded-sm cursor-pointer hover:bg-brand-white/5 transition-colors">
                      <input type="checkbox" name="services" value={service} className="accent-brand-accent w-4 h-4" />
                      <span className="text-sm">{service}</span>
                    </label>
                  ))}
                </div>
              </div>



              <div className="space-y-2">
                <label htmlFor="details" className="text-sm font-medium">Project Details</label>
                <textarea required id="details" name="details" rows={5} className="w-full bg-brand-white/5 border border-white/10 rounded-sm px-4 py-3 focus:outline-none focus:border-brand-accent transition-colors resize-none" placeholder="Tell us more about your project goals..." />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full sm:w-auto px-10 py-4 bg-brand-white text-brand-black text-sm font-bold tracking-wide rounded-full hover:bg-brand-accent hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Processing..." : "Start the Conversation"}
              </button>

            </motion.form>
          </div>

        </div>
      </div>
    </div>
  );
}
