import React, { useMemo } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";

const EASE = [0.16, 1, 0.3, 1];

const testimonials = [
  {
    quote:
      "Pavan played a key role in improving the performance of our financial systems. He identified bottlenecks in APIs and optimized them effectively, which noticeably reduced latency in production workflows. He's someone who takes ownership and delivers reliably.",
    name: "Venkat Sampara",
    title: "Engineering Manager",
    company: "ValueLabs",
  },
  {
    quote:
      "At Oracle Cerner, Pavan worked on critical healthcare modules where stability and reliability were essential. He was quick to debug production issues and consistently delivered secure and scalable solutions, especially around access control and system workflows.",
    name: "Sarvanan",
    title: "Senior Technical Lead",
    company: "Oracle Cerner",
  },
  {
    quote:
      "During our early SaaS phase, Pavan helped us build core backend APIs and improve frontend structure. He was able to take complex requirements and turn them into clean, working features without overcomplicating things.",
    name: "Vishu",
    title: "Co-founder & CTO",
    company: "AeroSimple",
  },
];

/* Testimonial Card Component */
const TestimonialCard = ({ index, quote, name, title, company }) => {
  const cardVariants = useMemo(
    () => fadeIn("up", "tween", index * 0.15, 0.5),
    [index]
  );

  return (
    <motion.div
      variants={cardVariants}
      className="w-full sm:w-[350px] flex-1 min-w-[280px]"
    >
      <div
        className="min-h-[280px] rounded-2xl p-6 flex flex-col justify-between"
        style={{
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.07)",
          backdropFilter: "blur(12px)",
        }}
      >
        {/* Quote */}
        <p className="text-white/70 text-[14px] leading-relaxed mb-4">
          "{quote}"
        </p>

        {/* Divider */}
        <div className="w-12 h-[1px] bg-gradient-to-r from-[#10b981] to-transparent mb-4" />

        {/* Author */}
        <div>
          <p className="text-white font-semibold text-[15px]">{name}</p>
          <p className="text-[#10b981] text-[12px] font-medium">{title}</p>
          <p className="text-white/40 text-[12px] mt-0.5">{company}</p>
        </div>
      </div>
    </motion.div>
  );
};

/* Main Testimonials Component */
const Testimonials = () => {
  return (
    <>
      {/* Header */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What people say</p>

        <h2 className={styles.sectionHeadText}>
          Recognition from Industry Leaders
        </h2>
      </motion.div>

      {/* Description */}
      <motion.p
        variants={fadeIn("", "", 0.1, 0.8)}
        className="mt-4 text-white/60 text-[15px] max-w-2xl leading-relaxed"
      >
        Testimonials from engineering managers and CTOs I've worked with across
        financial, healthcare, and SaaS platforms.
      </motion.p>

      {/* Cards */}
      <div className="mt-12 flex flex-wrap gap-6">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={`testimonial-${index}`}
            index={index}
            {...testimonial}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Testimonials, "testimonials");
