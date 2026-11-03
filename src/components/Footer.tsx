import Link from "next/link";
import { Camera, Mail, MapPin, Phone } from "lucide-react";
import { navLinks, siteConfig } from "@/data/site";
import { CurrentYear } from "@/components/ui/CurrentYear";

export default function Footer() {
  return (
    <footer className="relative mt-20 overflow-hidden bg-brand-green-dark text-white/90">
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />
      <div className="relative max-w-6xl mx-auto px-4 py-14 grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5 font-display font-extrabold text-lg text-white">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white text-brand-green-dark text-sm font-extrabold tracking-tight">
              MF
            </span>
            {siteConfig.name}
          </div>
          <p className="mt-3 text-sm text-white/60 leading-relaxed max-w-sm">{siteConfig.description}</p>
          <div className="mt-4 flex gap-3">
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-brand-gold hover:text-brand-green-dark transition-colors"
            >
              <Camera size={16} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display font-bold text-white mb-3 text-sm uppercase tracking-wide">Navigasi</h4>
          <ul className="space-y-2 text-sm text-white/60">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-brand-gold transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold text-white mb-3 text-sm uppercase tracking-wide">Kontak</h4>
          <ul className="space-y-2.5 text-sm text-white/60">
            <li className="flex gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0 text-brand-gold" />
              {siteConfig.address}
            </li>
            <li className="flex gap-2">
              <Phone size={16} className="shrink-0 text-brand-gold" />
              {siteConfig.phone}
            </li>
            <li className="flex gap-2">
              <Mail size={16} className="shrink-0 text-brand-gold" />
              {siteConfig.email}
            </li>
          </ul>
        </div>
      </div>
      <div className="relative border-t border-white/10 py-5 text-center text-xs text-white/40">
        © <CurrentYear /> {siteConfig.name}. Semua hak cipta dilindungi. (Data pada website ini masih placeholder)
      </div>
    </footer>
  );
}
