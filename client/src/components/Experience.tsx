import { motion } from "framer-motion";
import { Calendar, Briefcase } from "lucide-react";

const experience = [
  {
    year: "2025",
    title: "1K+ Projects Delivered",
    desc: "I have a full grown consultancy and development business. I can build your tech with great Quality.",
    current: true,
  },
  {
    year: "2020",
    title: "Started The Clever Work",
    desc: "Founded my own startup (formerly NGF132). Currently delivering high-value solutions globally.",
    current: false,
  },
  {
    year: "2015 - 2020",
    title: "Gov. Contract & Enterprise",
    desc: "Worked for Delhi Gov on ID card systems and QR based tech. Built robust enterprise solutions.",
    current: false,
  },
  {
    year: "2010 - 2015",
    title: "Freelancing Roots",
    desc: "Started freelancing with a small team. Delivered projects for major clients like Honda and Sleepwell.",
    current: false,
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-black/40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            <span className="text-primary">12 Years</span> of Excellence
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From humble freelance beginnings to running a full-scale development consultancy.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experience.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative pl-8 md:pl-0"
            >
              {/* Timeline Line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-px" />
              
              <div className={`md:flex items-center justify-between gap-10 mb-12 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                {/* Content */}
                <div className="md:w-1/2 mb-4 md:mb-0 relative">
                  <div className={`glass-card p-6 rounded-2xl border border-white/5 hover:border-primary/50 transition-colors ${item.current ? "shadow-[0_0_30px_-10px_rgba(0,240,255,0.3)]" : ""}`}>
                    <div className="flex items-center gap-3 mb-2 text-primary">
                      <Calendar className="w-4 h-4" />
                      <span className="font-mono text-sm font-bold">{item.year}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  
                  {/* Connector Dot */}
                  <div className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-background z-10 
                    ${item.current ? "bg-primary shadow-[0_0_10px_rgba(0,240,255,0.8)]" : "bg-muted-foreground"}
                    -left-[39px] md:left-auto md:right-auto
                    ${i % 2 === 0 ? "md:-left-[58px]" : "md:-right-[62px]"}
                  `} />
                </div>
                
                {/* Spacer for alternate side */}
                <div className="md:w-1/2" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
