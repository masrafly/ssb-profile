import Image from "next/image";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const heights = {
  sm: "min-h-[300px] sm:min-h-[340px]",
  md: "min-h-[360px] sm:min-h-[420px] lg:min-h-[460px]",
  lg: "min-h-[480px] sm:min-h-[580px] lg:min-h-[680px]",
};

export function PageHero({
  image,
  imageAlt = "",
  eyebrow,
  title,
  description,
  size = "md",
  align = "center",
  children,
}: {
  image: string;
  imageAlt?: string;
  eyebrow?: ReactNode;
  title: string;
  description?: string;
  size?: "sm" | "md" | "lg";
  align?: "center" | "left";
  children?: ReactNode;
}) {
  return (
    <section className={cn("relative flex items-center overflow-hidden text-white", heights[size])}>
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      {/* Dark gradient overlay so text stays readable over any photo */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-ink/85 via-brand-green-dark/70 to-brand-ink/90" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.07]" />

      <div
        className={cn(
          "relative z-10 mx-auto w-full max-w-4xl px-4 py-16 sm:py-20",
          align === "center" ? "text-center" : "text-left"
        )}
      >
        {eyebrow}
        <h1 className="font-display text-balance text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
          {title}
        </h1>
        {description && (
          <p
            className={cn(
              "mt-4 text-white/80 leading-relaxed text-sm sm:text-base",
              align === "center" && "max-w-2xl mx-auto"
            )}
          >
            {description}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
