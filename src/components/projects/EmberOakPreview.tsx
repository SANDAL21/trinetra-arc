import { imagePath } from "@/lib/imagePath";
import Image from "next/image";

interface EmberOakPreviewProps {
  containerClass?: string;
}

export function EmberOakPreview({ containerClass = "m-6 md:m-12" }: EmberOakPreviewProps) {
  return (
    <div className={`absolute inset-0 bg-[#0E0D0C] ${containerClass} rounded-lg shadow-2xl overflow-hidden text-[#EAE8E3] z-10 flex flex-col group-hover:scale-[1.02] transition-transform duration-700 pointer-events-none border border-white/5`}>
      
      {/* Mini Header */}
      <div className="flex justify-between items-center px-4 md:px-8 py-4 border-b border-white/5 bg-[#0E0D0C]/80 backdrop-blur-md z-20">
        <div className="flex flex-col">
          <span className="font-serif tracking-[0.1em] uppercase text-[10px] md:text-[14px] text-[#EAE8E3]">Ember & Oak</span>
          <span className="font-light tracking-[0.2em] uppercase text-[6px] md:text-[8px] text-[#A38D75]">Kitchen</span>
        </div>
        <div className="text-[7px] md:text-[9px] font-semibold tracking-[0.2em] uppercase border border-[#A38D75]/40 px-2 py-1 md:px-3 md:py-1.5 rounded-sm text-[#A38D75]">
          Reserve
        </div>
      </div>
      
      {/* Mini Hero */}
      <div className="flex-1 relative flex flex-col items-center justify-center p-4 md:p-8 bg-[#0E0D0C] overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <Image src={imagePath("/images/ember-oak/hero.jpg")} alt="Ember & Oak Preview" fill className="object-cover" sizes="(max-width: 768px) 50vw, 40vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E0D0C] via-[#0E0D0C]/40 to-transparent"></div>
        </div>
        
        <div className="relative z-10 flex flex-col items-center text-center mt-12 md:mt-16">
          <h4 className="text-xl md:text-3xl lg:text-5xl font-serif tracking-tight text-[#EAE8E3] mb-3 leading-tight">Good fire.<br/>Good company.</h4>
          <p className="text-[8px] md:text-[11px] font-light tracking-widest uppercase text-[#A38D75] max-w-[250px]">Charleston, SC</p>
        </div>
      </div>
      
    </div>
  );
}
