# MF Academy — Website Company Profile Akademi Futsal

Website company profile untuk **MF Academy** (Akademi Futsal, khusus putra usia 10–17 tahun), dibangun dengan **Next.js (App Router) + TypeScript + Tailwind CSS**.

> ⚠️ **Sebagian data di website ini masih placeholder** (alamat lengkap, kontak WA/telepon, harga, nama pelatih, hasil pertandingan spesifik). Data yang sudah **asli** (diambil dari bio Instagram resmi [@mf.futsal.academy](https://www.instagram.com/mf.futsal.academy)): nama akademi, kategori usia, hari latihan, venue (GOR Mega Regency), dan partisipasi liga (WJL League, MZT League).
> Edit file `src/data/site.ts` untuk melengkapi/mengganti data placeholder sebelum go-live.

> ⚠️ **Logo**: belum ada file logo asli. Instagram memblokir pengambilan foto profil otomatis tanpa login, jadi Navbar & Footer sementara memakai monogram teks "MF". Simpan file logo asli (PNG/SVG transparan) ke `public/logo.png` lalu ganti elemen monogram di `src/components/Navbar.tsx` dan `src/components/Footer.tsx` dengan `<Image src="/logo.png" .../>`.

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
Hampir semua teks (nama akademi, program, pelatih, testimoni, berita, galeri) terpusat di:
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
