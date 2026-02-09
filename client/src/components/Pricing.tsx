import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight, Check } from "lucide-react";

const SparkleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10L12 0Z" fill="hsl(142, 70%, 45%)" />
  </svg>
);

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
    <section ref={ref} id="pricing" className="py-20 md:py-28 scroll-mt-20" data-testid="section-pricing">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="sparkle-badge mx-auto">
          <SparkleIcon />
          Affordable Prices
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 leading-tight">
          My <span className="text-primary">Pricing</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto text-left">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15 }}
              className={`flex flex-col rounded-2xl border p-6 md:p-8 ${
                plan.highlight
                  ? "bg-card border-primary/30"
                  : "bg-card border-border"
              }`}
              data-testid={`card-pricing-${i}`}
            >
              <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-3">
                {plan.label}
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-4">{plan.price}</div>

              <a
                href="https://wa.me/918766350093?text=Hi,%20i%20am%20interested%20in%20the%20pricing%20plan"
                target="_blank"
                rel="noopener noreferrer"
                className={`trk-btn trk-btn--sm justify-center mb-5 ${
                  plan.highlight ? "trk-btn--primary" : "trk-btn--outline"
                }`}
                data-testid={`link-pricing-cta-${i}`}
              >
                {plan.cta} <ArrowRight className="w-4 h-4" />
              </a>

              {plan.badge && (
                <div className="text-xs font-bold text-primary mb-2 uppercase tracking-wider">{plan.badge}</div>
              )}

              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{plan.desc}</p>

              <div className="space-y-4 mt-auto">
                {plan.features.map((feature, f) => (
                  <div key={f} className="flex items-center gap-3 text-sm">
                    <div className="pricing-check">
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
