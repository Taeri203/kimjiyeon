"use client";

import { useMemo, useState } from "react";
import { MarkerCard } from "@/components/cards/MarkerCard";
import { mapCategories, mapMarkers } from "@/data/map";
import type { MapCategory } from "@/types";
import { cn } from "@/lib/utils";

const colors: Record<string, string> = { 의료치유: "bg-[#E53935]", 골목상권: "bg-[#FFD84D]", 정주환경: "bg-[#0F766E]", 친수공간: "bg-[#0F766E]", 교통기반: "bg-[#082A5A]", 역사문화: "bg-[#8B5CF6]" };

export function StaticMap({ preview = false }: { preview?: boolean }) {
  void preview;
  const [category, setCategory] = useState<MapCategory>("전체");
  const [selected, setSelected] = useState(mapMarkers[0]);
  const markers = useMemo(() => category === "전체" ? mapMarkers : mapMarkers.filter((m) => m.category === category), [category]);
  const shown = markers;

  return (
    <div className="grid gap-6 lg:grid-cols-[1.05fr_.95fr]">
      <div className="surface-panel rounded-[2rem] p-5 md:p-7">
        <div className="mb-5 flex flex-wrap gap-2">
          {mapCategories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => {
                setCategory(item);
                const next = item === "전체" ? mapMarkers : mapMarkers.filter((m) => m.category === item);
                setSelected(next[0] || mapMarkers[0]);
              }}
              aria-pressed={category === item}
              className={cn("rounded-full border px-3 py-2 text-sm font-black", category === item ? "border-[#004EA2] bg-[#004EA2] text-white" : "border-[#E5E7EB] bg-white text-[#344054]")}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="relative aspect-[16/11] overflow-hidden rounded-[1.5rem] border border-[#D7E4FF] bg-[#F7FAFF] md:aspect-[16/10]">
          <svg viewBox="0 0 760 460" className="absolute inset-0 h-full w-full" role="img" aria-label="태전2동, 구암동, 국우동·도남권을 도형과 3호선 주황색 라인으로 표시한 북구 공약지도">
            <rect width="760" height="460" fill="#F7FAFF" />
            <circle cx="142" cy="384" r="132" fill="#0F766E" opacity=".10" />
            <circle cx="386" cy="236" r="154" fill="#E53935" opacity=".08" />
            <circle cx="624" cy="104" r="136" fill="#0072CE" opacity=".10" />

            <path d="M18 462C72 356 134 264 196 180C246 112 286 62 322 -16" stroke="#F28C28" strokeWidth="18" strokeLinecap="round" opacity=".22" />
            <path d="M18 462C72 356 134 264 196 180C246 112 286 62 322 -16" stroke="#F28C28" strokeWidth="4.5" strokeLinecap="round" opacity=".92" />

            <path d="M64 332C104 278 172 260 232 292C294 326 296 404 238 444C180 484 96 462 62 404C44 372 46 348 64 332Z" fill="#E8F6F1" stroke="#79C5A8" strokeWidth="3" />
            <path d="M292 174C356 128 464 138 526 198C590 260 552 352 466 382C374 414 276 366 250 284C234 232 252 198 292 174Z" fill="#FFF7D6" stroke="#E6C34F" strokeWidth="3" />
            <path d="M514 56C582 14 682 24 724 90C768 158 732 252 646 284C558 316 484 264 466 184C454 130 470 84 514 56Z" fill="#EAF4FF" stroke="#79B8EF" strokeWidth="3" />

            <g className="hidden md:block" fontWeight="900">
              <text x="148" y="380" textAnchor="middle" fontSize="22" fill="#082A5A">태전2동</text>
              <text x="394" y="270" textAnchor="middle" fontSize="22" fill="#082A5A">구암동</text>
              <text x="616" y="154" textAnchor="middle" fontSize="22" fill="#082A5A">국우동</text>
            </g>
            <g className="hidden md:block" fontWeight="800" opacity=".78">
              <text x="148" y="406" textAnchor="middle" fontSize="13" fill="#344054">교통·정주환경</text>
              <text x="394" y="296" textAnchor="middle" fontSize="13" fill="#344054">의료·역사문화</text>
              <text x="616" y="180" textAnchor="middle" fontSize="13" fill="#344054">도남·생활인프라</text>
            </g>
          </svg>

          {shown.map((marker) => (
            <button
              key={marker.title}
              type="button"
              onClick={() => setSelected(marker)}
              className="map-marker absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${marker.x}%`, top: `${marker.y}%` }}
              aria-label={`${marker.title} 공약 보기`}
              title={marker.title}
            >
              <span className={cn("flex h-7 w-7 items-center justify-center rounded-full border-4 shadow-lg md:h-8 md:w-8", selected.title === marker.title ? "scale-125 border-[#FFD84D] ring-4 ring-white/80" : "border-white", colors[marker.category], marker.category === "골목상권" ? "text-[#082A5A]" : "text-white")}>
                <span className="h-2 w-2 rounded-full bg-current" />
              </span>
            </button>
          ))}

          <div className="pointer-events-none absolute inset-x-3 bottom-3 grid grid-cols-3 gap-2 md:hidden">
            <span className="rounded-xl bg-white/86 px-2 py-1 text-center text-xs font-black text-[#082A5A]">태전2동</span>
            <span className="rounded-xl bg-white/86 px-2 py-1 text-center text-xs font-black text-[#082A5A]">구암동</span>
            <span className="rounded-xl bg-white/86 px-2 py-1 text-center text-xs font-black text-[#082A5A]">국우동</span>
          </div>
        </div>

        <div className="mt-4 rounded-2xl border border-[#D7E4FF] bg-white p-5">
          <p className="text-xs font-black text-[#004EA2]">{selected.category} · {selected.area}</p>
          <h3 className="mt-2 text-xl font-black text-[#082A5A]">{selected.title}</h3>
          <p className="mt-2 text-sm leading-6 text-[#667085]">{selected.issue}</p>
          <p className="mt-2 text-sm font-bold leading-6 text-[#344054]">{selected.pledge}</p>
        </div>
      </div>

      <div className="grid max-h-[620px] gap-3 overflow-auto pr-1">
        {shown.map((marker) => <MarkerCard key={marker.title} marker={marker} />)}
      </div>
    </div>
  );
}
