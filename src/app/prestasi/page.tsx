import { Trophy } from "lucide-react";
import { achievements, news, siteConfig } from "@/data/site";
import { Card, SectionHeading } from "@/components/ui/Card";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata = {
  title: `Prestasi & Berita — ${siteConfig.name}`,
};

export default function PrestasiPage() {
  return (
    <div>
      <section className="relative bg-brand-green-dark text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grass-pattern" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-display text-4xl font-extrabold">Prestasi & Berita</h1>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-16">
        <FadeIn>
          <SectionHeading eyebrow="Rekam Jejak" title="Daftar Prestasi" align="left" />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {achievements.map((a) => (
              <div key={a} className="flex gap-3 rounded-2xl border border-black/5 bg-white p-5 text-sm shadow-sm">
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-gold/15 text-brand-gold">
                  <Trophy size={16} />
                </span>
                <span className="self-center text-black/70">{a}</span>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <SectionHeading eyebrow="Update Terkini" title="Berita Terbaru" align="left" className="mt-14" />
          <div className="mt-8 space-y-4">
            {news.map((n) => (
              <Card key={n.title} className="p-6">
                <p className="text-xs font-semibold text-brand-green uppercase tracking-wide">{n.date}</p>
                <h3 className="font-display font-bold mt-1.5 text-brand-green-dark">{n.title}</h3>
                <p className="text-sm text-black/60 mt-2 leading-relaxed">{n.excerpt}</p>
              </Card>
            ))}
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
