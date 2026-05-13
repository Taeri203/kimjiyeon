import { cn } from "@/lib/utils";

export function FeatureCard({ title, description, tone = "blue" }: { title: string; description: string; tone?: "blue" | "red" | "yellow" | "green" }) {
  const toneMap = { blue: "bg-[#EAF4FF] text-[#004EA2]", red: "bg-[#FEECEC] text-[#E53935]", yellow: "bg-[#FFF7D6] text-[#082A5A]", green: "bg-[#E8F6F1] text-[#0F766E]" };
  return <article className="motion-card surface-panel h-full rounded-[1.5rem] p-6"><span className={cn("rounded-full px-3 py-1 text-sm font-black", toneMap[tone])}>{title}</span><p className="mt-5 text-base font-bold leading-7 text-[#344054]">{description}</p></article>;
}
