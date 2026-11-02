"use client";

import Link from "next/link";
import { useState } from "react";
import { navLinks, siteConfig } from "@/data/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-black/10 shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg text-[#1E7D32]">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#1E7D32] text-white">
            ⚽
          </span>
          {siteConfig.name}
        </Link>

        <nav className="hidden md:flex items-center gap-5 text-sm font-medium">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-[#1E7D32] transition-colors">
              {link.label}
            </Link>
          ))}
          <Link
            href="/pendaftaran"
            className="rounded-full bg-[#F5C518] text-[#1E7D32] font-semibold px-4 py-2 hover:brightness-95 transition"
          >
            Daftar Sekarang
          </Link>
        </nav>

        <button
          className="md:hidden text-2xl"
          aria-label="Buka menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <nav className="md:hidden flex flex-col gap-3 px-4 pb-4 text-sm font-medium">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Link
            href="/pendaftaran"
            onClick={() => setOpen(false)}
            className="rounded-full bg-[#F5C518] text-[#1E7D32] font-semibold px-4 py-2 text-center"
          >
            Daftar Sekarang
          </Link>
        </nav>
      )}
    </header>
  );
}
