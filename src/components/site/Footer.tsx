import logo from "@/assets/madetoys-logo.png";
import { whatsappLink } from "@/lib/contact";
import { Instagram, Facebook, Mail, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-[var(--sand)]/40 px-5 py-14 sm:px-8">
      <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="Madetoys" className="h-14 w-14 rounded-full object-cover" />
            <div className="leading-tight">
              <p className="font-display text-2xl text-primary">Madetoys</p>
              <p className="font-script text-base text-[var(--sage-deep)]">brincar que desenvolve</p>
            </div>
          </div>
          <p className="mt-5 max-w-xs font-body text-sm leading-relaxed text-muted-foreground">
            Recursos pedagógicos artesanais para educação infantil, feitos com afeto, intenção
            e propósito.
          </p>
        </div>

        <div>
          <h3 className="font-display text-lg text-primary">Navegação</h3>
          <ul className="mt-4 space-y-2 font-body text-sm">
            <li><a href="#produtos" className="text-muted-foreground transition-colors hover:text-primary">Catálogo</a></li>
            <li><a href="#kits" className="text-muted-foreground transition-colors hover:text-primary">Kits Criativos</a></li>
            <li><a href="#sobre" className="text-muted-foreground transition-colors hover:text-primary">Sobre Paula</a></li>
            <li><a href="#contato" className="text-muted-foreground transition-colors hover:text-primary">Contato</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg text-primary">Contato</h3>
          <ul className="mt-4 space-y-3 font-body text-sm">
            <li>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </li>
            <li>
              <a href="mailto:contato@madetoys.com.br" className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary">
                <Mail className="h-4 w-4" />
                <span>contato@madetoys.com.br</span>
              </a>
            </li>
          </ul>
          <div className="mt-5 flex gap-3">
            <a href="#" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-primary transition-all hover:scale-110 hover:bg-[var(--sage-soft)]">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-primary transition-all hover:scale-110 hover:bg-[var(--sage-soft)]">
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-6xl border-t border-border pt-6 text-center font-body text-xs text-muted-foreground">
        © {new Date().getFullYear()} Madetoys · Feito à mão, com afeto.
      </div>
    </footer>
  );
}
