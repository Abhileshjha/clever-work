import { Mail, Phone, ArrowRight, MapPin } from "lucide-react";
import { SiWhatsapp, SiInstagram, SiYoutube, SiFacebook } from "react-icons/si";

export function ContactFooter() {
  return (
    <footer id="contact" className="pt-20 pb-8 border-t border-border" data-testid="section-footer">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-sm font-bold text-primary-foreground">TC</span>
              </div>
              <span className="text-xl font-bold" data-testid="text-footer-brand">The Clever Work</span>
            </div>

            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed text-sm">
              Ready to start your project? Contact me today for a quote.
              I offer 2 free consultation meetings before kicking off.
              Let's build something great together.
            </p>

            <div className="space-y-3 mb-8">
              <a href="mailto:thecleverwork@gmail.com" className="flex items-center gap-3 text-sm text-muted-foreground" style={{ textDecoration: 'none' }} data-testid="link-footer-email">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <span>thecleverwork@gmail.com</span>
              </a>
              <a href="tel:+918766350093" className="flex items-center gap-3 text-sm text-muted-foreground" style={{ textDecoration: 'none' }} data-testid="link-footer-phone">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span>+91 8766 3500 93</span>
              </a>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                <span>India</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://wa.me/918766350093?text=Hi,%20i%20found%20you%20at%20thecleverwork%20i%20am%20looking%20for%20a%20Website%20/%20APP.%20i%20would%20like%20to%20know%20about%20the%20Quote."
                target="_blank"
                rel="noopener noreferrer"
                className="trk-btn trk-btn--primary !py-3 !px-6 !text-sm"
                data-testid="link-footer-whatsapp"
              >
                WhatsApp Me <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="mailto:thecleverwork@gmail.com"
                className="trk-btn trk-btn--outline !py-3 !px-6 !text-sm"
                data-testid="link-footer-send-email"
              >
                Send Email
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-base font-bold mb-5">Quick Links</h4>
            <div className="flex flex-col gap-3">
              {["About", "Experience", "Portfolio", "Pricing", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="footer-link"
                  data-testid={`link-footer-${link.toLowerCase()}`}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-base font-bold mb-5">Services</h4>
            <div className="flex flex-col gap-3">
              {["Web Design", "APP Development", "Consultation", "Marketing", "eCom Development"].map((service) => (
                <a
                  key={service}
                  href="#experience"
                  className="footer-link"
                >
                  {service}
                </a>
              ))}
            </div>

            <h4 className="text-base font-bold mt-8 mb-4">Follow</h4>
            <div className="flex gap-3">
              <a
                href="https://wa.me/918766350093"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground transition-colors"
                data-testid="link-social-whatsapp"
              >
                <SiWhatsapp className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground transition-colors"
                data-testid="link-social-instagram"
              >
                <SiInstagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground transition-colors"
                data-testid="link-social-youtube"
              >
                <SiYoutube className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground transition-colors"
                data-testid="link-social-facebook"
              >
                <SiFacebook className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between text-muted-foreground text-sm gap-4">
          <p>&copy; {new Date().getFullYear()} The Clever Work. All rights reserved.</p>
          <p>Built with quality & passion.</p>
        </div>
      </div>
    </footer>
  );
}
