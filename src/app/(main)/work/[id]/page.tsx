import { imagePath } from "@/lib/imagePath";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import Image from "next/image";
import { NorthlinePreview } from "@/components/projects/NorthlinePreview";
import { EmberOakPreview } from "@/components/projects/EmberOakPreview";
import { ApexAutoHausPreview } from "@/components/projects/ApexAutoHausPreview";

// Next.js 15 requires async params
export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.id === resolvedParams.id);

  if (!project) {
    notFound();
  }

  return (
    <article className="pt-32 pb-24 bg-brand-black min-h-screen text-brand-white">
      {/* Hero Header */}
      <header className="container mx-auto px-6 md:px-12 mb-16">
        <Link href="/work" className="inline-flex items-center gap-2 text-brand-gray hover:text-white transition-colors mb-12 text-sm font-medium">
          <ArrowLeft size={16} />
          Back to Work
        </Link>
        
        <div className="max-w-4xl">
          {project.isConcept && (
            <span className="inline-block bg-brand-white/10 text-brand-white text-xs font-mono tracking-widest uppercase px-3 py-1 rounded-full mb-6">
              Concept Project
            </span>
          )}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-8 md:gap-16 border-t border-white/10 pt-8 mt-8">
            <div>
              <h3 className="text-xs font-mono tracking-widest uppercase text-brand-gray mb-2">Client / Industry</h3>
              <p className="font-medium text-lg">{project.client}</p>
            </div>
            <div>
              <h3 className="text-xs font-mono tracking-widest uppercase text-brand-gray mb-2">Services</h3>
              <p className="font-medium text-lg">{project.services.join(", ")}</p>
            </div>
            {project.liveDemoUrl && (
              <div>
                <h3 className="text-xs font-mono tracking-widest uppercase text-brand-gray mb-2">Live Demo</h3>
                <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer" className="font-medium text-lg hover:text-brand-accent transition-colors inline-flex items-center gap-1">
                  View Site <ArrowRight size={16} />
                </a>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Main Hero Image */}
      <div className={`w-full h-[50vh] md:h-[70vh] relative bg-brand-charcoal overflow-hidden mb-24`}>
        <div className={`w-full h-full bg-gradient-to-br ${project.gradientFrom} ${project.gradientTo} flex items-center justify-center opacity-80`}>
           <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "32px 32px" }}></div>
           
           {project.id === "01" ? (
             <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-black/20 backdrop-blur-sm border border-white/5 mx-12 my-24 md:m-32 rounded-sm shadow-2xl overflow-hidden z-10">
               <div className="w-12 h-12 bg-[#D97736] flex items-center justify-center font-bold text-white tracking-tighter text-xl mb-6 shadow-lg">S</div>
               <h4 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">Summit Roofing Co.</h4>
               <p className="text-[#FAF9F6]/80 font-mono text-sm uppercase tracking-widest">Austin, Texas</p>
             </div>
           ) : project.id === "02" ? (
             <NorthlinePreview containerClass="mx-6 my-12 md:m-32" />
           ) : project.id === "03" ? (
             <EmberOakPreview containerClass="mx-6 my-12 md:m-32" />
           ) : project.id === "04" ? (
             <ApexAutoHausPreview containerClass="mx-6 my-12 md:m-32" />
           ) : (
             <div className="w-24 h-24 border border-white/10 rounded-full flex items-center justify-center backdrop-blur-sm z-10">
               <span className="text-white/40 font-mono tracking-widest">{project.id}</span>
             </div>
           )}
        </div>
      </div>

      {/* Content Sections */}
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 mb-24">
          <div className="md:col-span-4">
            <h2 className="text-2xl font-bold tracking-wide sticky top-32">Overview</h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-brand-gray text-xl font-light leading-relaxed mb-12">
              {project.overview}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 mb-24">
          <div className="md:col-span-4">
            <h2 className="text-2xl font-bold tracking-wide sticky top-32">The Challenge</h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-brand-gray text-xl font-light leading-relaxed">
              {project.challenge}
            </p>
          </div>
        </div>
        
        {/* Secondary Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
           {project.id === "01" ? (
             <>
               <div className="aspect-square relative bg-brand-charcoal overflow-hidden rounded-sm">
                 <Image src={imagePath("/images/summit-roofing/project1.jpg")} alt="Summit Roofing Project Detail" fill className="object-cover opacity-80" />
               </div>
               <div className="aspect-square relative bg-brand-charcoal overflow-hidden rounded-sm">
                 <Image src={imagePath("/images/summit-roofing/quality.jpg")} alt="Summit Roofing Workmanship" fill className="object-cover opacity-80" />
               </div>
             </>
           ) : project.id === "02" ? (
             <>
               <div className="aspect-square relative bg-brand-charcoal overflow-hidden rounded-2xl">
                 <Image src={imagePath("/images/northline-dental/hero.jpg")} alt="Northline Dental Clinic" fill className="object-cover opacity-90" />
               </div>
               <div className="aspect-square relative bg-brand-charcoal overflow-hidden rounded-2xl">
                 <Image src={imagePath("/images/northline-dental/philosophy.jpg")} alt="Northline Dental Philosophy" fill className="object-cover opacity-90" />
               </div>
             </>
           ) : project.id === "03" ? (
             <>
               <div className="aspect-square relative bg-[#0E0D0C] overflow-hidden rounded-sm border border-white/5">
                 <Image src={imagePath("/images/ember-oak/food-ribeye.jpg")} alt="Ember and Oak Culinary" fill className="object-cover opacity-90" />
               </div>
               <div className="aspect-square relative bg-[#0E0D0C] overflow-hidden rounded-sm border border-white/5">
                 <Image src={imagePath("/images/ember-oak/interior.jpg")} alt="Ember and Oak Interior" fill className="object-cover opacity-90" />
               </div>
             </>
           ) : project.id === "04" ? (
              <>
                <div className="aspect-square relative bg-[#0A0A0A] overflow-hidden rounded-sm border border-white/5">
                  <Image src={imagePath("/images/apex-auto-haus/showcase-porsche.jpg")} alt="Apex Auto Haus — Porsche 911 Detail" fill className="object-cover opacity-90" />
                </div>
                <div className="aspect-square relative bg-[#0A0A0A] overflow-hidden rounded-sm border border-white/5">
                  <Image src={imagePath("/images/apex-auto-haus/detail-work.jpg")} alt="Apex Auto Haus — Detailing Craft" fill className="object-cover opacity-90" />
                </div>
              </>
            ) : (
             <>
               <div className="aspect-square relative bg-brand-charcoal overflow-hidden rounded-sm">
                 <div className="w-full h-full bg-gradient-to-br from-neutral-900 to-black flex items-center justify-center opacity-60">
                   <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(45deg, #ffffff 25%, transparent 25%, transparent 75%, #ffffff 75%, #ffffff), linear-gradient(45deg, #ffffff 25%, transparent 25%, transparent 75%, #ffffff 75%, #ffffff)", backgroundSize: "20px 20px", backgroundPosition: "0 0, 10px 10px" }}></div>
                   <span className="text-white/20 text-xs font-mono tracking-widest uppercase z-10">Detail 01</span>
                 </div>
               </div>
               <div className="aspect-square relative bg-brand-charcoal overflow-hidden rounded-sm">
                 <div className="w-full h-full bg-gradient-to-br from-neutral-800 to-neutral-900 flex items-center justify-center opacity-60">
                   <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(45deg, #ffffff 25%, transparent 25%, transparent 75%, #ffffff 75%, #ffffff), linear-gradient(45deg, #ffffff 25%, transparent 25%, transparent 75%, #ffffff 75%, #ffffff)", backgroundSize: "20px 20px", backgroundPosition: "0 0, 10px 10px" }}></div>
                   <span className="text-white/20 text-xs font-mono tracking-widest uppercase z-10">Detail 02</span>
                 </div>
               </div>
             </>
           )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 mb-24">
          <div className="md:col-span-4">
            <h2 className="text-2xl font-bold tracking-wide sticky top-32">Strategy & Approach</h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-brand-gray text-xl font-light leading-relaxed">
              {project.strategy}
            </p>
          </div>
        </div>

        {project.solution && (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 mb-24">
            <div className="md:col-span-4">
              <h2 className="text-2xl font-bold tracking-wide sticky top-32">The Solution</h2>
            </div>
            <div className="md:col-span-8">
              <p className="text-brand-gray text-xl font-light leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>
        )}

        {project.result && (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 mb-32">
            <div className="md:col-span-4">
              <h2 className="text-2xl font-bold tracking-wide sticky top-32">The Result</h2>
            </div>
            <div className="md:col-span-8">
              <p className="text-brand-gray text-xl font-light leading-relaxed">
                {project.result}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Project CTA */}
      <div className="border-t border-white/10 pt-32 pb-16 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to build something similar?</h2>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-white text-brand-black text-sm font-semibold rounded-full hover:bg-brand-accent hover:text-white transition-all duration-300"
        >
          Start a Project
          <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  );
}

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}
