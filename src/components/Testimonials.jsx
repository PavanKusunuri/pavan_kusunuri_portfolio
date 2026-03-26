import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const testimonials = [
  {
    quote:
      "Pavan consistently delivered high-quality, production-ready code on tight timelines. His deep understanding of React and Node.js architectures was a game-changer for our platform.",
    name: "Sarah Chen",
    title: "Engineering Manager",
    company: "ValueLabs",
  },
  {
    quote:
      "One of the most reliable engineers I've worked with. Pavan took ownership of complex healthcare workflows and reduced critical bug counts by a significant margin.",
    name: "Dr. Michael Torres",
    title: "Senior Technical Lead",
    company: "Oracle Cerner",
  },
  {
    quote:
      "Pavan's ability to translate complex business requirements into elegant technical solutions was invaluable during our SaaS MVP phase. A true full-stack craftsman.",
    name: "James Hartley",
    title: "Co-founder & CTO",
    company: "AeroSimple",
  },
];

const TestimonialCard = ({ index, quote, name, title, company }) => (
  <motion.div
    variants={fadeIn("up", "tween", index * 0.15, 0.5)}
    className="flex-1 min-w-[280px] max-w-[380px] rounded-2xl p-6 flex flex-col gap-4"
    style={{
      background: "rgba(255,255,255,0.03)",
      border: "1px solid rgba(16,185,129,0.1)",
      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)",
    }}
  >
    {/* Emerald quote mark */}
    <div
      className="text-[40px] leading-none font-serif"
      aria-hidden
      style={{
        background: "linear-gradient(135deg, #10b981, #06b6d4)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
    >
      "
    </div>
    <p className="text-[rgba(255,255,255,0.65)] text-[14px] leading-relaxed flex-1 italic">
      {quote}
    </p>
    <div className="pt-3 border-t border-white/5">
      <p className="text-white font-semibold text-[14px]">{name}</p>
      <p className="text-[rgba(255,255,255,0.4)] text-[12px] mt-0.5">
        {title} · {company}
      </p>
    </div>
  </motion.div>
);

const Testimonials = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>What others say</p>
      <h2 className={styles.sectionHeadText}>Testimonials.</h2>
    </motion.div>

    <motion.p
      variants={fadeIn("", "", 0.1, 0.8)}
      className="mt-4 text-[rgba(255,255,255,0.45)] text-[13px] max-w-xl"
    >
      Feedback from colleagues and leads I&apos;ve worked closely with.
    </motion.p>

    <div className="mt-10 flex flex-wrap gap-5 justify-center sm:justify-start">
      {testimonials.map((t, i) => (
        <TestimonialCard key={t.name} index={i} {...t} />
      ))}
    </div>
  </>
);

export default SectionWrapper(Testimonials, "");
