import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { TechStack } from "@/components/TechStack";
import { Stats } from "@/components/Stats";
import { Experience } from "@/components/Experience";
import { Portfolio } from "@/components/Portfolio";
import { Pricing } from "@/components/Pricing";
import { ContactFooter } from "@/components/ContactFooter";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />

      <main>
        <Hero />
        <TechStack />
        <div id="about">
          <Stats />
        </div>
        <Experience />
        <Portfolio />
        <Pricing />
      </main>

      <ContactFooter />
    </div>
  );
}
