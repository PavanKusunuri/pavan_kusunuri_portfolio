import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";

const EASE = [0.16, 1, 0.3, 1];

// Flat card grid – replaces 11 individual WebGL Canvas instances (BallCanvas)
// which caused browser hanging. Each BallCanvas created a separate WebGL
// context; most browsers cap contexts at 8–16, causing crashes and jank.
const TechCard = ({ name, icon, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.45, delay: index * 0.05, ease: EASE }}
    className="skill-card"
  >
    <img
      src={icon}
      alt={name}
      loading="lazy"
      onError={(e) => {
        e.target.style.opacity = 0.3;
      }}
    />
    <span>{name}</span>
  </motion.div>
);

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="mb-10">
        <p className={styles.sectionSubText}>What I use</p>
        <h2 className={styles.sectionHeadText}>Tech Stack.</h2>
      </motion.div>

      <div className="grid grid-cols-3 xs:grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-3">
        {technologies.map((tech, i) => (
          <TechCard key={tech.name} index={i} {...tech} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");