import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight, ChevronDown } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

const SparkleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10L12 0Z" fill="hsl(142, 70%, 45%)" />
  </svg>
);

const technologies = [
  { label: "SEO" },
  { label: "Google Ads" },
  { label: "Meta Ads" },
  { label: "Social Media" },
  { label: "Email Marketing" },
  { label: "Content" },
  { label: "Branding" },
  { label: "Analytics" },
];

const services = [
  {
    title: "SEO & Google Ads",
    desc: "We help you rank higher on Google and get found by customers actively searching for what you offer. On-page SEO, keyword research and hands-on Google Ads management. Call now at 8766350093 for a free audit.",
  },
  {
    title: "Social Media & Meta Ads",
    desc: "We grow your brand on Instagram and Facebook with consistent content, community management and performance-driven Meta Ads campaigns. Optimizing ads and targeting the right audience is where we add the most value.",
  },
  {
    title: "Lead Generation & Web Design",
    desc: "High-converting landing pages and lead-capture funnels built to turn visitors into customers. We have been building websites and funnels for more than 11 years.",
  },
  {
    title: "Branding & Content",
    desc: "Brand identity, messaging and content creation that makes your business memorable. If you have an idea, let's book a 45 minute consultation for a step-by-step growth plan.",
  },
];

const timeline = [
  {
    year: "2025",
    subtitle: "1K+ campaigns delivered",
    title: "1K+ Campaigns.",
    desc: "We're a full-grown marketing consultancy and development business. We help you grow with data-driven strategy and great execution.",
  },
  {
    year: "2020",
    subtitle: "Started NGF132.",
    title: "Own Startup",
    desc: "Built and scaled our own startup NGF132, now worth 50Cr with 6L+ users - using the same growth playbook we apply for clients.",
  },
  {
    year: "August 2015 to 2020",
    subtitle: "Worked for Delhi Gov.",
    title: "Gov. contract",
    desc: "With a 6-person team, delivered an ID card system and QR-based tech for the Delhi government. Also worked with Izenica (Apple India).",
  },
  {
    year: "2010-2015",
    subtitle: "Started as a 3-person team",
    title: "Agency Roots",
    desc: "Started in 2010 with a small team of 3, working with brands like Honda, Sleepwell and Suzuki.",
  },
];

function ServiceAccordion({ service, index }: { service: typeof services[0]; index: number }) {
  const [open, setOpen] = useState(index === 0);

  return (
    <div className="accordion-item" data-testid={`accordion-service-${index}`}>
      <div className="accordion-header" onClick={() => setOpen(!open)}>
        <h3>{service.title}</h3>
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground transition-colors"
            onClick={(e) => e.stopPropagation()}
            data-testid={`link-service-arrow-${index}`}
          >
            <ArrowRight className="w-4 h-4" />
          </a>
          <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
        </div>
      </div>
      {open && (
        <div className="accordion-body">
          <p>{service.desc}</p>
        </div>
      )}
    </div>
  );
}

export function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section ref={ref} id="experience" className="py-20 md:py-28 bg-grid scroll-mt-20" data-testid="section-experience">
      <div className="overlay--bottom-left" />
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="sparkle-badge">
              <SparkleIcon />
              We know what moves the needle.
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight">
              12 Years of <br />
              <span className="text-primary">Experience</span>
            </h2>

            <p className="text-muted-foreground mb-8 leading-relaxed text-base max-w-lg">
              We started in 2009 and since then we've run 1000+ marketing campaigns and built high-converting
              websites for brands across industries. Some of our best work is featured below.
            </p>

            <a
              href="https://wa.me/918766350093?text=Hi,%20I%20found%20you%20at%20thecleverwork%20and%20I'm%20looking%20for%20digital%20marketing%20services.%20I'd%20like%20to%20know%20more."
              target="_blank"
              rel="noopener noreferrer"
              className="trk-btn trk-btn--primary mb-10"
              data-testid="link-whatsapp-experience"
            >
              WhatsApp Me
            </a>

            <div className="grid grid-cols-4 gap-2">
              {technologies.map((tech, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.05 }}
                  className="tech-grid-item rounded-xl border border-border bg-card"
                >
                  <p>{tech.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {services.map((service, i) => (
              <ServiceAccordion key={i} service={service} index={i} />
            ))}
          </motion.div>
        </div>

        <div className="mt-24">
          <div className="sparkle-badge">
            <SparkleIcon />
            What we've done in the last 12 years
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight">
            Our <span className="text-primary">Journey</span>
          </h2>

          <a
            href="https://wa.me/918766350093?text=Hi,%20I%20found%20you%20at%20thecleverwork%20and%20I'm%20looking%20for%20digital%20marketing%20services.%20I'd%20like%20to%20know%20more."
            target="_blank"
            rel="noopener noreferrer"
            className="trk-btn trk-btn--primary mb-12"
            data-testid="link-whatsapp-timeline"
          >
            WhatsApp Me
          </a>

          <div className="relative max-w-3xl pl-8 md:pl-14">
            <div className="timeline-line" />
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5 + i * 0.15 }}
                className="relative pb-10 md:pb-12 last:pb-0"
                data-testid={`timeline-item-${i}`}
              >
                <div className="timeline-dot" />
                <div className="ml-6 md:ml-10 bg-card rounded-xl border border-border p-4 md:p-6">
                  <div className="text-xs font-bold text-primary mb-1">{item.year}</div>
                  <div className="text-xs text-muted-foreground mb-2">{item.subtitle}</div>
                  <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
