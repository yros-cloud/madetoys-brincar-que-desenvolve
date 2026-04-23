import { motion } from "framer-motion";
import { whatsappLink } from "@/lib/contact";
import heroImg from "@/assets/hero-toys.jpg";
import { ArrowDown, MessageCircle } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-16 pt-8 sm:pb-24 sm:pt-12">
      {/* Decorative leaves */}
      <svg
        className="absolute -left-10 top-20 h-40 w-40 text-[var(--sage)] opacity-40"
        viewBox="0 0 200 200"
        fill="none"
        aria-hidden
      >
        <path d="M20 180 C 20 80, 100 20, 180 30 C 150 110, 80 170, 20 180 Z" fill="currentColor" />
      </svg>
      <svg
        className="absolute -right-8 bottom-10 h-32 w-32 rotate-45 text-[var(--mustard)] opacity-30"
        viewBox="0 0 200 200"
        fill="none"
        aria-hidden
      >
        <circle cx="100" cy="100" r="80" fill="currentColor" />
      </svg>

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-1.5 font-body text-xs font-medium text-muted-foreground backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--sage-deep)]" />
            Recursos pedagógicos artesanais
          </span>

          <h1 className="mt-6 font-display text-5xl leading-[1.05] text-primary text-balance sm:text-6xl lg:text-7xl">
            Madetoys
            <span className="block font-script text-3xl font-normal text-[var(--sage-deep)] sm:text-4xl lg:text-5xl">
              brincar que desenvolve
            </span>
          </h1>

          <p className="mt-6 max-w-xl font-body text-lg leading-relaxed text-muted-foreground text-pretty">
            Recursos pedagógicos artesanais criados para estimular o desenvolvimento infantil
            de forma leve, criativa e afetiva.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#produtos"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 font-body text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:scale-105 hover:shadow-card"
            >
              Ver brinquedos
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-card/70 px-7 py-4 font-body text-sm font-semibold text-primary backdrop-blur transition-all hover:bg-card hover:shadow-soft"
            >
              <MessageCircle className="h-4 w-4" />
              Falar no WhatsApp
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6 text-xs text-muted-foreground">
            <div>
              <p className="font-display text-2xl text-primary">100%</p>
              <p>Artesanal</p>
            </div>
            <div className="h-8 w-px bg-border" />
            <div>
              <p className="font-display text-2xl text-primary">+6</p>
              <p>Categorias</p>
            </div>
            <div className="h-8 w-px bg-border" />
            <div>
              <p className="font-display text-2xl text-primary">★★★★★</p>
              <p>Feito com afeto</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-[var(--sage-soft)] via-[var(--blush)] to-[var(--mustard)] opacity-40 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2.5rem] border border-border bg-card shadow-card">
            <img
              src={heroImg}
              alt="Brinquedos de madeira artesanais Madetoys"
              width={1600}
              height={1200}
              className="h-full w-full object-cover"
            />
          </div>
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-4 hidden rounded-2xl bg-card px-4 py-3 shadow-card sm:block"
          >
            <p className="font-script text-lg text-[var(--sage-deep)]">feito à mão</p>
            <p className="font-body text-xs text-muted-foreground">com madeira & afeto</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
