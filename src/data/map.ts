import type { MapCategory, MapMarker } from "@/types";

export const mapCategories: MapCategory[] = ["전체", "의료치유", "골목상권", "정주환경", "친수공간", "교통기반", "역사문화"];

export const mapMarkers: MapMarker[] = [
  { title: "칠곡경북대병원", category: "의료치유", area: "구암동", issue: "북구 의료 기반", pledge: "양성자치료센터와 의료치유특구 추진", x: 52, y: 48 },
  { title: "양성자치료센터", category: "의료치유", area: "구암동", issue: "중증암 치료", pledge: "치료·재활·AI건강관리 연계", x: 59, y: 52 },
  { title: "구암동 고분군", category: "역사문화", area: "구암동", issue: "북구 역사자산", pledge: "생태역사문화축 조성", x: 47, y: 39 },
  { title: "팔거산성", category: "역사문화", area: "구암동", issue: "고대역사문화자원", pledge: "누리길·탐방길 활성화", x: 42, y: 49 },
  { title: "운암지", category: "친수공간", area: "구암동", issue: "산책·휴식공간", pledge: "산책로 재정비와 녹지축 연결", x: 56, y: 39 },
  { title: "팔거천", category: "친수공간", area: "태전2·구암", issue: "수변 보행로·자전거도로", pledge: "연결성 강화와 주민 친수공간 확대", x: 33, y: 70 },
  { title: "대구운전면허시험장", category: "교통기반", area: "태전2동", issue: "이전 재추진", pledge: "이전 가속화와 후적지 활용 공론장", x: 18, y: 78 },
  { title: "호국로 50사단 앞", category: "교통기반", area: "태전2동", issue: "지하차도", pledge: "지하차도 조기 착공", x: 27, y: 86 },
  { title: "도남공공주택지구", category: "정주환경", area: "국우동·도남권", issue: "입주민 생활인프라", pledge: "학교·도서관·의료시설 동반 확충", x: 80, y: 22 },
  { title: "농업기술원 이전지", category: "의료치유", area: "국우동·도남권", issue: "후적지 활용", pledge: "메디컬 콤플렉스 구축 및 치의학연구원 유치", x: 86, y: 35 },
  { title: "구암동 행정타운", category: "정주환경", area: "구암동", issue: "주민 열린공간", pledge: "공공체육시설과 주민공간 활용", x: 61, y: 64 },
  { title: "골목형 상점가 후보지", category: "골목상권", area: "태전2·구암·국우", issue: "상권 침체", pledge: "온누리상품권·노후환경·마케팅 지원", x: 37, y: 76 },
];
