# SSB Profile — Website Company Profile Sekolah Sepak Bola

Website company profile untuk SSB (Sekolah Sepak Bola), dibangun dengan **Next.js (App Router) + TypeScript + Tailwind CSS**.

> ⚠️ **Semua data di website ini (nama SSB, alamat, kontak, program, pelatih, dll) adalah placeholder.**
> Edit file `src/data/site.ts` untuk mengganti dengan data asli sebelum go-live.

## Dokumentasi Produk
Lihat [`PRD.md`](./PRD.md) untuk Product Requirements Document lengkap (tujuan, scope, fitur, sitemap, tech stack, rencana rilis).

## Struktur Halaman
```
/              Beranda
/tentang       Tentang Kami
/program       Program Latihan
/pelatih       Pelatih & Staff
/jadwal        Jadwal Latihan & Lokasi
/galeri        Galeri Foto & Video
/prestasi      Prestasi & Berita
/pendaftaran   Form Pendaftaran Online
/kontak        Kontak & Peta Lokasi
```

## Mengubah Konten
Hampir semua teks (nama SSB, program, pelatih, testimoni, berita, galeri) terpusat di:
```
src/data/site.ts
```
Edit file ini saja untuk update konten tanpa menyentuh komponen/halaman.

## Menjalankan Secara Lokal

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

## Build Production

```bash
npm run build
npm run start
```

## Deploy
Rekomendasi: deploy ke [Vercel](https://vercel.com/new) — hubungkan repo GitHub ini, setiap push ke `main` otomatis build & deploy.

## Auto Sync ke GitHub
Repo ini disinkronkan otomatis ke GitHub melalui cron job lokal (`ssb-profile-auto-push.sh`) yang mengecek perubahan file secara berkala, lalu `git add` → `commit` → `push` ke `main`. Lihat bagian "Automasi" di `PRD.md` §11.
