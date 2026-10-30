import React, { useMemo } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import Spotlight from "./Spotlight";
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

const isGithub = (url) => typeof url === "string" && url.includes("github.com");

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
    () => fadeIn("up", "tween", index * 0.1, 0.5),
    [index],
  );

  const typeStyle = TYPE_COLORS[type] || TYPE_COLORS.Personal;
  const showGithub = isGithub(source_code_link);

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
      className="h-full"
    >
      <Spotlight className="h-full flex flex-col overflow-hidden">
        <div
          className="relative w-full h-[180px] flex flex-col justify-end p-5 overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${gradient[0]} 0%, ${gradient[1]} 55%, ${gradient[2] || gradient[1]} 100%)`,
          }}
        >
          {/* Soft sheen */}
          <div
            aria-hidden
            className="absolute inset-0 opacity-40"
            style={{
              background:
                "radial-gradient(ellipse at 80% 20%, rgba(255,255,255,0.18), transparent 55%)",
            }}
          />

          <div className="relative z-[1]">
            <h3 className="text-white text-[19px] font-bold leading-tight tracking-tight">
              {name}
            </h3>
            <div className="flex flex-wrap gap-1.5 mt-2.5">
              {tags.slice(0, 3).map((tag) => (
                <span
                  key={tag.name}
                  className="text-[10px] px-2 py-0.5 rounded-full bg-black/35 text-white/85 backdrop-blur-sm"
                >
                  {tag.name}
                </span>
              ))}
            </div>
          </div>

          <div className="absolute top-3 right-3 flex gap-2 z-[1]">
            {live_link && (
              <button
                type="button"
                onClick={() => window.open(live_link, "_blank")}
                aria-label={`Open ${name} live site`}
                className="h-8 px-3 rounded-full bg-black/45 backdrop-blur-sm flex items-center gap-1.5 text-white/90 text-[11px] font-medium hover:bg-black/60 transition-colors"
              >
                Live <span aria-hidden>↗</span>
              </button>
            )}
            {showGithub && (
              <button
                type="button"
                onClick={() => window.open(source_code_link, "_blank")}
                aria-label={`Open ${name} on GitHub`}
                className="w-8 h-8 rounded-full bg-black/45 backdrop-blur-sm flex items-center justify-center hover:bg-black/60 transition-colors"
              >
                <img src={github} alt="" className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        <div className="p-5 flex flex-col flex-1">
          {type && (
            <span
              className="self-start text-[10px] px-2.5 py-0.5 rounded-full mb-3 font-bold uppercase tracking-wide"
              style={{
                background: typeStyle.bg,
                border: `1px solid ${typeStyle.border}`,
                color: typeStyle.text,
              }}
            >
              {type}
            </span>
          )}

          <p className="text-white/60 text-[13px] leading-relaxed flex-1">
            {description}
          </p>

          {impact && (
            <p className="text-[#10b981] text-[12px] mt-4 font-medium tracking-tight border-t border-white/[0.06] pt-3">
              {impact}
            </p>
          )}
        </div>
      </Spotlight>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Selected Work</p>
        <h2 className={styles.sectionHeadText}>Projects that ship.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 0.8)}
        className="mt-4 text-white/60 text-[15px] max-w-2xl leading-relaxed"
      >
        Live products and engineering builds — architecture, motion, and
        real-world problem solving across the stack.
      </motion.p>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "works");
