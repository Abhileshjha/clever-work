import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Play, Star } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16" data-testid="section-hero">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="text-lg text-muted-foreground">Hi</span>
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNiAzNiI+PHBhdGggZmlsbD0iI0ZGREM0RCIgZD0iTTQuODYxIDkuMTQ3YzAuOTQtLjY1NyAyLjM1Ny0uNTMxIDMuMjAxLjE2NmwtLjk2OC0xLjQwNy0uNDktLjc1LTEuMTg5LTEuODE1Yy0uODQtMS4yODUtMi41NjEtMS42NDktMy44NDktLjgxMy0xLjI4Ni44MzgtMS42NTIgMi41Ni0uODEyIDMuODQ3bDEuMTg5IDEuODE1LjQ5Ljc1LjgxNiAxLjIwNWMtLjMzLTEuMjk0LjI3Mi0yLjM0MSAxLjYxMi0yLjk5OHoiLz48cGF0aCBmaWxsPSIjRkZEQzREIiBkPSJNMTcuNzA4IDMuMzQ5Yy0yLjA4LTIuMDgtNS40NTYtMi4wOC03LjUzNiAwLTEuNjI3IDEuNjI3LTEuOTc1IDQuMDMxLTEuMDQ2IDYuMDE0TDcuOTQzIDcuNTg5IDYuMjU0IDUuMTRjLS44NC0xLjI4NS0yLjU2MS0xLjY0OS0zLjg0OS0uODEzLTEuMjg2LjgzOC0xLjY1MiAyLjU2LS44MTIgMy44NDdsMi44NiA0LjM2NWg4Ljg1NWMxLjQ4MSAwIDIuOTE3LTMuMjcgMi44MTQtNS4yMDFsNS43MDMtMi41OTRjMS4xMjktLjUxMyAxLjYzMi0xLjg1OCAxLjEyNC0zLjAwNS0uNTA3LTEuMTQ1LTEuODUtMS42NDctMi45NzgtMS4xMzRMMTQuMjgzIDMuNTQgMTIuMDYgNC45NDhzMy42NDYtMy42LS4xNzItLjI1bC40MjItLjAyMmMuMDExLjAyNi0zLjE5My0yLjkyLTQuNjQyLTMuMDc4bC0xLjA5Mi0uMTU3IDcuMDg2IDEuMjg4IDIuOTYzLjcxMnMuMDMxLS4wMTUuMDI5LS4wMjRjLjE0NC0uMTA0LS4wNzkuMDI1LS4wODkuMDI4LS4wMTkuMDA2LjExOC0uMDU4LjExOC0uMDU4cy4xMi0uMDU1LjExNS0uMDUxYy4wOTYtLjAzOC4wNy0uMDI1LS4wMi4wMTFsLjIwMi0uMDczYy4wMjMtLjAwNy4wNDgtLjAxMy4wNjktLjAxOS0uMDExLjAwNC0uMDUzLjAxNS0uMDUzLjAxNXMtLjAxOS4wMDgtLjA0LjAxNSIvPjxwYXRoIGZpbGw9IiNGRkRDNEQiIGQ9Ik0yMC43MDggNi4yNDlsLTMuNSA1LjVMMjQuMjA4IDUuMjQ5bC0zLjUtMXoiLz48cGF0aCBmaWxsPSIjRTFCRTIxIiBkPSJNMTQuNzk0IDIuMDk5bC04LjY2IDkuMTkzIDQuOTYgMy4yNDcgOC45NDktMTMuNDkyYy0uMDAxIDAtMy42NTUgMi4zOTctNS4yNDkgMS4wNTJ6Ii8+PC9zdmc+"
                alt="wave"
                className="w-8 h-8"
              />
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6" data-testid="text-hero-title">
              I'm The Clever Work
              <span className="inline-flex items-center ml-3">
                <Star className="w-8 h-8 md:w-10 md:h-10 text-primary fill-primary" />
              </span>
              <br />
              <span className="text-primary">Full Stack</span>
              <br />
              Developer
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed">
              I will create a great looking and fully functional Website / APP for you.
              With <span className="text-foreground font-semibold">12Y Exp</span>, I know what I am doing.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/918766350093?text=Hi,%20i%20found%20you%20at%20thecleverwork%20i%20am%20looking%20for%20a%20Website%20/%20APP.%20i%20would%20like%20to%20know%20about%20the%20Quote."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-base transition-all duration-300"
                data-testid="link-whatsapp-hero"
              >
                WhatsApp me <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-border text-foreground font-semibold text-base transition-all duration-300"
                data-testid="link-video-hero"
              >
                <Play className="w-4 h-4" /> View my work
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:flex items-center justify-center"
          >
            <div className="relative w-[420px] h-[480px]">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10 rounded-[2rem]" />
              <div className="absolute inset-4 bg-card rounded-[1.5rem] border border-border flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center">
                    <span className="text-5xl font-bold text-primary">TC</span>
                  </div>
                  <h3 className="text-xl font-bold mb-1">The Clever Work</h3>
                  <p className="text-sm text-muted-foreground">Full Stack Developer</p>
                  <div className="mt-4 flex items-center justify-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 pulse-green" />
                    <span className="text-xs text-green-400">Available for work</span>
                  </div>
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute -top-4 -right-4 bg-card p-3 rounded-xl border border-border flex items-center gap-2 shadow-lg"
              >
                <Sparkles className="w-5 h-5 text-primary" />
                <span className="text-sm font-bold">12+ Years</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 4, delay: 1 }}
                className="absolute -bottom-4 -left-4 bg-card p-3 rounded-xl border border-border flex items-center gap-2 shadow-lg"
              >
                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                <span className="text-sm font-bold">970+ Projects</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
