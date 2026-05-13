import Link from "next/link";
import { ArrowRight, Building2, HeartPulse, MapPinned } from "lucide-react";
import { ImageWithFallback } from "@/components/common/ImageWithFallback";
import { siteConfig } from "@/data/site";

const keywords = ["의료치유특구", "빈틈없는 돌봄", "다시 뛰는 골목", "낡은 곳은 새롭게", "부족한 곳은 제대로"];

export function HeroSection() {
  return (
    <section className="campaign-gradient relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-70" aria-hidden>
        <svg className="hero-orbit absolute right-0 top-10 h-[440px] w-[720px] text-[#004EA2]" viewBox="0 0 720 440" fill="none">
          <path className="hero-dash" d="M42 320C140 250 230 344 330 248C440 140 534 244 686 70" stroke="currentColor" strokeWidth="2" strokeDasharray="10 12" opacity=".18" />
          <path className="hero-dash-alt" d="M110 80C198 146 292 88 380 150C466 212 548 168 652 250" stroke="currentColor" strokeWidth="2" strokeDasharray="8 10" opacity=".14" />
        </svg>
      </div>
      <div className="container-page grid items-center gap-6 py-6 lg:min-h-[calc(100vh-80px)] lg:grid-cols-[.95fr_1.05fr] lg:gap-8 lg:py-14">
        <div className="hero-copy relative z-10 order-2 lg:order-1">
          <span className="inline-flex items-center rounded-full bg-[#004EA2] px-3 py-1 text-xs font-black text-white shadow-lg shadow-[#004EA2]/20 md:text-sm">
            {siteConfig.party} · 대구시의원 후보 · 북구 제4선거구
          </span>
          <h1 className="mt-4 text-[2.55rem] font-black leading-[1.08] tracking-tight text-[#082A5A] md:mt-5 md:text-6xl lg:text-7xl">
            <span className="block text-keep">{siteConfig.slogan}</span>
            <span className="mt-1 block text-[4rem] leading-none text-[#004EA2] md:mt-2 md:text-[7rem]">김지연</span>
          </h1>
          <p className="mt-3 text-xl font-black text-[#E53935] md:mt-4 md:text-3xl">{siteConfig.mainVision}</p>
          <p className="mt-4 max-w-2xl text-base leading-7 text-[#344054] md:text-lg md:leading-8">
            태전2동·구암동·국우동, 의료와 치유, 돌봄과 골목경제, 정주환경을 다시 설계하겠습니다.
          </p>
          <div className="mt-6 flex flex-wrap gap-2 md:mt-7 md:gap-3">
            <Link href="/medical-healing" className="btn-base btn-red px-4 py-3 text-sm md:px-6 md:py-4 md:text-base">의료치유특구 보기<HeartPulse className="h-4 w-4 md:h-5 md:w-5" /></Link>
            <Link href="/pledges" className="btn-base btn-primary px-4 py-3 text-sm md:px-6 md:py-4 md:text-base">핵심 공약 보기<ArrowRight className="h-4 w-4 md:h-5 md:w-5" /></Link>
            <Link href="/map" className="btn-base btn-white px-4 py-3 text-sm md:px-6 md:py-4 md:text-base">공약지도 보기<MapPinned className="h-4 w-4 md:h-5 md:w-5" /></Link>
            <Link href="/donation" className="btn-base btn-yellow px-4 py-3 text-sm md:px-6 md:py-4 md:text-base">후원회 안내</Link>
          </div>
          <div className="mt-5 flex flex-wrap gap-2 md:mt-7">
            {keywords.map((keyword) => <span key={keyword} className="rounded-full border border-[#B9D8FF] bg-white px-3 py-1.5 text-xs font-black text-[#004EA2] md:px-4 md:py-2 md:text-sm">{keyword}</span>)}
          </div>
          <div className="mt-6 grid grid-cols-3 gap-2 md:mt-8 md:gap-3">
            {[
              ["국회", "19·20대 보좌진"],
              ["북구", "제8대 구의원"],
              ["예산", "정책 흐름 이해"],
            ].map(([value, label]) => (
              <div key={value} className="rounded-2xl border border-[#D7E4FF] bg-white/86 p-3 shadow-sm md:p-4">
                <p className="text-xl font-black text-[#004EA2] md:text-2xl">{value}</p>
                <p className="mt-1 text-[11px] font-bold leading-4 text-[#667085] md:text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-visual relative z-10 order-1 mx-auto w-full max-w-[min(100%,390px)] md:max-w-[620px] lg:order-2">
          <div className="absolute -inset-4 rounded-[2.5rem] bg-[#004EA2]/12 blur-3xl md:-inset-8 md:rounded-[3.2rem]" aria-hidden />
          <div className="relative overflow-hidden rounded-[2rem] border border-[#D7E4FF] bg-white/82 p-2.5 shadow-2xl backdrop-blur md:rounded-[2.75rem] md:p-4">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_18%,rgba(229,57,53,.16),transparent_20%),radial-gradient(circle_at_24%_76%,rgba(255,216,77,.34),transparent_30%),linear-gradient(145deg,#FFFFFF_0%,#EAF4FF_60%,#F8FBFF_100%)]" aria-hidden />
            <div className="absolute left-4 top-4 z-20 flex flex-wrap gap-2 md:left-6 md:top-6">
              <span className="inline-flex items-center gap-1 rounded-full bg-[#FFD84D] px-3 py-1 text-xs font-black text-[#082A5A] md:text-sm"><Building2 className="h-3.5 w-3.5 md:h-4 md:w-4" />태전2·구암·국우</span>
            </div>
            <ImageWithFallback
              src={siteConfig.images.profile}
              alt="대구시의원 후보 김지연 공식 프로필 사진"
              className="relative z-10 h-[390px] rounded-[1.75rem] bg-transparent sm:h-[430px] md:h-[680px] md:rounded-[2.25rem]"
              imgClassName="object-contain object-bottom drop-shadow-[0_24px_32px_rgba(8,42,90,0.22)]"
              sizes="(min-width: 1024px) 560px, 100vw"
              preset="cutout"
              withDefaultBg={false}
              priority
            />
            <div className="absolute inset-x-3 bottom-3 z-20 rounded-[1.25rem] border border-white/35 bg-white/92 p-3 shadow-xl backdrop-blur md:inset-x-4 md:bottom-4 md:rounded-[1.5rem] md:p-4">
              <p className="text-xs font-black text-[#E53935] md:text-sm">{siteConfig.heroTitle}</p>
              <p className="mt-1 text-sm font-black text-[#082A5A] md:text-lg">{siteConfig.heroSubtitle}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
