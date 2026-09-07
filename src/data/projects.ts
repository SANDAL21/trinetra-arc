export interface Project {
  id: string;
  title: string;
  category: string;
  client: string;
  shortDescription: string;
  services: string[];
  gradientFrom: string; // Used for high-quality temporary visual placeholders
  gradientTo: string;
  overview: string;
  challenge: string;
  strategy: string;
  solution?: string;
  result?: string;
  isConcept: boolean;
  liveDemoUrl?: string;
}

export const projects: Project[] = [
  {
    id: "01",
    client: "Summit Roofing Co.",
    title: "Building trust through digital.",
    category: "Roofing / Home Services",
    shortDescription: "A digital experience designed to build trust and generate qualified leads for a premium construction firm.",
    services: ["Website Design", "Website Development", "Local SEO", "Conversion Optimization", "Responsive Mobile Design"],
    gradientFrom: "from-neutral-800",
    gradientTo: "to-[#D97736]",
    overview: "Summit Roofing Co. is a fictional premium roofing company serving homeowners in Austin, Texas. This concept project explores how a high-end construction company can elevate their digital presence to match the quality of their physical builds.",
    challenge: "Many construction firms rely on outdated websites that fail to communicate reliability, craftsmanship, and scale. Summit Roofing needed to stand out in a competitive local market where trust and quick response times are paramount.",
    strategy: "We focused on a clean, architectural visual language that emphasizes trust and professional workmanship. By combining warm construction-inspired accents with a solid charcoal foundation, we designed an approachable yet premium interface.",
    solution: "We engineered a conversion-optimized platform featuring clear service presentations, a streamlined 'Free Estimate' flow, and localized SEO architecture to capture high-intent Austin traffic.",
    result: "The new digital presence delivers stronger local positioning, clearer service presentations, easier quote requests, and an improved mobile experience, successfully communicating trust and reliability to prospective homeowners.",
    isConcept: true,
    liveDemoUrl: "/demos/summit-roofing",
  },
  {
    id: "02",
    client: "Northline Dental Studio",
    title: "Modern dentistry. Personal attention.",
    category: "Healthcare / Professional Services",
    shortDescription: "A calm, sophisticated digital experience designed to build patient trust and simplify the appointment journey.",
    services: ["Website Design", "Website Development", "Patient Experience Design", "Responsive UI"],
    gradientFrom: "from-[#FCFBF8]",
    gradientTo: "to-[#5C7C76]",
    overview: "Northline Dental Studio is a fictional premium dental practice serving patients in Austin, Texas. This concept project illustrates how a modern healthcare provider can elevate their digital presence to feel welcoming, professional, and patient-centered.",
    challenge: "Many dental practices rely on clinical, intimidating websites with generic medical templates that fail to communicate a warm, personal approach to patient care.",
    strategy: "We focused on a clean, bright, and calm aesthetic that uses generous whitespace, elegant typography, and authentic photography. The goal was to remove anxiety and make the practice feel accessible and premium.",
    solution: "We built a seamless, conversion-optimized platform featuring clear service presentations, a streamlined 'Request an Appointment' flow, and a thoughtful team section to build immediate trust.",
    result: "The new digital presence delivers clearer service communication, stronger trust positioning, an easier appointment journey, and a more welcoming patient experience across all devices.",
    isConcept: true,
    liveDemoUrl: "/demos/northline-dental",
  },
  {
    id: "03",
    client: "Ember & Oak Kitchen",
    title: "Seasonal cooking. Charleston soul.",
    category: "Restaurant / Hospitality",
    shortDescription: "A cinematic digital experience designed to capture the atmosphere, personality and hospitality of a modern Charleston restaurant.",
    services: ["Website Design", "Website Development", "Hospitality UI", "Menu Architecture", "Frontend Reservations"],
    gradientFrom: "from-[#2A2624]",
    gradientTo: "to-[#111111]",
    overview: "Ember & Oak Kitchen is a fictional premium restaurant located in Charleston, South Carolina. This concept project demonstrates how an independent culinary destination can communicate atmosphere, warmth, and culinary focus through a cinematic web presence.",
    challenge: "Many restaurant websites prioritize utilitarian information over atmosphere, using generic templates that fail to capture the actual dining experience, the warmth of the room, or the philosophy behind the kitchen.",
    strategy: "We built the digital experience around sensory cues—deep charcoal tones, muted copper, elegant editorial typography, and immersive culinary photography. The goal was to evoke the feeling of stepping into an intimate evening service.",
    solution: "We designed a refined platform featuring an elegant scroll-revealing menu, a cinematic 'From the Fire' storytelling section, and a frictionless frontend reservation flow that prioritizes hospitality from the very first click.",
    result: "The new digital presence delivers a highly atmospheric brand identity, a sophisticated menu presentation, and an intuitive booking experience that successfully communicates premium hospitality to prospective diners.",
    isConcept: true,
    liveDemoUrl: "/demos/ember-oak-kitchen",
  },
  {
    id: "04",
    client: "Apex Auto Haus",
    title: "Precision for every drive.",
    category: "Automotive / Premium Detailing",
    shortDescription: "A cinematic, dark-mode automotive experience built to communicate precision, luxury, and craftsmanship for a premium Scottsdale detailing studio.",
    services: ["Website Design", "Website Development", "Automotive UI", "Booking Experience", "Motion Design"],
    gradientFrom: "from-[#0A0A0A]",
    gradientTo: "to-[#1A1612]",
    overview: "Apex Auto Haus is a fictional premium automotive detailing and protection studio based in Scottsdale, Arizona. This concept project demonstrates how an independent automotive specialist can build a digital presence that matches the quality and precision of their physical work.",
    challenge: "Most independent detailing studios use generic template websites that fail to communicate the premium nature of their services, the technical skill of their specialists, or the caliber of their clientele.",
    strategy: "We anchored the design in a dark, cinematic visual language — near-black surfaces, restrained gold accents, and high-quality automotive photography that communicates craftsmanship without shouting. Every section was designed to feel like entering a different space in a premium showroom.",
    solution: "We built an immersive single-page experience featuring a parallax hero, an interactive vehicle showcase, a step-by-step process section, and a fully functional frontend booking system — all without any backend.",
    result: "The new digital presence positions Apex Auto Haus as a top-tier automotive studio, using visual depth, motion, and premium photography to communicate precision, performance, and trust.",
    isConcept: true,
    liveDemoUrl: "/demos/apex-auto-haus",
  }
];
