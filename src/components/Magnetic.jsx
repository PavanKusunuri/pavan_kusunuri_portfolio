import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const SPRING = { stiffness: 260, damping: 18, mass: 0.35 };

/**
 * Apple-like magnetic pull on hover. Disabled for touch / reduced motion.
 */
const Magnetic = ({ children, strength = 0.28, className = "" }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, SPRING);
  const sy = useSpring(y, SPRING);

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const onMove = (e) => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };

  return (
    <motion.div
      ref={ref}
      style={{ x: sx, y: sy }}
      onMouseMove={onMove}
      onMouseLeave={reset}
      className={`inline-flex ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Magnetic;
