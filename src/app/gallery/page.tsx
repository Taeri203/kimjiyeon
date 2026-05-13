import type { Metadata } from "next";
import { Container } from "@/components/common/Container";
import { SectionTitle } from "@/components/common/SectionTitle";
import { GalleryGrid } from "@/components/common/GalleryGrid";
import { galleryItems } from "@/data/gallery";

export const metadata: Metadata = { title: "홍보 이미지 | 김지연.kr" };
export default function GalleryPage() {
  return <><section className="campaign-gradient py-16"><Container><SectionTitle eyebrow="홍보 이미지" title="김지연 후보 자료 모아보기" description="제공된 실제 이미지와 선거공보를 웹에서 보기 좋게 정리했습니다." /></Container></section><section className="py-16"><Container><GalleryGrid items={galleryItems} /></Container></section></>;
}
