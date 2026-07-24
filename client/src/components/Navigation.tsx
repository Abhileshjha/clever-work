import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Services" },
  { href: "#portfolio", label: "Work" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border py-3"
          : "bg-transparent py-5"
      }`}
      data-testid="nav-main"
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between gap-4">
        <a href="#" className="flex items-center gap-2 shrink-0" data-testid="link-logo" style={{ textDecoration: 'none' }}>
          <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-sm font-bold text-primary-foreground">TC</span>
          </div>
          <span className="text-lg font-bold tracking-tight text-foreground">
            The Clever Work
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground font-medium transition-colors"
              style={{ textDecoration: "none" }}
              data-testid={`link-nav-${link.label.toLowerCase()}`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/918766350093?text=Hi,%20I%20found%20you%20at%20thecleverwork%20and%20I'm%20looking%20for%20digital%20marketing%20services.%20I'd%20like%20to%20know%20more."
            target="_blank"
            rel="noopener noreferrer"
            className="trk-btn trk-btn--primary trk-btn--sm"
            data-testid="link-lets-talk"
          >
            <SiWhatsapp className="w-4 h-4" />
            Let's Talk
          </a>
        </div>

        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          data-testid="button-mobile-menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-card/95 backdrop-blur-md border-b border-border">
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-muted-foreground"
                style={{ textDecoration: "none" }}
                data-testid={`link-mobile-${link.label.toLowerCase()}`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/918766350093?text=Hi,%20I%20found%20you%20at%20thecleverwork%20and%20I'm%20looking%20for%20digital%20marketing%20services.%20I'd%20like%20to%20know%20more."
              target="_blank"
              rel="noopener noreferrer"
              className="trk-btn trk-btn--primary justify-center mt-2"
              onClick={() => setIsOpen(false)}
              data-testid="link-mobile-whatsapp"
            >
              <SiWhatsapp className="w-4 h-4" />
              Let's Talk
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
