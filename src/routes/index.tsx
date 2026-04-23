import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Catalog } from "@/components/site/Catalog";
import { KitsHighlight } from "@/components/site/KitsHighlight";
import { Benefits } from "@/components/site/Benefits";
import { ForWhom } from "@/components/site/ForWhom";
import { AboutPaula } from "@/components/site/AboutPaula";
import { Testimonials } from "@/components/site/Testimonials";
import { FinalCta } from "@/components/site/FinalCta";
import { Footer } from "@/components/site/Footer";
import { WhatsappFloating } from "@/components/site/WhatsappFloating";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Catalog />
        <KitsHighlight />
        <Benefits />
        <ForWhom />
        <AboutPaula />
        <Testimonials />
        <FinalCta />
      </main>
      <Footer />
      <WhatsappFloating />
    </div>
  );
}
