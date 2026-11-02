import Link from "next/link";
import { navLinks, siteConfig } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-[#14331C] text-white/90 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-10 grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-bold text-[#F5C518]">{siteConfig.name}</h3>
          <p className="mt-2 text-sm text-white/70">{siteConfig.description}</p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Navigasi</h4>
          <ul className="space-y-1 text-sm text-white/70">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-[#F5C518]">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Kontak</h4>
          <ul className="space-y-1 text-sm text-white/70">
            <li>{siteConfig.address}</li>
            <li>{siteConfig.phone}</li>
            <li>{siteConfig.email}</li>
            <li>
              <a href={siteConfig.instagram} className="hover:text-[#F5C518]" target="_blank" rel="noreferrer">
                Instagram
              </a>
              {" · "}
              <a href={siteConfig.youtube} className="hover:text-[#F5C518]" target="_blank" rel="noreferrer">
                YouTube
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/50">
        © {new Date().getFullYear()} {siteConfig.name}. Semua hak cipta dilindungi. (Data pada website ini masih placeholder)
      </div>
    </footer>
  );
}
