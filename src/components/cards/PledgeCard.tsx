import type { Pledge } from "@/types";
import { cn } from "@/lib/utils";

const toneMap: Record<Pledge["tone"], string> = { medical: "border-[#E53935]/25 bg-[#FFF7F7]", care: "border-[#B9D8FF] bg-[#F5FAFF]", market: "border-[#FFD84D]/60 bg-[#FFFDF0]", housing: "border-[#D7E4FF] bg-white", education: "border-[#B9D8FF] bg-white", green: "border-[#A7D8C7] bg-[#F4FBF8]" };
export function PledgeCard({ pledge }: { pledge: Pledge }) {
  return <article className={cn("motion-card rounded-[2rem] border p-6 shadow-sm", toneMap[pledge.tone])}><div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between"><div><p className="text-sm font-black text-[#004EA2]">{pledge.category}</p><h3 className="mt-2 text-2xl font-black text-[#082A5A] md:text-3xl">{pledge.title}</h3></div><span className="rounded-full bg-[#082A5A] px-4 py-2 text-sm font-black text-white">{pledge.id.toUpperCase()}</span></div><p className="mt-4 rounded-2xl bg-white/78 p-4 font-bold leading-7 text-[#344054]">{pledge.summary}</p><ul className="mt-5 grid gap-2 md:grid-cols-2">{pledge.points.map((point) => <li key={point} className="rounded-2xl bg-white px-4 py-3 text-sm font-bold leading-6 text-[#344054]">- {point}</li>)}</ul></article>;
}
