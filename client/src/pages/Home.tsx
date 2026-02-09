import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { TechStack } from "@/components/TechStack";
import { Stats } from "@/components/Stats";
import { Experience } from "@/components/Experience";
import { Pricing } from "@/components/Pricing";
import { Portfolio } from "@/components/Portfolio";
import { ContactFooter } from "@/components/ContactFooter";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary origin-left z-[60]"
        style={{ scaleX }}
      />
      
      <Navigation />
      
      <main>
        <Hero />
        <TechStack />
        <Stats />
        <div id="about">
          {/* About section is implicitly covered in Hero & Stats, adding visual break */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-10" />
        </div>
        <Experience />
        <Pricing />
        <Portfolio />
      </main>

      <ContactFooter />
    </div>
  );
}
