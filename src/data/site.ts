import type { NavItem } from "@/types";

export const siteConfig = {
  siteName: "김지연.kr",
  candidateName: "김지연",
  party: "더불어민주당",
  electionName: "대구광역시의회의원선거 북구 제4선거구 후보",
  area: "태전2동·구암동·국우동",
  slogan: "젊고 준비된, 일할 줄 아는 사람",
  mainVision: "북구의 비전이 대구의 미래가 됩니다",
  heroTitle: "칠곡이 살아난다, 의료치유특구로",
  heroSubtitle: "의료와 치유, 돌봄과 골목경제를 잇겠습니다",
  actionSlogan: "말이 아니라 행동으로 증명했습니다",
  officeAddress: "대구 북구 학정로 147, 1층",
  officePhone: "053-325-0603",
  email: "solarworld@naver.com",
  donationName: "김지연후원회",
  donationBank: "IM뱅크(대구은행)",
  donationAccount: "505-10-267160-2",
  donationHolder: "김지연후원회",
  donationContact: "010-4944-5233",
  donationReceiptUrl: "https://tinyurl.com/jiyeon-receipt",
  images: {
    profile: "/images/candidate/candidate-profile.jpg",
    signboard: "/images/banners/candidate-signboard.jpg",
    fieldCommunity: "/images/field/field-community.jpg",
    donationBanner: "/images/donation/donation-banner.jpg",
  },
  brochure: "/files/election-brochure.pdf",
};

export const navItems: NavItem[] = [
  { label: "김지연 소개", href: "/about" },
  { label: "핵심 공약", href: "/pledges" },
  { label: "의료치유특구", href: "/medical-healing" },
  { label: "동별 공약", href: "/districts" },
  { label: "공약지도", href: "/map" },
  { label: "만든 성과", href: "/results" },
  { label: "유권자의 소리", href: "/voice" },
  { label: "후원회", href: "/donation" },
];

export const defaultSeo = {
  title: "김지연.kr | 젊고 준비된, 일할 줄 아는 사람",
  description: "더불어민주당 김지연 대구시의원 북구 제4선거구 후보의 의료치유특구, 빈틈없는 돌봄, 다시 뛰는 골목, 태전2동·구암동·국우동 생활공약을 확인하세요.",
};
