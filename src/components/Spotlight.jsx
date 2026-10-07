import React, { useCallback } from "react";

/* Card with a cursor-following radial highlight (2026 "spotlight" bento style).
   The glow is driven by --mx/--my CSS vars so there are no React re-renders. */
const Spotlight = ({ as: Tag = "div", className = "", children, ...rest }) => {
  const onMove = useCallback((e) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  }, []);

  return (
    <Tag onMouseMove={onMove} className={`spotlight ${className}`} {...rest}>
      {children}
    </Tag>
  );
};

export default Spotlight;
