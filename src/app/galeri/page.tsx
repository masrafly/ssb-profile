import { galleryImages, siteConfig } from "@/data/site";

export const metadata = {
  title: `Galeri — ${siteConfig.name}`,
};

export default function GaleriPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-extrabold text-[#1E7D32]">Galeri Kegiatan</h1>
      <p className="mt-2 text-black/60">
        Dokumentasi latihan, pertandingan, dan momen kebersamaan {siteConfig.name}.
        <br />
        <span className="text-xs">
          (Gambar di bawah masih placeholder — ganti dengan foto asli di folder <code>public/images</code>.)
        </span>
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {galleryImages.map((img) => (
          <div
            key={img.src}
            className="aspect-square rounded-xl bg-black/5 border border-black/10 flex items-center justify-center text-center text-sm text-black/50 p-4"
          >
            🖼️ {img.alt}
          </div>
        ))}
      </div>
    </div>
  );
}
