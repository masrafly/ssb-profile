# PRD — Website Company Profile MF Academy (Akademi Futsal)

| | |
|---|---|
| **Produk** | Website Company Profile MF Academy |
| **Nama Akademi** | MF Academy (MF Futsal Academy) — nama & handle Instagram asli: [@mf.futsal.academy](https://www.instagram.com/mf.futsal.academy) |
| **Kategori** | Akademi Futsal, khusus Putra, usia 10–17 tahun |
| **Repo** | `masrafly/ssb-profile` |
| **Status** | Draft v2.0 (revisi dari SSB/Sepak Bola → Futsal) |
| **Pemilik Produk** | Rafly (Senior IT Team Leader) |
| **Catatan data** | Sebagian data **ASLI** (diambil dari bio Instagram resmi: kategori usia, hari latihan, venue GOR Mega Regency, partisipasi liga WJL/MZT League). Sisanya (alamat lengkap, kontak WA/telepon, harga, nama pelatih, hasil pertandingan spesifik) masih **placeholder** — wajib dikonfirmasi admin akademi sebelum go-live. |

---

## 1. Latar Belakang
MF Academy adalah akademi futsal khusus putra (usia 10–17 tahun) yang aktif di Instagram (@mf.futsal.academy) namun belum memiliki kehadiran web resmi. Pendaftaran siswa baru saat ini dilakukan via DM Instagram, dan informasi program/jadwal/pencapaian tim tersebar di feed media sosial. Website company profile dibutuhkan agar akademi terlihat lebih profesional, mudah ditemukan calon orang tua/siswa, dan memudahkan publikasi kegiatan di luar Instagram.

## 2. Tujuan
1. Memberi informasi lengkap & terpercaya tentang MF Academy (profil, program, pelatih, fasilitas) kepada calon siswa dan orang tua.
2. Menyediakan kanal pendaftaran online (form → terhubung ke WhatsApp/DM admin) yang lebih praktis.
3. Menampilkan dokumentasi kegiatan (galeri foto/video, partisipasi liga, berita) untuk membangun kredibilitas & branding #FightingSpirit.
4. Mempermudah kontak (lokasi GOR Mega Regency, jadwal, nomor WA/Instagram) bagi calon pendaftar.

## 3. Target Pengguna
| Persona | Kebutuhan |
|---|---|
| Orang tua calon siswa putra | Info program, biaya, jadwal, cara daftar, testimoni, kepercayaan (partisipasi liga, pelatih bersertifikat) |
| Siswa/anak usia 10–17 th (putra) | Konten visual menarik, galeri, jadwal latihan |
| Sponsor / mitra | Profil akademi, rekam jejak liga, kontak kerja sama |
| Admin MF Academy (pengelola website) | Update berita/galeri/jadwal secara mudah |

## 4. Lingkup (Scope)

### 4.1 In-Scope (MVP — Fase 1)
- Landing page / Beranda (hero, ringkasan program, CTA daftar)
- Halaman Tentang Kami (profil, visi-misi, legalitas/izin)
- Halaman Program Latihan (kelompok usia U-11/U-13/U-15/U-17, kurikulum futsal, biaya)
- Halaman Pelatih & Staff (profil, lisensi kepelatihan futsal)
- Halaman Jadwal Latihan & Lokasi (GOR Mega Regency, peta)
- Halaman Galeri (foto & video kegiatan/pertandingan)
- Halaman Prestasi/Berita (partisipasi liga: WJL League, MZT League, dll)
- Halaman Pendaftaran (form online → redirect WhatsApp admin dengan data terisi)
- Halaman Kontak (form kontak, nomor WA, Instagram, Google Maps embed)
- Responsive (mobile-first, karena target orang tua banyak akses dari HP)
- SEO dasar (meta tag, sitemap.xml, Open Graph untuk share di WA/Instagram)

### 4.2 Out-of-Scope (Fase 2 / Nice-to-have, bukan MVP)
- Sistem pembayaran online (biaya bulanan/pendaftaran)
- Portal khusus orang tua/siswa (login, presensi, rapor latihan)
- Multi-bahasa (ID/EN)
- CMS admin penuh (Fase 1 cukup edit konten via `src/data/site.ts`; Fase 2 bisa pakai headless CMS)
- Live streaming pertandingan / sinkronisasi otomatis feed Instagram

## 5. Struktur Konten / Sitemap
```
/                  Beranda
/tentang           Tentang Kami (profil, visi, misi, legalitas)
/program           Program Latihan (kelompok usia & kurikulum futsal)
/pelatih           Pelatih & Staff
/jadwal            Jadwal Latihan & Lokasi (GOR Mega Regency)
/galeri            Galeri Foto & Video
/prestasi          Prestasi & Berita (liga WJL/MZT)
/pendaftaran       Form Pendaftaran Online
/kontak            Kontak & Peta Lokasi
```

## 6. Fitur Detail

| # | Fitur | Deskripsi | Prioritas |
|---|---|---|---|
| 1 | Hero Beranda | Banner besar + tagline "Ready For Fight, Ready For The Game" + CTA "Daftar Sekarang" | Must |
| 2 | Highlight Program | Kartu ringkas tiap kelompok usia (U-11, U-13, U-15, U-17) | Must |
| 3 | Profil Pelatih | Foto, nama, lisensi kepelatihan futsal, pengalaman | Must |
| 4 | Galeri | Grid foto kegiatan & pertandingan | Must |
| 5 | Form Pendaftaran | Nama, usia, kontak ortu, kelompok usia dipilih, kirim via WhatsApp (link ke admin) | Must |
| 6 | Form Kontak | Nama, pesan, kirim via email/WA | Should |
| 7 | Peta Lokasi | Google Maps embed (GOR Mega Regency) | Must |
| 8 | Testimoni | Kutipan orang tua/alumni | Should |
| 9 | Prestasi/Berita | List partisipasi liga & kegiatan (WJL League, MZT League) | Should |
| 10 | Tombol WA Floating | Quick chat ke admin MF Academy | Could |
| 11 | Link Instagram | Highlight akun resmi @mf.futsal.academy (channel pendaftaran utama saat ini) | Must |
| 12 | Dark/Light mode | Opsional estetika | Won't (MVP) |

## 7. Kebutuhan Non-Fungsional
- **Performance**: Lighthouse score ≥ 90 (mobile), gambar pakai `next/image` + lazy load.
- **Responsive**: Mobile-first, breakpoint standar Tailwind (sm/md/lg/xl).
- **SEO**: Meta title/description per halaman, `sitemap.xml`, `robots.txt`, Open Graph image.
- **Aksesibilitas**: Kontras warna cukup, alt text semua gambar, semantic HTML.
- **Keamanan**: Form pendaftaran divalidasi (client + server), anti-spam (honeypot/captcha ringan).
- **Maintainability**: Konten statis (teks/galeri) disimpan sebagai data terstruktur di `src/data/site.ts` agar mudah diupdate tanpa menyentuh logic komponen.

## 8. Tech Stack
| Layer | Pilihan |
|---|---|
| Framework | **Next.js 16 (App Router, TypeScript)** |
| Styling | Tailwind CSS v4 (palet monokrom hitam-putih) + ekosistem (lucide-react, framer-motion) |
| Form handling | Client form → redirect WhatsApp Click-to-chat dengan data terisi otomatis |
| Hosting | Vercel (rekomendasi, auto-deploy dari GitHub) — alternatif: GitHub Pages via `next export` (static) |
| Version control | GitHub — repo `masrafly/ssb-profile` |
| CI/sync | Auto commit & push terjadwal (cron lokal, lihat §11) |

## 9. Desain / Branding
- Warna utama: **Hitam & Putih (monokrom)** — permintaan eksplisit agar tampil lebih profesional, tanpa hijau/emas.
- Font: sans-serif modern (`Inter` / `Poppins`), warna teks hitam murni.
- Logo: **placeholder monogram teks "MF"** — logo asli belum bisa diambil otomatis dari Instagram (diblokir anti-bot/butuh login). Ganti dengan file logo asli (PNG/SVG transparan) begitu tersedia dari admin akademi.
- Nada komunikasi: energik, disiplin, jiwa kompetitif — selaras dengan hashtag resmi **#FightingSpirit** dan motto **"Ready For Fight, Ready For The Game"**.

## 10. Metrik Keberhasilan (KPI)
- Jumlah submit form pendaftaran per bulan
- Bounce rate halaman Beranda < 50%
- Waktu muat halaman < 2.5s (mobile, 4G)
- Jumlah klik tombol WA/Kontak/Instagram

## 11. Rencana Deploy & Automasi Update
- Setiap perubahan kode di-commit ke repo `masrafly/ssb-profile` (GitHub).
- **Cron job lokal** (pola sama seperti auto-sync vault Obsidian yang sudah berjalan): setiap *checkpoint* terjadwal, skrip memeriksa perubahan file di folder project → `git add` → `git commit` → `git push origin main`. Dengan ini, update konten/kode yang dikerjakan di komputer lokal otomatis tersinkron ke GitHub tanpa perlu push manual.
- (Opsional Fase 2) Hubungkan repo ke Vercel agar setiap push ke `main` otomatis build & deploy ke domain production.

## 12. Timeline Usulan
| Fase | Durasi | Output |
|---|---|---|
| Fase 0 | 1 hari | PRD disetujui, repo dibuat, struktur project Next.js |
| Fase 1 (MVP) | 1–2 minggu | Semua halaman in-scope §4.1 dengan data placeholder |
| Fase 1.1 | 2–3 hari | Ganti data placeholder → data asli MF Academy (logo, alamat lengkap, kontak, harga, foto pelatih) |
| Fase 2 | Backlog | Fitur out-of-scope §4.2 sesuai kebutuhan |

## 13. Open Questions (perlu dikonfirmasi admin MF Academy)
- Alamat lengkap GOR Mega Regency (untuk Google Maps embed akurat)?
- Nomor WhatsApp/telepon resmi untuk pendaftaran (saat ini praktiknya via DM Instagram)?
- Daftar kelompok usia resmi & biaya pendaftaran/bulanan (U-11/U-13/U-15/U-17 pada dokumen ini masih estimasi)?
- Daftar pelatih (nama, lisensi, foto) yang boleh dipublikasikan?
- File logo resmi (PNG/SVG, idealnya transparan, resolusi tinggi) untuk menggantikan monogram placeholder "MF"?
- Hasil/prestasi liga yang sudah dikonfirmasi (juara, runner-up, dll) untuk halaman Prestasi — saat ini hanya mencatat partisipasi, bukan klaim kemenangan?
- Domain yang akan dipakai (jika sudah punya)?
- Hosting final: Vercel (gratis, auto-deploy) atau lainnya?
