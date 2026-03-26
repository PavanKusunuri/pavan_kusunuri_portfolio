import React, { useMemo } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const TYPE_COLORS = {
  SaaS: { bg: "rgba(16,185,129,0.12)", border: "rgba(16,185,129,0.3)", text: "#10b981" },
  Freelance: { bg: "rgba(6,182,212,0.12)", border: "rgba(6,182,212,0.3)", text: "#06b6d4" },
  Personal: { bg: "rgba(148,163,184,0.1)", border: "rgba(148,163,184,0.2)", text: "#94a3b8" },
};

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  gradient = ["#064e3b", "#065f46"],
  type,
  source_code_link,
  live_link,
}) => {
  const cardVariants = useMemo(
    () => fadeIn("up", "tween", index * 0.15, 0.5),
    [index],
  );
  const typeStyle = TYPE_COLORS[type] || TYPE_COLORS.Personal;

  return (
    <motion.div variants={cardVariants} className="w-full sm:w-[340px]">
      <Tilt
        tiltMaxAngleDegrees={8}
        scale={1.02}
        transitionSpeed={600}
        gyroscope={false}
        className="h-full tilt-container"
      >
        <div
          className="h-full rounded-2xl overflow-hidden flex flex-col"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.07)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
          }}
        >
          {/* Gradient header — unique per project */}
          <div
            className="relative w-full h-[180px] overflow-hidden flex flex-col items-start justify-end p-5"
            style={{
              background: `linear-gradient(135deg, ${gradient[0]} 0%, ${gradient[1]} 60%, ${gradient[2] || gradient[1]} 100%)`,
            }}
          >
            {/* Subtle grid texture overlay */}
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg, rgba(255,255,255,0.5) 0px, rgba(255,255,255,0.5) 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, rgba(255,255,255,0.5) 0px, rgba(255,255,255,0.5) 1px, transparent 1px, transparent 40px)",
              }}
            />

            {/* Project name large */}
            <h3
              className="relative text-white text-[20px] font-bold tracking-tight leading-tight z-10"
              style={{ textShadow: "0 2px 12px rgba(0,0,0,0.4)" }}
            >
              {name}
            </h3>

            {/* Tech tags row */}
            <div className="relative flex flex-wrap gap-1.5 mt-2 z-10">
              {tags.slice(0, 3).map((tag) => (
                <span
                  key={tag.name}
                  className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                  style={{ background: "rgba(0,0,0,0.35)", color: "rgba(255,255,255,0.8)" }}
                >
                  {tag.name}
                </span>
              ))}
            </div>

            {/* Action buttons top-right */}
            <div className="absolute top-3 right-3 flex gap-2 z-10">
              {live_link && (
                <button
                  onClick={() => window.open(live_link, "_blank")}
                  className="w-9 h-9 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                  style={{ background: "rgba(0,0,0,0.4)", backdropFilter: "blur(8px)" }}
                  aria-label="Visit live site"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                    <polyline points="15 3 21 3 21 9"/>
                    <line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                </button>
              )}
              <button
                onClick={() => window.open(source_code_link, "_blank")}
                className="w-9 h-9 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                style={{ background: "rgba(0,0,0,0.4)", backdropFilter: "blur(8px)" }}
                aria-label="View source"
              >
                <img src={github} alt="source" className="w-4 h-4 object-contain" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-5 flex flex-col flex-1">
            {/* Type badge */}
            {type && (
              <span
                className="self-start text-[10px] font-bold uppercase tracking-[0.12em] px-2.5 py-0.5 rounded-full mb-3"
                style={{
                  background: typeStyle.bg,
                  border: `1px solid ${typeStyle.border}`,
                  color: typeStyle.text,
                }}
              >
                {type}
              </span>
            )}

            <p className="text-[rgba(255,255,255,0.5)] text-[13px] leading-relaxed flex-1">
              {description}
            </p>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 0.8)}
        className="mt-4 text-[rgba(255,255,255,0.55)] text-[16px] max-w-2xl leading-relaxed"
      >
        Real-world projects showcasing end-to-end ownership — from architecture
        through deployment.
      </motion.p>

      <div className="mt-12 flex flex-wrap gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "works");

