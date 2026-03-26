import React, { useMemo } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_link,
}) => {
  // Pre-compute the variant object so Framer Motion receives the same
  // reference across re-renders rather than a brand-new object each time.
  const cardVariants = useMemo(
    () => fadeIn("up", "tween", index * 0.15, 0.5),
    [index],
  );

  return (
    <motion.div variants={cardVariants} className="w-full sm:w-[340px]">
      <Tilt
        tiltMaxAngleDegrees={8}
        scale={1.02}
        transitionSpeed={600}
        // gyroscope enables tilt via device-orientation on touch devices
        // so mobile users get the same parallax card feel as desktop.
        gyroscope={true}
        className="h-full"
      >
        <div
          className="h-full rounded-2xl overflow-hidden flex flex-col"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.07)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
          }}
        >
          {/* Image */}
          <div className="relative w-full h-[200px] overflow-hidden">
            <img
              src={image}
              alt={name}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

            {/* Source link badge */}
            <div className="absolute top-3 right-3 flex gap-2">
              {live_link && (
                <button
                  onClick={() => window.open(live_link, "_blank")}
                  className="w-9 h-9 rounded-full glass flex items-center justify-center hover:scale-110 transition-transform bg-white/10"
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
                className="w-9 h-9 rounded-full glass flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="View source"
              >
                <img
                  src={github}
                  alt="source"
                  className="w-4 h-4 object-contain"
                />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-5 flex flex-col flex-1">
            <h3 className="text-white font-semibold text-[17px] tracking-tight">
              {name}
            </h3>
            <p className="mt-2 text-[rgba(255,255,255,0.5)] text-[13px] leading-relaxed flex-1">
              {description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={`${name}-${tag.name}`}
                  className={`text-[12px] font-medium ${tag.color} bg-white/5 px-2 py-0.5 rounded-full`}
                >
                  #{tag.name}
                </span>
              ))}
            </div>
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
        Real-world projects showcasing end-to-end ownership from architecture
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

export default SectionWrapper(Works, "");
