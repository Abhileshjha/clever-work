import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, Phone, ArrowRight } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

const SparkleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10L12 0Z" fill="hsl(142, 70%, 45%)" />
  </svg>
);

export function Stats() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="py-20 md:py-28" data-testid="section-stats">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative inline-block">
              <img
                src="/images/profile/about.png"
                alt="The Clever Work"
                className="rounded-2xl max-w-full w-full md:max-w-[420px]"
                data-testid="img-about-profile"
              />

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="floating-card bottom-8 -left-4 md:bottom-12 md:-left-8"
              >
                <h3 data-testid="text-stat-projects">970+</h3>
                <p>Projects Delivered</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="floating-card -top-4 -right-4 md:top-4 md:-right-8"
              >
                <h3 data-testid="text-stat-ecom">570+</h3>
                <p>eCom Developed !</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="sparkle-badge">
              <SparkleIcon />
              The Clever Work.
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight">
              freelancer Developer.
            </h2>

            <p className="text-muted-foreground mb-8 leading-relaxed text-base">
              Contact me today and we can discuss the Quote for your project.
              We have 2 free meetings before we start the project.
            </p>

            <div className="space-y-4 mb-8">
              <a href="mailto:thecleverwork@gmail.com" className="contact-info-item" style={{ textDecoration: 'none' }} data-testid="link-email">
                <div className="icon-wrap">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-0.5">Email</p>
                  <h6 className="text-sm font-semibold text-foreground">thecleverwork@gmail.com</h6>
                </div>
              </a>

              <a href="tel:+918766350093" className="contact-info-item" style={{ textDecoration: 'none' }} data-testid="link-phone">
                <div className="icon-wrap">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-0.5">Phone</p>
                  <h6 className="text-sm font-semibold text-foreground">+91 8766350093</h6>
                </div>
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="mailto:thecleverwork@gmail.com"
                className="trk-btn trk-btn--primary"
                data-testid="link-send-email"
              >
                Send Email
              </a>
              <a
                href="https://wa.me/918766350093?text=Hi,%20i%20found%20you%20at%20thecleverwork%20i%20am%20looking%20for%20a%20Website%20/%20APP.%20i%20would%20like%20to%20know%20about%20the%20Quote."
                target="_blank"
                rel="noopener noreferrer"
                className="trk-btn trk-btn--outline"
                data-testid="link-whatsapp-contact"
              >
                WhatsApp Me
                <SiWhatsapp className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
