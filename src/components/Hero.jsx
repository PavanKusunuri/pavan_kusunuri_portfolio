import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { lazy, Suspense, useEffect, useState } from "react";
import { styles } from "../styles";
import { LINKEDIN, GITHUB } from "../constants";
import { downloadResume } from "../utils/resumeDownload";
import Magnetic from "./Magnetic";
import { GitHubIcon, LinkedInIcon } from "./icons";

const ComputersCanvas = lazy(() => import("./canvas/Computers"));

const EASE = [0.16, 1, 0.3, 1];
const SPRING = { stiffness: 70, damping: 22, restDelta: 0.001 };

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { scrollY } = useScroll();

  const textY = useSpring(useTransform(scrollY, [0, 700], [0, -70]), SPRING);
  const canvasY = useSpring(useTransform(scrollY, [0, 700], [0, 140]), SPRING);
  const fade = useTransform(scrollY, [0, 420], [1, 0]);
  const scale = useSpring(useTransform(scrollY, [0, 600], [1, 0.94]), SPRING);
  const orbY = useSpring(useTransform(scrollY, [0, 800], [0, 180]), SPRING);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <section className="relative w-full min-h-[100svh] mx-auto overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 dot-grid" />
        <motion.div
          style={{ y: orbY }}
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[640px] h-[640px] rounded-full bg-[#10b981] opacity-[0.09] blur-[140px]"
        />
        <motion.div
          style={{ y: canvasY }}
          className="absolute top-1/3 right-0 w-[420px] h-[420px] rounded-full bg-[#06b6d4] opacity-[0.07] blur-[110px]"
        />
      </div>

      <div
        className={`max-w-7xl mx-auto ${styles.paddingX} flex flex-col lg:flex-row items-center justify-between min-h-[100svh] gap-10 lg:gap-6 pt-28 pb-20`}
      >
        <motion.div
          style={{ y: textY, opacity: fade }}
          className="flex-1 flex flex-row items-start gap-5 max-w-2xl relative z-[1]"
        >
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
              Hyderabad · 7+ years
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
              className={styles.heroHeadText}
            >
              Hi, I&apos;m{" "}
              <span className="gradient-text">Pavan Kusunuri</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.22, ease: EASE }}
              className={`${styles.heroSubText} mt-5 max-w-xl`}
            >
              Senior full-stack engineer shipping production software for
              finance, healthcare, and aviation.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.32, ease: EASE }}
              className="mt-4 text-[rgba(255,255,255,0.45)] max-w-lg leading-relaxed text-[14px] tracking-tight"
            >
              React · Node.js · Python / Django · TypeScript · REST APIs
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.42, ease: EASE }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Magnetic>
                <a href="#works" className="apple-btn apple-btn-primary px-7 py-3 text-[15px]">
                  View Work
                </a>
              </Magnetic>
              <Magnetic>
                <button
                  type="button"
                  onClick={downloadResume}
                  className="apple-btn glass text-white px-7 py-3 text-[15px]"
                >
                  Download Resume
                </button>
              </Magnetic>
              <Magnetic>
                <a href="#contact" className="apple-btn glass text-white/80 px-6 py-3 text-[15px]">
                  Contact
                </a>
              </Magnetic>
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
                <LinkedInIcon />
              </a>
              <a
                href={GITHUB}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-[rgba(255,255,255,0.5)] hover:text-white hover:border-[rgba(16,185,129,0.4)] transition-all"
              >
                <GitHubIcon />
              </a>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          style={{ y: canvasY, scale, opacity: fade }}
          className={
            isMobile
              ? "w-full h-[260px] relative z-[1]"
              : "w-full max-w-[460px] h-[420px] relative shrink-0 z-[1]"
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

      <motion.div style={{ opacity: fade }} className="absolute bottom-8 w-full flex justify-center items-center z-[1]">
        <a href="#about" aria-label="Scroll down">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-1 opacity-40 hover:opacity-70 transition-opacity"
          >
            <div className="w-[1px] h-8 bg-white/40" />
            <div className="w-1.5 h-1.5 rounded-full bg-white" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
