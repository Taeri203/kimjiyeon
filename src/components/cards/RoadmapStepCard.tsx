import type { MedicalStep } from "@/types";

export function RoadmapStepCard({ step }: { step: MedicalStep }) {
  return <article className="motion-card h-full rounded-[2rem] border border-[#D7E4FF] bg-white p-6 shadow-sm"><p className="text-sm font-black text-[#E53935]">{step.step}</p><h3 className="mt-2 text-2xl font-black text-[#082A5A]">{step.title}</h3><ul className="mt-5 space-y-2 text-sm font-bold leading-6 text-[#344054]">{step.items.map((item) => <li key={item}>- {item}</li>)}</ul></article>;
}
