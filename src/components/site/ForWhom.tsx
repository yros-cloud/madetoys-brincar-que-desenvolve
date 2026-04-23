import { motion } from "framer-motion";

const audiences = [
  { emoji: "👨‍👩‍👧", label: "Pais que querem estimular o desenvolvimento dos filhos" },
  { emoji: "🍎", label: "Professores e educadores" },
  { emoji: "🏫", label: "Escolas de educação infantil" },
  { emoji: "🤍", label: "Profissionais que trabalham com crianças" },
];

export function ForWhom() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="rounded-[2.5rem] border border-border bg-card p-8 shadow-soft sm:p-14">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-script text-2xl text-[var(--sage-deep)]">para quem é</p>
            <h2 className="mt-2 font-display text-4xl text-primary text-balance sm:text-5xl">
              Para quem a Madetoys é feita
            </h2>
            <p className="mt-5 font-body text-base text-muted-foreground text-pretty">
              Nossos brinquedos são ideais para:
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {audiences.map((a, i) => (
              <motion.div
                key={a.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="flex items-center gap-4 rounded-2xl border border-border bg-background/60 px-5 py-4 backdrop-blur transition-all hover:border-[var(--sage)] hover:bg-[var(--sage-soft)]/30"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--cream)] text-2xl shadow-soft">
                  {a.emoji}
                </span>
                <span className="font-body text-base font-medium text-primary">{a.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
