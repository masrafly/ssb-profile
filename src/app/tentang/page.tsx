import { CalendarDays, FileCheck2, ShieldCheck, Target } from "lucide-react";
import { siteConfig } from "@/data/site";
import { Badge, Card, SectionHeading } from "@/components/ui/Card";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata = {
  title: `Tentang Kami — ${siteConfig.name}`,
};

export default function TentangPage() {
  return (
    <div>
      <section className="relative bg-brand-green-dark text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grass-pattern" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <Badge variant="outline" className="mb-4">
            <CalendarDays size={14} /> Berdiri sejak {siteConfig.foundedYear}
          </Badge>
          <h1 className="font-display text-4xl font-extrabold">Tentang {siteConfig.name}</h1>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <FadeIn>
          <SectionHeading eyebrow="Sejarah Kami" title="Perjalanan Kami" align="left" />
          <p className="mt-4 text-black/70 leading-relaxed">
            {siteConfig.name} didirikan pada tahun {siteConfig.foundedYear} dengan tujuan memberikan
            wadah pembinaan sepak bola usia dini yang terstruktur, aman, dan menyenangkan di
            lingkungan sekitar. Berawal dari satu kelompok latihan kecil, kini SSB telah berkembang
            menjadi akademi dengan beberapa kelompok usia dan ratusan alumni.
          </p>
        </FadeIn>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <FadeIn delay={0.05}>
            <Card className="p-7 h-full">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-green/10 text-brand-green">
                <Target size={20} />
              </span>
              <h2 className="mt-4 font-display text-xl font-bold text-brand-green-dark">Visi</h2>
              <p className="mt-2 text-black/60 text-sm leading-relaxed">
                Menjadi akademi sepak bola usia dini terpercaya yang mencetak pemain berkarakter,
                berprestasi, dan berdaya saing.
              </p>
            </Card>
          </FadeIn>
          <FadeIn delay={0.1}>
            <Card className="p-7 h-full">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gold/15 text-brand-gold">
                <ShieldCheck size={20} />
              </span>
              <h2 className="mt-4 font-display text-xl font-bold text-brand-green-dark">Misi</h2>
              <ul className="mt-2 text-black/60 text-sm leading-relaxed list-disc pl-4 space-y-1.5">
                <li>Memberikan kurikulum latihan sesuai usia dan tahap perkembangan</li>
                <li>Membentuk karakter disiplin, sportivitas, dan kerja sama tim</li>
                <li>Menyediakan pelatih bersertifikat dan fasilitas yang layak</li>
                <li>Membuka kesempatan kompetisi bagi seluruh siswa</li>
              </ul>
            </Card>
          </FadeIn>
        </div>

        <FadeIn delay={0.15}>
          <Card className="mt-10 p-7 flex gap-4">
            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-green/10 text-brand-green">
              <FileCheck2 size={20} />
            </span>
            <div>
              <h2 className="font-display text-xl font-bold text-brand-green-dark">Legalitas & Izin</h2>
              <p className="mt-2 text-black/60 text-sm leading-relaxed">
                SSB terdaftar secara resmi di bawah [Nama Asosiasi/Pengcab PSSI — placeholder] dengan
                nomor registrasi [XXX-XXXX — placeholder]. Dokumen legalitas dapat diminta melalui
                halaman Kontak.
              </p>
            </div>
          </Card>
        </FadeIn>
      </div>
    </div>
  );
}
