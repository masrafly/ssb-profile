import { MessageCircle } from "lucide-react";
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
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] text-white pl-3.5 pr-4 py-3.5 shadow-lg shadow-[#25D366]/40 hover:shadow-xl hover:shadow-[#25D366]/50 hover:-translate-y-0.5 transition-all"
    >
      <MessageCircle size={20} fill="white" className="text-[#25D366]" />
      <span className="hidden sm:inline text-sm font-semibold">Chat Admin</span>
    </a>
  );
}
