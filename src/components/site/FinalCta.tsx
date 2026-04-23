import { motion } from "framer-motion";
import { whatsappLink } from "@/lib/contact";
import { MessageCircle } from "lucide-react";

export function FinalCta() {
  return (
    <section id="contato" className="px-5 py-20 sm:px-8 sm:py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] bg-primary px-7 py-16 text-center shadow-card sm:px-14 sm:py-24"
      >
        {/* Decorative shapes */}
        <div className="absolute -left-10 -top-10 h-48 w-48 rounded-full bg-[var(--mustard)]/30 blur-2xl" />
        <div className="absolute -bottom-10 -right-10 h-56 w-56 rounded-full bg-[var(--sage)]/30 blur-2xl" />
        <svg className="absolute right-8 top-8 h-12 w-12 text-[var(--sage)] opacity-60" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2 C 16 6, 16 14, 12 22 C 8 14, 8 6, 12 2 Z" />
        </svg>

        <div className="relative">
          <p className="font-script text-2xl text-[var(--sage)]">vamos conversar</p>
          <h2 className="mt-3 font-display text-4xl text-primary-foreground text-balance sm:text-5xl lg:text-6xl">
            Vamos escolher o brinquedo ideal juntos?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl font-body text-lg leading-relaxed text-primary-foreground/85 text-pretty">
            Cada criança é única — e o brinquedo certo pode fazer toda a diferença. Entre em
            contato e descubra as melhores opções para estimular o desenvolvimento com leveza
            e criatividade.
          </p>

          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-[var(--whatsapp)] px-8 py-5 font-body text-base font-semibold text-white shadow-glow transition-all hover:scale-105"
          >
            <MessageCircle className="h-5 w-5" />
            Falar no WhatsApp
          </a>
        </div>
      </motion.div>
    </section>
  );
}
