import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/common/Container";
import { SectionTitle } from "@/components/common/SectionTitle";
import { ProfileCard } from "@/components/cards/ProfileCard";
import { FeatureCard } from "@/components/cards/FeatureCard";
import { CareerTimeline } from "@/components/sections/CareerTimeline";
import { CampaignImageBlock } from "@/components/sections/CampaignImageBlock";
import { profileKeywords, profileStory, proofPoints } from "@/data/profile";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = { title: "김지연 소개 | 김지연.kr" };
export default function AboutPage() {
  return <><section className="campaign-gradient py-16"><Container><div className="grid gap-8 lg:grid-cols-[1fr_.78fr] lg:items-center"><div><SectionTitle eyebrow="김지연 소개" title="젊고 준비된, 일할 줄 아는 사람" description="정책을 알고, 예산을 움직이고, 북구의 미래를 설계하겠습니다." /><div className="mt-7 space-y-5 text-lg leading-9 text-[#344054]">{profileStory.map((p) => <p key={p}>{p}</p>)}</div><div className="mt-7 flex flex-col gap-3 sm:flex-row"><Link href="/results" className="btn-base btn-primary">김지연이 만든 성과 보기</Link><Link href="/pledges" className="btn-base btn-white">핵심 공약 보기</Link></div></div><ProfileCard /></div></Container></section><section className="py-16"><Container><SectionTitle eyebrow="후보 키워드" title="북구의 미래를 설계할 준비" align="center" /><div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-5">{profileKeywords.map((item) => <FeatureCard key={item.title} {...item} />)}</div></Container></section><section className="bg-[#F8FAFC] py-16"><Container><SectionTitle eyebrow="경력" title="국회와 구의회를 경험한 후보" description="정책과 예산의 흐름을 아는 후보가 북구의 멈춘 사업을 움직이겠습니다." /><div className="mt-9"><CareerTimeline /></div></Container></section><section className="py-16"><Container><SectionTitle eyebrow="증명" title="말이 아니라 행동으로 증명했습니다" /><div className="mt-9 grid gap-5 md:grid-cols-3">{proofPoints.map((point) => <FeatureCard key={point} title="성과" description={point} tone="yellow" />)}</div></Container></section><section className="bg-[#F8FAFC] py-16"><Container><CampaignImageBlock src={siteConfig.images.fieldCommunity} alt="현장에서 주민과 소통하는 김지연 후보" title="현장에서 듣고 해결해왔습니다" description="북구의 변화는 현장의 문제를 정확히 듣고, 정책과 예산으로 연결하는 일에서 시작합니다." /></Container></section></>;
}
