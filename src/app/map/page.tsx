import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/common/Container";
import { SectionTitle } from "@/components/common/SectionTitle";
import { StaticMap } from "@/components/sections/StaticMap";

export const metadata: Metadata = { title: "북구 공약지도 | 김지연.kr" };
export default function MapPage() {
  return <><section className="campaign-gradient py-16"><Container><SectionTitle eyebrow="북구 공약지도" title="태전2동·구암동·국우동의 현안을 한눈에" description="외부 지도 API 없이 생활권 현안을 공약 단위로 확인할 수 있게 구성했습니다." /></Container></section><section className="py-16"><Container><StaticMap /><div className="mt-9 rounded-[2rem] bg-[#EAF4FF] p-6 text-center"><p className="text-xl font-black text-[#082A5A]">지도에 없는 북구의 문제도 남겨주세요.</p><Link href="/voice" className="btn-base btn-primary mt-5">유권자의 소리 남기기</Link></div></Container></section></>;
}
