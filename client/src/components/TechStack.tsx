import { Sparkles } from "lucide-react";

const techs = ["PHP", "Shopify", "Wordpress", "eCom", "APPs", "Web"];

export function TechStack() {
  const items = [...techs, ...techs, ...techs, ...techs];

  return (
    <section className="py-6 border-y border-border overflow-hidden" data-testid="section-techstack">
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((tech, i) => (
          <div key={i} className="flex items-center gap-3 mx-8 shrink-0">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-lg font-semibold text-muted-foreground">{tech}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
