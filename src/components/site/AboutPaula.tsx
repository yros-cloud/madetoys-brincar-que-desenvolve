import { motion } from "framer-motion";
import paulaImg from "@/assets/paula.jpg";

export function AboutPaula() {
  return (
    <section id="sobre" className="py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_1.2fr]">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-sm lg:max-w-none"
        >
          <div className="absolute -inset-4 rotate-3 rounded-[2.5rem] bg-[var(--sage-soft)]" />
          <div className="absolute -inset-4 -rotate-2 rounded-[2.5rem] bg-[var(--mustard)]/40" />
          <div className="relative overflow-hidden rounded-[2.5rem] border border-border shadow-card">
            <img
              src={paulaImg}
              alt="Paula Maushi Uehara, fundadora da Madetoys"
              loading="lazy"
              width={1200}
              height={1400}
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <p className="font-script text-2xl text-[var(--sage-deep)]">quem está por trás</p>
          <h2 className="mt-2 font-display text-4xl text-primary text-balance sm:text-5xl">
            Quem está por trás da Madetoys
          </h2>

          <div className="mt-6 space-y-5 font-body text-lg leading-relaxed text-muted-foreground text-pretty">
            <p>
              A Madetoys foi criada por <strong className="text-primary">Paula Maushi Uehara</strong>,
              pedagoga e psicoterapeuta, apaixonada pelo desenvolvimento infantil.
            </p>
            <p>
              Com experiência prática no dia a dia com crianças na{" "}
              <em>Escola dos Sonhos</em>, Paula une conhecimento pedagógico com sensibilidade
              artesanal para criar brinquedos que realmente fazem sentido para o aprendizado.
            </p>
            <p>
              Sua trajetória com trabalhos manuais também inclui projetos anteriores como o{" "}
              <em>GeekFelt</em>, sempre com foco em criatividade, afeto e expressão.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {["Pedagoga", "Psicoterapeuta", "Artesã", "Mãe de projetos"].map((t) => (
              <span
                key={t}
                className="rounded-full border border-border bg-card px-4 py-1.5 font-body text-sm text-primary"
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
