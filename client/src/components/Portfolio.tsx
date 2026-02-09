import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

// Using Unsplash images for portfolio placeholders
const projects = [
  {
    title: "E-Commerce Fashion",
    cat: "Shopify",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Modern Architecture",
    cat: "Web Design",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Food Delivery App",
    cat: "Mobile App",
    image: "https://images.unsplash.com/photo-1526304640152-d4619684e484?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Tech Startup",
    cat: "WordPress",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Fitness Tracker",
    cat: "React Native",
    image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Finance Dashboard",
    cat: "Full Stack",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
  }
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-card/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
              Featured <span className="text-secondary">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-lg">
              A selection of projects that showcase my passion for clean code and exceptional design.
            </p>
          </div>
          <button className="px-6 py-2 rounded-full border border-white/10 hover:bg-white/5 transition-colors text-sm font-medium">
            View All Projects
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
            >
              <div className="aspect-[4/3] w-full bg-muted">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-primary text-xs font-bold uppercase tracking-wider mb-2 block">
                    {project.cat}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-1 flex items-center gap-2">
                    {project.title} <ExternalLink className="w-4 h-4 opacity-50" />
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
