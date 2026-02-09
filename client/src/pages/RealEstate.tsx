import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Menu, X, Phone, Mail, MapPin, ArrowRight, Check, Star,
  TrendingUp, Shield, Users, Clock, ChevronRight,
  BarChart3, Target, Zap, Search, Eye, MousePointerClick,
  Building2, Globe, Megaphone, LineChart, Send, MessageCircle
} from "lucide-react";
import { SiWhatsapp, SiGoogle, SiFacebook, SiInstagram } from "react-icons/si";
import { LeadPopup } from "@/components/LeadPopup";
import { LeadForm } from "@/components/LeadForm";

function RENav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#results", label: "Results" },
    { href: "#services", label: "Services" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#pricing", label: "Pricing" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "re-nav--scrolled" : "bg-transparent"
      }`}
      data-testid="re-nav"
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between gap-4 py-4">
        <a href="/real-estate" className="flex items-center gap-2 shrink-0" style={{ textDecoration: 'none' }} data-testid="re-logo">
          <div className="w-9 h-9 rounded-md re-bg-accent flex items-center justify-center">
            <span className="text-sm font-bold text-white">TC</span>
          </div>
          <span className="text-lg font-bold tracking-tight text-white">The Clever Work</span>
        </a>

        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-white/70 font-medium transition-colors hover:text-white" style={{ textDecoration: "none" }} data-testid={`re-nav-${link.label.toLowerCase()}`}>
              {link.label}
            </a>
          ))}
          <a href="https://wa.me/918766350093?text=Hi,%20I%20need%20performance%20marketing%20for%20my%20real%20estate%20project." target="_blank" rel="noopener noreferrer" className="re-btn re-btn--primary re-btn--sm" data-testid="re-nav-cta">
            <SiWhatsapp className="w-4 h-4" />
            Free Strategy Call
          </a>
        </div>

        <button className="lg:hidden p-2 text-white" onClick={() => setIsOpen(!isOpen)} data-testid="re-mobile-toggle">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden re-mobile-menu">
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="text-base font-medium text-white/80" style={{ textDecoration: "none" }}>
                {link.label}
              </a>
            ))}
            <a href="https://wa.me/918766350093?text=Hi,%20I%20need%20performance%20marketing%20for%20my%20real%20estate%20project." target="_blank" rel="noopener noreferrer" className="re-btn re-btn--primary justify-center mt-2" onClick={() => setIsOpen(false)}>
              <SiWhatsapp className="w-4 h-4" />
              Free Strategy Call
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

function REHero() {
  return (
    <section className="relative min-h-screen flex items-center" data-testid="re-hero">
      <div className="absolute inset-0">
        <img src="/images/realestate/hero-home.jpg" alt="Real estate marketing" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a1a]/95 via-[#0a0a1a]/80 to-[#0a0a1a]/50" />
      </div>

      <div className="relative container mx-auto px-4 md:px-6 pt-28 pb-16">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-3">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="re-label mb-6">
                <Target className="w-3.5 h-3.5" />
                Real Estate Performance Marketing Agency
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.12] mb-6" data-testid="re-hero-title">
                We Generate <span className="re-text-accent">High-Intent Buyer Leads</span> for Real Estate Developers
              </h1>

              <p className="text-base md:text-lg text-white/65 max-w-xl mb-8 leading-relaxed">
                Performance-driven Google & Meta Ads campaigns that deliver qualified leads, site visits, and bookings.
                Not impressions. Not clicks. <span className="text-white font-semibold">Actual revenue.</span>
              </p>

              <div className="flex flex-wrap items-center gap-3 mb-10">
                <a href="https://wa.me/918766350093?text=Hi,%20I%20need%20performance%20marketing%20for%20my%20real%20estate%20project.%20Lets%20discuss." target="_blank" rel="noopener noreferrer" className="re-btn re-btn--primary" data-testid="re-hero-whatsapp">
                  <SiWhatsapp className="w-5 h-5" />
                  Get Free Strategy Call
                </a>
                <a href="tel:+918766350093" className="re-btn re-btn--glass" data-testid="re-hero-call">
                  <Phone className="w-5 h-5" />
                  Call: 8766 3500 93
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
                {[
                  { val: "6x-12x", label: "Marketing ROI" },
                  { val: "970+", label: "Projects Managed" },
                  { val: "45-60%", label: "Lead Qualification" },
                ].map((s, i) => (
                  <div key={i} className="flex items-center gap-3" data-testid={`re-hero-stat-${i}`}>
                    <div className="text-2xl md:text-3xl font-bold text-white">{s.val}</div>
                    <div className="text-xs text-white/45 leading-tight max-w-[80px]">{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-2 hidden lg:block">
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
              <LeadForm
                source="hero"
                page="/real-estate"
                variant="glass"
                showProjectField
                showBudgetField
                title="Get Free Strategy Call"
                subtitle="Share your details. We'll call within 30 mins."
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function REProblems() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });
  const problems = [
    { icon: TrendingUp, title: "High CPL?", desc: "Spending lakhs on ads but getting unqualified leads that never convert into site visits?" },
    { icon: Users, title: "Low Visit Ratio?", desc: "Leads come in but your sales team can't convert them into actual property visits?" },
    { icon: Shield, title: "No Transparency?", desc: "Your current agency shows impressions and clicks but you don't see real ROI numbers?" },
    { icon: Clock, title: "Lead Leakage?", desc: "Leads go cold because there's no instant response system or follow-up automation?" },
  ];

  return (
    <section ref={ref} className="re-section re-section--dark" data-testid="re-problems">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="re-label re-label--dark mx-auto mb-4">
            <Zap className="w-3.5 h-3.5" />
            Sound Familiar?
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4" data-testid="re-problems-title">
            Are You Facing These <span className="re-text-accent">Challenges?</span>
          </h2>
          <p className="text-white/50">Most real estate developers waste 40-60% of their ad budget on unqualified leads. We fix that.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {problems.map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.1 }} className="re-dark-card" data-testid={`re-problem-${i}`}>
              <div className="re-icon-box re-icon-box--dark mb-4">
                <p.icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{p.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function REResults() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });
  const metrics = [
    { icon: BarChart3, value: "6x-12x", label: "Average Marketing ROI", sub: "For luxury projects (3Cr+)" },
    { icon: Target, value: "45-60%", label: "Lead Qualification Rate", sub: "Industry avg is 15-20%" },
    { icon: Eye, value: "12-18%", label: "Lead to Site Visit Rate", sub: "Consistent across segments" },
    { icon: MousePointerClick, value: "3-6%", label: "Visit to Booking Rate", sub: "High-intent funnel design" },
  ];

  return (
    <section ref={ref} id="results" className="re-section" data-testid="re-results">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="re-label mx-auto mb-4">
            <BarChart3 className="w-3.5 h-3.5" />
            Proven Results
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold re-text-dark leading-tight mb-4" data-testid="re-results-title">
            Numbers That <span className="re-text-accent">Speak</span>
          </h2>
          <p className="text-gray-500">We measure success by bookings and revenue, not impressions and clicks.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {metrics.map((m, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.1 }} className="re-metric-card" data-testid={`re-metric-${i}`}>
              <div className="re-icon-box mb-4">
                <m.icon className="w-5 h-5" />
              </div>
              <div className="text-3xl md:text-4xl font-bold re-text-dark mb-1">{m.value}</div>
              <div className="text-sm font-semibold re-text-dark mb-1">{m.label}</div>
              <div className="text-xs text-gray-400">{m.sub}</div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 re-roi-table-wrap">
          <h3 className="text-xl md:text-2xl font-bold re-text-dark mb-6">Budget vs Output Projection</h3>
          <div className="overflow-x-auto">
            <table className="re-roi-table" data-testid="re-roi-table">
              <thead>
                <tr>
                  <th>Monthly Ad Spend</th>
                  <th>Expected Leads</th>
                  <th>Site Visits</th>
                  <th>Est. Bookings</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>5 Lakhs</td><td>180 - 250</td><td>30 - 45</td><td>2 - 4</td></tr>
                <tr><td>10 Lakhs</td><td>350 - 500</td><td>60 - 90</td><td>4 - 7</td></tr>
                <tr><td>20 Lakhs</td><td>700 - 1,000</td><td>120 - 180</td><td>8 - 14</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-3">Projections are indicative and subject to market conditions, inventory, pricing, and sales execution.</p>
        </div>

        <div className="mt-16 max-w-xl mx-auto">
          <LeadForm
            source="results"
            page="/real-estate"
            variant="light"
            showProjectField
            showBudgetField
            title="Want These Results for Your Project?"
            subtitle="Share your details and get a custom campaign plan."
          />
        </div>
      </div>
    </section>
  );
}

function REServices() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });
  const services = [
    { icon: SiGoogle, title: "Google Ads", desc: "Intent-based search campaigns, remarketing, call-only ads, and smart bidding strategies targeting buyers actively searching for properties.", items: ["Search Campaigns", "Remarketing", "Call-Only Ads", "Smart Bidding"] },
    { icon: SiFacebook, title: "Meta Ads (FB & Insta)", desc: "Demand creation at scale with income, location & behavior targeting. Custom lead forms with pre-qualification questions.", items: ["Audience Layering", "Lead Gen Forms", "Video Campaigns", "Retargeting"] },
    { icon: MessageCircle, title: "WhatsApp Automation", desc: "Instant lead response via WhatsApp Business API. Automated follow-ups, brochure sharing, and visit scheduling.", items: ["Instant Response", "Auto Follow-ups", "Brochure Sharing", "CRM Sync"] },
    { icon: Globe, title: "Landing Pages & Funnels", desc: "High-converting landing pages with luxury branding, trust signals, and scroll-based CTAs optimized for minimum bounce.", items: ["A/B Testing", "Speed Optimization", "Lead Form Design", "Trust Signals"] },
    { icon: LineChart, title: "Tracking & Analytics", desc: "Complete visibility with GA4, Meta Pixel, keyword-level CPL tracking, and CRM integration for sales attribution.", items: ["GA4 Setup", "Lead Attribution", "CPL Tracking", "CRM Integration"] },
    { icon: Shield, title: "Lead Quality Control", desc: "Budget, intent & timeline qualification. Negative keywords, audience exclusions, and weekly optimization cycles.", items: ["Qualification Filters", "Negative Keywords", "Audience Exclusion", "Sales Feedback Loop"] },
  ];

  return (
    <section ref={ref} id="services" className="re-section re-section--alt" data-testid="re-services">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="re-label mx-auto mb-4">
            <Megaphone className="w-3.5 h-3.5" />
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold re-text-dark leading-tight mb-4" data-testid="re-services-title">
            Complete Marketing <span className="re-text-accent">Arsenal</span>
          </h2>
          <p className="text-gray-500">Everything you need to generate high-intent buyer leads and convert them into bookings.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.08 }} className="re-service-card" data-testid={`re-service-${i}`}>
              <div className="re-icon-box mb-4">
                <s.icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold re-text-dark mb-2">{s.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">{s.desc}</p>
              <div className="flex flex-wrap gap-2">
                {s.items.map((item, j) => (
                  <span key={j} className="re-chip">{item}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function REPortfolio() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });
  const clients = ["Godrej Properties", "M3M India", "Migsun Group", "ACE Group", "Smartworld Developers"];
  const cities = ["Noida & Greater Noida", "Gurgaon", "Mumbai", "Pune", "Thane", "Hyderabad", "Dubai"];

  return (
    <section ref={ref} id="portfolio" className="re-section" data-testid="re-portfolio">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6 }}>
            <div className="re-label mb-4">
              <Building2 className="w-3.5 h-3.5" />
              Our Experience
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold re-text-dark leading-tight mb-5" data-testid="re-portfolio-title">
              Trusted by Top <span className="re-text-accent">Developers</span>
            </h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
              We've managed and scaled performance campaigns across multiple asset classes - mid-segment, premium, and luxury projects across India and Dubai.
            </p>

            <div className="mb-8">
              <h4 className="text-sm font-bold re-text-dark uppercase tracking-wider mb-4">Worked With</h4>
              <div className="flex flex-wrap gap-2">
                {clients.map((c, i) => (
                  <span key={i} className="re-client-chip" data-testid={`re-client-${i}`}>{c}</span>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h4 className="text-sm font-bold re-text-dark uppercase tracking-wider mb-4">Markets Covered</h4>
              <div className="flex flex-wrap gap-2">
                {cities.map((c, i) => (
                  <span key={i} className="re-city-chip">{c}</span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {[
                { val: "970+", label: "Projects" },
                { val: "570+", label: "eCom Clients" },
                { val: "12Y+", label: "Experience" },
              ].map((s, i) => (
                <div key={i} className="re-mini-stat" data-testid={`re-portfolio-stat-${i}`}>
                  <div className="text-xl md:text-2xl font-bold re-text-accent">{s.val}</div>
                  <div className="text-xs text-gray-400">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}>
            <div className="re-impact-card" data-testid="re-impact-card">
              <h3 className="text-xl font-bold text-white mb-6">Impact Delivered</h3>
              <div className="space-y-5">
                {[
                  { icon: TrendingUp, text: "Improved lead-to-visit ratios across all projects" },
                  { icon: BarChart3, text: "Reduced CPL by 30-50% through continuous optimization" },
                  { icon: Target, text: "Higher booking contribution from digital leads" },
                  { icon: LineChart, text: "Revenue influence of 5Cr - 20Cr monthly for premium projects" },
                  { icon: Shield, text: "Full transparency with weekly reports and CRM sync" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                      <item.icon className="w-4 h-4 re-text-accent" />
                    </div>
                    <p className="text-sm text-white/80 leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function REPricing() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });
  const plans = [
    {
      label: "Mid-Segment Projects",
      price: "30K - 60K",
      period: "/month",
      desc: "For residential projects in the 40L - 1.5Cr range. Full performance marketing setup with Google + Meta campaigns.",
      features: ["Google Search Campaigns", "Meta Lead Gen Ads", "Landing Page Setup", "WhatsApp Integration", "Weekly Reports", "CRM Integration"],
      highlight: false,
      cta: "Get Started",
    },
    {
      label: "Premium Projects",
      price: "60K - 85K",
      period: "/month",
      badge: "Most Popular",
      desc: "For premium projects in the 1.5Cr - 3Cr range. Advanced targeting, remarketing funnels, and dedicated account management.",
      features: ["Everything in Mid-Segment", "Advanced Remarketing", "WhatsApp Automation", "Video Ad Campaigns", "Bi-Weekly Strategy Calls", "Sales Feedback Integration"],
      highlight: true,
      cta: "Book Strategy Call",
    },
    {
      label: "Luxury Projects",
      price: "90K - 1.5L",
      period: "/month",
      desc: "For luxury projects 3Cr+. Premium funnel design, HNI targeting, and comprehensive sales-marketing alignment.",
      features: ["Everything in Premium", "HNI Audience Targeting", "Premium Creative Design", "CXO-Level Reporting", "Dedicated Campaign Manager", "Revenue Attribution Setup"],
      highlight: false,
      cta: "Discuss Requirements",
    },
  ];

  return (
    <section ref={ref} id="pricing" className="re-section re-section--alt" data-testid="re-pricing">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="re-label mx-auto mb-4">
            <Star className="w-3.5 h-3.5" />
            Transparent Pricing
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold re-text-dark leading-tight mb-4" data-testid="re-pricing-title">
            Management <span className="re-text-accent">Fee Structure</span>
          </h2>
          <p className="text-gray-500">Media budget is billed directly to platforms. No hidden costs. No long-term lock-ins.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.12 }} className={`re-pricing-card ${plan.highlight ? "re-pricing-card--featured" : ""}`} data-testid={`re-pricing-${i}`}>
              {plan.badge && <div className="re-pricing-badge">{plan.badge}</div>}
              <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-3">{plan.label}</div>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-3xl md:text-4xl font-bold re-text-dark">{plan.price}</span>
                <span className="text-sm text-gray-400">{plan.period}</span>
              </div>
              <p className="text-sm text-gray-500 mb-6 leading-relaxed">{plan.desc}</p>

              <a href="https://wa.me/918766350093?text=Hi,%20I%20am%20interested%20in%20performance%20marketing%20for%20my%20real%20estate%20project." target="_blank" rel="noopener noreferrer" className={`re-btn re-btn--sm justify-center w-full mb-6 ${plan.highlight ? "re-btn--primary" : "re-btn--outline-dark"}`} data-testid={`re-pricing-cta-${i}`}>
                {plan.cta} <ArrowRight className="w-4 h-4" />
              </a>

              <div className="space-y-3">
                {plan.features.map((f, j) => (
                  <div key={j} className="flex items-center gap-3 text-sm">
                    <div className="re-check-sm"><Check className="w-3 h-3 text-white" /></div>
                    <span className="text-gray-600">{f}</span>
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

function REProcess() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });
  const steps = [
    { day: "Day 1", title: "Project Understanding", desc: "Deep dive into your inventory, pricing, target audience, and competitive landscape." },
    { day: "Day 2-3", title: "Strategy Finalization", desc: "Audience segmentation, keyword research, creative strategy, and funnel design." },
    { day: "Day 4-6", title: "Campaign Setup", desc: "Ad account setup, landing page design, lead form creation, and tracking implementation." },
    { day: "Day 7", title: "Tracking & CRM", desc: "GA4, Meta Pixel, call tracking, and CRM integration for complete visibility." },
    { day: "Day 8", title: "Campaign Launch", desc: "Campaigns go live with optimized bidding and targeting strategies." },
    { day: "Ongoing", title: "Optimization", desc: "Weekly optimization cycles, A/B testing, CPL reduction, and performance reporting." },
  ];

  return (
    <section ref={ref} className="re-section" data-testid="re-process">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="re-label mx-auto mb-4">
            <Clock className="w-3.5 h-3.5" />
            Onboarding
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold re-text-dark leading-tight mb-4" data-testid="re-process-title">
            Go Live in <span className="re-text-accent">8 Days</span>
          </h2>
          <p className="text-gray-500">Fast onboarding. No unnecessary delays. Your campaigns are live and generating leads within a week.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 15 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.08 }} className="re-step-card" data-testid={`re-step-${i}`}>
              <div className="re-step-day">{step.day}</div>
              <h3 className="text-base font-bold re-text-dark mb-1.5">{step.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function REWhyUs() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });
  const reasons = [
    { icon: Building2, title: "Real Estate Focus", desc: "We only work with real estate developers. No distractions, no generalist approach." },
    { icon: Target, title: "Performance-First", desc: "Every rupee is optimized for leads and bookings. We obsess over CPL and ROI." },
    { icon: Users, title: "Sales Alignment", desc: "CRM integration, sales feedback loops, and visit scheduling built into the system." },
    { icon: Eye, title: "Full Transparency", desc: "Weekly reports, real-time dashboards, and no hidden metrics. You see everything." },
    { icon: Shield, title: "No Lock-ins", desc: "Month-to-month engagement. Stay because of results, not because of a contract." },
    { icon: Zap, title: "Fast Execution", desc: "Campaigns live in 8 days. No bureaucracy, no delays, just results." },
  ];

  return (
    <section ref={ref} className="re-section re-section--dark" data-testid="re-why-us">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="re-label re-label--dark mx-auto mb-4">
            <Star className="w-3.5 h-3.5" />
            Why Us
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4" data-testid="re-why-title">
            Why <span className="re-text-accent">The Clever Work?</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {reasons.map((r, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 15 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.08 }} className="re-dark-card" data-testid={`re-why-${i}`}>
              <div className="re-icon-box re-icon-box--dark mb-4">
                <r.icon className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">{r.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function RECTA() {
  return (
    <section className="re-section relative overflow-hidden" data-testid="re-cta">
      <div className="absolute inset-0">
        <img src="/images/realestate/property-5.jpg" alt="CTA background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a1a]/90 via-[#0a0a1a]/80 to-[#0a0a1a]/60" />
      </div>
      <div className="relative container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5" data-testid="re-cta-title">
              Ready to Generate <span className="re-text-accent">Real Leads?</span>
            </h2>
            <p className="text-white/60 mb-8 leading-relaxed">
              Schedule a free strategy call. We'll audit your current campaigns, show you where you're losing budget, and present a performance plan tailored to your project.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="https://wa.me/918766350093?text=Hi,%20I%20want%20a%20free%20strategy%20call%20for%20my%20real%20estate%20project." target="_blank" rel="noopener noreferrer" className="re-btn re-btn--primary" data-testid="re-cta-whatsapp">
                <SiWhatsapp className="w-5 h-5" />
                Get Free Strategy Call
              </a>
              <a href="tel:+918766350093" className="re-btn re-btn--glass" data-testid="re-cta-call">
                <Phone className="w-5 h-5" />
                Call: 8766 3500 93
              </a>
            </div>
          </div>

          <div>
            <LeadForm
              source="cta"
              page="/real-estate"
              variant="glass"
              showProjectField
              showBudgetField
              title="Request a Free Audit"
              subtitle="We'll review your campaigns and share actionable insights."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function REFooter() {
  return (
    <footer id="contact" className="re-footer" data-testid="re-footer">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-9 h-9 rounded-md re-bg-accent flex items-center justify-center">
                <span className="text-sm font-bold text-white">TC</span>
              </div>
              <span className="text-lg font-bold re-text-dark" data-testid="re-footer-brand">The Clever Work</span>
            </div>
            <p className="text-gray-500 mb-5 max-w-md leading-relaxed text-sm">
              Performance marketing agency exclusively for real estate developers.
              We generate high-intent buyer leads that convert into site visits and bookings.
            </p>
            <div className="space-y-2.5 mb-5">
              <a href="mailto:thecleverwork@gmail.com" className="flex items-center gap-3 text-sm text-gray-500" style={{ textDecoration: 'none' }} data-testid="re-footer-email">
                <Mail className="w-4 h-4 re-text-accent shrink-0" />
                <span>thecleverwork@gmail.com</span>
              </a>
              <a href="tel:+918766350093" className="flex items-center gap-3 text-sm text-gray-500" style={{ textDecoration: 'none' }} data-testid="re-footer-phone">
                <Phone className="w-4 h-4 re-text-accent shrink-0" />
                <span>+91 8766 3500 93</span>
              </a>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <MapPin className="w-4 h-4 re-text-accent shrink-0" />
                <span>India</span>
              </div>
            </div>
            <div className="flex gap-3">
              {[
                { icon: SiWhatsapp, href: "https://wa.me/918766350093" },
                { icon: SiInstagram, href: "#" },
                { icon: SiFacebook, href: "#" },
              ].map((s, i) => (
                <a key={i} href={s.href} target={s.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="re-social-icon" data-testid={`re-social-${i}`}>
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold re-text-dark mb-4">Services</h4>
            <div className="flex flex-col gap-2.5">
              {["Google Ads", "Meta Ads", "WhatsApp Automation", "Landing Pages", "Analytics & Tracking", "Lead Quality Control"].map((s) => (
                <a key={s} href="#services" className="text-sm text-gray-500" style={{ textDecoration: 'none' }}>{s}</a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold re-text-dark mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2.5">
              {["Results", "Services", "Portfolio", "Pricing", "Contact"].map((l) => (
                <a key={l} href={`#${l.toLowerCase()}`} className="text-sm text-gray-500" style={{ textDecoration: 'none' }}>{l}</a>
              ))}
              <a href="/" className="text-sm re-text-accent font-semibold" style={{ textDecoration: 'none' }}>Main Portfolio</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row items-center justify-between text-gray-400 text-xs gap-4">
          <p>&copy; {new Date().getFullYear()} The Clever Work. All rights reserved.</p>
          <p>Real Estate Performance Marketing Agency</p>
        </div>
      </div>
    </footer>
  );
}

export default function RealEstate() {
  return (
    <div className="re-page" data-testid="re-page">
      <RENav />
      <main>
        <REHero />
        <REProblems />
        <REResults />
        <REServices />
        <REPortfolio />
        <REPricing />
        <REProcess />
        <REWhyUs />
        <RECTA />
      </main>
      <REFooter />
      <LeadPopup page="/real-estate" variant="light" />
    </div>
  );
}
