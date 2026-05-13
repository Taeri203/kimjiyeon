import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/common/Container";
import { SectionTitle } from "@/components/common/SectionTitle";
import { PledgeCard } from "@/components/cards/PledgeCard";
import { ImageWithFallback } from "@/components/common/ImageWithFallback";
import { CTASection } from "@/components/common/CTASection";
import { pledges } from "@/data/pledges";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = { title: "핵심 공약 | 김지연.kr" };
export default function PledgesPage() {
  return <><section className="campaign-gradient py-16"><Container><div className="grid gap-8 lg:grid-cols-[1fr_.72fr] lg:items-center"><SectionTitle eyebrow="핵심 공약" title="의료치유특구, 빈틈없는 돌봄, 다시 뛰는 골목" description="북구의 비전을 대구의 미래로 만들겠습니다." /><div className="relative overflow-hidden rounded-[2rem] border border-[#D7E4FF] bg-[radial-gradient(circle_at_72%_18%,rgba(229,57,53,.18),transparent_22%),radial-gradient(circle_at_18%_82%,rgba(255,216,77,.36),transparent_30%),linear-gradient(145deg,#082A5A_0%,#004EA2_58%,#EAF4FF_100%)] p-3 shadow-2xl shadow-[#082A5A]/18"><div className="pointer-events-none absolute inset-0 soft-grid opacity-50" aria-hidden /><div className="relative rounded-[1.5rem] bg-white/88 p-2 shadow-xl backdrop-blur"><ImageWithFallback src={siteConfig.images.signboard} alt="김지연 후보 핵심 공약 피켓 이미지" className="rounded-[1.25rem] bg-transparent" imgClassName="object-contain object-center" preset="landscape" withDefaultBg={false} sizes="(min-width:1024px) 420px, 100vw" /></div></div></div></Container></section><section className="py-16"><Container><div className="grid gap-6">{pledges.map((pledge) => <PledgeCard key={pledge.id} pledge={pledge} />)}</div><div className="mt-9 rounded-[2rem] bg-[#EAF4FF] p-6 text-center"><p className="text-xl font-black text-[#082A5A]">공약은 주민의 제보로 계속 업데이트됩니다.</p><div className="mt-5 flex flex-col justify-center gap-3 sm:flex-row"><Link href="/map" className="btn-base btn-primary">공약지도 보기</Link><Link href="/voice" className="btn-base btn-white">의견 남기기</Link></div></div></Container></section><CTASection title="지도에서 현안을 확인하세요" description="북구 제4선거구의 주요 현안과 공약을 지도형 카드로 정리했습니다." primaryHref="/map" primaryLabel="공약지도 보기" secondaryHref="/districts" secondaryLabel="동별 공약 보기" /></>;
}
