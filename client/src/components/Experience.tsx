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
  { img: "/images/tech/58482ec0cef1014c0b5e4a70.png", label: "Shopify" },
  { img: "/images/tech/3.png", label: "PHP" },
  { img: "/images/tech/4.png", label: "Wordpress" },
  { img: "/images/tech/5.png", label: "Javascript" },
  { img: "/images/tech/6.png", label: "PHP CI" },
  { img: "/images/tech/7.png", label: "Android APP" },
  { img: "/images/tech/8.png", label: "IOS APP" },
  { img: "/images/tech/2.png", label: "Google Ads" },
];

const services = [
  {
    title: "Web Design",
    desc: "I am a full time professional freelancer. i work for clients around the world and i have been developing websites and APPs since last 11 years. There is absolutely no website or APP that i can not work on. Pricing starts with 20K Rs, I can make all types of Web, Call now at 8766350093",
  },
  {
    title: "APP Development",
    desc: "Hello i am a full time professional freelancer. i work for clients around the world and i have been developing websites since last 10 year. There is absolutely no website or APP that i can not work on.",
  },
  {
    title: "Consultation.",
    desc: "if you have an idea, you need to execute now. Lets book a 45 Minutes consultation for a step by step execution plan.",
  },
  {
    title: "Marketing",
    desc: "We run facebook, Google, youtube and Instagram Ads. We have more than 10 Years of Experience. Optimizing ads and selecting right Audience is most important part of digital marketing and i have enough expertise there.",
  },
];

const timeline = [
  {
    year: "2025",
    subtitle: "1K + Projects delivered",
    title: "1K+ Projects.",
    desc: "I have a full grown consultancy and development business. i can build you tech with great Quality.",
  },
  {
    year: "2020",
    subtitle: "Started NGF132.",
    title: "Own Startup",
    desc: "Executed startup NGF132 which is currently worth 50CR, with 6L users.",
  },
  {
    year: "August 2015 to 2020",
    subtitle: "Worked for Delhi Gov.",
    title: "Gov. contract",
    desc: "With 6 team members now, worked for Delhi gov, Made ID card system, QR based tech. Worked for Izenica (Apple india)",
  },
  {
    year: "2010-2015",
    subtitle: "Freelancing with 2 team members",
    title: "freelancer",
    desc: "Started freelancing in 2010 with myself and hired 2 more people to join me till 2015. Worked with Honda, Sleepwell and Suzuki",
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
              i know what i am doing.
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight">
              12 Years of <br />
              <span className="text-primary">Experience</span>
            </h2>

            <p className="text-muted-foreground mb-8 leading-relaxed text-base max-w-lg">
              i started designing website in 2009 and since then i have developed more than 1000+ websites and APPs.
              Some of my best works are mentioned below.
              I have been doing this for more than 12 years.
            </p>

            <a
              href="https://wa.me/918766350093?text=Hi,%20i%20found%20you%20at%20thecleverwork%20i%20am%20looking%20for%20a%20Website%20/%20APP.%20i%20would%20like%20to%20know%20about%20the%20Quote."
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
                  className="tech-grid-item"
                >
                  <img src={tech.img} alt={tech.label} />
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
            What i did in last 12 years
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight">
            My <span className="text-primary">Experience</span>
          </h2>

          <a
            href="https://wa.me/918766350093?text=Hi,%20i%20found%20you%20at%20thecleverwork%20i%20am%20looking%20for%20a%20Website%20/%20APP.%20i%20would%20like%20to%20know%20about%20the%20Quote."
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
