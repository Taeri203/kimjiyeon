export function StatCard({ value, label }: { value: string; label: string }) {
  return <div className="rounded-2xl border border-[#D7E4FF] bg-white p-5 shadow-sm"><p className="text-3xl font-black text-[#004EA2]">{value}</p><p className="mt-2 text-sm font-bold leading-6 text-[#667085]">{label}</p></div>;
}
