import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, Star, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-background via-background to-black opacity-80" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
            <Sparkles className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium text-secondary">Available for new projects</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold font-display leading-tight mb-6">
            Hi <span className="animate-wave inline-block origin-bottom-right">👋</span> I'm <br />
            <span className="text-gradient">The Clever Work</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-muted-foreground font-light mb-8">
            Full Stack Developer &<br />
            Digital Craftsman
          </h2>

          <p className="text-lg text-muted-foreground/80 max-w-lg mb-10 leading-relaxed">
            I create visually stunning and fully functional Websites & Apps. 
            With <span className="text-white font-semibold">12+ years of experience</span>, 
            I know exactly how to turn your vision into reality.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/8766350093"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-background font-bold text-lg hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:-translate-y-1 transition-all duration-300"
            >
              WhatsApp Me <ArrowRight className="w-5 h-5" />
            </a>
            
            <button className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-semibold text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
              <PlayCircle className="w-5 h-5" /> Watch Video
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative w-full aspect-square max-w-md mx-auto">
            {/* Abstract Tech Visual */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-full animate-pulse" />
            <img 
              /* Using unsplash image for abstract tech representation */
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop"
              alt="Digital Abstract"
              className="relative z-10 w-full h-full object-cover rounded-3xl rotate-3 hover:rotate-0 transition-transform duration-500 shadow-2xl shadow-primary/20 border border-white/10"
            />
            
            {/* Floating Badges */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute -top-10 -right-10 z-20 bg-card p-4 rounded-2xl shadow-xl border border-white/10 flex items-center gap-3"
            >
              <div className="bg-green-500/20 p-2 rounded-lg">
                <Star className="w-6 h-6 text-green-500 fill-green-500" />
              </div>
              <div>
                <div className="text-xl font-bold">12+</div>
                <div className="text-xs text-muted-foreground">Years Exp.</div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ repeat: Infinity, duration: 5, delay: 1 }}
              className="absolute -bottom-10 -left-10 z-20 bg-card p-4 rounded-2xl shadow-xl border border-white/10 flex items-center gap-3"
            >
              <div className="bg-primary/20 p-2 rounded-lg">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="text-xl font-bold">1K+</div>
                <div className="text-xs text-muted-foreground">Projects Done</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
