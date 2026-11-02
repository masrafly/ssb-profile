# PRD — Website Company Profile SSB (Sekolah Sepak Bola)

| | |
|---|---|
| **Produk** | Website Company Profile SSB |
| **Nama SSB (placeholder)** | SSB Garuda Muda |
| **Repo** | `masrafly/ssb-profile` |
| **Status** | Draft v1.0 |
| **Pemilik Produk** | Rafly (Senior IT Team Leader) |
| **Catatan data** | Semua nama, lokasi, kontak, dan angka di dokumen ini adalah **placeholder** — wajib diganti dengan data asli SSB sebelum go-live. |

---

## 1. Latar Belakang
SSB (Sekolah Sepak Bola) di lingkungan sekitar belum memiliki kehadiran digital. Pendaftaran siswa baru, informasi program latihan, jadwal, dan pencapaian tim masih tersebar manual (WhatsApp/brosur). Website company profile dibutuhkan agar SSB terlihat profesional, mudah ditemukan calon orang tua/siswa, dan memudahkan proses pendaftaran serta publikasi kegiatan.

## 2. Tujuan
1. Memberi informasi lengkap & terpercaya tentang SSB (profil, program, pelatih, fasilitas) kepada calon siswa dan orang tua.
2. Menyediakan kanal pendaftaran online (form) yang lebih praktis daripada manual.
3. Menampilkan dokumentasi kegiatan (galeri foto/video, prestasi, berita) untuk membangun kredibilitas & branding.
4. Mempermudah kontak (lokasi, jadwal, nomor WA/telepon) bagi calon pendaftar.

## 3. Target Pengguna
| Persona | Kebutuhan |
|---|---|
| Orang tua calon siswa | Info program, biaya, jadwal, cara daftar, testimoni, kepercayaan (prestasi, pelatih bersertifikat) |
| Siswa/anak usia 6–17 th | Konten visual menarik, galeri, jadwal latihan |
| Sponsor / mitra | Profil SSB, pencapaian, kontak kerja sama |
| Admin SSB (pengelola website) | Update berita/galeri/jadwal secara mudah |

## 4. Lingkup (Scope)

### 4.1 In-Scope (MVP — Fase 1)
- Landing page / Beranda (hero, ringkasan program, CTA daftar)
- Halaman Tentang Kami (sejarah, visi-misi, legalitas/izin)
- Halaman Program Latihan (kelompok usia, kurikulum, biaya)
- Halaman Pelatih & Staff (profil, lisensi kepelatihan)
- Halaman Jadwal Latihan & Lokasi (peta, alamat)
- Halaman Galeri (foto & video kegiatan/pertandingan)
- Halaman Prestasi/Berita (artikel singkat, update kegiatan)
- Halaman Pendaftaran (form online: data calon siswa, kirim ke email/WA/Google Sheet)
- Halaman Kontak (form kontak, nomor WA, media sosial, Google Maps embed)
- Responsive (mobile-first, karena target orang tua banyak akses dari HP)
- SEO dasar (meta tag, sitemap.xml, Open Graph untuk share di WA/sosmed)

### 4.2 Out-of-Scope (Fase 2 / Nice-to-have, bukan MVP)
- Sistem pembayaran online (biaya bulanan/pendaftaran)
- Portal khusus orang tua/siswa (login, presensi, rapor latihan)
- Multi-bahasa (ID/EN)
- CMS admin penuh (Fase 1 cukup edit konten via kode/markdown; Fase 2 bisa pakai headless CMS)
- Live streaming pertandingan

## 5. Struktur Konten / Sitemap
```
/                  Beranda
/tentang           Tentang Kami (visi, misi, sejarah, legalitas)
/program           Program Latihan (kelompok usia & kurikulum)
/pelatih           Pelatih & Staff
/jadwal            Jadwal Latihan & Lokasi
/galeri            Galeri Foto & Video
/prestasi          Prestasi & Berita
/pendaftaran       Form Pendaftaran Online
/kontak            Kontak & Peta Lokasi
```

## 6. Fitur Detail

| # | Fitur | Deskripsi | Prioritas |
|---|---|---|---|
| 1 | Hero Beranda | Banner besar + tagline + CTA "Daftar Sekarang" | Must |
| 2 | Highlight Program | Kartu ringkas tiap kelompok usia (U-8, U-10, U-12, U-15, U-17) | Must |
| 3 | Profil Pelatih | Foto, nama, lisensi (AFC/PSSI), pengalaman | Must |
| 4 | Galeri | Grid foto + embed video YouTube | Must |
| 5 | Form Pendaftaran | Nama, usia, kontak ortu, kelompok usia dipilih, kirim via email/WA API | Must |
| 6 | Form Kontak | Nama, pesan, kirim via email | Should |
| 7 | Peta Lokasi | Google Maps embed | Must |
| 8 | Testimoni | Kutipan orang tua/alumni | Should |
| 9 | Prestasi/Berita | List artikel singkat kegiatan & trofi | Should |
| 10 | Tombol WA Floating | Quick chat ke admin SSB | Could |
| 11 | Dark/Light mode | Opsional estetika | Won't (MVP) |

## 7. Kebutuhan Non-Fungsional
- **Performance**: Lighthouse score ≥ 90 (mobile), gambar pakai `next/image` + lazy load.
- **Responsive**: Mobile-first, breakpoint standar Tailwind (sm/md/lg/xl).
- **SEO**: Meta title/description per halaman, `sitemap.xml`, `robots.txt`, Open Graph image.
- **Aksesibilitas**: Kontras warna cukup, alt text semua gambar, semantic HTML.
- **Keamanan**: Form pendaftaran divalidasi (client + server), anti-spam (honeypot/captcha ringan).
- **Maintainability**: Konten statis (teks/galeri) disimpan sebagai data terstruktur (JSON/MDX) agar mudah diupdate tanpa menyentuh logic komponen.

## 8. Tech Stack
| Layer | Pilihan |
|---|---|
| Framework | **Next.js 15+ (App Router, TypeScript)** |
| Styling | Tailwind CSS |
| Form handling | React Hook Form + API Route / integrasi WA Click-to-chat / Formspree (opsional) |
| Hosting | Vercel (rekomendasi, auto-deploy dari GitHub) — alternatif: GitHub Pages via `next export` (static) |
| Version control | GitHub — repo `masrafly/ssb-profile` |
| CI/sync | Auto commit & push terjadwal (cron lokal, lihat §11) |

## 9. Desain / Branding (Placeholder)
- Warna utama: Hijau rumput (#1E7D32) + Putih + Aksen Kuning/Emas (#F5C518)
- Font: sans-serif modern (misal `Inter` / `Poppins`)
- Logo: placeholder (bentuk perisai/bola) — ganti dengan logo resmi SSB
- Nada komunikasi: energik, membangun semangat, ramah keluarga

## 10. Metrik Keberhasilan (KPI)
- Jumlah submit form pendaftaran per bulan
- Bounce rate halaman Beranda < 50%
- Waktu muat halaman < 2.5s (mobile, 4G)
- Jumlah klik tombol WA/Kontak

## 11. Rencana Deploy & Automasi Update
- Setiap perubahan kode di-commit ke repo `masrafly/ssb-profile` (GitHub).
- **Cron job lokal** (pola sama seperti auto-sync vault Obsidian yang sudah berjalan): setiap *checkpoint* terjadwal, skrip memeriksa perubahan file di folder project → `git add` → `git commit` → `git push origin main`. Dengan ini, update konten/kode yang dikerjakan di komputer lokal otomatis tersinkron ke GitHub tanpa perlu push manual.
- (Opsional Fase 2) Hubungkan repo ke Vercel agar setiap push ke `main` otomatis build & deploy ke domain production.

## 12. Timeline Usulan
| Fase | Durasi | Output |
|---|---|---|
| Fase 0 | 1 hari | PRD disetujui, repo dibuat, struktur project Next.js |
| Fase 1 (MVP) | 1–2 minggu | Semua halaman in-scope §4.1 dengan data placeholder |
| Fase 1.1 | 2–3 hari | Ganti data placeholder → data asli SSB (foto, teks, kontak) |
| Fase 2 | Backlog | Fitur out-of-scope §4.2 sesuai kebutuhan |

## 13. Open Questions (perlu dikonfirmasi pemilik SSB)
- Nama resmi SSB, alamat, kontak WA/telepon, media sosial?
- Daftar kelompok usia & biaya pendaftaran/bulanan?
- Daftar pelatih (nama, lisensi, foto) yang boleh dipublikasikan?
- Domain yang akan dipakai (jika sudah punya)?
- Hosting final: Vercel (gratis, auto-deploy) atau lainnya?
