import React from "react";
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
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "tween", index * 0.15, 0.5)}
      className="w-full sm:w-[340px]"
    >
      <Tilt
        tiltMaxAngleDegrees={8}
        scale={1.02}
        transitionSpeed={600}
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
            <div className="absolute top-3 right-3">
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
