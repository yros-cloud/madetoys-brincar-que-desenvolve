import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl text-foreground">404</h1>
        <h2 className="mt-4 font-display text-2xl text-foreground">Página não encontrada</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          A página que você procura não existe ou foi movida.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:scale-105"
          >
            Voltar ao início
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Madetoys — Brincar que desenvolve" },
      {
        name: "description",
        content:
          "Recursos pedagógicos artesanais que estimulam o desenvolvimento infantil de forma leve, criativa e afetiva.",
      },
      { name: "author", content: "Madetoys" },
      { property: "og:title", content: "Madetoys — Brincar que desenvolve" },
      {
        property: "og:description",
        content: "Brinquedos artesanais com propósito pedagógico para crianças, escolas e educadores.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Madetoys — Brincar que desenvolve" },
      { name: "description", content: "Madetoys: Brincar que desenvolve é uma landing page que apresenta brinquedos pedagógicos artesanais." },
      { property: "og:description", content: "Madetoys: Brincar que desenvolve é uma landing page que apresenta brinquedos pedagógicos artesanais." },
      { name: "twitter:description", content: "Madetoys: Brincar que desenvolve é uma landing page que apresenta brinquedos pedagógicos artesanais." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/FJFzwCyNeTVim9GkBdTy2XnyQ6H3/social-images/social-1776968380527-ChatGPT_Image_Apr_23,_2026,_02_15_45_PM.webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/FJFzwCyNeTVim9GkBdTy2XnyQ6H3/social-images/social-1776968380527-ChatGPT_Image_Apr_23,_2026,_02_15_45_PM.webp" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Nunito:wght@400;500;600;700&family=Caveat:wght@500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
