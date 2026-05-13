import type { Metadata } from "next";
import { Container } from "@/components/common/Container";
import { SectionTitle } from "@/components/common/SectionTitle";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = { title: "개인정보처리방침 | 김지연.kr" };
const sections = [
  { title: "수집 항목", body: "이름, 연락처, 거주지, 관심 분야, 위치, 제목, 의견 내용, 답변 희망 여부를 수집할 수 있습니다." },
  { title: "수집 목적", body: "유권자 의견 확인, 현장 점검 참고, 답변 및 캠프 소통 목적으로 사용합니다." },
  { title: "보유 기간", body: "수집 목적 달성 시 지체 없이 파기하는 것을 원칙으로 합니다." },
  { title: "제3자 제공", body: "법령에 따른 경우를 제외하고 사전 동의 없이 제3자에게 제공하지 않습니다." },
  { title: "동의 거부권", body: "개인정보 수집 동의를 거부할 수 있으며, 이 경우 의견 접수 및 답변이 제한될 수 있습니다." },
  { title: "문의처", body: `김지연 선거사무소 · 전화 ${siteConfig.officePhone} · 이메일 ${siteConfig.email}` },
];
export default function PrivacyPage() {
  return <><section className="campaign-gradient py-16"><Container><SectionTitle eyebrow="개인정보처리방침" title="김지연 선거사무소 개인정보 안내" description="유권자 의견 접수와 답변을 위한 개인정보 처리 기준을 안내합니다." /></Container></section><section className="py-16"><Container><div className="grid gap-4">{sections.map((section) => <article key={section.title} className="rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-sm"><h2 className="text-xl font-black text-[#082A5A]">{section.title}</h2><p className="mt-3 leading-7 text-[#667085]">{section.body}</p></article>)}</div></Container></section></>;
}
