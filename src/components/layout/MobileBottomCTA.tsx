import Link from "next/link";
import { BookOpenCheck, HeartHandshake, MapPinned, Phone, Stethoscope } from "lucide-react";
import { siteConfig } from "@/data/site";

const items = [
  { label: "공약보기", href: "/pledges", icon: BookOpenCheck },
  { label: "의료특구", href: "/medical-healing", icon: Stethoscope },
  { label: "공약지도", href: "/map", icon: MapPinned },
  { label: "후원하기", href: "/donation", icon: HeartHandshake },
  { label: "전화문의", href: `tel:${siteConfig.donationContact.replaceAll("-", "")}`, icon: Phone },
];
export function MobileBottomCTA() { return <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-[#D7E4FF] bg-white/96 px-2 pb-2 pt-1.5 shadow-2xl backdrop-blur md:hidden" aria-label="하단 메뉴"><div className="grid grid-cols-5 gap-1">{items.map((item, index) => { const Icon = item.icon; return <Link key={item.href} href={item.href} className={`flex flex-col items-center gap-0.5 rounded-2xl px-1 py-1.5 text-[10px] font-black ${index === 3 ? "bg-[#FFD84D] text-[#082A5A]" : "text-[#082A5A]"}`}><Icon className="h-4 w-4" />{item.label}</Link>; })}</div></nav>; }
