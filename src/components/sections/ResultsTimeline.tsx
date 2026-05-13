import { resultGroups } from "@/data/results";

export function ResultsTimeline() {
  return <div className="space-y-4">{resultGroups.flatMap((group) => group.items.slice(0, 4).map((item) => ({ group: group.category, item }))).map((row, index) => <div key={`${row.group}-${row.item}`} className="grid gap-3 rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-sm md:grid-cols-[96px_1fr]"><p className="text-sm font-black text-[#004EA2]">성과 {index + 1}</p><div><p className="text-xs font-black text-[#667085]">{row.group}</p><p className="mt-1 font-bold leading-7 text-[#344054]">{row.item}</p></div></div>)}</div>;
}
