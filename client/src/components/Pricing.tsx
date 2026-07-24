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
    label: "SEO & Google Ads",
    price: "15-30K Rs/mo",
    cta: "Pay 999 Now",
    desc: "Best for businesses wanting more visibility on Google. On-page SEO, keyword research and hands-on Google Ads management. Free 30 mins consultancy if paid now.",
    features: [
      "Keyword Research & On-Page SEO",
      "Google Ads Setup & Management",
      "Monthly Performance Reports",
      "1 Free Strategy Call",
      "Payment plan 33% x 3",
    ],
    highlight: false,
  },
  {
    label: "Social Media & Meta Ads",
    price: "25-50K Rs/mo",
    cta: "Deposit Rs: 999",
    badge: "Expert",
    desc: "Grow your brand on Instagram and Facebook with content, community management and performance-driven Meta Ads campaigns. Free 30 mins consultancy if paid now.",
    features: [
      "Content Calendar & Posting",
      "Meta Ads Campaign Management",
      "Audience Targeting & Optimization",
      "Monthly Growth Reports",
      "Dedicated Account Manager",
    ],
    highlight: true,
  },
  {
    label: "Full Funnel",
    price: "50K+ Rs",
    cta: "Deposit Rs 999",
    desc: "Landing pages, lead-generation funnels, branding and content — a complete growth package tailored to your business. Free 30 mins consultancy if paid now.",
    features: [
      "Landing Page / Website",
      "Lead Generation Funnel",
      "Branding & Content Creation",
      "Custom Growth Strategy",
      "Ongoing Optimization",
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
          Our <span className="text-primary">Pricing</span>
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
