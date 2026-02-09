import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Menu, X, Phone, Mail, MapPin, ArrowRight, Check, Star,
  Home, Building2, TrendingUp, Shield, Users, Clock, ChevronRight,
  Bed, Bath, Square, Heart
} from "lucide-react";
import { SiWhatsapp, SiInstagram, SiFacebook, SiYoutube } from "react-icons/si";

const navLinks = [
  { href: "#properties", label: "Properties" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

function RENav() {
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
          ? "re-nav--scrolled"
          : "bg-transparent"
      }`}
      data-testid="re-nav-main"
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between gap-4 py-4">
        <a href="/real-estate" className="flex items-center gap-2.5 shrink-0" style={{ textDecoration: 'none' }} data-testid="re-link-logo">
          <div className="w-10 h-10 rounded-md re-bg-accent flex items-center justify-center">
            <Home className="w-5 h-5 text-white" />
          </div>
          <div>
            <span className="text-lg font-bold tracking-tight text-white block leading-tight">EstateVue</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/60">Premium Realty</span>
          </div>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/70 font-medium transition-colors hover:text-white"
              style={{ textDecoration: "none" }}
              data-testid={`re-link-nav-${link.label.toLowerCase()}`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/918766350093?text=Hi,%20I%20am%20interested%20in%20your%20real%20estate%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="re-btn re-btn--primary"
            data-testid="re-link-contact-nav"
          >
            <Phone className="w-4 h-4" />
            Get in Touch
          </a>
        </div>

        <button
          className="lg:hidden p-2 text-white"
          onClick={() => setIsOpen(!isOpen)}
          data-testid="re-button-mobile-menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden re-mobile-menu">
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-white/80"
                style={{ textDecoration: "none" }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/918766350093?text=Hi,%20I%20am%20interested%20in%20your%20real%20estate%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="re-btn re-btn--primary justify-center mt-2"
              onClick={() => setIsOpen(false)}
            >
              <Phone className="w-4 h-4" />
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

function REHero() {
  return (
    <section className="relative min-h-screen flex items-center" data-testid="re-section-hero">
      <div className="absolute inset-0">
        <img
          src="/images/realestate/hero-home.jpg"
          alt="Luxury real estate"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />
      </div>

      <div className="relative container mx-auto px-4 md:px-6 pt-24 pb-16">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="re-label mb-6" data-testid="re-text-label">
              <Star className="w-3.5 h-3.5" />
              Premium Real Estate
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6" data-testid="re-text-hero-title">
              Find Your
              <br />
              <span className="re-text-accent">Dream Home</span>
            </h1>

            <p className="text-base md:text-lg text-white/70 max-w-lg mb-8 leading-relaxed">
              Discover exceptional properties with our expert guidance.
              From luxury villas to modern apartments, we help you find the perfect space to call home.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#properties"
                className="re-btn re-btn--primary"
                data-testid="re-link-explore"
              >
                Explore Properties
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/918766350093?text=Hi,%20I%20am%20interested%20in%20your%20real%20estate%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="re-btn re-btn--glass"
                data-testid="re-link-whatsapp-hero"
              >
                <SiWhatsapp className="w-5 h-5" />
                WhatsApp Us
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-6 md:gap-10 mt-12">
              <div data-testid="re-stat-properties">
                <div className="text-3xl md:text-4xl font-bold text-white">500+</div>
                <div className="text-sm text-white/50">Properties Sold</div>
              </div>
              <div className="w-px h-10 bg-white/20 hidden sm:block" />
              <div data-testid="re-stat-clients">
                <div className="text-3xl md:text-4xl font-bold text-white">1200+</div>
                <div className="text-sm text-white/50">Happy Clients</div>
              </div>
              <div className="w-px h-10 bg-white/20 hidden sm:block" />
              <div data-testid="re-stat-years">
                <div className="text-3xl md:text-4xl font-bold text-white">15+</div>
                <div className="text-sm text-white/50">Years Experience</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const properties = [
  {
    img: "/images/realestate/property-1.jpg",
    title: "Modern Luxury Apartment",
    location: "Sector 45, Gurugram",
    price: "1.2 Cr",
    beds: 3,
    baths: 2,
    sqft: "1,850",
    tag: "Featured",
  },
  {
    img: "/images/realestate/property-2.jpg",
    title: "Premium Villa with Pool",
    location: "DLF Phase 2, Gurugram",
    price: "3.5 Cr",
    beds: 5,
    baths: 4,
    sqft: "4,200",
    tag: "Premium",
  },
  {
    img: "/images/realestate/property-3.jpg",
    title: "Elegant Garden Home",
    location: "Vasant Kunj, New Delhi",
    price: "2.8 Cr",
    beds: 4,
    baths: 3,
    sqft: "3,100",
    tag: "New",
  },
  {
    img: "/images/realestate/property-4.jpg",
    title: "Penthouse Suite",
    location: "Golf Course Road, Gurugram",
    price: "5.2 Cr",
    beds: 4,
    baths: 4,
    sqft: "5,500",
    tag: "Exclusive",
  },
  {
    img: "/images/realestate/property-5.jpg",
    title: "City View Apartment",
    location: "Connaught Place, Delhi",
    price: "1.8 Cr",
    beds: 2,
    baths: 2,
    sqft: "1,400",
    tag: "Hot Deal",
  },
  {
    img: "/images/realestate/property-6.jpg",
    title: "Commercial Office Space",
    location: "Cyber City, Gurugram",
    price: "4.5 Cr",
    beds: 0,
    baths: 2,
    sqft: "6,000",
    tag: "Investment",
  },
];

function REProperties() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section ref={ref} id="properties" className="re-section" data-testid="re-section-properties">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="re-label mb-4">
              <Building2 className="w-3.5 h-3.5" />
              Our Collection
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold re-text-dark leading-tight" data-testid="re-text-properties-title">
              Featured <span className="re-text-accent">Properties</span>
            </h2>
          </div>
          <a
            href="https://wa.me/918766350093?text=Hi,%20I%20want%20to%20see%20more%20properties."
            target="_blank"
            rel="noopener noreferrer"
            className="re-btn re-btn--outline-dark shrink-0 self-start md:self-auto"
            data-testid="re-link-all-properties"
          >
            View All <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="re-property-card group"
              data-testid={`re-card-property-${i}`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={property.img}
                  alt={property.title}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 re-tag">{property.tag}</div>
                <button className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 flex items-center justify-center text-gray-500 transition-colors" data-testid={`re-btn-fav-${i}`}>
                  <Heart className="w-4 h-4" />
                </button>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="text-lg font-bold re-text-dark truncate">{property.title}</h3>
                </div>
                <div className="flex items-center gap-1.5 text-sm text-gray-500 mb-4">
                  <MapPin className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">{property.location}</span>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  {property.beds > 0 && (
                    <div className="flex items-center gap-1.5">
                      <Bed className="w-4 h-4" />
                      <span>{property.beds}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-1.5">
                    <Bath className="w-4 h-4" />
                    <span>{property.baths}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Square className="w-4 h-4" />
                    <span>{property.sqft} sqft</span>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-2 pt-4 border-t border-gray-100">
                  <div className="text-xl font-bold re-text-accent">{property.price}</div>
                  <a
                    href="https://wa.me/918766350093?text=Hi,%20I%20am%20interested%20in%20the%20property%20listing."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="re-btn re-btn--primary !py-2.5 !px-5 !text-sm"
                    data-testid={`re-link-enquire-${i}`}
                  >
                    Enquire <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const servicesList = [
  {
    icon: Home,
    title: "Residential Sales",
    desc: "Premium residential properties including villas, apartments, and independent houses across prime locations.",
  },
  {
    icon: Building2,
    title: "Commercial Leasing",
    desc: "Office spaces, retail shops, and commercial properties for rent and sale in major business districts.",
  },
  {
    icon: TrendingUp,
    title: "Investment Advisory",
    desc: "Expert guidance on real estate investments, ROI analysis, and portfolio diversification strategies.",
  },
  {
    icon: Shield,
    title: "Legal Assistance",
    desc: "Complete legal support including documentation, title verification, and registration services.",
  },
  {
    icon: Users,
    title: "Property Management",
    desc: "End-to-end property management services including tenant screening, maintenance, and rent collection.",
  },
  {
    icon: Clock,
    title: "Consultation",
    desc: "Book a free 30-minute consultation to discuss your property needs and get personalized recommendations.",
  },
];

function REServices() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section ref={ref} id="services" className="re-section re-section--alt" data-testid="re-section-services">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="re-label mx-auto mb-4">
            <Star className="w-3.5 h-3.5" />
            What We Offer
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold re-text-dark leading-tight mb-4" data-testid="re-text-services-title">
            Our <span className="re-text-accent">Services</span>
          </h2>
          <p className="text-gray-500 leading-relaxed">
            Comprehensive real estate solutions tailored to your needs.
            From finding your dream home to managing your property portfolio.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="re-service-card"
              data-testid={`re-card-service-${i}`}
            >
              <div className="re-service-icon">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold re-text-dark mb-2">{service.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function REAbout() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} id="about" className="re-section" data-testid="re-section-about">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img
              src="/images/realestate/property-3.jpg"
              alt="About EstateVue"
              className="rounded-2xl w-full object-cover h-[400px] md:h-[500px]"
              data-testid="re-img-about"
            />
            <div className="absolute -bottom-6 -right-4 md:-bottom-8 md:-right-8 re-about-stat-card">
              <div className="text-3xl font-bold re-text-accent mb-1">15+</div>
              <div className="text-sm text-gray-500">Years of Experience</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="re-label mb-4">
              <Star className="w-3.5 h-3.5" />
              About Us
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold re-text-dark leading-tight mb-5" data-testid="re-text-about-title">
              We Build Trust <br />
              <span className="re-text-accent">Through Quality</span>
            </h2>

            <p className="text-gray-500 mb-6 leading-relaxed">
              With over 15 years of experience in the real estate industry, we have helped thousands of families
              find their dream homes. Our commitment to quality, transparency, and customer satisfaction
              sets us apart.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "500+ Properties Sold Successfully",
                "End-to-End Legal & Documentation Support",
                "Trusted by 1200+ Happy Families",
                "Pan-India Network of Properties",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="re-check-circle">
                    <Check className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="text-sm text-gray-600">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://wa.me/918766350093?text=Hi,%20I%20want%20to%20know%20more%20about%20your%20real%20estate%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="re-btn re-btn--primary"
                data-testid="re-link-whatsapp-about"
              >
                <SiWhatsapp className="w-4 h-4" />
                WhatsApp Us
              </a>
              <a
                href="tel:+918766350093"
                className="re-btn re-btn--outline-dark"
                data-testid="re-link-call-about"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Homeowner, Gurugram",
    text: "EstateVue helped us find the perfect home in DLF Phase 5. Their team was incredibly patient and professional throughout the entire process. Highly recommend!",
    rating: 5,
  },
  {
    name: "Rajesh Kumar",
    role: "Investor, Delhi",
    text: "I've been investing in properties through EstateVue for 3 years now. Their market knowledge and ROI predictions have been spot-on every time.",
    rating: 5,
  },
  {
    name: "Anita Desai",
    role: "Business Owner, Noida",
    text: "Finding office space was stressful until EstateVue stepped in. They understood our requirements perfectly and delivered beyond expectations.",
    rating: 5,
  },
];

function RETestimonials() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section ref={ref} id="testimonials" className="re-section re-section--alt" data-testid="re-section-testimonials">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="re-label mx-auto mb-4">
            <Star className="w-3.5 h-3.5" />
            Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold re-text-dark leading-tight mb-4" data-testid="re-text-testimonials-title">
            What Our <span className="re-text-accent">Clients Say</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15 }}
              className="re-testimonial-card"
              data-testid={`re-card-testimonial-${i}`}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, s) => (
                  <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-5 italic">"{t.text}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-10 h-10 rounded-full re-bg-accent/10 flex items-center justify-center">
                  <span className="text-sm font-bold re-text-accent">{t.name.charAt(0)}</span>
                </div>
                <div>
                  <div className="text-sm font-semibold re-text-dark">{t.name}</div>
                  <div className="text-xs text-gray-400">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function RECTA() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden" data-testid="re-section-cta">
      <div className="absolute inset-0">
        <img
          src="/images/realestate/property-5.jpg"
          alt="City skyline"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50" />
      </div>
      <div className="relative container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5" data-testid="re-text-cta-title">
          Ready to Find Your <span className="re-text-accent">Dream Property?</span>
        </h2>
        <p className="text-white/70 max-w-xl mx-auto mb-8 leading-relaxed">
          Schedule a free consultation with our experts. We'll help you find the perfect property that fits your budget and lifestyle.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://wa.me/918766350093?text=Hi,%20I%20want%20to%20schedule%20a%20free%20consultation%20for%20property%20search."
            target="_blank"
            rel="noopener noreferrer"
            className="re-btn re-btn--primary"
            data-testid="re-link-cta-whatsapp"
          >
            <SiWhatsapp className="w-5 h-5" />
            WhatsApp Us
          </a>
          <a
            href="tel:+918766350093"
            className="re-btn re-btn--glass"
            data-testid="re-link-cta-call"
          >
            <Phone className="w-5 h-5" />
            Call: +91 8766 3500 93
          </a>
        </div>
      </div>
    </section>
  );
}

function REFooter() {
  return (
    <footer id="contact" className="re-footer" data-testid="re-section-footer">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-10 h-10 rounded-md re-bg-accent flex items-center justify-center">
                <Home className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-lg font-bold re-text-dark block leading-tight" data-testid="re-text-footer-brand">EstateVue</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400">Premium Realty</span>
              </div>
            </div>
            <p className="text-gray-500 mb-6 max-w-md leading-relaxed text-sm">
              Your trusted partner in finding the perfect property.
              With 15+ years of experience and 500+ successful deals,
              we deliver excellence in every transaction.
            </p>
            <div className="space-y-3 mb-6">
              <a href="mailto:thecleverwork@gmail.com" className="flex items-center gap-3 text-sm text-gray-500" style={{ textDecoration: 'none' }} data-testid="re-link-footer-email">
                <Mail className="w-4 h-4 re-text-accent shrink-0" />
                <span>thecleverwork@gmail.com</span>
              </a>
              <a href="tel:+918766350093" className="flex items-center gap-3 text-sm text-gray-500" style={{ textDecoration: 'none' }} data-testid="re-link-footer-phone">
                <Phone className="w-4 h-4 re-text-accent shrink-0" />
                <span>+91 8766 3500 93</span>
              </a>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <MapPin className="w-4 h-4 re-text-accent shrink-0" />
                <span>Gurugram, Haryana, India</span>
              </div>
            </div>
            <div className="flex gap-3">
              <a href="https://wa.me/918766350093" target="_blank" rel="noopener noreferrer" className="re-social-icon" data-testid="re-link-social-whatsapp">
                <SiWhatsapp className="w-4 h-4" />
              </a>
              <a href="#" className="re-social-icon" data-testid="re-link-social-instagram">
                <SiInstagram className="w-4 h-4" />
              </a>
              <a href="#" className="re-social-icon" data-testid="re-link-social-facebook">
                <SiFacebook className="w-4 h-4" />
              </a>
              <a href="#" className="re-social-icon" data-testid="re-link-social-youtube">
                <SiYoutube className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-base font-bold re-text-dark mb-5">Quick Links</h4>
            <div className="flex flex-col gap-3">
              {["Properties", "Services", "About", "Reviews", "Contact"].map((link) => (
                <a key={link} href={`#${link.toLowerCase()}`} className="text-sm text-gray-500 transition-colors" style={{ textDecoration: 'none' }}>
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-base font-bold re-text-dark mb-5">Property Types</h4>
            <div className="flex flex-col gap-3">
              {["Residential", "Commercial", "Villas", "Apartments", "Plots"].map((type) => (
                <a key={type} href="#properties" className="text-sm text-gray-500 transition-colors" style={{ textDecoration: 'none' }}>
                  {type}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm gap-4">
          <p>Built by <a href="/" className="re-text-accent font-semibold" style={{ textDecoration: 'none' }}>The Clever Work</a></p>
          <p>&copy; {new Date().getFullYear()} EstateVue. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default function RealEstate() {
  return (
    <div className="re-page" data-testid="re-page">
      <RENav />
      <main>
        <REHero />
        <REProperties />
        <REServices />
        <REAbout />
        <RETestimonials />
        <RECTA />
      </main>
      <REFooter />
    </div>
  );
}
