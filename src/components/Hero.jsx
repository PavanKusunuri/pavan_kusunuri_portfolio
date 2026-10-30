import { motion } from "framer-motion";
import { lazy, Suspense, useEffect, useState } from "react";
import { styles } from "../styles";
import { LINKEDIN, GITHUB } from "../constants";
import { downloadResume } from "../utils/resumeDownload";

const ComputersCanvas = lazy(() => import("./canvas/Computers"));

const EASE = [0.16, 1, 0.3, 1];

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <section className="relative w-full min-h-screen mx-auto overflow-hidden">
      {/* Atmosphere */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 dot-grid" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[640px] h-[640px] rounded-full bg-[#10b981] opacity-[0.08] blur-[140px]" />
        <div className="absolute top-1/3 right-0 w-[420px] h-[420px] rounded-full bg-[#06b6d4] opacity-[0.06] blur-[110px]" />
      </div>

      <div
        className={`max-w-7xl mx-auto ${styles.paddingX} flex flex-col lg:flex-row items-center justify-between min-h-screen gap-10 lg:gap-6 pt-28 pb-20`}
      >
        {/* LEFT — one clear composition */}
        <div className="flex-1 flex flex-row items-start gap-5 max-w-2xl">
          <div className="hidden xs:flex flex-col justify-center items-center mt-3" aria-hidden>
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="w-3.5 h-3.5 rounded-full bg-[#10b981]"
            />
            <motion.div
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{ scaleY: 1, opacity: 1 }}
              transition={{ duration: 0.75, delay: 0.2, ease: EASE }}
              style={{ originY: 0 }}
              className="w-[2px] h-40 sm:h-56 bg-gradient-to-b from-[#10b981] to-transparent"
            />
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full"
              style={{
                background: "rgba(16,185,129,0.1)",
                border: "1px solid rgba(16,185,129,0.25)",
              }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10b981]" />
              </span>
              <span className="text-[#10b981] text-[12px] font-semibold tracking-wide">
                Open to Full-Time Roles
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05, ease: EASE }}
              className="font-mono-ui text-[13px] uppercase tracking-[0.18em] font-medium mb-3 text-[#10b981]"
            >
              Senior Full-Stack Engineer
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
              className={styles.heroHeadText}
            >
              Hi, I&apos;m{" "}
              <span className="gradient-text">Pavan Kusunuri</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.22, ease: EASE }}
              className={`${styles.heroSubText} mt-5 max-w-xl`}
            >
              Full-stack engineer for finance, healthcare, and aviation SaaS —
              React, Node.js, Python, and production monitoring.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.32, ease: EASE }}
              className="mt-4 text-[rgba(255,255,255,0.45)] max-w-md leading-relaxed text-[14px] tracking-tight"
            >
              6+ years · React · Node.js · Django · AWS Lambda · Hyderabad
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.42, ease: EASE }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a href="#works" className="apple-btn apple-btn-primary px-7 py-3 text-[15px]">
                View Work
              </a>
              <button
                type="button"
                onClick={downloadResume}
                className="apple-btn glass text-white px-7 py-3 text-[15px]"
              >
                Download Resume
              </button>
              <a href="#contact" className="apple-btn glass text-white/80 px-6 py-3 text-[15px]">
                Contact
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.55, ease: EASE }}
              className="mt-6 flex items-center gap-3"
            >
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-[rgba(255,255,255,0.5)] hover:text-white hover:border-[rgba(16,185,129,0.4)] transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href={GITHUB}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-[rgba(255,255,255,0.5)] hover:text-white hover:border-[rgba(16,185,129,0.4)] transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </a>
            </motion.div>
          </div>
        </div>

        {/* RIGHT — single visual anchor */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.28, ease: EASE }}
          className={
            isMobile
              ? "w-full h-[260px] relative"
              : "w-full max-w-[460px] h-[420px] relative shrink-0"
          }
        >
          <div
            aria-hidden
            className="absolute inset-8 rounded-full blur-3xl opacity-40"
            style={{
              background:
                "radial-gradient(circle, rgba(16,185,129,0.35) 0%, transparent 70%)",
            }}
          />
          <Suspense fallback={null}>
            <ComputersCanvas />
          </Suspense>
        </motion.div>
      </div>

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
