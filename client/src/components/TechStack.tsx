import { motion } from "framer-motion";
import { 
  Code2, ShoppingBag, Globe, Smartphone, 
  Database, Layout, Server, Monitor 
} from "lucide-react";

const technologies = [
  { icon: Code2, label: "PHP" },
  { icon: ShoppingBag, label: "Shopify" },
  { icon: Globe, label: "WordPress" },
  { icon: Layout, label: "Web Design" },
  { icon: Smartphone, label: "Android" },
  { icon: Smartphone, label: "iOS" },
  { icon: Monitor, label: "Google Ads" },
  { icon: Server, label: "eCommerce" },
];

export function TechStack() {
  return (
    <section className="py-20 bg-card/30 border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-4 mb-10 text-center">
        <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
          Tech Stack & Expertise
        </h3>
      </div>
      
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex gap-16 py-4">
          {[...technologies, ...technologies, ...technologies].map((tech, i) => (
            <div key={i} className="flex items-center gap-4 text-2xl font-bold text-muted-foreground/50 hover:text-primary transition-colors cursor-default">
              <tech.icon className="w-8 h-8" />
              <span>{tech.label}</span>
            </div>
          ))}
        </div>
        
        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex gap-16 py-4">
          {[...technologies, ...technologies, ...technologies].map((tech, i) => (
            <div key={i} className="flex items-center gap-4 text-2xl font-bold text-muted-foreground/50 hover:text-primary transition-colors cursor-default">
              <tech.icon className="w-8 h-8" />
              <span>{tech.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
