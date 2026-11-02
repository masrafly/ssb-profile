import { cn } from "@/lib/utils";
import Link from "next/link";
import type { ComponentProps } from "react";

type BaseProps = {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/70 disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<NonNullable<BaseProps["variant"]>, string> = {
  primary:
    "bg-brand-gold text-brand-green-dark shadow-lg shadow-brand-gold/30 hover:shadow-xl hover:shadow-brand-gold/40 hover:-translate-y-0.5 active:translate-y-0",
  secondary:
    "bg-brand-green text-white shadow-lg shadow-brand-green/30 hover:bg-brand-green-dark hover:-translate-y-0.5 active:translate-y-0",
  outline:
    "border-2 border-white/40 text-white hover:bg-white/10 backdrop-blur-sm",
  ghost: "text-brand-green hover:bg-brand-green/10",
};

const sizes: Record<NonNullable<BaseProps["size"]>, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: BaseProps & ComponentProps<"button">) {
  return (
    <button className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </button>
  );
}

export function ButtonLink({
  variant = "primary",
  size = "md",
  className,
  children,
  href,
  ...props
}: BaseProps & ComponentProps<typeof Link>) {
  return (
    <Link href={href} className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </Link>
  );
}
