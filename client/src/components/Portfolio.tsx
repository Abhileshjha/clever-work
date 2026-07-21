import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Phone } from "lucide-react";

const SparkleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10L12 0Z" fill="hsl(142, 70%, 45%)" />
  </svg>
);

const projectImages = Array.from({ length: 21 }, (_, i) => ({
  src: `/images/portfolio/${i + 1}.png`,
  alt: `Project work sample ${i + 1}`,
}));

export function Portfolio() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section ref={ref} id="portfolio" className="py-20 md:py-28 scroll-mt-20" data-testid="section-portfolio">
      <div className="container mx-auto px-4 md:px-6">
        <div className="sparkle-badge">
          <SparkleIcon />
          Explore
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight">
          Some of my past <span className="text-primary">Projects</span>
        </h2>

        <p className="text-muted-foreground max-w-2xl mb-4 leading-relaxed text-base">
          Website, APPs and more. i have been doing this for long,
          i can build your tech with great quality and security.
        </p>

        <div className="mb-10 max-w-2xl">
          <p className="text-base text-foreground font-bold mb-1">
            I am a full time freelancer working for 10 years, i can build you what you want in QUALITY
          </p>
          <p className="text-sm text-muted-foreground mb-2">
            My quotes would be great and the support + Quality would be AWESOME. Write me now for any questions.
          </p>
          <a
            href="https://wa.me/918766350093?text=Hello,%20found%20you%20@%20thecleverwork%20i%20am%20looking%20for%20a%20Website/APP."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-primary font-semibold"
            style={{ textDecoration: 'none' }}
            data-testid="link-whatsapp-portfolio"
          >
            <Phone className="w-3.5 h-3.5" /> : +91 8766350093
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
          {projectImages.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: Math.min(i * 0.03, 0.5) }}
              className="portfolio-grid-item"
              data-testid={`card-project-${i}`}
            >
              <img
                src={project.src}
                alt={project.alt}
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
