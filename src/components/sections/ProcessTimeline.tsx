export function ProcessTimeline({ items }: { items: string[] }) {
  return <div className="grid gap-3 md:grid-cols-3">{items.map((item, index) => <div key={item} className="rounded-2xl border border-[#D7E4FF] bg-white p-5 shadow-sm"><p className="text-sm font-black text-[#004EA2]">0{index + 1}</p><p className="mt-2 font-black text-[#082A5A]">{item}</p></div>)}</div>;
}
