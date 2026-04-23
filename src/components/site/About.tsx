import { motion } from "framer-motion";

export function About() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="font-script text-2xl text-[var(--sage-deep)]"
        >
          o que é a Madetoys
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mt-3 font-display text-4xl text-primary text-balance sm:text-5xl"
        >
          Mais do que brinquedos,{" "}
          <span className="text-[var(--sage-deep)]">experiências de aprendizagem</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-8 space-y-5 font-body text-lg leading-relaxed text-muted-foreground text-pretty"
        >
          <p>
            A Madetoys nasce com o propósito de transformar o brincar em desenvolvimento real.
            Cada peça é pensada com intenção pedagógica, respeitando o tempo da criança e
            estimulando habilidades importantes de forma natural e divertida.
          </p>
          <p className="font-display text-xl italic text-primary sm:text-2xl">
            Aqui, o brincar vai além do entretenimento — ele se torna ferramenta de crescimento.
          </p>
        </motion.div>

        <div className="mx-auto mt-10 flex max-w-xs items-center justify-center divider-leaf gap-4">
          <svg width="20" height="20" viewBox="0 0 20 20" className="text-[var(--sage)]" fill="currentColor">
            <path d="M10 2 C 14 6, 14 14, 10 18 C 6 14, 6 6, 10 2 Z" />
          </svg>
        </div>
      </div>
    </section>
  );
}
