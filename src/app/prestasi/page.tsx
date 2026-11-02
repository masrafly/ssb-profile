import { achievements, news, siteConfig } from "@/data/site";

export const metadata = {
  title: `Prestasi & Berita — ${siteConfig.name}`,
};

export default function PrestasiPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-extrabold text-[#1E7D32]">Prestasi & Berita</h1>

      <section className="mt-8">
        <h2 className="text-xl font-bold">Daftar Prestasi</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {achievements.map((a) => (
            <li key={a} className="flex gap-3 rounded-lg border border-black/10 p-4 text-sm">
              <span>🏆</span>
              {a}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-bold">Berita Terbaru</h2>
        <div className="mt-4 space-y-4">
          {news.map((n) => (
            <article key={n.title} className="rounded-xl border border-black/10 p-5">
              <p className="text-xs text-black/50">{n.date}</p>
              <h3 className="font-bold mt-1">{n.title}</h3>
              <p className="text-sm text-black/70 mt-1">{n.excerpt}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
