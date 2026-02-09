import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Informative",
    price: "₹10-25K",
    desc: "Perfect for portfolios, company profiles, and landing pages.",
    features: [
      "Mobile Responsive Design",
      "Dynamic Admin Panel",
      "1 Year Warranty",
      "On-Page SEO Setup",
      "Fast Loading Speed"
    ],
    highlight: false,
    cta: "Start Project"
  },
  {
    name: "eCommerce",
    price: "₹25-55K",
    desc: "Sell anything online. Shopify, WooCommerce, or Custom.",
    features: [
      "Responsive Shop Layout",
      "Admin Dashboard",
      "Categories & Filters",
      "Payment Gateway Integration",
      "Shipping Setup"
    ],
    highlight: true,
    cta: "Build Store"
  },
  {
    name: "Custom App",
    price: "₹50K+",
    desc: "Unique ideas, startups, and complex web applications.",
    features: [
      "Brainstorming Session",
      "Custom UX/UI Design",
      "Complex Database Architecture",
      "API Integrations",
      "Scalable Infrastructure"
    ],
    highlight: false,
    cta: "Consult Now"
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            Transparent <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-muted-foreground">
            Invest in quality. No hidden fees, just great results.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative flex flex-col p-8 rounded-3xl border transition-all duration-300 group
                ${plan.highlight 
                  ? "bg-card border-primary/50 shadow-[0_0_40px_-10px_rgba(0,240,255,0.2)] scale-105 z-10" 
                  : "bg-card/50 border-white/5 hover:border-white/20 hover:bg-card"
                }
              `}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className={`text-4xl font-bold font-display ${plan.highlight ? 'text-primary' : 'text-white'}`}>
                    {plan.price}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{plan.desc}</p>
              </div>

              <div className="flex-grow mb-8 space-y-4">
                {plan.features.map((feature, f) => (
                  <div key={f} className="flex items-center gap-3 text-sm">
                    <div className={`p-1 rounded-full ${plan.highlight ? 'bg-primary/20 text-primary' : 'bg-white/10 text-white'}`}>
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-muted-foreground group-hover:text-white transition-colors">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2
                ${plan.highlight 
                  ? "bg-primary text-black hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25" 
                  : "bg-white/10 text-white hover:bg-white/20"
                }
              `}>
                {plan.cta} <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
