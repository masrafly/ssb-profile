import { siteConfig } from "@/data/site";

export default function WhatsAppButton() {
  const message = encodeURIComponent(
    `Halo ${siteConfig.name}, saya ingin bertanya tentang pendaftaran SSB.`
  );
  const link = `https://wa.me/${siteConfig.whatsapp}?text=${message}`;

  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat via WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] text-white px-4 py-3 shadow-lg hover:brightness-95 transition"
    >
      <span className="text-xl">💬</span>
      <span className="hidden sm:inline text-sm font-semibold">Chat Admin</span>
    </a>
  );
}
