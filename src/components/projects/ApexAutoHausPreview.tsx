import { imagePath } from "@/lib/imagePath";
import Image from "next/image";

interface ApexAutoHausPreviewProps {
  containerClass?: string;
}

export function ApexAutoHausPreview({ containerClass = "m-6 md:m-12" }: ApexAutoHausPreviewProps) {
  return (
    <div
      className={`absolute inset-0 bg-[#0A0A0A] ${containerClass} overflow-hidden text-[#E8E6E0] z-10 flex flex-col group-hover:scale-[1.02] transition-transform duration-700 pointer-events-none border border-white/5`}
    >
      {/* Mini Header */}
      <div className="flex justify-between items-center px-4 md:px-6 py-3 border-b border-white/[0.07] bg-black/40 backdrop-blur-md z-20">
        <div className="flex flex-col leading-none">
          <span className="font-bold tracking-[0.22em] uppercase text-[8px] md:text-[10px] text-[#E8E6E0]">APEX</span>
          <span className="font-light tracking-[0.3em] uppercase text-[6px] md:text-[8px] text-[#E8E6E0]/40">Auto Haus</span>
        </div>
        <div className="text-[7px] md:text-[9px] font-bold tracking-[0.2em] uppercase bg-[#C0A46B] text-[#0A0A0A] px-2 py-1">
          Book Service
        </div>
      </div>

      {/* Hero preview */}
      <div className="flex-1 relative overflow-hidden">
        <Image src={imagePath("/images/apex-auto-haus/hero.jpg")}
          alt="Apex Auto Haus Preview"
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 50vw, 40vw"
        />
        {/* Gradient for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/60 via-transparent to-transparent" />

        {/* Mini copy */}
        <div className="absolute bottom-4 left-4 right-4">
          <p className="text-[6px] md:text-[8px] font-semibold tracking-[0.25em] uppercase text-[#C0A46B] mb-1">Scottsdale, AZ</p>
          <h4 className="text-sm md:text-xl lg:text-2xl font-light tracking-tight text-[#E8E6E0] leading-tight">Precision for<br />Every Drive.</h4>
        </div>

        {/* Floating spec card */}
        <div className="absolute bottom-4 right-3 bg-white/[0.06] backdrop-blur-md border border-white/10 px-2 md:px-3 py-1.5 md:py-2 hidden md:block">
          <p className="text-[6px] md:text-[8px] font-semibold tracking-widest uppercase text-[#C0A46B]">Apex Auto Haus</p>
          <p className="text-[5px] md:text-[7px] text-white/40 tracking-wider">Premium Detail Studio</p>
        </div>
      </div>
    </div>
  );
}
