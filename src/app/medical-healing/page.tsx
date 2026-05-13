import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/common/Container";
import { SectionTitle } from "@/components/common/SectionTitle";
import { MedicalRoadmap } from "@/components/sections/MedicalRoadmap";
import { FeatureCard } from "@/components/cards/FeatureCard";
import { medicalReasons, patientChanges, economyEffects } from "@/data/medical";

export const metadata: Metadata = { title: "의료치유특구 | 김지연.kr" };
export default function MedicalHealingPage() {
  return <><section className="blue-gradient py-16 text-white"><Container><div className="max-w-4xl"><p className="text-sm font-black tracking-[0.18em] text-[#FFD84D]">MEDICAL HEALING SPECIAL ZONE</p><h1 className="mt-4 text-4xl font-black md:text-6xl">칠곡이 살아난다, 의료치유특구로</h1><p className="mt-5 text-2xl font-black text-blue-50">치료는 가깝게, 회복은 오래 머물게, 일자리는 지역에 남게.</p><p className="mt-5 text-lg leading-8 text-blue-50">칠곡경북대병원과 양성자치료센터를 중심으로 치료·재활·돌봄·의료관광·골목경제가 연결되는 북구형 의료치유특구를 추진하겠습니다.</p></div></Container></section><section className="py-16"><Container><SectionTitle eyebrow="왜 칠곡인가" title="이미 있는 자산을 미래산업으로 연결합니다" /><div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-5">{medicalReasons.map((reason, index) => <FeatureCard key={reason} title={`0${index + 1}`} description={reason} tone={index < 2 ? "red" : "blue"} />)}</div></Container></section><section className="bg-[#F8FAFC] py-16"><Container><SectionTitle eyebrow="로드맵" title="의료치유특구 3단계 실행 로드맵" /><div className="mt-9"><MedicalRoadmap /></div></Container></section><section className="py-16"><Container><div className="grid gap-8 lg:grid-cols-2"><div><SectionTitle eyebrow="환자와 가족" title="지역에서 치료받고 회복하는 의료환경" /><div className="mt-7 grid gap-3">{patientChanges.map((item) => <div key={item} className="rounded-2xl bg-[#F8FAFC] p-4 font-bold text-[#344054]">- {item}</div>)}</div></div><div><SectionTitle eyebrow="지역경제" title="치료와 체류가 골목경제로 이어지게" /><div className="mt-7 grid gap-3">{economyEffects.map((item) => <div key={item} className="rounded-2xl bg-[#FFF7D6] p-4 font-bold text-[#082A5A]">- {item}</div>)}</div></div></div><div className="mt-9 flex flex-col gap-3 sm:flex-row"><Link href="/voice" className="btn-base btn-red">의료치유특구 관련 의견 남기기</Link><Link href="/map" className="btn-base btn-white">공약지도에서 보기</Link></div></Container></section></>;
}
