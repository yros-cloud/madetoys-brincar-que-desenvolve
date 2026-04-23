import { motion } from "framer-motion";
import { whatsappLink } from "@/lib/contact";
import catEducativos from "@/assets/cat-educativos.jpg";
import catKits from "@/assets/cat-kits.jpg";
import catPedagogicos from "@/assets/cat-pedagogicos.jpg";
import catSensoriais from "@/assets/cat-sensoriais.jpg";
import catAlfa from "@/assets/cat-alfabetizacao.jpg";
import catFazDeConta from "@/assets/cat-fazdeconta.jpg";

type Category = {
  title: string;
  description: string;
  image: string;
  highlight?: boolean;
  accent: string;
};

const categories: Category[] = [
  {
    title: "Brinquedos Educativos",
    description:
      "Peças que estimulam o raciocínio, coordenação motora e aprendizagem de forma lúdica.",
    image: catEducativos,
    accent: "var(--mustard)",
  },
  {
    title: "Kits Criativos",
    description:
      "Kits onde a criança participa da construção ou finalização do brinquedo, estimulando autonomia, criatividade e vínculo.",
    image: catKits,
    highlight: true,
    accent: "var(--sage-deep)",
  },
  {
    title: "Recursos Pedagógicos",
    description:
      "Materiais pensados para apoiar o desenvolvimento infantil em casa ou na escola.",
    image: catPedagogicos,
    accent: "var(--blue-muted)",
  },
  {
    title: "Jogos Sensoriais",
    description: "Experiências que exploram tato, cores, formas e percepção.",
    image: catSensoriais,
    accent: "var(--blush)",
  },
  {
    title: "Alfabetização Lúdica",
    description:
      "Ferramentas que ajudam no processo de leitura e escrita de forma leve e divertida.",
    image: catAlfa,
    accent: "var(--mustard)",
  },
  {
    title: "Faz de Conta",
    description: "Brinquedos que estimulam imaginação, expressão e criatividade.",
    image: catFazDeConta,
    accent: "var(--sage)",
  },
];

export function Catalog() {
  return (
    <section id="produtos" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-script text-2xl text-[var(--sage-deep)]">catálogo</p>
          <h2 className="mt-2 font-display text-4xl text-primary text-balance sm:text-5xl">
            Conheça nossos brinquedos
          </h2>
          <p className="mt-5 font-body text-base text-muted-foreground text-pretty">
            Cada categoria foi pensada para acompanhar momentos diferentes do desenvolvimento
            infantil. Toque para conversar sobre qualquer peça.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, i) => (
            <motion.a
              key={cat.title}
              href={whatsappLink(`Olá! Tenho interesse em ${cat.title} da Madetoys.`)}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.06 }}
              className={`group relative flex flex-col overflow-hidden rounded-3xl border bg-card shadow-soft transition-all hover:-translate-y-1 hover:shadow-card ${
                cat.highlight
                  ? "border-[var(--sage-deep)]/40 ring-2 ring-[var(--sage-deep)]/20 lg:row-span-2"
                  : "border-border"
              }`}
            >
              {cat.highlight && (
                <span className="absolute right-4 top-4 z-10 rounded-full bg-[var(--sage-deep)] px-3 py-1 font-body text-[10px] font-bold uppercase tracking-wider text-white shadow-soft">
                  ✦ Destaque
                </span>
              )}
              <div className={`relative overflow-hidden ${cat.highlight ? "aspect-[4/5]" : "aspect-[4/3]"}`}>
                <img
                  src={cat.image}
                  alt={cat.title}
                  loading="lazy"
                  width={900}
                  height={900}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100"
                  style={{ background: `linear-gradient(180deg, transparent 50%, ${cat.accent}40)` }}
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-6">
                <h3 className="font-display text-2xl text-primary">{cat.title}</h3>
                <p className="font-body text-sm leading-relaxed text-muted-foreground">
                  {cat.description}
                </p>
                <span className="mt-auto inline-flex items-center gap-1.5 font-body text-sm font-semibold text-[var(--sage-deep)]">
                  Conversar sobre
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-transform group-hover:translate-x-1">
                    <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
