import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Sparkles, ArrowRight } from "lucide-react";
import {
  SiShopify,
  SiPhp,
  SiWordpress,
  SiJavascript,
  SiAndroid,
  SiApple,
  SiGoogleads,
} from "react-icons/si";
import { Code2 } from "lucide-react";

const technologies = [
  { icon: SiShopify, label: "Shopify" },
  { icon: SiPhp, label: "PHP" },
  { icon: SiWordpress, label: "Wordpress" },
  { icon: SiJavascript, label: "Javascript" },
  { icon: Code2, label: "PHP CI" },
  { icon: SiAndroid, label: "Android APP" },
  { icon: SiApple, label: "IOS APP" },
  { icon: SiGoogleads, label: "Google Ads" },
];

const timeline = [
  {
    year: "2025",
    subtitle: "1K + Projects delivered",
    title: "1K+ Projects.",
    desc: "I have a full grown consultancy and development business. I can build you tech with great Quality.",
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

const services = [
  {
    title: "Web Design",
    desc: "I am a full time professional freelancer. I work for clients around the world and I have been developing websites and APPs since last 11 years. There is absolutely no website or APP that I can not work on. Pricing starts with 20K Rs, I can make all types of Web, Call now at 8766350093",
  },
  {
    title: "APP Development",
    desc: "I am a full time professional freelancer. I work for clients around the world and I have been developing websites since last 10 year. There is absolutely no website or APP that I can not work on.",
  },
  {
    title: "Consultation.",
    desc: "If you have an idea, you need to execute now. Lets book a 45 Minutes consultation for a step by step execution plan.",
  },
  {
    title: "Marketing",
    desc: "We run facebook, Google, youtube and Instagram Ads. We have more than 10 Years of Experience. Optimizing ads and selecting right Audience is most important part of digital marketing and I have enough expertise there.",
  },
];

export function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section ref={ref} id="experience" className="py-20" data-testid="section-experience">
      <div className="container mx-auto px-4 md:px-6">
        <div className="sparkle-badge">
          <Sparkles className="w-4 h-4 text-primary" />
          I know what I am doing.
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          12 Years of <br />
          <span className="text-primary">Experience</span>
        </h2>

        <p className="text-muted-foreground max-w-2xl mb-6 leading-relaxed">
          I started designing website in 2009 and since then I have developed more than 1000+ websites and APPs.
          Some of my best works are mentioned below. I have been doing this for more than 12 years.
        </p>

        <a
          href="https://wa.me/918766350093?text=Hi,%20i%20found%20you%20at%20thecleverwork%20i%20am%20looking%20for%20a%20Website%20/%20APP.%20i%20would%20like%20to%20know%20about%20the%20Quote."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm mb-12"
          data-testid="link-whatsapp-experience"
        >
          WhatsApp Me <ArrowRight className="w-4 h-4" />
        </a>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
          {technologies.map((tech, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.05 }}
              className="flex flex-col items-center gap-3 p-5 bg-card rounded-xl border border-border text-center"
            >
              <tech.icon className="w-10 h-10 text-muted-foreground" />
              <span className="text-sm font-medium text-muted-foreground">{tech.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Services */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="p-6 bg-card rounded-xl border border-border"
            >
              <h3 className="text-lg font-bold mb-3 text-foreground">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <div className="sparkle-badge">
          <Sparkles className="w-4 h-4 text-primary" />
          What I did in last 12 years
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          My <span className="text-primary">Experience</span>
        </h2>

        <a
          href="https://wa.me/918766350093"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm mb-12"
        >
          WhatsApp Me <ArrowRight className="w-4 h-4" />
        </a>

        <div className="relative max-w-3xl">
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border" />
          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5 + i * 0.15 }}
              className="relative pl-12 md:pl-16 pb-12 last:pb-0"
            >
              <div className="absolute left-2 md:left-4 top-1 w-4 h-4 rounded-full bg-primary border-4 border-background" />
              <div className="bg-card rounded-xl border border-border p-6">
                <div className="text-xs font-bold text-primary mb-1">{item.year}</div>
                <div className="text-xs text-muted-foreground mb-2">{item.subtitle}</div>
                <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
