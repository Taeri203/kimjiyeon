import { ImageWithFallback } from "@/components/common/ImageWithFallback";

export function CampaignImageBlock({ src, alt, title, description, reverse = false }: { src: string; alt: string; title: string; description: string; reverse?: boolean }) {
  return <div className={`grid items-center gap-8 lg:grid-cols-2 ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}><div className="rounded-[2rem] bg-gradient-to-br from-[#082A5A] to-[#004EA2] p-3 shadow-xl"><ImageWithFallback src={src} alt={alt} className="aspect-[4/3] rounded-[1.5rem]" imgClassName="object-contain object-center bg-white" sizes="(min-width:1024px) 520px, 100vw" preset="landscape" withDefaultBg={false} /></div><div><p className="text-sm font-black tracking-[0.18em] text-[#004EA2]">FIELD</p><h2 className="mt-3 text-3xl font-black text-[#082A5A] md:text-5xl">{title}</h2><p className="mt-4 text-lg leading-8 text-[#667085]">{description}</p></div></div>;
}
