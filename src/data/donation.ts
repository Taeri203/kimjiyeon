import { siteConfig } from "@/data/site";

export const donationInfo = {
  name: siteConfig.donationName,
  account: `${siteConfig.donationBank} ${siteConfig.donationAccount}`,
  holder: siteConfig.donationHolder,
  contact: siteConfig.donationContact,
  receiptUrl: siteConfig.donationReceiptUrl,
};

export const donationGuides = [
  "개인 최대 연간 200만 원까지 후원 가능",
  "10만 원까지 전액 세액공제 가능",
  "10만 원 초과 시 관련 기준에 따라 15~25% 세액공제 가능",
  "법인, 단체, 공무원, 외국인은 후원이 제한될 수 있음",
  "후원금 영수증 발급을 위해 필요한 정보를 확인할 수 있음",
];

export const donationFaqs = [
  { question: "후원은 어디로 하나요?", answer: "IM뱅크(대구은행) 505-10-267160-2, 김지연후원회로 후원하실 수 있습니다." },
  { question: "후원 한도는 어떻게 되나요?", answer: "개인 최대 연간 200만 원까지 후원할 수 있으며, 법인·단체·공무원·외국인은 후원이 제한될 수 있습니다." },
  { question: "세액공제는 어떻게 되나요?", answer: "10만 원까지 전액 세액공제, 10만 원 초과 시 관련 기준에 따라 15~25% 세액공제가 적용될 수 있습니다." },
  { question: "영수증은 어떻게 발급받나요?", answer: "후원 및 영수증 발급 문의는 010-4944-5233 또는 영수증 신청 링크를 이용해 주세요." },
];
