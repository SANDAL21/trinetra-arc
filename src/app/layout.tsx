import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Trinetra Arc — Digital Experiences That Move Businesses Forward",
  description: "Trinetra Arc designs and builds high-performance websites, interactive experiences and digital solutions for ambitious businesses.",
  openGraph: {
    title: "Trinetra Arc — Digital Experiences That Move Businesses Forward",
    description: "Trinetra Arc designs and builds high-performance websites, interactive experiences and digital solutions for ambitious businesses.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased scroll-smooth`}>
      <body className="min-h-screen bg-brand-black text-brand-white flex flex-col selection:bg-brand-accent selection:text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
