import { motion } from "framer-motion";
import kitsImg from "@/assets/kits-creativos.jpg";
import { whatsappLink } from "@/lib/contact";
import { Sparkles, Wand2, Brain, Trophy } from "lucide-react";

const items = [
  { icon: Wand2, label: "Autonomia" },
  { icon: Sparkles, label: "Criatividade" },
  { icon: Brain, label: "Concentração" },
  { icon: Trophy, label: "Senso de conquista" },
];

export function KitsHighlight() {
  return (
    <section
      id="kits"
      className="relative overflow-hidden py-20 sm:py-28"
    >
      <div className="absolute inset-0 -z-10 mx-4 rounded-[3rem] bg-gradient-to-br from-[var(--sage-soft)] via-[var(--cream)] to-[var(--blush)]/40 sm:mx-8" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="overflow-hidden rounded-[2.5rem] border border-border shadow-card">
            <img
              src={kitsImg}
              alt="Criança pintando seu próprio brinquedo"
              loading="lazy"
              width={1400}
              height={1400}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -right-3 -top-3 rotate-6 rounded-2xl bg-[var(--mustard)] px-4 py-2 shadow-soft sm:right-6 sm:-top-5">
            <p className="font-script text-xl text-primary">kits criativos</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <p className="font-script text-2xl text-[var(--sage-deep)]">nosso diferencial</p>
          <h2 className="mt-2 font-display text-4xl text-primary text-balance sm:text-5xl">
            A criança também faz parte da criação
          </h2>
          <p className="mt-6 font-body text-lg leading-relaxed text-muted-foreground text-pretty">
            Nossos kits criativos vão além do brincar: eles convidam a criança a participar do
            processo. Ao montar, pintar ou finalizar o próprio brinquedo, ela desenvolve:
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3">
            {items.map((it) => (
              <div
                key={it.label}
                className="flex items-center gap-3 rounded-2xl border border-border bg-card/80 px-4 py-3 backdrop-blur"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--sage-soft)]">
                  <it.icon className="h-4 w-4 text-[var(--sage-deep)]" strokeWidth={2.2} />
                </span>
                <span className="font-body text-sm font-semibold text-primary">{it.label}</span>
              </div>
            ))}
          </div>

          <p className="mt-8 font-display text-xl italic text-primary">
            Uma experiência completa de aprendizado com significado.
          </p>

          <a
            href={whatsappLink("Olá! Quero saber mais sobre os Kits Criativos da Madetoys.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 font-body text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:scale-105"
          >
            Quero conhecer os kits
          </a>
        </motion.div>
      </div>
    </section>
  );
}
