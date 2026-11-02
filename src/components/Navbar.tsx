"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, ShieldCheck, X } from "lucide-react";
import { navLinks, siteConfig } from "@/data/site";
import { ButtonLink } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/90 backdrop-blur-lg shadow-[0_4px_20px_-8px_rgba(0,0,0,0.15)] border-b border-black/5"
          : "bg-white/60 backdrop-blur-sm border-b border-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2.5 font-display font-extrabold text-lg text-brand-green-dark">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-green to-brand-green-dark text-white shadow-md shadow-brand-green/30">
            <ShieldCheck size={20} strokeWidth={2.4} />
          </span>
          {siteConfig.name}
        </Link>

        <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-brand-ink/80">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative py-1 transition-colors hover:text-brand-green",
                  active && "text-brand-green"
                )}
              >
                {link.label}
                {active && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-brand-gold" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <ButtonLink href="/pendaftaran" size="sm">
            Daftar Sekarang
          </ButtonLink>
        </div>

        <button
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg text-brand-green-dark hover:bg-black/5"
          aria-label="Buka menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="lg:hidden flex flex-col gap-1 px-4 pb-4 text-sm font-semibold text-brand-ink/80 bg-white/95 backdrop-blur-lg border-t border-black/5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className={cn(
                "rounded-lg px-3 py-2.5 hover:bg-brand-green/5",
                pathname === link.href && "text-brand-green bg-brand-green/5"
              )}
            >
              {link.label}
            </Link>
          ))}
          <ButtonLink href="/pendaftaran" onClick={closeMenu} className="mt-2 w-full">
            Daftar Sekarang
          </ButtonLink>
        </nav>
      )}
    </header>
  );
}
