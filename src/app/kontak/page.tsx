"use client";

import { useState } from "react";
import { Camera, CheckCircle2, Mail, MapPin, Phone, Send } from "lucide-react";
import { heroImages, siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { PageHero } from "@/components/ui/PageHero";

const inputClass =
  "w-full rounded-xl border border-black/10 bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-green focus:ring-2 focus:ring-brand-green/20";

export default function KontakPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ nama: "", pesan: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = encodeURIComponent(`Pesan dari ${form.nama}:\n${form.pesan}`);
    window.open(`https://wa.me/${siteConfig.whatsapp}?text=${text}`, "_blank");
    setSent(true);
  }

  return (
    <div>
      <PageHero image={heroImages.kontak} imageAlt="Lapangan futsal MF Academy" title="Kontak Kami" size="sm" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14 sm:py-16 grid gap-10 grid-cols-1 md:grid-cols-2">
        <FadeIn>
          <ul className="space-y-4 text-sm text-black/70">
            <li className="flex gap-3 items-start">
              <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
                <MapPin size={16} />
              </span>
              <span className="pt-1.5">{siteConfig.address}</span>
            </li>
            <li className="flex gap-3 items-center">
              <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
                <Phone size={16} />
              </span>
              {siteConfig.phone}
            </li>
            <li className="flex gap-3 items-center">
              <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
                <Mail size={16} />
              </span>
              <span className="break-all">{siteConfig.email}</span>
            </li>
            <li className="flex gap-3 items-center">
              <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
                <Camera size={16} />
              </span>
              <a href={siteConfig.instagram} target="_blank" rel="noreferrer" className="text-brand-green font-semibold hover:underline">
                Instagram
              </a>
            </li>
          </ul>

          <div className="mt-6 aspect-video rounded-2xl overflow-hidden border border-black/10 shadow-sm">
            <iframe
              src={siteConfig.mapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              title="Lokasi MF Academy"
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="font-display text-xl font-bold text-brand-green-dark mb-4">Kirim Pesan</h2>
          {sent ? (
            <div className="rounded-2xl border border-brand-green/30 bg-brand-green/5 p-8 text-center">
              <CheckCircle2 className="mx-auto text-brand-green" size={36} />
              <p className="mt-3 text-sm text-black/70">
                Terima kasih! Silakan kirim pesan WhatsApp yang sudah terbuka untuk menyelesaikan.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="rounded-2xl border border-black/5 bg-white p-5 sm:p-7 shadow-sm space-y-5">
              <div>
                <label className="block text-sm font-semibold mb-1.5 text-brand-ink/80">Nama</label>
                <input
                  required
                  value={form.nama}
                  onChange={(e) => setForm({ ...form, nama: e.target.value })}
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1.5 text-brand-ink/80">Pesan</label>
                <textarea
                  required
                  rows={5}
                  value={form.pesan}
                  onChange={(e) => setForm({ ...form, pesan: e.target.value })}
                  className={inputClass}
                />
              </div>
              <Button type="submit" className="w-full">
                Kirim via WhatsApp <Send size={16} />
              </Button>
            </form>
          )}
        </FadeIn>
      </div>
    </div>
  );
}
