import type { District } from "@/types";

export function DistrictCard({ district }: { district: District }) {
  return <article className="motion-card rounded-[2rem] border border-[#E5E7EB] bg-white p-6 shadow-sm"><p className="text-sm font-black text-[#004EA2]">{district.name}</p><h3 className="mt-2 text-2xl font-black text-[#082A5A]">{district.title}</h3><p className="mt-3 leading-7 text-[#667085]">{district.summary}</p><ul className="mt-5 grid gap-2">{district.pledges.map((item) => <li key={item} className="rounded-2xl bg-[#F8FAFC] px-4 py-3 text-sm font-bold leading-6 text-[#344054]">- {item}</li>)}</ul></article>;
}
