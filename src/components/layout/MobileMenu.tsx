"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { navItems, siteConfig } from "@/data/site";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => { const frame = window.requestAnimationFrame(() => setMounted(true)); return () => window.cancelAnimationFrame(frame); }, []);
  useEffect(() => { if (!open) return; const prev = document.body.style.overflow; document.body.style.overflow = "hidden"; return () => { document.body.style.overflow = prev; }; }, [open]);
  const panel = open ? <div className="fixed inset-0 z-[100] bg-[#082A5A]/58 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label="모바일 메뉴"><button type="button" className="absolute inset-0 cursor-default" onClick={() => setOpen(false)} aria-label="모바일 메뉴 닫기 배경" /><div className="absolute right-0 top-0 flex h-[100dvh] w-[min(88vw,360px)] flex-col overflow-hidden rounded-l-[2rem] bg-white shadow-[0_30px_80px_rgba(2,8,23,.38)]"><div className="flex shrink-0 items-start justify-between gap-4 bg-[#082A5A] p-5 text-white"><div><p className="text-xs font-black text-[#FFD84D]">MENU</p><p className="mt-1 text-2xl font-black">{siteConfig.candidateName}</p><p className="mt-1 text-sm font-bold text-blue-100">{siteConfig.slogan}</p></div><button type="button" onClick={() => setOpen(false)} className="rounded-full bg-white/12 p-2 text-white" aria-label="모바일 메뉴 닫기"><X className="h-5 w-5" /></button></div><nav className="grid flex-1 content-start gap-2 overflow-y-auto p-4" aria-label="모바일 주요 메뉴">{navItems.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-2xl border border-[#E5E7EB] bg-[#F8FAFC] px-4 py-4 text-sm font-black text-[#082A5A] transition hover:border-[#B9D8FF] hover:bg-[#EAF4FF]">{item.label}</Link>)}</nav><div className="grid shrink-0 grid-cols-2 gap-2 border-t border-[#E5E7EB] p-4"><Link href="/voice" onClick={() => setOpen(false)} className="rounded-full bg-[#004EA2] px-4 py-3 text-center text-sm font-black text-white">의견 남기기</Link><Link href="/donation" onClick={() => setOpen(false)} className="rounded-full bg-[#FFD84D] px-4 py-3 text-center text-sm font-black text-[#082A5A]">후원 안내</Link></div></div></div> : null;
  return <><div className="ml-auto xl:hidden"><button type="button" onClick={() => setOpen(true)} className="inline-flex items-center gap-2 rounded-full bg-[#082A5A] px-3.5 py-2.5 text-sm font-black text-white shadow-lg shadow-blue-950/20" aria-label="모바일 메뉴 열기"><Menu className="h-5 w-5" />메뉴</button></div>{mounted ? createPortal(panel, document.body) : null}</>;
}
