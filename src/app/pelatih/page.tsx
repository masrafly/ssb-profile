import { Award, UserRound } from "lucide-react";
import { coaches, siteConfig } from "@/data/site";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata = {
  title: `Pelatih & Staff — ${siteConfig.name}`,
};

export default function PelatihPage() {
  return (
    <div>
      <section className="relative bg-brand-green-dark text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grass-pattern" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-display text-4xl font-extrabold">Pelatih & Staff</h1>
          <p className="mt-3 text-white/70">
            Tim pelatih {siteConfig.name} terdiri dari pelatih berlisensi dengan pengalaman menangani
            pemain usia dini.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {coaches.map((c, i) => (
            <FadeIn key={c.name} delay={i * 0.05}>
              <Card className="p-6 text-center h-full">
                <div className="mx-auto h-20 w-20 rounded-full bg-gradient-to-br from-brand-green to-brand-green-dark flex items-center justify-center text-white shadow-md shadow-brand-green/30">
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
