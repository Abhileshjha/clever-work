import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

const DiamondStar = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 0L19.5 12.5L32 16L19.5 19.5L16 32L12.5 19.5L0 16L12.5 12.5L16 0Z" fill="hsl(142, 70%, 45%)" />
  </svg>
);

const LoopArrow = () => (
  <svg width="60" height="50" viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 50C10 25 30 10 55 10" stroke="hsl(142, 70%, 45%)" strokeWidth="2" strokeLinecap="round" fill="none" />
    <path d="M50 5L58 10L50 15" stroke="hsl(142, 70%, 45%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

const SixLineAsterisk = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <line x1="14" y1="0" x2="14" y2="28" stroke="hsl(142, 70%, 45%)" strokeWidth="2" />
    <line x1="0" y1="14" x2="28" y2="14" stroke="hsl(142, 70%, 45%)" strokeWidth="2" />
    <line x1="4" y1="4" x2="24" y2="24" stroke="hsl(142, 70%, 45%)" strokeWidth="2" />
    <line x1="24" y1="4" x2="4" y2="24" stroke="hsl(142, 70%, 45%)" strokeWidth="2" />
  </svg>
);

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 bg-grid" data-testid="section-hero">
      <div className="overlay--bottom-left" />
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-4">
              <LoopArrow />
            </div>

            <div className="flex items-center gap-2 mb-5">
              <span className="text-lg text-muted-foreground">Hi</span>
              <svg width="28" height="28" viewBox="0 0 36 36" fill="none">
                <path d="M4.86 9.15c.94-.66 2.36-.53 3.2.17l-.97-1.41-.49-.75-1.19-1.82c-.84-1.28-2.56-1.65-3.85-.81C.28 5.37-.08 7.09.76 8.38l1.19 1.81.49.75.82 1.21c-.33-1.3.27-2.34 1.61-3z" fill="#FFDC4D"/>
                <path d="M17.71 3.35c-2.08-2.08-5.46-2.08-7.54 0-1.63 1.63-1.98 4.03-1.05 6.01l-1.18-1.77L6.25 5.14c-.84-1.29-2.56-1.65-3.85-.81-1.29.84-1.65 2.56-.81 3.85l2.86 4.36h8.86c1.48 0 2.92-3.27 2.81-5.2l5.7-2.59c1.13-.51 1.63-1.86 1.12-3.01-.51-1.14-1.85-1.65-2.98-1.13l-5.24 2.54" fill="#FFDC4D"/>
              </svg>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.15] mb-6" data-testid="text-hero-title">
              I'm The Clever Work
              <br />
              <span className="inline-flex items-center gap-3">
                <DiamondStar />
                <span className="text-primary">Full Stack</span>
              </span>
              <br />
              Developer
            </h1>

            <p className="text-base md:text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed">
              i will create a great looking and fully functional Website / APP for you.
              With <span className="text-foreground font-semibold">12Y Exp</span>, i know what i am doing.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://wa.me/918766350093?text=Hi,%20i%20found%20you%20at%20thecleverwork%20i%20am%20looking%20for%20a%20Website%20/%20APP.%20i%20would%20like%20to%20know%20about%20the%20Quote."
                target="_blank"
                rel="noopener noreferrer"
                className="trk-btn trk-btn--primary"
                data-testid="link-whatsapp-hero"
              >
                WhatsApp me
                <SiWhatsapp className="w-5 h-5" />
              </a>

              <a
                href="#portfolio"
                className="play-btn"
                data-testid="link-video-hero"
              >
                <span className="play-icon">
                  <Play className="w-4 h-4" />
                </span>
                Watch my work
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <img
              src="/images/profile/hero.png"
              alt="The Clever Work - Full Stack Developer"
              className="w-full max-w-[500px] mx-auto"
              style={{ borderRadius: '40px' }}
              data-testid="img-hero-profile"
            />
          </motion.div>
        </div>
      </div>

      <div className="hidden lg:block">
        <motion.span
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
          className="absolute top-[25%] right-[8%]"
        >
          <DiamondStar />
        </motion.span>
        <motion.span
          animate={{ x: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 5 }}
          className="absolute top-[45%] right-[3%]"
        >
          <SixLineAsterisk />
        </motion.span>
        <motion.span
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 6 }}
          className="absolute bottom-[15%] right-[12%]"
        >
          <DiamondStar />
        </motion.span>
      </div>
    </section>
  );
}
