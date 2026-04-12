import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

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
      className="flex-1 min-w-[140px] rounded-2xl p-6 flex flex-col items-center gap-2 text-center"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(16,185,129,0.12)",
        backdropFilter: "blur(12px)",
      }}
    >
      <span
        className="text-[48px] font-extrabold tracking-tight leading-none"
        style={{
          background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        {count}{suffix}
      </span>
      <span className="text-[rgba(255,255,255,0.45)] text-[12px] font-semibold tracking-[0.1em] uppercase">
        {label}
      </span>
    </motion.div>
  );
};

const Stats = () => (
  <section className="max-w-7xl mx-auto px-6 sm:px-16 py-10">
    <div className="flex flex-wrap gap-4 justify-center sm:justify-between">
      {stats.map((s, i) => (
        <StatCard key={s.label} index={i} {...s} />
      ))}
    </div>
  </section>
);

export default Stats;
