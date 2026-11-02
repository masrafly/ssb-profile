import Link from "next/link";
import { programs, siteConfig } from "@/data/site";

export const metadata = {
  title: `Program Latihan — ${siteConfig.name}`,
};

export default function ProgramPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-extrabold text-[#1E7D32]">Program Latihan</h1>
      <p className="mt-2 text-black/60">
        Kurikulum {siteConfig.name} dibagi berdasarkan kelompok usia agar setiap siswa mendapat
        porsi latihan teknik, fisik, dan taktik yang sesuai.
      </p>

      <div className="mt-10 grid gap-6">
        {programs.map((p) => (
          <div key={p.slug} className="rounded-xl border border-black/10 p-6 grid gap-2 sm:grid-cols-[1fr_auto] sm:items-center">
            <div>
              <h2 className="font-bold text-lg text-[#1E7D32]">{p.name}</h2>
              <p className="text-sm text-black/60">Usia {p.ageRange}</p>
              <p className="mt-2 text-sm">
                <strong>Fokus:</strong> {p.focus}
              </p>
              <p className="mt-1 text-sm">
                <strong>Jadwal:</strong> {p.schedule}
              </p>
            </div>
            <div className="text-right">
              <p className="font-bold text-lg">{p.price}</p>
              <Link
                href="/pendaftaran"
                className="inline-block mt-2 rounded-full bg-[#1E7D32] text-white text-sm font-semibold px-4 py-2 hover:brightness-110"
              >
                Daftar Kelompok Ini
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
