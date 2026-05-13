import { careers } from "@/data/profile";

export function CareerTimeline() {
  return <div className="grid gap-3 md:grid-cols-2">{careers.map((career, index) => <div key={career} className="rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-sm"><p className="text-sm font-black text-[#004EA2]">0{index + 1}</p><p className="mt-2 font-bold leading-7 text-[#344054]">{career}</p></div>)}</div>;
}
