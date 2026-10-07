import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import Spotlight from "./Spotlight";

const EASE = [0.16, 1, 0.3, 1];

const stats = [
  { value: 6, suffix: "+", label: "Years Experience" },
  { value: 10, suffix: "K+", label: "Users Served" },
  { value: 3, suffix: "", label: "Enterprise Systems" },
  { value: 20, suffix: "%+", label: "Performance Gains" },
];

const useCountUp = (target, inView, duration = 1200) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;

    let startTime = null;
    let animationFrameId = null;
    const startCount = 0;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth acceleration/deceleration
      const easeOutQuad = 1 - Math.pow(1 - progress, 2);
      const currentCount = Math.floor(
        startCount + (target - startCount) * easeOutQuad,
      );

      setCount(currentCount);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [inView, target, duration]);
  
  return count;
};

const StatCard = ({ value, suffix, label, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const count = useCountUp(value, inView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: EASE }}
    >
      <Spotlight className="p-6 sm:p-7 h-full flex flex-col gap-3">
        <span
          className="text-[56px] sm:text-[64px] font-extrabold tracking-[-0.04em] leading-none"
          style={{
            fontFamily: "var(--font-display)",
            background: "linear-gradient(135deg, #e2e8f0 0%, #10b981 60%, #06b6d4 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {count}{suffix}
        </span>
        <span className="eyebrow !text-white/50 before:content-none !text-[11px]">
          {label}
        </span>
      </Spotlight>
    </motion.div>
  );
};

const Stats = () => (
  <section className="max-w-7xl mx-auto px-6 sm:px-16 py-10">
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((s, i) => (
        <StatCard key={s.label} index={i} {...s} />
      ))}
    </div>
  </section>
);

export default Stats;
