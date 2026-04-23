import { motion } from "framer-motion";
import { Hand, Lightbulb, MessagesSquare, Sprout, Eye, Heart } from "lucide-react";

const benefits = [
  { icon: Hand, title: "Coordenação motora", desc: "Movimentos precisos e refinamento dos gestos." },
  { icon: Lightbulb, title: "Criatividade e imaginação", desc: "Espaço livre para inventar histórias e mundos." },
  { icon: MessagesSquare, title: "Desenvolvimento da linguagem", desc: "Vocabulário e expressão estimulados a cada brincadeira." },
  { icon: Sprout, title: "Autonomia", desc: "Confiança para escolher, construir e decidir." },
  { icon: Eye, title: "Atenção e concentração", desc: "Foco que se constrói brincando, sem pressão." },
  { icon: Heart, title: "Desenvolvimento emocional", desc: "Vínculo, afeto e expressão dos sentimentos." },
];

export function Benefits() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-script text-2xl text-[var(--sage-deep)]">benefícios</p>
          <h2 className="mt-2 font-display text-4xl text-primary text-balance sm:text-5xl">
            Desenvolvimento em cada detalhe
          </h2>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--sage-soft)] transition-colors group-hover:bg-[var(--sage)]">
                <b.icon className="h-6 w-6 text-[var(--sage-deep)] transition-colors group-hover:text-white" strokeWidth={2} />
              </div>
              <h3 className="font-display text-xl text-primary">{b.title}</h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-muted-foreground">{b.desc}</p>
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[var(--mustard)]/10 transition-transform duration-700 group-hover:scale-150" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
