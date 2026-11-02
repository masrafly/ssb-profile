import { cn } from "@/lib/utils";

export function Card({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-black/5 bg-white shadow-[0_2px_20px_-4px_rgba(0,0,0,0.08)] transition-all duration-300 hover:shadow-[0_12px_32px_-8px_rgba(15,93,48,0.25)] hover:-translate-y-1",
        className
      )}
    >
      {children}
    </div>
  );
}

export function Badge({
  className,
  children,
  variant = "gold",
}: {
  className?: string;
  children: React.ReactNode;
  variant?: "gold" | "green" | "outline";
}) {
  const variants = {
    gold: "bg-brand-gold/15 text-brand-green-dark border border-brand-gold/40",
    green: "bg-brand-green/10 text-brand-green border border-brand-green/30",
    outline: "bg-white/10 text-white border border-white/30",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold tracking-wide uppercase",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" ? "mx-auto text-center" : "text-left", className)}>
      {eyebrow && (
        <p className="text-sm font-bold uppercase tracking-widest text-brand-green">{eyebrow}</p>
      )}
      <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-brand-green-dark sm:text-4xl">
        {title}
      </h2>
      {description && <p className="mt-4 text-black/60 leading-relaxed">{description}</p>}
    </div>
  );
}
