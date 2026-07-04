import { motion } from "framer-motion";
import { lazy, memo, Suspense, useEffect, useState } from "react";
import { styles } from "../styles";

const ComputersCanvas = lazy(() => import("./canvas/Computers"));

const EASE = [0.16, 1, 0.3, 1];

const LINKEDIN = "https://www.linkedin.com/in/pavan-kusunuri";
const GITHUB = "https://github.com/PavanKusunuri";

const ROLES = [
  "Senior Software Engineer",
  "Full-Stack Developer",
  "React · Node.js Specialist",
];

/* Typewriter cycling through ROLES - memoized to prevent re-renders */
const TypewriterRole = memo(() => {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = ROLES[roleIdx];
    let timeout;
    if (!deleting && displayed.length < full.length) {
      timeout = setTimeout(() => setDisplayed(full.slice(0, displayed.length + 1)), 55);
    } else if (!deleting && displayed.length === full.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIdx((i) => (i + 1) % ROLES.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIdx]);

  return (
    <span className="text-[#10b981] font-semibold">
      {displayed}
      <span className="animate-pulse">|</span>
    </span>
  );
});

/* PK Avatar */
const PKAvatar = () => (
  <div className="relative flex items-center justify-center">
    {/* Outer glow ring */}
    <div className="absolute w-[220px] h-[220px] rounded-full"
      style={{ background: "radial-gradient(circle, rgba(16,185,129,0.15) 0%, transparent 70%)" }} />
    {/* Avatar circle */}
    <div className="relative w-[160px] h-[160px] rounded-full flex items-center justify-center"
      style={{
        background: "linear-gradient(135deg, #065f46 0%, #10b981 50%, #06b6d4 100%)",
        boxShadow: "0 0 40px rgba(16,185,129,0.35), 0 0 80px rgba(6,182,212,0.15)",
      }}>
      {/* Inner dark circle */}
      <div className="w-[148px] h-[148px] rounded-full bg-[#050816] flex items-center justify-center">
        <span style={{
          background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          fontSize: "52px",
          fontWeight: 800,
          letterSpacing: "-0.04em",
          lineHeight: 1,
        }}>PK</span>
      </div>
    </div>
  </div>
);

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
      {/* Ambient glow blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#10b981] opacity-[0.07] blur-[120px]" />
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full bg-[#06b6d4] opacity-[0.05] blur-[100px]" />
      </div>

      <div className={`max-w-7xl mx-auto ${styles.paddingX} flex flex-col md:flex-row items-center justify-between min-h-screen gap-8 pt-28 pb-16`}>
        {/* LEFT: Text Content */}
        <div className="flex-1 flex flex-row items-start gap-5">
          {/* Accent bar */}
          <div className="hidden xs:flex flex-col justify-center items-center mt-2" aria-hidden>
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="w-4 h-4 rounded-full bg-[#10b981]"
            />
            <motion.div
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{ scaleY: 1, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.25, ease: EASE }}
              style={{ originY: 0 }}
              className="w-[2px] h-36 sm:h-52 bg-gradient-to-b from-[#10b981] to-transparent"
            />
          </div>

          {/* Text */}
          <div>
            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full"
              style={{ background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.25)" }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10b981]" />
              </span>
              <span className="text-[#10b981] text-[12px] font-semibold tracking-wide">Open to Full-Time Opportunities</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05, ease: EASE }}
              className="text-[13px] uppercase tracking-[0.18em] font-semibold mb-3"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              <TypewriterRole />
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1, ease: EASE }}
              className={`${styles.heroHeadText}`}
            >
              Hi, I&apos;m <span className="gradient-text">Pavan Kusunuri</span>
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
              &middot; Performance optimization &middot; End-to-end feature ownership
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.42, ease: EASE }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a href="#about" className="apple-btn apple-btn-primary px-7 py-3 text-[15px]">
                View Work
              </a>
              <a href="#contact" className="apple-btn glass text-white px-7 py-3 text-[15px]">
                Get in touch
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55, ease: EASE }}
              className="mt-5 flex items-center gap-3"
            >
              <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-[rgba(255,255,255,0.5)] hover:text-white hover:border-[rgba(16,185,129,0.4)] transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href={GITHUB} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-[rgba(255,255,255,0.5)] hover:text-white hover:border-[rgba(16,185,129,0.4)] transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </a>
              <span className="text-[rgba(255,255,255,0.3)] text-[12px]">
                linkedin · github
              </span>
            </motion.div>
          </div>
        </div>

        {/* RIGHT: Avatar + 3D Canvas */}
        <div className="flex flex-col items-center gap-6">
          {/* PK Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.25, ease: EASE }}
          >
            <PKAvatar />
          </motion.div>

          {/* 3D Canvas */}
          <motion.div
            initial={{ opacity: 0, scale: isMobile ? 1 : 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: isMobile ? 0.4 : 0.35, ease: EASE }}
            className={isMobile ? "w-full h-[240px]" : "w-[380px] h-[380px]"}
          >
            <Suspense fallback={null}>
              <ComputersCanvas />
            </Suspense>
          </motion.div>
        </div>
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

