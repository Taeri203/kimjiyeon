import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTASection({ title, description, primaryHref, primaryLabel, secondaryHref, secondaryLabel }: { title: string; description: string; primaryHref: string; primaryLabel: string; secondaryHref?: string; secondaryLabel?: string }) {
  return <section className="blue-gradient py-16 text-white"><div className="container-page text-center"><h2 className="text-3xl font-black md:text-5xl">{title}</h2><p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-blue-50">{description}</p><div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row"><Link href={primaryHref} className="btn-base btn-yellow">{primaryLabel}<ArrowRight className="h-5 w-5" aria-hidden /></Link>{secondaryHref && secondaryLabel ? <Link href={secondaryHref} className="btn-base btn-white">{secondaryLabel}</Link> : null}</div></div></section>;
}
