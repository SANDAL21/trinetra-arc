import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Terms of Service | Trinetra Arc",
};

export default function TermsPage() {
  return (
    <div className="pt-32 pb-24 bg-brand-white text-brand-black min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        <Link href="/" className="inline-flex items-center gap-2 text-brand-charcoal hover:text-brand-black transition-colors mb-12 text-sm font-medium">
          <ArrowLeft size={16} />
          Back to Home
        </Link>
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Terms of Service</h1>
          <div className="text-lg text-brand-charcoal/80 font-light leading-relaxed">
            <p className="mb-6">Last updated: September 2026</p>
            <p className="mb-6">Please read these Terms of Service carefully before using the Trinetra ARC website.</p>
            
            <h2 className="text-2xl font-semibold text-brand-black mt-12 mb-4 tracking-tight">1. Acceptance of Terms</h2>
            <p className="mb-6">By accessing or using our website and services, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the service.</p>
            
            <h2 className="text-2xl font-semibold text-brand-black mt-12 mb-4 tracking-tight">2. Intellectual Property</h2>
            <p className="mb-6">The website and its original content, features, and functionality are owned by Trinetra ARC and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.</p>
            
            <h2 className="text-2xl font-semibold text-brand-black mt-12 mb-4 tracking-tight">3. Limitation of Liability</h2>
            <p className="mb-6">In no event shall Trinetra ARC, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the website.</p>
            
            <h2 className="text-2xl font-semibold text-brand-black mt-12 mb-4 tracking-tight">4. Contact Us</h2>
            <p className="mb-6">If you have any questions about these Terms, please contact us at:</p>
            <p className="font-medium text-brand-black">hello@trinetra-arc.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
