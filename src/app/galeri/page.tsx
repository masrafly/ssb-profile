import { ImageIcon } from "lucide-react";
import { galleryImages, siteConfig } from "@/data/site";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata = {
  title: `Galeri — ${siteConfig.name}`,
};

export default function GaleriPage() {
  return (
    <div>
      <section className="relative bg-brand-green-dark text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grass-pattern" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-display text-4xl font-extrabold">Galeri Kegiatan</h1>
          <p className="mt-3 text-white/70">
            Dokumentasi latihan, pertandingan, dan momen kebersamaan {siteConfig.name}.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <p className="text-xs text-black/40 mb-6 text-center">
          (Gambar di bawah masih placeholder — ganti dengan foto asli di folder <code>public/images</code>, lalu
          pakai <code>next/image</code> untuk performa optimal.)
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((img, i) => (
            <FadeIn key={img.src} delay={i * 0.04}>
              <div className="group aspect-square rounded-2xl bg-gradient-to-br from-brand-green/10 to-brand-gold/10 border border-black/5 flex flex-col items-center justify-center gap-3 text-center text-sm text-black/50 p-4 hover:shadow-lg transition-shadow">
                <ImageIcon size={28} className="text-brand-green/50 group-hover:scale-110 transition-transform" />
                {img.alt}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
