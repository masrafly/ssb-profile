import { coaches, siteConfig } from "@/data/site";

export const metadata = {
  title: `Pelatih & Staff — ${siteConfig.name}`,
};

export default function PelatihPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-extrabold text-[#1E7D32]">Pelatih & Staff</h1>
      <p className="mt-2 text-black/60">
        Tim pelatih {siteConfig.name} terdiri dari pelatih berlisensi dengan pengalaman menangani
        pemain usia dini.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {coaches.map((c) => (
          <div key={c.name} className="rounded-xl border border-black/10 p-5 text-center">
            <div className="mx-auto h-24 w-24 rounded-full bg-black/10 flex items-center justify-center text-3xl">
              🧑‍🏫
            </div>
            <h2 className="mt-4 font-bold">{c.name}</h2>
            <p className="text-sm text-[#1E7D32] font-semibold">{c.role}</p>
            <p className="text-xs text-black/60 mt-1">{c.license}</p>
            <p className="text-xs text-black/60">{c.experience}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
