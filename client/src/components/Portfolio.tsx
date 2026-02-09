import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Sparkles, Phone } from "lucide-react";

const projects = [
  { color: "from-blue-600/30 to-blue-900/30", label: "E-Commerce Store" },
  { color: "from-purple-600/30 to-purple-900/30", label: "Business Portal" },
  { color: "from-green-600/30 to-green-900/30", label: "Startup Platform" },
  { color: "from-orange-600/30 to-orange-900/30", label: "Mobile App" },
  { color: "from-pink-600/30 to-pink-900/30", label: "Custom CRM" },
  { color: "from-cyan-600/30 to-cyan-900/30", label: "Shopify Store" },
  { color: "from-yellow-600/30 to-yellow-900/30", label: "WordPress Site" },
  { color: "from-red-600/30 to-red-900/30", label: "SaaS Dashboard" },
  { color: "from-indigo-600/30 to-indigo-900/30", label: "Food Delivery App" },
  { color: "from-teal-600/30 to-teal-900/30", label: "Real Estate Portal" },
  { color: "from-rose-600/30 to-rose-900/30", label: "Healthcare App" },
  { color: "from-emerald-600/30 to-emerald-900/30", label: "Education Platform" },
];

export function Portfolio() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section ref={ref} id="portfolio" className="py-20" data-testid="section-portfolio">
      <div className="container mx-auto px-4 md:px-6">
        <div className="sparkle-badge">
          <Sparkles className="w-4 h-4 text-primary" />
          Explore
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Some of my past <span className="text-primary">Projects</span>
        </h2>

        <p className="text-muted-foreground max-w-2xl mb-4 leading-relaxed">
          Website, APPs and more. I have been doing this for long,
          I can build your tech with great quality and security.
        </p>

        <div className="bg-card rounded-xl border border-border p-4 mb-10 max-w-2xl">
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">I am a full time freelancer working for 10 years, I can build you what you want in QUALITY</strong>
            <br />
            My quotes would be great and the support + Quality would be AWESOME. Write me now for any questions.
          </p>
          <a
            href="https://wa.me/918766350093"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-primary font-semibold mt-2"
            data-testid="link-whatsapp-portfolio"
          >
            <Phone className="w-3.5 h-3.5" /> +91 8766 3500 93
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.05 }}
              className="aspect-[4/3] rounded-xl border border-border overflow-hidden cursor-pointer group"
              data-testid={`card-project-${i}`}
            >
              <div className={`w-full h-full bg-gradient-to-br ${project.color} flex items-center justify-center p-4 transition-transform duration-300`}>
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-white/10 flex items-center justify-center">
                    <span className="text-lg font-bold text-white/60">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <span className="text-sm font-medium text-white/80">{project.label}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
