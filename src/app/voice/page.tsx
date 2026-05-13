import type { Metadata } from "next";
import { Container } from "@/components/common/Container";
import { SectionTitle } from "@/components/common/SectionTitle";
import { ImageWithFallback } from "@/components/common/ImageWithFallback";
import { VoiceForm } from "@/components/forms/VoiceForm";
import { voiceFaqs } from "@/data/faqs";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = { title: "유권자의 소리 | 김지연.kr" };
export default function VoicePage() {
  return <><section className="campaign-gradient py-16"><Container><SectionTitle eyebrow="유권자의 소리" title="태전2동·구암동·국우동의 의견을 남겨주세요" description="의료, 돌봄, 상권, 정주환경 의견을 공약과 현장점검으로 연결하겠습니다." /></Container></section><section className="py-16"><Container><div className="grid items-start gap-8 lg:grid-cols-[.95fr_1.05fr]"><div className="grid gap-6"><div className="rounded-[2rem] bg-gradient-to-br from-[#082A5A] to-[#004EA2] p-3 shadow-xl"><ImageWithFallback src={siteConfig.images.fieldCommunity} alt="현장에서 주민과 소통하는 김지연 후보" className="aspect-[4/3] rounded-[1.5rem]" imgClassName="object-contain object-center bg-white" sizes="(min-width:1024px) 520px, 100vw" preset="landscape" withDefaultBg={false} /></div><div><p className="text-sm font-black tracking-[0.18em] text-[#004EA2]">FIELD</p><h2 className="mt-3 text-3xl font-black text-[#082A5A] md:text-5xl">현장에서 듣겠습니다</h2><p className="mt-4 text-lg leading-8 text-[#667085]">작은 의견도 모이면 공약이 되고, 공약은 시의회의 질문과 예산으로 이어집니다.</p></div></div><VoiceForm /></div><div className="mt-9 grid gap-4 md:grid-cols-3">{voiceFaqs.map((faq) => <article key={faq.question} className="rounded-2xl bg-[#F8FAFC] p-5"><h3 className="font-black text-[#082A5A]">{faq.question}</h3><p className="mt-2 text-sm leading-6 text-[#667085]">{faq.answer}</p></article>)}</div></Container></section></>;
}
