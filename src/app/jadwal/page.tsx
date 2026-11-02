import { programs, siteConfig } from "@/data/site";

export const metadata = {
  title: `Jadwal & Lokasi — ${siteConfig.name}`,
};

export default function JadwalPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-extrabold text-[#1E7D32]">Jadwal Latihan & Lokasi</h1>

      <section className="mt-8">
        <h2 className="text-xl font-bold">Jadwal Latihan</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm border border-black/10">
            <thead className="bg-[#1E7D32] text-white">
              <tr>
                <th className="p-3 text-left">Kelompok</th>
                <th className="p-3 text-left">Hari</th>
                <th className="p-3 text-left">Jam</th>
              </tr>
            </thead>
            <tbody>
              {programs.map((p) => (
                <tr key={p.slug} className="border-t border-black/10">
                  <td className="p-3 font-semibold">{p.name}</td>
                  <td className="p-3">{p.schedule.split(",")[0]}</td>
                  <td className="p-3">{p.schedule.split(",")[1]?.trim()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-bold">Lokasi</h2>
        <p className="mt-2 text-black/70 text-sm">{siteConfig.address}</p>
        <div className="mt-4 aspect-video rounded-xl overflow-hidden border border-black/10">
          <iframe
            src={siteConfig.mapsEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            title="Lokasi SSB"
          />
        </div>
      </section>
    </div>
  );
}
