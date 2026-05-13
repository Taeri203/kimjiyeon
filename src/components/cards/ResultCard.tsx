import type { ResultGroup } from "@/types";
import { StatCard } from "@/components/cards/StatCard";

export function ResultCard({ group }: { group: ResultGroup }) {
  return <article className="rounded-[2rem] border border-[#E5E7EB] bg-white p-6 shadow-sm"><h3 className="text-2xl font-black text-[#082A5A]">{group.category}</h3><p className="mt-3 leading-7 text-[#667085]">{group.description}</p>{group.stats ? <div className="mt-5 grid gap-3 md:grid-cols-3">{group.stats.map((stat) => <StatCard key={stat.label} {...stat} />)}</div> : null}<ul className="mt-5 grid gap-2 md:grid-cols-2">{group.items.map((item) => <li key={item} className="rounded-2xl bg-[#F8FAFC] px-4 py-3 text-sm font-bold leading-6 text-[#344054]">- {item}</li>)}</ul></article>;
}
