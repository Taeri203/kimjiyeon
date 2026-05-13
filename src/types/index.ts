export type NavItem = { label: string; href: string };
export type Pledge = { id: string; category: string; title: string; summary: string; points: string[]; tone: "medical" | "care" | "market" | "housing" | "education" | "green" };
export type MedicalStep = { step: string; title: string; items: string[] };
export type District = { name: string; title: string; summary: string; pledges: string[] };
export type ResultGroup = { category: string; description: string; items: string[]; stats?: { value: string; label: string }[] };
export type MapCategory = "전체" | "의료치유" | "골목상권" | "정주환경" | "친수공간" | "교통기반" | "역사문화";
export type MapMarker = { title: string; category: Exclude<MapCategory, "전체">; area: string; issue: string; pledge: string; x: number; y: number };
export type GalleryItem = { title: string; description: string; src: string; alt: string; kind: "image" | "pdf"; href?: string };
