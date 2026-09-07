import { imagePath } from "@/lib/imagePath";
import Image from "next/image";

interface NorthlinePreviewProps {
  containerClass?: string;
}

export function NorthlinePreview({ containerClass = "m-6 md:m-12" }: NorthlinePreviewProps) {
  return (
    <div className={`absolute inset-0 bg-[#F8F7F3] ${containerClass} rounded-lg shadow-2xl overflow-hidden text-[#2C2E33] z-10 flex flex-col group-hover:scale-[1.02] transition-transform duration-700 pointer-events-none`}>
      
      {/* Mini Header */}
      <div className="flex justify-between items-center px-4 md:px-8 py-4 border-b border-[#2C2E33]/5 bg-white/50 backdrop-blur-md z-20">
        <div className="flex flex-col">
          <span className="font-semibold tracking-[0.15em] uppercase text-[9px] md:text-xs text-[#2C2E33]">Northline</span>
          <span className="font-light tracking-[0.2em] uppercase text-[7px] md:text-[9px] text-[#7D8A82]">Dental Studio</span>
        </div>
        <div className="text-[8px] md:text-[10px] font-semibold tracking-[0.15em] uppercase border-b border-[#2C2E33]/30 pb-0.5 text-[#2C2E33]">
          Book Appointment
        </div>
      </div>
      
      {/* Mini Hero */}
      <div className="flex-1 relative flex flex-col-reverse md:flex-row p-4 md:p-8 gap-4 md:gap-8 bg-[#F8F7F3]">
        <div className="flex-1 flex flex-col justify-center relative z-10">
          <h4 className="text-lg md:text-3xl lg:text-4xl font-light tracking-tight text-[#2C2E33] mb-2 leading-tight">Modern dentistry.<br/>Personal attention.</h4>
          <p className="text-[9px] md:text-sm font-light text-[#2C2E33]/60 max-w-[250px]">A healthier smile starts with a better experience.</p>
        </div>
        <div className="flex-[1.5] relative bg-[#EAE8E3] rounded-sm overflow-hidden shadow-inner flex items-center justify-center min-h-[120px] md:min-h-[160px]">
          <Image src={imagePath("/images/northline-dental/hero.jpg")} alt="Northline Preview" fill className="object-cover" sizes="(max-width: 768px) 50vw, 40vw" />
          <div className="absolute bottom-2 md:bottom-6 right-2 md:right-6 bg-white/80 backdrop-blur-md px-2 py-1 md:px-4 md:py-3 rounded-lg shadow-lg border border-white/60 flex items-center gap-1.5 md:gap-3">
            <span className="w-1 h-1 md:w-2 md:h-2 rounded-full bg-[#7D8A82]"></span>
            <span className="text-[5px] md:text-[8px] font-semibold tracking-[0.2em] uppercase">Accepting Patients</span>
          </div>
        </div>
      </div>
      
    </div>
  );
}
