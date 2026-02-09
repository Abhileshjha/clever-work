import { Mail, Phone, ArrowRight } from "lucide-react";
import { SiWhatsapp, SiInstagram, SiYoutube } from "react-icons/si";

export function ContactFooter() {
  return (
    <footer id="contact" className="py-20 border-t border-border" data-testid="section-footer">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's work <span className="text-primary">together.</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md leading-relaxed">
              Ready to start your project? Contact me today for a quote.
              I offer 2 free consultation meetings before kicking off.
            </p>

            <div className="space-y-4 mb-8">
              <a href="mailto:thecleverwork@gmail.com" className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border" data-testid="link-footer-email">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Email</div>
                  <div className="text-sm font-semibold">thecleverwork@gmail.com</div>
                </div>
              </a>

              <a href="tel:+918766350093" className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border" data-testid="link-footer-phone">
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
                href="https://wa.me/918766350093"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm"
                data-testid="link-footer-whatsapp"
              >
                WhatsApp Me <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="mailto:thecleverwork@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-foreground font-semibold text-sm"
              >
                Send Email
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <div className="grid grid-cols-2 gap-2">
                {["About", "Experience", "Portfolio", "Pricing", "Contact"].map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-muted-foreground py-1"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-bold mb-4">Follow</h3>
              <div className="flex gap-3">
                <a
                  href="https://wa.me/918766350093"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground"
                >
                  <SiWhatsapp className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground"
                >
                  <SiInstagram className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground"
                >
                  <SiYoutube className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between text-muted-foreground text-sm gap-4">
          <p>&copy; {new Date().getFullYear()} The Clever Work. All rights reserved.</p>
          <p>Built with quality & passion.</p>
        </div>
      </div>
    </footer>
  );
}
