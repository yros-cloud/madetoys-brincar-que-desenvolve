import logo from "@/assets/madetoys-logo.png";
import { whatsappLink } from "@/lib/contact";
import { useEffect, useState } from "react";

const links = [
  { href: "#produtos", label: "Catálogo" },
  { href: "#kits", label: "Kits Criativos" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-500 ${
        scrolled
          ? "border-b border-border/60 bg-background/85 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8 sm:py-4">
        <a href="#top" className="flex items-center gap-2">
          <img src={logo} alt="Madetoys" className="h-12 w-12 rounded-full object-cover sm:h-14 sm:w-14" />
          <div className="leading-tight">
            <p className="font-brand text-xl sm:text-2xl">
              <span className="text-[var(--brown)]">Made</span><span className="text-[var(--sage-deep)]">toys</span>
            </p>
            <p className="font-script text-sm text-[var(--brown-soft)] sm:text-base">brincar que desenvolve</p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-body text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full bg-primary px-5 py-2.5 font-body text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:scale-105 sm:inline-flex"
        >
          WhatsApp
        </a>
      </div>
    </header>
  );
}
