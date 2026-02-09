import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Sparkles, ArrowRight, Check } from "lucide-react";

const plans = [
  {
    label: "Informative Websites",
    price: "10-25K Rs.",
    cta: "Pay 999 Now",
    desc: "Best for company website, portfolio, informative website or landing pages. Free 30 mins consultancy if paid now.",
    features: [
      "Mobile Responsive",
      "Dynamic with Admin panel",
      "1 year warranty",
      "On-Page SEO",
      "Payment plan 33% x 3",
    ],
    highlight: false,
  },
  {
    label: "eCom",
    price: "25-55K Rs",
    cta: "Deposit Rs: 999",
    badge: "Expert",
    desc: "Sell anything online, Shopify, Wordpress, PHP and custom. Grocery, food delivery, Sell anything online. Free 30 mins consultancy if paid now.",
    features: [
      "Responsive, Dynamic eCom",
      "Shopify, WP, Custom With Admin.",
      "Categories, sub cat, Filters, Search",
      "Add to cart, Payment, Shipping etc",
      "1 year warranty",
    ],
    highlight: true,
  },
  {
    label: "Custom",
    price: "50K+ Rs",
    cta: "Deposit Rs 999",
    desc: "Special APPs, websites with new ideas and build something great. Startup ideas. Free 30 mins consultancy if paid now.",
    features: [
      "Brain Storming",
      "Responsive, Dynamic UI",
      "Custom Backend & APIs",
      "Scalable Architecture",
      "1 year warranty",
    ],
    highlight: false,
  },
];

export function Pricing() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section ref={ref} id="pricing" className="py-20" data-testid="section-pricing">
      <div className="container mx-auto px-4 md:px-6">
        <div className="sparkle-badge">
          <Sparkles className="w-4 h-4 text-primary" />
          Affordable Prices
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          My <span className="text-primary">Pricing</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15 }}
              className={`flex flex-col p-6 rounded-xl border ${
                plan.highlight
                  ? "bg-card border-primary/40"
                  : "bg-card border-border"
              }`}
              data-testid={`card-pricing-${i}`}
            >
              <div className="text-xs text-muted-foreground font-medium mb-2">{plan.label}</div>
              <div className="text-3xl font-bold mb-3">{plan.price}</div>

              <a
                href="https://wa.me/918766350093"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm mb-4 transition-all ${
                  plan.highlight
                    ? "bg-primary text-primary-foreground"
                    : "border border-border text-foreground"
                }`}
              >
                {plan.cta} <ArrowRight className="w-3.5 h-3.5" />
              </a>

              {plan.badge && (
                <div className="text-xs font-bold text-primary mb-2">{plan.badge}</div>
              )}

              <p className="text-xs text-muted-foreground mb-5 leading-relaxed">{plan.desc}</p>

              <div className="space-y-3 mt-auto">
                {plan.features.map((feature, f) => (
                  <div key={f} className="flex items-center gap-3 text-sm">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
