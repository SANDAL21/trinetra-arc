"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLightBg, setIsLightBg] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const observerRef = useRef<IntersectionObserver | null>(null);

  // ── Scroll depth ──────────────────────────────────────────────────────────
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ── Light-section detection ───────────────────────────────────────────────
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Disconnect previous observer
    observerRef.current?.disconnect();

    // /about page has a white background — schedule state update outside effect body
    const pageIsLight = pathname === "/about";
    const t0 = setTimeout(() => {
      setIsLightBg(pageIsLight);
    }, 0);

    if (pageIsLight) return () => clearTimeout(t0);

    // For other pages: reset to dark, then attach observer for light sections
    const t = setTimeout(() => {
      setIsLightBg(false);

      const targets = document.querySelectorAll<HTMLElement>(
        "[data-theme='light'], .light-section"
      );
      if (!targets.length) return;

      const obs = new IntersectionObserver(
        (entries) => {
          setIsLightBg(entries.some((e) => e.isIntersecting));
        },
        { rootMargin: "0px 0px -90% 0px", threshold: 0 }
      );

      targets.forEach((el) => obs.observe(el));
      observerRef.current = obs;
    }, 100);

    return () => {
      clearTimeout(t0);
      clearTimeout(t);
      observerRef.current?.disconnect();
    };
  }, [pathname]);

  // ── Close mobile menu on route change ────────────────────────────────────
  const closeMobileMenu = useCallback(() => setIsMobileMenuOpen(false), []);
  useEffect(() => {
    const t = setTimeout(closeMobileMenu, 0);
    return () => clearTimeout(t);
  }, [pathname, closeMobileMenu]);

  const navLinks = [
    { name: "Work", href: "/work" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
  ];

  // ── Derived style tokens ──────────────────────────────────────────────────
  const headerBg = isScrolled
    ? isLightBg
      ? "bg-white/95 backdrop-blur-md border-b border-black/10 shadow-sm"
      : "bg-brand-black/85 backdrop-blur-md border-b border-white/5"
    : isLightBg
    ? "bg-white/80 backdrop-blur-sm"
    : "bg-transparent";

  const logoColor = isLightBg ? "text-brand-black" : "text-brand-white";
  const navLinkBase = isLightBg
    ? "text-brand-charcoal/70 hover:text-brand-black"
    : "text-brand-gray hover:text-brand-white";
  const ctaClass = isLightBg
    ? "bg-brand-black text-brand-white hover:bg-brand-accent hover:text-white"
    : "bg-brand-white text-brand-black hover:bg-brand-accent hover:text-white";
  const mobileToggleColor = isLightBg ? "text-brand-black" : "text-brand-white";

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        headerBg,
        isScrolled ? "py-4" : "py-6"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className={cn(
            "relative z-50 flex items-center gap-2 group transition-colors duration-300",
            logoColor
          )}
        >
          <div className="w-6 h-6 flex flex-col justify-between items-center group-hover:text-brand-accent transition-colors">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full stroke-current stroke-2">
              <path d="M3 12C3 12 7 5 12 5C17 5 21 12 21 12" strokeLinecap="round" />
              <circle cx="12" cy="12" r="3" />
              <path d="M12 18V21" strokeLinecap="round" />
            </svg>
          </div>
          <span className="font-bold tracking-widest text-sm uppercase">Trinetra Arc</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors duration-300",
                  navLinkBase,
                  (pathname === link.href || pathname.startsWith(link.href + "/"))
                    ? isLightBg ? "!text-brand-black font-semibold" : "!text-brand-white font-semibold"
                    : ""
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <Link
            href="/contact"
            className={cn(
              "px-5 py-2.5 text-sm font-semibold rounded-full transition-all duration-300",
              ctaClass
            )}
          >
            Start a Project
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className={cn("md:hidden relative z-50 transition-colors duration-300", mobileToggleColor)}
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav — always dark */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-brand-black flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-2xl font-bold tracking-wide text-brand-white hover:text-brand-accent transition-colors"
                onClick={closeMobileMenu}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-4 px-8 py-4 bg-brand-accent text-white text-lg font-semibold rounded-full hover:bg-brand-accent-light transition-colors"
              onClick={closeMobileMenu}
            >
              Start a Project
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
