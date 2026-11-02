import { siteConfig } from "@/data/site";

export const metadata = {
  title: `Tentang Kami — ${siteConfig.name}`,
};

export default function TentangPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-extrabold text-[#1E7D32]">Tentang {siteConfig.name}</h1>

      <section className="mt-8">
        <h2 className="text-xl font-bold">Sejarah</h2>
        <p className="mt-2 text-black/70">
          {siteConfig.name} didirikan pada tahun {siteConfig.foundedYear} dengan tujuan memberikan
          wadah pembinaan sepak bola usia dini yang terstruktur, aman, dan menyenangkan di
          lingkungan sekitar. Berawal dari satu kelompok latihan kecil, kini SSB telah berkembang
          menjadi akademi dengan beberapa kelompok usia dan ratusan alumni.
        </p>
      </section>

      <section className="mt-8 grid gap-6 sm:grid-cols-2">
        <div className="rounded-xl border border-black/10 p-6">
          <h2 className="text-xl font-bold text-[#1E7D32]">Visi</h2>
          <p className="mt-2 text-black/70 text-sm">
            Menjadi akademi sepak bola usia dini terpercaya yang mencetak pemain berkarakter,
            berprestasi, dan berdaya saing.
          </p>
        </div>
        <div className="rounded-xl border border-black/10 p-6">
          <h2 className="text-xl font-bold text-[#1E7D32]">Misi</h2>
          <ul className="mt-2 text-black/70 text-sm list-disc pl-4 space-y-1">
            <li>Memberikan kurikulum latihan sesuai usia dan tahap perkembangan</li>
            <li>Membentuk karakter disiplin, sportivitas, dan kerja sama tim</li>
            <li>Menyediakan pelatih bersertifikat dan fasilitas yang layak</li>
            <li>Membuka kesempatan kompetisi bagi seluruh siswa</li>
          </ul>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-bold">Legalitas & Izin</h2>
        <p className="mt-2 text-black/70 text-sm">
          SSB terdaftar secara resmi di bawah [Nama Asosiasi/Pengcab PSSI — placeholder] dengan
          nomor registrasi [XXX-XXXX — placeholder]. Dokumen legalitas dapat diminta melalui
          halaman Kontak.
        </p>
      </section>
    </div>
  );
}
