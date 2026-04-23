import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "Meu filho ficou encantado e não larga mais. Dá pra ver que não é um brinquedo comum.",
    name: "Mariana",
    role: "Mãe do Theo, 4 anos",
  },
  {
    text: "Uso em sala de aula e as crianças amam. Ajuda muito no desenvolvimento.",
    name: "Profa. Camila",
    role: "Educação Infantil",
  },
  {
    text: "É lindo, bem feito e ainda tem propósito.",
    name: "Juliana",
    role: "Psicopedagoga",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-script text-2xl text-[var(--sage-deep)]">depoimentos</p>
          <h2 className="mt-2 font-display text-4xl text-primary text-balance sm:text-5xl">
            O que dizem sobre nossos brinquedos
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className={`relative flex flex-col gap-5 rounded-3xl border border-border p-7 shadow-soft ${
                i === 1 ? "bg-[var(--sage-soft)]/60 md:-translate-y-4" : "bg-card"
              }`}
            >
              <Quote className="h-8 w-8 text-[var(--mustard)]" strokeWidth={1.5} />
              <blockquote className="font-display text-lg italic leading-relaxed text-primary text-pretty">
                "{t.text}"
              </blockquote>
              <figcaption className="mt-auto border-t border-border/60 pt-4">
                <p className="font-body text-sm font-semibold text-primary">{t.name}</p>
                <p className="font-body text-xs text-muted-foreground">{t.role}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
