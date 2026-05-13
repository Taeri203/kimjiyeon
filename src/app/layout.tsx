import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileBottomCTA } from "@/components/layout/MobileBottomCTA";
import { defaultSeo, siteConfig } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL("https://김지연.kr"),
  title: defaultSeo.title,
  description: defaultSeo.description,
  openGraph: {
    title: defaultSeo.title,
    description: defaultSeo.description,
    siteName: siteConfig.siteName,
    images: [siteConfig.images.signboard],
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko" data-scroll-behavior="smooth">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileBottomCTA />
      </body>
    </html>
  );
}
