"use client";

import { useState } from "react";
import Link from "next/link";
import { FileText } from "lucide-react";
import { ImageWithFallback } from "@/components/common/ImageWithFallback";
import { ModalImageViewer } from "@/components/common/ModalImageViewer";
import type { GalleryItem } from "@/types";

export function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const [selected, setSelected] = useState<GalleryItem | null>(null);
  return <><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{items.map((item) => <article key={item.title} className="rounded-[1.75rem] border border-[#E5E7EB] bg-white p-3 shadow-sm"><button type="button" onClick={() => item.kind === "image" ? setSelected(item) : undefined} className="block w-full text-left" aria-label={`${item.title} 크게 보기`}>{item.kind === "image" ? <ImageWithFallback src={item.src} alt={item.alt} preset="gallery" sizes="(min-width:1024px) 33vw, 100vw" /> : <div className="flex aspect-[4/3] items-center justify-center rounded-[1.75rem] bg-[#EAF4FF] text-[#004EA2]"><FileText className="h-16 w-16" aria-hidden /></div>}</button><div className="p-3"><h3 className="text-lg font-black text-[#082A5A]">{item.title}</h3><p className="mt-1 text-sm leading-6 text-[#667085]">{item.description}</p>{item.kind === "pdf" && item.href ? <Link href={item.href} className="btn-base btn-primary btn-small mt-4" target="_blank">선거공보 보기</Link> : null}</div></article>)}</div>{selected ? <ModalImageViewer item={selected} onClose={() => setSelected(null)} /> : null}</>;
}
