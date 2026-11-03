import { Trophy } from "lucide-react";
import { achievements, heroImages, news, siteConfig } from "@/data/site";
import { Card, SectionHeading } from "@/components/ui/Card";
import { FadeIn } from "@/components/ui/FadeIn";
import { PageHero } from "@/components/ui/PageHero";

export const metadata = {
  title: `Prestasi & Berita — ${siteConfig.name}`,
};

export default function PrestasiPage() {
  return (
    <div>
      <PageHero
        image={heroImages.prestasi}
        imageAlt="Pemain merayakan kemenangan di lapangan"
        title="Prestasi & Berita"
        size="sm"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14 sm:py-16">
        <FadeIn>
          <SectionHeading eyebrow="Rekam Jejak" title="Daftar Prestasi" align="left" />
          <div className="mt-8 grid gap-4 grid-cols-1 sm:grid-cols-2">
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
          <SectionHeading eyebrow="Update Terkini" title="Berita Terbaru" align="left" className="mt-12 sm:mt-14" />
          <div className="mt-8 space-y-4">
            {news.map((n) => (
              <Card key={n.title} className="p-5 sm:p-6">
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
