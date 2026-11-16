import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";

const spring = { stiffness: 50, damping: 22, restDelta: 0.001 };

const ParallaxBackdrop = () => {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const y1Raw = useTransform(scrollY, [0, 1800], [0, reduce ? 0 : 280]);
  const y2Raw = useTransform(scrollY, [0, 1800], [0, reduce ? 0 : -220]);
  const y3Raw = useTransform(scrollY, [0, 2400], [0, reduce ? 0 : 360]);
  const y1 = useSpring(y1Raw, spring);
  const y2 = useSpring(y2Raw, spring);
  const y3 = useSpring(y3Raw, spring);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden z-0">
      <motion.div
        style={{ y: y1 }}
        className="absolute -top-24 -left-24 w-[520px] h-[520px] rounded-full blur-[120px] opacity-40"
      >
        <div className="w-full h-full rounded-full bg-[#10b981]/25" />
      </motion.div>
      <motion.div
        style={{ y: y2 }}
        className="absolute top-[20%] -right-32 w-[480px] h-[480px] rounded-full blur-[130px] opacity-35"
      >
        <div className="w-full h-full rounded-full bg-[#6366f1]/25" />
      </motion.div>
      <motion.div
        style={{ y: y3 }}
        className="absolute bottom-[-10%] left-1/3 w-[560px] h-[560px] rounded-full blur-[140px] opacity-30"
      >
        <div className="w-full h-full rounded-full bg-[#06b6d4]/20" />
      </motion.div>
    </div>
  );
};

export default ParallaxBackdrop;
