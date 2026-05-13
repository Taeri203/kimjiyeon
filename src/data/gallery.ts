import type { GalleryItem } from "@/types";
import { siteConfig } from "@/data/site";

export const galleryItems: GalleryItem[] = [
  { title: "후보 프로필", description: "대구시의원 후보 김지연 공식 프로필 사진", src: siteConfig.images.profile, alt: "대구시의원 후보 김지연 공식 프로필 사진", kind: "image" },
  { title: "핵심 공약 피켓", description: "의료치유특구·빈틈없는 돌봄·다시 뛰는 골목을 담은 공약 이미지", src: siteConfig.images.signboard, alt: "김지연 후보 핵심 공약 피켓 이미지", kind: "image" },
  { title: "현장 소통", description: "현장에서 주민과 소통하는 김지연 후보", src: siteConfig.images.fieldCommunity, alt: "현장에서 주민과 소통하는 김지연 후보", kind: "image" },
  { title: "후원 안내", description: "김지연후원회 후원 안내 이미지", src: siteConfig.images.donationBanner, alt: "김지연후원회 후원 안내 이미지", kind: "image" },
  { title: "선거공보", description: "김지연 후보 책자형 선거공보 PDF", src: siteConfig.images.signboard, alt: "김지연 후보 선거공보 보기", kind: "pdf", href: siteConfig.brochure },
];
