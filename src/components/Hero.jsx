import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const EASE = [0.16, 1, 0.3, 1];

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen mx-auto overflow-hidden">
      {/* Ambient glow blobs - Apple-style */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#7c3aed] opacity-[0.08] blur-[120px]" />
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full bg-[#3b82f6] opacity-[0.06] blur-[100px]" />
      </div>

      <div
        className={`max-w-7xl mx-auto ${styles.paddingX}
          flex flex-col md:flex-row items-center justify-between
          min-h-screen gap-8 pt-28 pb-16`}
      >
        {/* LEFT: Text Content */}
        <div className="flex-1 flex flex-row items-start gap-5">
          {/* Accent bar */}
          <div
            className="flex flex-col justify-center items-center mt-2"
            aria-hidden
          >
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="w-4 h-4 rounded-full bg-[#7c3aed]"
            />
            <motion.div
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{ scaleY: 1, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.25, ease: EASE }}
              style={{ originY: 0 }}
              className="w-[2px] h-36 sm:h-52 bg-gradient-to-b from-[#7c3aed] to-transparent"
            />
          </div>

          {/* Text */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="text-[#7c3aed] text-[13px] uppercase tracking-[0.18em] font-semibold mb-3"
            >
              Senior Software Engineer
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1, ease: EASE }}
              className={`${styles.heroHeadText}`}
            >
              Hi, I'm <span className="gradient-text">Pavan Kusunuri</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2, ease: EASE }}
              className={`${styles.heroSubText} mt-4`}
            >
              6+ years building scalable enterprise
              <br className="hidden sm:block" />
              &amp; SaaS web applications
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.3, ease: EASE }}
              className="mt-5 text-[rgba(255,255,255,0.55)] max-w-md leading-relaxed text-[15px]"
            >
              React &middot; Node.js &middot; Python &middot; API-driven systems
              &middot; Performance optimization &middot; End-to-end feature
              ownership
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.42, ease: EASE }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a
                href="#about"
                className="apple-btn apple-btn-primary px-7 py-3 text-[15px]"
              >
                View Work
              </a>
              <a
                href="#contact"
                className="apple-btn glass text-white px-7 py-3 text-[15px]"
              >
                Get in touch
              </a>
            </motion.div>
          </div>
        </div>

        {/* RIGHT: 3D Canvas */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
          className="hidden md:flex flex-1 h-[500px] items-center justify-center"
        >
          <ComputersCanvas />
        </motion.div>

        {/* Mobile canvas */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: EASE }}
          className="md:hidden w-full h-[300px]"
        >
          <ComputersCanvas />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 w-full flex justify-center items-center">
        <a href="#about" aria-label="Scroll down">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-1 opacity-40 hover:opacity-70 transition-opacity"
          >
            <div className="w-[1px] h-8 bg-white/40" />
            <div className="w-1.5 h-1.5 rounded-full bg-white" />
          </motion.div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
