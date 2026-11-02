import { ArrowRight, Clock } from "lucide-react";
import { programs, siteConfig } from "@/data/site";
import { Badge, Card } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata = {
  title: `Program Latihan — ${siteConfig.name}`,
};

export default function ProgramPage() {
  return (
    <div>
      <section className="relative bg-brand-green-dark text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grass-pattern" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-display text-4xl font-extrabold">Program Latihan</h1>
          <p className="mt-3 text-white/70">
            Kurikulum {siteConfig.name} dibagi berdasarkan kelompok usia agar setiap siswa mendapat
            porsi latihan teknik, fisik, dan taktik yang sesuai.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="grid gap-6">
          {programs.map((p, i) => (
            <FadeIn key={p.slug} delay={i * 0.05}>
              <Card className="p-6 sm:p-7 grid gap-5 sm:grid-cols-[1fr_auto] sm:items-center">
                <div>
                  <Badge variant="green">Usia {p.ageRange}</Badge>
                  <h2 className="mt-3 font-display font-bold text-xl text-brand-green-dark">{p.name}</h2>
                  <p className="mt-2 text-sm text-black/60 leading-relaxed">
                    <strong className="text-black/80">Fokus:</strong> {p.focus}
                  </p>
                  <p className="mt-1 text-sm text-black/60 flex items-center gap-1.5">
                    <Clock size={14} /> {p.schedule}
                  </p>
                </div>
                <div className="sm:text-right">
                  <p className="font-display font-extrabold text-xl text-brand-green">{p.price}</p>
                  <ButtonLink href="/pendaftaran" size="sm" className="mt-3">
                    Daftar Kelompok Ini <ArrowRight size={14} />
                  </ButtonLink>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
