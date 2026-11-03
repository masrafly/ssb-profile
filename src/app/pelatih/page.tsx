import { Award, UserRound } from "lucide-react";
import { coaches, heroImages, siteConfig } from "@/data/site";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/ui/FadeIn";
import { PageHero } from "@/components/ui/PageHero";

export const metadata = {
  title: `Pelatih & Staff — ${siteConfig.name}`,
};

export default function PelatihPage() {
  return (
    <div>
      <PageHero
        image={heroImages.pelatih}
        imageAlt="Pelatih mendampingi anak-anak bermain futsal"
        title="Pelatih & Staff"
        description={`Tim pelatih ${siteConfig.name} terdiri dari pelatih berlisensi dengan pengalaman menangani pemain usia dini.`}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-16">
        <div className="grid gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {coaches.map((c, i) => (
            <FadeIn key={c.name} delay={i * 0.05}>
              <Card className="p-6 text-center h-full">
                <div className="mx-auto h-20 w-20 rounded-full bg-black flex items-center justify-center text-white shadow-md shadow-black/30">
                  <UserRound size={32} />
                </div>
                <h2 className="mt-4 font-display font-bold text-brand-green-dark">{c.name}</h2>
                <p className="text-sm text-brand-green font-semibold mt-0.5">{c.role}</p>
                <p className="text-xs text-black/50 mt-2 flex items-center justify-center gap-1">
                  <Award size={12} /> {c.license}
                </p>
                <p className="text-xs text-black/50 mt-1">{c.experience}</p>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
