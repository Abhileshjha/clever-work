import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#portfolio", label: "Portfolio" },
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
          ? "bg-background/90 backdrop-blur-md border-b border-border py-3"
          : "bg-transparent py-5"
      }`}
      data-testid="nav-main"
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 cursor-pointer" data-testid="link-logo">
          <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
            <span className="text-sm font-bold text-primary-foreground">TC</span>
          </div>
          <span className="text-lg font-bold tracking-tight">
            The Clever Work
          </span>
        </a>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground font-medium transition-colors"
              style={{ textDecoration: "none" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/918766350093"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold transition-all"
            data-testid="link-lets-talk"
          >
            Let's Talk
          </a>
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          data-testid="button-mobile-menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card border-b border-border"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium text-muted-foreground"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://wa.me/918766350093"
                className="mt-2 w-full text-center px-5 py-3 rounded-full bg-primary text-primary-foreground font-bold"
                onClick={() => setIsOpen(false)}
              >
                Let's Talk
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
