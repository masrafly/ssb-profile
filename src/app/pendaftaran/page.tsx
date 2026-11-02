"use client";

import { useState } from "react";
import { programs, siteConfig } from "@/data/site";

export default function PendaftaranPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    nama: "",
    usia: "",
    kelompok: programs[0]?.slug ?? "",
    namaOrtu: "",
    whatsapp: "",
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: hubungkan ke API Route / Google Sheet / email service.
    // Untuk sekarang, redirect ke WhatsApp admin dengan data terisi otomatis.
    const text = encodeURIComponent(
      `Pendaftaran SSB:\nNama Calon Siswa: ${form.nama}\nUsia: ${form.usia}\nKelompok: ${form.kelompok}\nNama Orang Tua: ${form.namaOrtu}\nKontak: ${form.whatsapp}`
    );
    window.open(`https://wa.me/${siteConfig.whatsapp}?text=${text}`, "_blank");
    setSubmitted(true);
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-extrabold text-[#1E7D32]">Form Pendaftaran</h1>
      <p className="mt-2 text-black/60 text-sm">
        Isi data berikut, data akan dikirim ke admin {siteConfig.name} via WhatsApp untuk
        dikonfirmasi.
      </p>

      {submitted ? (
        <div className="mt-8 rounded-xl border border-[#1E7D32] bg-[#1E7D32]/5 p-6 text-sm">
          ✅ Terima kasih! Data Anda sudah disiapkan untuk dikirim ke WhatsApp admin. Mohon kirim
          pesan tersebut untuk menyelesaikan pendaftaran.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-1">Nama Calon Siswa</label>
            <input
              required
              value={form.nama}
              onChange={(e) => setForm({ ...form, nama: e.target.value })}
              className="w-full rounded-lg border border-black/20 px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Usia</label>
            <input
              required
              type="number"
              min={4}
              max={18}
              value={form.usia}
              onChange={(e) => setForm({ ...form, usia: e.target.value })}
              className="w-full rounded-lg border border-black/20 px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Kelompok Usia</label>
            <select
              value={form.kelompok}
              onChange={(e) => setForm({ ...form, kelompok: e.target.value })}
              className="w-full rounded-lg border border-black/20 px-3 py-2"
            >
              {programs.map((p) => (
                <option key={p.slug} value={p.slug}>
                  {p.name} ({p.ageRange})
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Nama Orang Tua / Wali</label>
            <input
              required
              value={form.namaOrtu}
              onChange={(e) => setForm({ ...form, namaOrtu: e.target.value })}
              className="w-full rounded-lg border border-black/20 px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Nomor WhatsApp Orang Tua</label>
            <input
              required
              value={form.whatsapp}
              onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
              placeholder="08xxxxxxxxxx"
              className="w-full rounded-lg border border-black/20 px-3 py-2"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-[#1E7D32] text-white font-semibold px-6 py-3 hover:brightness-110"
          >
            Kirim Pendaftaran via WhatsApp
          </button>
        </form>
      )}
    </div>
  );
}
