import { whatsappLink } from "@/lib/contact";
import { MessageCircle } from "lucide-react";

export function WhatsappFloating() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[var(--whatsapp)] px-5 py-4 text-white shadow-glow transition-all hover:scale-105 hover:shadow-card sm:bottom-8 sm:right-8"
    >
      <MessageCircle className="h-6 w-6" strokeWidth={2.2} />
      <span className="hidden font-body text-sm font-semibold sm:inline">Falar no WhatsApp</span>
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[var(--whatsapp)] opacity-20" />
    </a>
  );
}
