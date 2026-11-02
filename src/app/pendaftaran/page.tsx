"use client";

import { useState } from "react";
import { CheckCircle2, Send, Users } from "lucide-react";
import { programs, siteConfig } from "@/data/site";
import { Badge } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

const inputClass =
  "w-full rounded-xl border border-black/10 bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-green focus:ring-2 focus:ring-brand-green/20";

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
    <div>
      <section className="relative bg-brand-green-dark text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grass-pattern" />
        <div className="relative max-w-2xl mx-auto px-4 text-center">
          <Badge variant="outline" className="mb-4">
            <Users size={14} /> Pendaftaran Dibuka
          </Badge>
          <h1 className="font-display text-4xl font-extrabold">Form Pendaftaran</h1>
          <p className="mt-3 text-white/70">
            Isi data berikut, data akan dikirim ke admin {siteConfig.name} via WhatsApp untuk
            dikonfirmasi.
          </p>
        </div>
      </section>

      <div className="max-w-xl mx-auto px-4 py-16">
        <FadeIn>
          {submitted ? (
            <div className="rounded-2xl border border-brand-green/30 bg-brand-green/5 p-8 text-center">
              <CheckCircle2 className="mx-auto text-brand-green" size={40} />
              <p className="mt-4 text-sm text-black/70">
                Terima kasih! Data Anda sudah disiapkan untuk dikirim ke WhatsApp admin. Mohon kirim
                pesan tersebut untuk menyelesaikan pendaftaran.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="rounded-2xl border border-black/5 bg-white p-7 shadow-sm space-y-5">
              <div>
                <label className="block text-sm font-semibold mb-1.5 text-brand-ink/80">Nama Calon Siswa</label>
                <input
                  required
                  value={form.nama}
                  onChange={(e) => setForm({ ...form, nama: e.target.value })}
                  className={inputClass}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1.5 text-brand-ink/80">Usia</label>
                <input
                  required
                  type="number"
                  min={4}
                  max={18}
                  value={form.usia}
                  onChange={(e) => setForm({ ...form, usia: e.target.value })}
                  className={inputClass}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1.5 text-brand-ink/80">Kelompok Usia</label>
                <select
                  value={form.kelompok}
                  onChange={(e) => setForm({ ...form, kelompok: e.target.value })}
                  className={inputClass}
                >
                  {programs.map((p) => (
                    <option key={p.slug} value={p.slug}>
                      {p.name} ({p.ageRange})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1.5 text-brand-ink/80">Nama Orang Tua / Wali</label>
                <input
                  required
                  value={form.namaOrtu}
                  onChange={(e) => setForm({ ...form, namaOrtu: e.target.value })}
                  className={inputClass}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1.5 text-brand-ink/80">Nomor WhatsApp Orang Tua</label>
                <input
                  required
                  value={form.whatsapp}
                  onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                  placeholder="08xxxxxxxxxx"
                  className={inputClass}
                />
              </div>

              <Button type="submit" className="w-full">
                Kirim Pendaftaran via WhatsApp <Send size={16} />
              </Button>
            </form>
          )}
        </FadeIn>
      </div>
    </div>
  );
}
