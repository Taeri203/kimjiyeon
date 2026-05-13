"use client";

import { X } from "lucide-react";
import { ImageWithFallback } from "@/components/common/ImageWithFallback";
import type { GalleryItem } from "@/types";

export function ModalImageViewer({ item, onClose }: { item: GalleryItem; onClose: () => void }) {
  return <div className="fixed inset-0 z-[100] bg-[#082A5A]/80 p-4 backdrop-blur" role="dialog" aria-modal="true"><button type="button" className="absolute inset-0" onClick={onClose} aria-label="이미지 닫기 배경" /><div className="relative mx-auto flex h-full max-w-4xl flex-col justify-center"><button type="button" onClick={onClose} className="ml-auto mb-3 rounded-full bg-white p-2 text-[#082A5A]" aria-label="이미지 닫기"><X className="h-6 w-6" /></button><div className="rounded-[2rem] bg-white p-3"><ImageWithFallback src={item.src} alt={item.alt} preset="modal" withDefaultBg={false} /><div className="p-4"><h3 className="text-xl font-black text-[#082A5A]">{item.title}</h3><p className="mt-1 text-sm text-[#667085]">{item.description}</p></div></div></div></div>;
}
