import React, { useMemo } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const TYPE_COLORS = {
  SaaS: {
    bg: "rgba(16,185,129,0.12)",
    border: "rgba(16,185,129,0.3)",
    text: "#10b981",
  },
  Freelance: {
    bg: "rgba(6,182,212,0.12)",
    border: "rgba(6,182,212,0.3)",
    text: "#06b6d4",
  },
  Personal: {
    bg: "rgba(148,163,184,0.1)",
    border: "rgba(148,163,184,0.2)",
    text: "#94a3b8",
  },
};

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  gradient = ["#064e3b", "#065f46"],
  type,
  impact,
  source_code_link,
  live_link,
}) => {
  const cardVariants = useMemo(
    () => fadeIn("up", "tween", index * 0.12, 0.5),
    [index],
  );

  const typeStyle = TYPE_COLORS[type] || TYPE_COLORS.Personal;

  return (
    <motion.div variants={cardVariants} className="w-full sm:w-[340px]">
      <Tilt
        tiltMaxAngleDegrees={6}
        scale={1.02}
        transitionSpeed={500}
        gyroscope={false}
        disabled={typeof window !== "undefined" && window.innerWidth < 768}
      >
        <div
          className="h-full rounded-2xl overflow-hidden flex flex-col"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.07)",
            backdropFilter: "blur(12px)",
          }}
        >
          {/* 🔥 HEADER */}
          <div
            className="relative w-full h-[170px] flex flex-col justify-end p-5"
            style={{
              background: `linear-gradient(135deg, ${gradient[0]} 0%, ${gradient[1]} 60%, ${gradient[2] || gradient[1]} 100%)`,
            }}
          >
            {/* Project Name */}
            <h3 className="text-white text-[19px] font-bold leading-tight">
              {name}
            </h3>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-1.5 mt-2">
              {tags.slice(0, 3).map((tag) => (
                <span
                  key={tag.name}
                  className="text-[10px] px-2 py-0.5 rounded-full bg-black/40 text-white/80"
                >
                  {tag.name}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="absolute top-3 right-3 flex gap-2">
              {live_link && (
                <button
                  onClick={() => window.open(live_link, "_blank")}
                  className="w-8 h-8 rounded-full bg-black/40 flex items-center justify-center"
                >
                  ↗
                </button>
              )}
              <button
                onClick={() => window.open(source_code_link, "_blank")}
                className="w-8 h-8 rounded-full bg-black/40 flex items-center justify-center"
              >
                <img src={github} alt="github" className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 🔥 CONTENT */}
          <div className="p-5 flex flex-col flex-1">
            {/* Type */}
            {type && (
              <span
                className="text-[10px] px-2.5 py-0.5 rounded-full mb-3 font-bold uppercase"
                style={{
                  background: typeStyle.bg,
                  border: `1px solid ${typeStyle.border}`,
                  color: typeStyle.text,
                }}
              >
                {type}
              </span>
            )}

            {/* Description */}
            <p className="text-white/60 text-[13px] leading-relaxed flex-1">
              {description}
            </p>

            {/* 🔥 IMPACT (KEY ADDITION) */}
            {impact && (
              <p className="text-[#10b981] text-[11px] mt-3 font-medium">
                {impact}
              </p>
            )}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      {/* 🔥 HEADER */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Selected Work</p>

        <h2 className={styles.sectionHeadText}>
          Production & Engineering Projects
        </h2>
      </motion.div>

      {/* 🔥 DESCRIPTION */}
      <motion.p
        variants={fadeIn("", "", 0.1, 0.8)}
        className="mt-4 text-white/60 text-[15px] max-w-2xl leading-relaxed"
      >
        Projects demonstrating scalable architecture, performance optimization,
        and real-world problem solving across frontend and backend systems.
      </motion.p>

      {/* 🔥 GRID */}
      <div className="mt-12 flex flex-wrap gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "works");