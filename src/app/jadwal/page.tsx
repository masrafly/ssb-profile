import { MapPin } from "lucide-react";
import { programs, siteConfig } from "@/data/site";
import { Card, SectionHeading } from "@/components/ui/Card";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata = {
  title: `Jadwal & Lokasi — ${siteConfig.name}`,
};

export default function JadwalPage() {
  return (
    <div>
      <section className="relative bg-brand-green-dark text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grass-pattern" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-display text-4xl font-extrabold">Jadwal Latihan & Lokasi</h1>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-16">
        <FadeIn>
          <SectionHeading eyebrow="Rutin Setiap Minggu" title="Jadwal Latihan" align="left" />
          <Card className="mt-8 overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-brand-green text-white">
                <tr>
                  <th className="p-4 text-left font-display">Kelompok</th>
                  <th className="p-4 text-left font-display">Hari</th>
                  <th className="p-4 text-left font-display">Jam</th>
                </tr>
              </thead>
              <tbody>
                {programs.map((p, i) => (
                  <tr key={p.slug} className={i % 2 === 0 ? "bg-white" : "bg-black/[0.02]"}>
                    <td className="p-4 font-semibold text-brand-green-dark">{p.name}</td>
                    <td className="p-4 text-black/70">{p.schedule.split(",")[0]}</td>
                    <td className="p-4 text-black/70">{p.schedule.split(",")[1]?.trim()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        </FadeIn>

        <FadeIn delay={0.1}>
          <SectionHeading eyebrow="Alamat Lengkap" title="Lokasi Latihan" align="left" className="mt-14" />
          <p className="mt-4 text-black/70 text-sm flex items-center gap-2">
            <MapPin size={16} className="text-brand-green" /> {siteConfig.address}
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
