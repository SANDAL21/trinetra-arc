import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-black border-t border-white/10 pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-20">
          
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
               <div className="w-6 h-6">
                 <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full stroke-brand-white stroke-2">
                    <path d="M3 12C3 12 7 5 12 5C17 5 21 12 21 12" strokeLinecap="round" />
                    <circle cx="12" cy="12" r="3" />
                    <path d="M12 18V21" strokeLinecap="round" />
                 </svg>
               </div>
              <span className="font-bold tracking-widest text-sm uppercase">Trinetra Arc</span>
            </Link>
            <p className="text-brand-gray text-sm max-w-xs leading-relaxed">
              Digital experiences, websites and intelligent solutions for ambitious businesses.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-6 uppercase tracking-wider text-sm">Navigation</h4>
            <ul className="space-y-4">
              <li><Link href="/work" className="text-brand-gray hover:text-white transition-colors text-sm">Work</Link></li>
              <li><Link href="/services" className="text-brand-gray hover:text-white transition-colors text-sm">Services</Link></li>
              <li><Link href="/about" className="text-brand-gray hover:text-white transition-colors text-sm">About</Link></li>
              <li><Link href="/contact" className="text-brand-gray hover:text-white transition-colors text-sm">Start a Project</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6 uppercase tracking-wider text-sm">Services</h4>
            <ul className="space-y-4">
              <li><Link href="/services#web-design" className="text-brand-gray hover:text-white transition-colors text-sm">Web Design</Link></li>
              <li><Link href="/services#web-development" className="text-brand-gray hover:text-white transition-colors text-sm">Web Development</Link></li>
              <li><Link href="/services#3d-interactive" className="text-brand-gray hover:text-white transition-colors text-sm">3D & Interactive</Link></li>
              <li><Link href="/services#ai-automation" className="text-brand-gray hover:text-white transition-colors text-sm">AI & Automation</Link></li>
              <li><Link href="/services#seo-growth" className="text-brand-gray hover:text-white transition-colors text-sm">SEO & Growth</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6 uppercase tracking-wider text-sm">Contact</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/contact" className="text-brand-gray hover:text-brand-accent transition-colors text-sm">
                  Get in touch
                </Link>
              </li>
            </ul>
          </div>
          
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-8 text-xs text-brand-gray">
          <p>&copy; {currentYear} Trinetra Arc. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
