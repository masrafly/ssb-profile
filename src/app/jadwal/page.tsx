import { MapPin } from "lucide-react";
import { heroImages, programs, siteConfig } from "@/data/site";
import { Card, SectionHeading } from "@/components/ui/Card";
import { FadeIn } from "@/components/ui/FadeIn";
import { PageHero } from "@/components/ui/PageHero";

export const metadata = {
  title: `Jadwal & Lokasi — ${siteConfig.name}`,
};

export default function JadwalPage() {
  return (
    <div>
      <PageHero
        image={heroImages.jadwal}
        imageAlt="Lapangan sepak bola tempat latihan SSB"
        title="Jadwal Latihan & Lokasi"
        size="sm"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14 sm:py-16">
        <FadeIn>
          <SectionHeading eyebrow="Rutin Setiap Minggu" title="Jadwal Latihan" align="left" />
          <Card className="mt-8 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[480px] text-sm">
                <thead className="bg-brand-green text-white">
                  <tr>
                    <th className="p-3 sm:p-4 text-left font-display">Kelompok</th>
                    <th className="p-3 sm:p-4 text-left font-display">Hari</th>
                    <th className="p-3 sm:p-4 text-left font-display">Jam</th>
                  </tr>
                </thead>
                <tbody>
                  {programs.map((p, i) => (
                    <tr key={p.slug} className={i % 2 === 0 ? "bg-white" : "bg-black/[0.02]"}>
                      <td className="p-3 sm:p-4 font-semibold text-brand-green-dark whitespace-nowrap">{p.name}</td>
                      <td className="p-3 sm:p-4 text-black/70 whitespace-nowrap">{p.schedule.split(",")[0]}</td>
                      <td className="p-3 sm:p-4 text-black/70 whitespace-nowrap">{p.schedule.split(",")[1]?.trim()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </FadeIn>

        <FadeIn delay={0.1}>
          <SectionHeading eyebrow="Alamat Lengkap" title="Lokasi Latihan" align="left" className="mt-12 sm:mt-14" />
          <p className="mt-4 text-black/70 text-sm flex items-start gap-2">
            <MapPin size={16} className="text-brand-green mt-0.5 shrink-0" /> {siteConfig.address}
          </p>
          <div className="mt-6 aspect-video rounded-2xl overflow-hidden border border-black/10 shadow-sm">
            <iframe
              src={siteConfig.mapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              title="Lokasi SSB"
            />
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
