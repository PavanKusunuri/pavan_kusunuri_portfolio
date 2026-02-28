// Apple-style easing: cubic-bezier(0.16, 1, 0.3, 1) – fast start, spring-like settle
const APPLE_EASE = [0.16, 1, 0.3, 1];
const APPLE_EASE_OUT = [0.25, 0.46, 0.45, 0.94];

export const textVariant = (delay) => {
  return {
    hidden: { y: 24, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        ease: APPLE_EASE,
        duration: 0.65,
        delay: delay || 0,
      },
    },
  };
};

export const fadeIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? 60 : direction === "right" ? -60 : 0,
      y: direction === "up" ? 60 : direction === "down" ? -60 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: APPLE_EASE,
      },
    },
  };
};

export const zoomIn = (delay, duration) => {
  return {
    hidden: { scale: 0.85, opacity: 0 },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay: delay,
        duration: duration,
        ease: APPLE_EASE,
      },
    },
  };
};

export const slideIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: APPLE_EASE_OUT,
      },
    },
  };
};

export const staggerContainer = (staggerChildren, delayChildren) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  };
};
