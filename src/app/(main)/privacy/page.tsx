import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Trinetra Arc",
};

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-24 bg-brand-white text-brand-black min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        <Link href="/" className="inline-flex items-center gap-2 text-brand-charcoal hover:text-brand-black transition-colors mb-12 text-sm font-medium">
          <ArrowLeft size={16} />
          Back to Home
        </Link>
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Privacy Policy</h1>
          <div className="text-lg text-brand-charcoal/80 font-light leading-relaxed">
            <p className="mb-6">Last updated: September 2026</p>
            <p className="mb-6">At Trinetra ARC, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.</p>
            
            <h2 className="text-2xl font-semibold text-brand-black mt-12 mb-4 tracking-tight">1. Information We Collect</h2>
            <p className="mb-6">We may collect information about you in a variety of ways. The information we may collect on the Site includes personal data, such as your name, email address, telephone number, and any other information that you voluntarily give to us when you choose to participate in various activities related to the Site, such as submitting a project inquiry.</p>
            
            <h2 className="text-2xl font-semibold text-brand-black mt-12 mb-4 tracking-tight">2. How We Use Your Information</h2>
            <p className="mb-6">Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to respond to your inquiries, deliver services you have requested, and improve our website performance.</p>
            
            <h2 className="text-2xl font-semibold text-brand-black mt-12 mb-4 tracking-tight">3. Contact Us</h2>
            <p className="mb-6">If you have questions or comments about this Privacy Policy, please contact us at:</p>
            <p className="font-medium text-brand-black">hello@trinetra-arc.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
