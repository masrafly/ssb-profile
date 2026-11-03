"use client";

import { useState } from "react";
import { CheckCircle2, Send, Users } from "lucide-react";
import { heroImages, programs, siteConfig } from "@/data/site";
import { Badge } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { PageHero } from "@/components/ui/PageHero";

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
      <PageHero
        image={heroImages.pendaftaran}
        imageAlt="Anak-anak bersemangat berlatih sepak bola"
        title="Form Pendaftaran"
        description={`Isi data berikut, data akan dikirim ke admin ${siteConfig.name} via WhatsApp untuk dikonfirmasi.`}
        size="sm"
        eyebrow={
          <Badge variant="outline" className="mb-4">
            <Users size={14} /> Pendaftaran Dibuka
          </Badge>
        }
      />

      <div className="max-w-xl mx-auto px-4 sm:px-6 py-14 sm:py-16">
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
            <form onSubmit={handleSubmit} className="rounded-2xl border border-black/5 bg-white p-5 sm:p-7 shadow-sm space-y-5">
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
