import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Sparkles, Mail, Phone, ArrowRight } from "lucide-react";

export function Stats() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="py-20" data-testid="section-stats">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-full max-w-md">
              <div className="bg-card rounded-2xl border border-border p-8">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <span className="text-3xl font-bold text-primary">TC</span>
                </div>
                <div className="grid grid-cols-2 gap-6 mt-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-foreground" data-testid="text-stat-projects">970+</div>
                    <div className="text-sm text-muted-foreground mt-1">Projects Delivered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-foreground" data-testid="text-stat-ecom">570+</div>
                    <div className="text-sm text-muted-foreground mt-1">eCom Developed !</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="sparkle-badge">
              <Sparkles className="w-4 h-4 text-primary" />
              The Clever Work.
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              freelancer Developer.
            </h2>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              Contact me today and we can discuss the Quote for your project.
              We have 2 free meetings before we start the project.
            </p>

            <div className="space-y-4 mb-8">
              <a href="mailto:thecleverwork@gmail.com" className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border group" data-testid="link-email">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Email</div>
                  <div className="text-sm font-semibold">thecleverwork@gmail.com</div>
                </div>
              </a>

              <a href="tel:+918766350093" className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border group" data-testid="link-phone">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Phone</div>
                  <div className="text-sm font-semibold">+91 8766 3500 93</div>
                </div>
              </a>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:thecleverwork@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm"
                data-testid="link-send-email"
              >
                Send Email <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/918766350093?text=Hi,%20i%20found%20you%20at%20thecleverwork%20i%20am%20looking%20for%20a%20Website%20/%20APP.%20i%20would%20like%20to%20know%20about%20the%20Quote."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-foreground font-semibold text-sm"
                data-testid="link-whatsapp-contact"
              >
                WhatsApp Me
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
