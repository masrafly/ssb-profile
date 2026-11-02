import Link from "next/link";
import { achievements, programs, siteConfig, testimonials } from "@/data/site";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1E7D32] to-[#14331C] text-white">
        <div className="max-w-6xl mx-auto px-4 py-20 text-center">
          <p className="inline-block bg-[#F5C518] text-[#14331C] font-semibold rounded-full px-4 py-1 text-sm mb-4">
            Sejak {siteConfig.foundedYear}
          </p>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
            {siteConfig.tagline}
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-white/80">{siteConfig.description}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/pendaftaran"
              className="rounded-full bg-[#F5C518] text-[#14331C] font-semibold px-6 py-3 hover:brightness-95"
            >
              Daftar Sekarang
            </Link>
            <Link
              href="/program"
              className="rounded-full border border-white/40 px-6 py-3 hover:bg-white/10"
            >
              Lihat Program Latihan
            </Link>
          </div>
        </div>
      </section>

      {/* Highlight Program */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-center">Program Latihan Berdasarkan Usia</h2>
        <p className="text-center text-black/60 mt-2">Kurikulum disesuaikan dengan tahap tumbuh kembang anak</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((p) => (
            <div key={p.slug} className="rounded-xl border border-black/10 p-6 hover:shadow-lg transition">
              <h3 className="font-bold text-[#1E7D32]">{p.name}</h3>
              <p className="text-sm text-black/60 mt-1">Usia {p.ageRange}</p>
              <p className="mt-3 text-sm">{p.focus}</p>
              <p className="mt-3 text-sm font-semibold">{p.price}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/program" className="text-[#1E7D32] font-semibold hover:underline">
            Lihat semua program →
          </Link>
        </div>
      </section>

      {/* Prestasi */}
      <section className="bg-[#F7F7F2] py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center">Prestasi Kami</h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {achievements.map((a) => (
              <li key={a} className="flex gap-3 rounded-lg bg-white p-4 shadow-sm">
                <span>🏆</span>
                <span className="text-sm">{a}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Testimoni */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-center">Apa Kata Mereka</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <blockquote key={t.name} className="rounded-xl border border-black/10 p-6">
              <p className="text-sm italic">&ldquo;{t.quote}&rdquo;</p>
              <footer className="mt-3 text-sm font-semibold text-[#1E7D32]">— {t.name}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1E7D32] text-white text-center py-14">
        <h2 className="text-2xl font-bold">Siap Bergabung Bersama {siteConfig.name}?</h2>
        <p className="mt-2 text-white/80">Pendaftaran siswa baru dibuka sepanjang tahun.</p>
        <Link
          href="/pendaftaran"
          className="inline-block mt-6 rounded-full bg-[#F5C518] text-[#14331C] font-semibold px-6 py-3 hover:brightness-95"
        >
          Daftar Sekarang
        </Link>
      </section>
    </div>
  );
}
