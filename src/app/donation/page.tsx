import type { Metadata } from "next";
import { Container } from "@/components/common/Container";
import { SectionTitle } from "@/components/common/SectionTitle";
import { ImageWithFallback } from "@/components/common/ImageWithFallback";
import { DonationInfoCard } from "@/components/cards/DonationInfoCard";
import { SourceNoteBox } from "@/components/common/SourceNoteBox";
import { donationFaqs, donationGuides } from "@/data/donation";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = { title: "김지연 후원회 | 김지연.kr" };
export default function DonationPage() {
  return <><section className="campaign-gradient py-16"><Container><SectionTitle eyebrow="김지연 후원회" title="북구의 미래를 바꾸는 변화에 함께해 주세요" description="소중한 후원은 김지연후원회를 통해 투명하게 관리됩니다." /></Container></section><section className="py-16"><Container><div className="grid gap-8 lg:grid-cols-[.82fr_1.18fr] lg:items-start"><div className="rounded-[2rem] bg-[#EAF4FF] p-3 shadow-xl"><ImageWithFallback src={siteConfig.images.donationBanner} alt="김지연후원회 후원 안내 이미지" preset="poster" withDefaultBg={false} sizes="(min-width:1024px) 420px, 100vw" /></div><div><DonationInfoCard /><div className="mt-6 rounded-[2rem] border border-[#E5E7EB] bg-white p-6"><h3 className="text-xl font-black text-[#082A5A]">후원 안내</h3><ul className="mt-4 space-y-2 text-sm font-bold leading-6 text-[#344054]">{donationGuides.map((guide) => <li key={guide}>- {guide}</li>)}</ul></div><div className="mt-6"><SourceNoteBox>본 페이지의 후원 안내는 후원회 안내자료를 바탕으로 구성되었습니다. 후원 전 세부 자격과 한도는 후원회 또는 선거관리위원회 안내를 확인해 주세요.</SourceNoteBox></div></div></div><div className="mt-10 grid gap-4 md:grid-cols-2">{donationFaqs.map((faq) => <article key={faq.question} className="rounded-2xl bg-[#F8FAFC] p-5"><h3 className="font-black text-[#082A5A]">{faq.question}</h3><p className="mt-2 text-sm leading-6 text-[#667085]">{faq.answer}</p></article>)}</div></Container></section></>;
}
