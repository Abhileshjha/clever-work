import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const stats = [
  { value: "970+", label: "Projects Delivered", color: "text-primary" },
  { value: "570+", label: "eCom Developed", color: "text-secondary" },
  { value: "12Y", label: "Experience", color: "text-white" },
  { value: "100%", label: "Client Satisfaction", color: "text-green-400" },
];

export function Stats() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-24 container mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="text-center"
          >
            <div className={`text-5xl md:text-6xl font-bold font-display mb-2 ${stat.color}`}>
              {stat.value}
            </div>
            <div className="text-sm md:text-base text-muted-foreground uppercase tracking-wider font-medium">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
