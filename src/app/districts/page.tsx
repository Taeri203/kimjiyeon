import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/common/Container";
import { SectionTitle } from "@/components/common/SectionTitle";
import { DistrictCard } from "@/components/cards/DistrictCard";
import { districts } from "@/data/districts";

export const metadata: Metadata = { title: "동별 공약 | 김지연.kr" };
export default function DistrictsPage() {
  return <><section className="campaign-gradient py-16"><Container><SectionTitle eyebrow="동별 공약" title="태전2동·구암동·국우동, 생활권마다 필요한 변화는 다릅니다" description="의료, 교통, 주거, 역사문화, 돌봄 인프라를 동별 생활권에 맞춰 정리했습니다." /></Container></section><section className="py-16"><Container><div className="grid gap-6">{districts.map((district) => <DistrictCard key={district.name} district={district} />)}</div><div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row"><Link href="/map" className="btn-base btn-primary">공약지도 보기</Link><Link href="/voice" className="btn-base btn-white">유권자의 소리 남기기</Link></div></Container></section></>;
}
