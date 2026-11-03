import { ImageIcon } from "lucide-react";
import { galleryImages, heroImages, siteConfig } from "@/data/site";
import { FadeIn } from "@/components/ui/FadeIn";
import { PageHero } from "@/components/ui/PageHero";

export const metadata = {
  title: `Galeri — ${siteConfig.name}`,
};

export default function GaleriPage() {
  return (
    <div>
      <PageHero
        image={heroImages.galeri}
        imageAlt="Momen kebersamaan tim MF Academy"
        title="Galeri Kegiatan"
        description={`Dokumentasi latihan, pertandingan, dan momen kebersamaan ${siteConfig.name}.`}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-16">
        <p className="text-xs text-black/40 mb-6 text-center">
          (Gambar di bawah masih placeholder — ganti dengan foto asli di folder <code>public/images</code>, lalu
          pakai <code>next/image</code> untuk performa optimal.)
        </p>
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((img, i) => (
            <FadeIn key={img.src} delay={i * 0.04}>
              <div className="group aspect-square rounded-2xl bg-black/5 border border-black/5 flex flex-col items-center justify-center gap-2 sm:gap-3 text-center text-xs sm:text-sm text-black/50 p-3 sm:p-4 hover:shadow-lg transition-shadow">
                <ImageIcon size={24} className="text-brand-green/50 group-hover:scale-110 transition-transform sm:size-7" />
                {img.alt}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
