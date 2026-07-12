import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { SITE } from "@/lib/site";

// Floating conversion CTAs: WhatsApp + Call.
// Both actions are pinned bottom-right within the safe-area inset so they
// never overlap page content and remain reachable on every route.
// Desktop shows only the WhatsApp button (call is already in the header);
// mobile shows the pair for one-tap contact.
export function MobileCallFab() {
  const base =
    "grid h-14 w-14 shrink-0 place-items-center rounded-full text-white shadow-luxe ring-1 ring-white/20 transition-transform will-change-transform";
  return (
    <div
      className="fixed z-40 flex flex-col items-end gap-3"
      style={{
        bottom: "calc(1rem + env(safe-area-inset-bottom))",
        right: "calc(1rem + env(safe-area-inset-right))",
      }}
    >
      <motion.a
        href={SITE.whatsappConsultUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        initial={{ y: 40, opacity: 0, scale: 0.9 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.93 }}
        className={`${base}`}
        style={{
          background:
            "linear-gradient(135deg, oklch(0.78 0.17 150) 0%, oklch(0.55 0.16 152) 100%)",
        }}
      >
        <MessageCircle className="h-6 w-6" strokeWidth={2.2} />
        <span
          aria-hidden
          className="pointer-events-none absolute inline-flex h-14 w-14 rounded-full opacity-70"
          style={{
            boxShadow: "0 0 0 0 oklch(0.62 0.16 152 / 0.55)",
            animation: "fabPulse 2.2s cubic-bezier(0.22,1,0.36,1) infinite",
          }}
        />
      </motion.a>

      <motion.a
        href={`tel:${SITE.phone}`}
        aria-label="Call My Dentist"
        initial={{ y: 40, opacity: 0, scale: 0.9 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1.35, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.93 }}
        className={`${base} gradient-aqua md:hidden`}
      >
        <Phone className="h-5 w-5" />
      </motion.a>

      <style>{`
        @keyframes fabPulse {
          0%   { box-shadow: 0 0 0 0 oklch(0.62 0.16 152 / 0.55); }
          70%  { box-shadow: 0 0 0 18px oklch(0.62 0.16 152 / 0); }
          100% { box-shadow: 0 0 0 0 oklch(0.62 0.16 152 / 0); }
        }
        @media (prefers-reduced-motion: reduce) {
          [aria-label="Chat on WhatsApp"] > span[aria-hidden] { animation: none !important; }
        }
      `}</style>
    </div>
  );
}
