"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { projects } from "@/data/projects";
import { NorthlinePreview } from "@/components/projects/NorthlinePreview";
import { EmberOakPreview } from "@/components/projects/EmberOakPreview";
import { ApexAutoHausPreview } from "@/components/projects/ApexAutoHausPreview";

// Only show the first 2 featured projects on the homepage
const featuredProjects = projects.slice(0, 2);

function ProjectPreview({ project }: { project: (typeof projects)[0] }) {
  if (project.id === "01") {
    return (
      <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-black/20 backdrop-blur-sm border border-white/5 m-12 rounded-sm shadow-2xl overflow-hidden">
        <div className="w-8 h-8 bg-[#D97736] flex items-center justify-center font-bold text-white tracking-tighter mb-4 shadow-lg">S</div>
        <h4 className="text-2xl md:text-4xl font-bold tracking-tight mb-2">Summit Roofing Co.</h4>
        <p className="text-[#FAF9F6]/60 font-mono text-xs uppercase tracking-widest">Austin, Texas</p>
      </div>
    );
  }
  if (project.id === "02") return <NorthlinePreview containerClass="m-6 md:m-12" />;
  if (project.id === "03") return <EmberOakPreview containerClass="m-6 md:m-12" />;
  if (project.id === "04") return <ApexAutoHausPreview containerClass="m-6 md:m-12" />;
  return (
    <div className="w-24 h-24 border border-white/10 rounded-full flex items-center justify-center backdrop-blur-sm z-10">
      <span className="text-white/40 font-mono tracking-widest">{project.id}</span>
    </div>
  );
}

export function FeaturedWork() {
  return (
    <section className="py-24 md:py-32 bg-brand-black text-brand-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-sm font-semibold tracking-widest uppercase text-brand-accent mb-4">Featured Work</h2>
            <p className="text-3xl md:text-4xl font-light text-brand-gray max-w-2xl">
              Digital experiences designed around the businesses behind them.
            </p>
          </div>
          <Link
            href="/work"
            className="flex-shrink-0 inline-flex items-center gap-2 text-sm font-semibold text-brand-white hover:text-brand-accent transition-colors group"
          >
            View All Work
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="flex flex-col gap-20">
          {featuredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="group cursor-pointer"
            >
              <Link href={`/work/${project.id}`} className="block">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  {/* Image */}
                  <div className="lg:col-span-8 overflow-hidden rounded-sm aspect-[4/3] md:aspect-[16/9] relative bg-brand-charcoal">
                    <div className={`w-full h-full bg-gradient-to-br ${project.gradientFrom} ${project.gradientTo} transition-transform duration-700 ease-out group-hover:scale-105 flex items-center justify-center opacity-80 group-hover:opacity-100`}>
                      {project.isConcept && (
                        <span className="absolute top-4 left-4 bg-brand-black/50 backdrop-blur-md border border-white/10 px-3 py-1 text-xs font-mono tracking-widest uppercase text-brand-white rounded-full z-10">
                          Concept Project
                        </span>
                      )}
                      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />
                      <ProjectPreview project={project} />
                    </div>
                  </div>
                  {/* Details */}
                  <div className="lg:col-span-4 flex flex-col justify-center">
                    <span className="text-brand-gray text-sm mb-4 font-mono">{project.id} — {project.client}</span>
                    <h3 className="text-3xl md:text-4xl font-semibold mb-6 group-hover:text-brand-accent transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-brand-gray text-sm tracking-wide uppercase mb-6">{project.category}</p>
                    <p className="text-brand-gray text-base leading-relaxed mb-8 font-light">{project.shortDescription}</p>
                    <div className="flex items-center gap-2 text-sm font-semibold text-brand-white">
                      <span>View Project</span>
                      <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 pt-12 border-t border-white/10 text-center">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-brand-white text-sm font-semibold rounded-full hover:bg-white/5 hover:border-brand-white transition-all duration-300"
          >
            See All Projects
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
