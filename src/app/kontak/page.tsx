"use client";

import { useState } from "react";
import { siteConfig } from "@/data/site";

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
    <div className="max-w-5xl mx-auto px-4 py-16 grid gap-10 md:grid-cols-2">
      <div>
        <h1 className="text-3xl font-extrabold text-[#1E7D32]">Kontak Kami</h1>
        <ul className="mt-6 space-y-2 text-sm text-black/70">
          <li>📍 {siteConfig.address}</li>
          <li>📞 {siteConfig.phone}</li>
          <li>✉️ {siteConfig.email}</li>
          <li>
            📷{" "}
            <a href={siteConfig.instagram} target="_blank" rel="noreferrer" className="text-[#1E7D32] hover:underline">
              Instagram
            </a>
          </li>
        </ul>

        <div className="mt-6 aspect-video rounded-xl overflow-hidden border border-black/10">
          <iframe
            src={siteConfig.mapsEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            title="Lokasi SSB"
          />
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-4">Kirim Pesan</h2>
        {sent ? (
          <div className="rounded-xl border border-[#1E7D32] bg-[#1E7D32]/5 p-6 text-sm">
            ✅ Terima kasih! Silakan kirim pesan WhatsApp yang sudah terbuka untuk menyelesaikan.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-1">Nama</label>
              <input
                required
                value={form.nama}
                onChange={(e) => setForm({ ...form, nama: e.target.value })}
                className="w-full rounded-lg border border-black/20 px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Pesan</label>
              <textarea
                required
                rows={5}
                value={form.pesan}
                onChange={(e) => setForm({ ...form, pesan: e.target.value })}
                className="w-full rounded-lg border border-black/20 px-3 py-2"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-[#1E7D32] text-white font-semibold px-6 py-3 hover:brightness-110"
            >
              Kirim via WhatsApp
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
