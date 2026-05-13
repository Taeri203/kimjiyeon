import type { Metadata } from "next";
import { Container } from "@/components/common/Container";
import { SectionTitle } from "@/components/common/SectionTitle";
import { ResultCard } from "@/components/cards/ResultCard";
import { ResultsTimeline } from "@/components/sections/ResultsTimeline";
import { resultGroups } from "@/data/results";

export const metadata: Metadata = { title: "김지연이 만든 성과 | 김지연.kr" };
export default function ResultsPage() {
  return <><section className="campaign-gradient py-16"><Container><SectionTitle eyebrow="만든 성과" title="김지연이 만든 성과" description="지역현안은 말이 아니라 결과로 증명해야 합니다." /></Container></section><section className="py-16"><Container><div className="grid gap-6">{resultGroups.map((group) => <ResultCard key={group.category} group={group} />)}</div></Container></section><section className="bg-[#F8FAFC] py-16"><Container><SectionTitle eyebrow="타임라인" title="성과의 흐름" /><div className="mt-9"><ResultsTimeline /></div></Container></section></>;
}
