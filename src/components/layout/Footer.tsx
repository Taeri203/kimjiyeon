import Link from "next/link";
import { siteConfig, navItems } from "@/data/site";

export function Footer() {
  return <footer className="border-t border-[#E5E7EB] bg-[#082A5A] pb-24 pt-12 text-white md:pb-12"><div className="container-page grid gap-8 lg:grid-cols-[1fr_1.4fr]"><div><p className="text-sm font-bold text-[#FFD84D]">{siteConfig.party} · {siteConfig.electionName}</p><h2 className="mt-2 text-4xl font-black">{siteConfig.candidateName}</h2><p className="mt-3 text-blue-100">{siteConfig.slogan} · {siteConfig.area}</p><p className="mt-4 text-sm leading-7 text-blue-100">선거사무소: {siteConfig.officeAddress}<br />전화: {siteConfig.officePhone} · 이메일: {siteConfig.email}</p></div><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{navItems.map((item) => <Link key={item.href} href={item.href} className="rounded-2xl bg-white/8 px-4 py-3 text-sm font-black text-blue-50">{item.label}</Link>)}</div></div><div className="container-page mt-8 text-xs leading-6 text-blue-200">본 홈페이지는 김지연 후보의 정책, 후원회 안내, 유권자 의견 접수 안내를 제공하는 정적 웹사이트입니다.</div></footer>;
}
