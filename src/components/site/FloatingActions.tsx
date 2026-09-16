import { Phone, MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/seo-schema";

export function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="grid h-[52px] w-[52px] place-items-center rounded-full bg-[oklch(0.72_0.17_150)] text-ivory shadow-luxe transition-transform hover:scale-110"
      >
        <MessageCircle size={20} />
      </a>
      <a
        href="tel:+918887811248"
        aria-label="Call"
        className="grid place-items-center rounded-full bg-gradient-luxe text-ivory shadow-luxe transition-transform hover:scale-110 h-[52px] w-[52px]"
      >
        <Phone size={18} />
      </a>
    </div>
  );
}