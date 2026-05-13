import { siteConfig } from "@/data/site";
import { ImageWithFallback } from "@/components/common/ImageWithFallback";

export function ProfileCard() {
  return <aside className="surface-panel overflow-hidden rounded-[2rem]"><div className="relative bg-[radial-gradient(circle_at_70%_18%,rgba(229,57,53,.18),transparent_22%),linear-gradient(145deg,#FFFFFF,#EAF4FF)] p-4"><ImageWithFallback src={siteConfig.images.profile} alt="대구시의원 후보 김지연 공식 프로필 사진" className="aspect-[4/5] rounded-[1.5rem] bg-transparent" imgClassName="object-contain object-bottom drop-shadow-[0_20px_28px_rgba(8,42,90,.22)]" sizes="(min-width: 1024px) 420px, 100vw" preset="cutout" withDefaultBg={false} /></div><div className="p-6"><p className="text-sm font-black text-[#004EA2]">{siteConfig.party} · {siteConfig.electionName}</p><h3 className="mt-2 text-4xl font-black text-[#082A5A]">{siteConfig.candidateName}</h3><p className="mt-3 leading-7 text-[#667085]">정책과 예산을 알고, 북구의 미래를 설계하겠습니다.</p></div></aside>;
}
