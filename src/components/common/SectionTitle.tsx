import { cn } from "@/lib/utils";

export function SectionTitle({ eyebrow, title, description, align = "left", className }: { eyebrow?: string; title: string; description?: string; align?: "left" | "center"; className?: string }) {
  return (
    <div className={cn(align === "center" && "mx-auto text-center", align === "center" ? "max-w-3xl" : "max-w-4xl", className)}>
      {eyebrow ? <p className="text-sm font-black tracking-[0.18em] text-[#004EA2]">{eyebrow}</p> : null}
      <h2 className="mt-3 text-3xl font-black tracking-tight text-[#082A5A] md:text-5xl text-keep">{title}</h2>
      {description ? <p className="mt-4 text-lg leading-8 text-[#667085]">{description}</p> : null}
    </div>
  );
}
