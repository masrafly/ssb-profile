import { ArrowRight, Clock } from "lucide-react";
import { heroImages, programs, siteConfig } from "@/data/site";
import { Badge, Card } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { PageHero } from "@/components/ui/PageHero";

export const metadata = {
  title: `Program Latihan — ${siteConfig.name}`,
};

export default function ProgramPage() {
  return (
    <div>
      <PageHero
        image={heroImages.program}
        imageAlt="Pemain muda berlatih futsal di lapangan indoor"
        title="Program Latihan"
        description={`Kurikulum ${siteConfig.name} dibagi berdasarkan kelompok usia agar setiap siswa mendapat porsi latihan teknik, fisik, dan taktik yang sesuai.`}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14 sm:py-16">
        <div className="grid gap-5 sm:gap-6">
          {programs.map((p, i) => (
            <FadeIn key={p.slug} delay={i * 0.05}>
              <Card className="p-5 sm:p-7 grid gap-5 sm:grid-cols-[1fr_auto] sm:items-center">
                <div>
                  <Badge variant="green">Usia {p.ageRange}</Badge>
                  <h2 className="mt-3 font-display font-bold text-lg sm:text-xl text-brand-green-dark">{p.name}</h2>
                  <p className="mt-2 text-sm text-black/60 leading-relaxed">
                    <strong className="text-black/80">Fokus:</strong> {p.focus}
                  </p>
                  <p className="mt-1 text-sm text-black/60 flex items-center gap-1.5">
                    <Clock size={14} /> {p.schedule}
                  </p>
                </div>
                <div className="sm:text-right">
                  <p className="font-display font-extrabold text-lg sm:text-xl text-brand-green">{p.price}</p>
                  <ButtonLink href="/pendaftaran" size="sm" className="mt-3 w-full sm:w-auto justify-center">
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
