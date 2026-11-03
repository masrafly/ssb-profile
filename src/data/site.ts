// Data MF Academy — sebagian REAL (diambil dari bio Instagram @mf.futsal.academy:
// kategori usia, hari latihan, venue, nama liga), sebagian masih PLACEHOLDER
// (alamat lengkap, kontak, harga, nama pelatih, prestasi spesifik — belum ada
// konfirmasi publik, jangan diklaim sebagai fakta sebelum dikonfirmasi admin).
//
// ⚠️ LOGO: belum ada file logo asli (Instagram memblokir pengambilan foto
// profil otomatis tanpa login). Navbar & Footer sementara pakai monogram teks
// "MF" — ganti ke <Image> begitu file logo asli (PNG/SVG, idealnya transparan)
// tersedia di folder public/.

export const siteConfig = {
  name: "MF Academy",
  fullName: "MF Futsal Academy",
  tagline: "Ready For Fight, Ready For The Game",
  description:
    "MF Academy adalah akademi futsal khusus putra untuk kategori usia 10–17 tahun. Kami membentuk mental juara lewat latihan rutin dan jam terbang kompetisi liga futsal — #FightingSpirit.",
  category: "Khusus Putra", // dari bio IG
  ageRangeLabel: "Usia 10–17 Tahun", // dari bio IG
  venue: "GOR Mega Regency", // dari bio IG
  trainingDaysLabel: "Selasa, Kamis & Minggu", // dari bio IG
  hashtag: "#FightingSpirit",
  address: "GOR Mega Regency — [lengkapi alamat lengkap sebelum go-live]",
  whatsapp: "6281234567890", // placeholder — pendaftaran asli via DM Instagram
  phone: "(021) 1234-5678", // placeholder
  email: "info@mfacademy.example.com", // placeholder
  instagram: "https://www.instagram.com/mf.futsal.academy", // REAL
  mapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126935.5!2d106.8!3d-6.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTInMDAuMCJTIDEwNsKwNDgnMDAuMCJF!5e0!3m2!1sid!2sid!4v1600000000000", // placeholder, ganti sesuai lokasi GOR Mega Regency asli
};

export const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/tentang", label: "Tentang" },
  { href: "/program", label: "Program" },
  { href: "/pelatih", label: "Pelatih" },
  { href: "/jadwal", label: "Jadwal" },
  { href: "/galeri", label: "Galeri" },
  { href: "/prestasi", label: "Prestasi" },
  { href: "/kontak", label: "Kontak" },
];

// Foto aksi futsal indoor (Unsplash, lisensi bebas pakai) untuk background hero
// tiap halaman. Ganti dengan foto asli kegiatan MF Academy bila sudah tersedia.
export const heroImages = {
  home: "https://images.unsplash.com/photo-1763775594018-4a84eeadd83d",
  tentang: "https://images.unsplash.com/photo-1774798154084-c2b861d8581d",
  program: "https://images.unsplash.com/photo-1763775468707-573c7cd6b0da",
  pelatih: "https://images.unsplash.com/photo-1606925797300-0b35e9d1794e",
  jadwal: "https://images.unsplash.com/photo-1774798154084-c2b861d8581d",
  galeri: "https://images.unsplash.com/photo-1763775594018-4a84eeadd83d",
  prestasi: "https://images.unsplash.com/photo-1763775468707-573c7cd6b0da",
  pendaftaran: "https://images.unsplash.com/photo-1606925797300-0b35e9d1794e",
  kontak: "https://images.unsplash.com/photo-1774798154084-c2b861d8581d",
};

// Kelompok usia & jadwal — bagian usia/hari/venue REAL dari bio Instagram;
// fokus latihan & harga masih contoh, sesuaikan dengan kurikulum asli.
export const programs = [
  {
    slug: "u11",
    name: "Kelompok Usia U-11",
    ageRange: "10 - 11 tahun (Putra)",
    focus: "Pengenalan teknik dasar futsal: ball control, passing & dribbling jarak pendek dalam ruang sempit",
    schedule: "Selasa, Kamis & Minggu, 16.00 - 17.30",
    price: "Hubungi Admin (DM Instagram)",
  },
  {
    slug: "u13",
    name: "Kelompok Usia U-13",
    ageRange: "12 - 13 tahun (Putra)",
    focus: "Teknik individu lanjutan, first touch, dan dasar taktik 5 vs 5",
    schedule: "Selasa, Kamis & Minggu, 16.00 - 17.30",
    price: "Hubungi Admin (DM Instagram)",
  },
  {
    slug: "u15",
    name: "Kelompok Usia U-15",
    ageRange: "14 - 15 tahun (Putra)",
    focus: "Taktik tim, transisi serang-bertahan cepat, serta fisik & stamina khas futsal",
    schedule: "Selasa, Kamis & Minggu, 17.30 - 19.00",
    price: "Hubungi Admin (DM Instagram)",
  },
  {
    slug: "u17",
    name: "Kelompok Usia U-17",
    ageRange: "16 - 17 tahun (Putra)",
    focus: "Persiapan kompetisi liga (WJL League, MZT League) & mental #FightingSpirit",
    schedule: "Selasa, Kamis & Minggu, 17.30 - 19.00",
    price: "Hubungi Admin (DM Instagram)",
  },
];

export const coaches = [
  {
    name: "Agus Setiawan",
    role: "Head Coach / Direktur Teknik",
    license: "Lisensi Kepelatihan Futsal C",
    experience: "12 tahun melatih futsal usia dini",
    photo: "/images/coach-placeholder.jpg",
  },
  {
    name: "Budi Prasetyo",
    role: "Pelatih Kelompok U-11 & U-13",
    license: "Lisensi Kepelatihan Futsal D",
    experience: "6 tahun melatih futsal usia dini",
    photo: "/images/coach-placeholder.jpg",
  },
  {
    name: "Citra Wulandari",
    role: "Pelatih Fisik & Kebugaran",
    license: "Sertifikasi Fitness Trainer",
    experience: "5 tahun menangani atlet muda",
    photo: "/images/coach-placeholder.jpg",
  },
  {
    name: "Dedi Kurniawan",
    role: "Pelatih Kiper Futsal",
    license: "Lisensi Goalkeeping Futsal Nasional",
    experience: "8 tahun melatih kiper futsal usia dini",
    photo: "/images/coach-placeholder.jpg",
  },
];

export const testimonials = [
  {
    name: "Ibu Siti (Orang tua siswa U-13)",
    quote:
      "Anak saya jadi lebih percaya diri dan disiplin sejak ikut MF Academy. Pelatihnya ramah dan sabar, semangat #FightingSpirit-nya kerasa banget.",
  },
  {
    name: "Bapak Hendra (Orang tua siswa U-15)",
    quote:
      "Jadwal latihan jelas, anak rutin ikut liga (WJL/MZT), jadi kelihatan progresnya. Sangat membantu untuk anak yang serius di futsal.",
  },
  {
    name: "Rizky (Alumni, kini bermain di klub futsal lokal)",
    quote:
      "Dasar teknik dan mental bertanding saya dibentuk sejak kecil di sini. Terima kasih MF Academy!",
  },
];

// Berita — merujuk pola konten nyata dari Instagram @mf.futsal.academy
// (match day WJL League U16, MZT League U11, dll). Tanggal & detail hasil
// pertandingan belum dikonfirmasi — lengkapi dengan data asli dari admin.
export const news = [
  {
    title: "MF Academy Berjuang di WJL League U16 Lawan TOHO & Asterra",
    date: "2026-10-30",
    excerpt:
      "Tim U-16 tampil dalam dua laga beruntun WJL League bertempat di Saka Futsal Camp. #FightingSpirit 🔥",
  },
  {
    title: "Skuad Resmi MF Academy Tampil di Wins Junior League U16",
    date: "2026-10-15",
    excerpt:
      "20 pemain terbaik resmi diumumkan sebagai Official Squad List untuk kompetisi Wins Junior League U16. Ready For Fight, Ready For The Game.",
  },
  {
    title: "Aksi MF Academy di MZT League U11 Lawan SS Fa & Gaharu",
    date: "2026-10-15",
    excerpt:
      "Kelompok usia dini U-11 unjuk kemampuan di Ensport Arena dalam rangkaian pertandingan MZT League.",
  },
];

// Catatan jujur: ini merekam partisipasi/kegiatan yang terlihat di akun
// Instagram resmi, BUKAN klaim "juara" yang belum terkonfirmasi.
export const achievements = [
  "Peserta aktif WJL League U16 2026",
  "Peserta aktif MZT League U11 2026",
  "Rutin tampil di Saka Futsal Camp & Ensport Arena",
  "Official Squad List 20 pemain — Wins Junior League U16",
];

export const stats = [
  { value: 100, suffix: "+", label: "Siswa Aktif" },
  { value: 4, suffix: "", label: "Kelompok Usia" },
  { value: 2, suffix: "", label: "Liga Diikuti" },
  { value: 6, suffix: "+", label: "Pelatih & Staff" },
];

export const features = [
  {
    icon: "ShieldCheck",
    title: "Pelatih Berlisensi Futsal",
    desc: "Pelatih berpengalaman menangani kategori usia muda dengan kurikulum futsal modern.",
  },
  {
    icon: "Target",
    title: "Kurikulum Futsal 5 vs 5",
    desc: "Fokus teknik ruang sempit, pengambilan keputusan cepat, dan transisi serang-bertahan khas futsal.",
  },
  {
    icon: "HeartHandshake",
    title: "#FightingSpirit",
    desc: "Mental juang dan disiplin jadi fondasi tiap sesi latihan — bukan cuma soal skill individu.",
  },
  {
    icon: "Trophy",
    title: "Jam Terbang Liga Aktif",
    desc: "Pemain rutin tampil di liga futsal usia dini (WJL League, MZT League) untuk mengasah mental bertanding.",
  },
];

export const galleryImages = [
  { src: "/images/gallery-placeholder-1.jpg", alt: "Sesi latihan teknik dasar futsal dalam ruangan" },
  { src: "/images/gallery-placeholder-2.jpg", alt: "Match day WJL League U16" },
  { src: "/images/gallery-placeholder-3.jpg", alt: "Dokumentasi tim sebelum pertandingan" },
  { src: "/images/gallery-placeholder-4.jpg", alt: "Latihan fisik dan kebugaran pemain" },
  { src: "/images/gallery-placeholder-5.jpg", alt: "Sesi latihan kiper futsal" },
  { src: "/images/gallery-placeholder-6.jpg", alt: "Foto tim MF Academy #FightingSpirit" },
];
