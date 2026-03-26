import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";

const EASE = [0.16, 1, 0.3, 1];

const techCategories = [
  {
    label: "Frontend",
    techs: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React.js", "Redux", "Tailwind CSS"],
  },
  {
    label: "Backend",
    techs: ["Node.js", "Python", "Django / DRF", "PostgreSQL", "MongoDB"],
  },
  {
    label: "DevOps & Tools",
    techs: ["Docker", "AWS", "Git", "Figma"],
  },
];

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
  const techMap = Object.fromEntries(technologies.map((t) => [t.name, t]));

  return (
    <>
      <motion.div variants={textVariant()} className="mb-10">
        <p className={styles.sectionSubText}>What I use</p>
        <h2 className={styles.sectionHeadText}>Tech Stack.</h2>
      </motion.div>

      <div className="flex flex-col gap-10">
        {techCategories.map((category) => (
          <div key={category.label}>
            {/* Category label */}
            <div className="flex items-center gap-3 mb-4">
              <span
                className="text-[11px] font-bold uppercase tracking-[0.14em] px-3 py-1 rounded-full"
                style={{
                  background: "rgba(16,185,129,0.08)",
                  border: "1px solid rgba(16,185,129,0.2)",
                  color: "#10b981",
                }}
              >
                {category.label}
              </span>
              <div className="flex-1 h-[1px]" style={{ background: "rgba(255,255,255,0.05)" }} />
            </div>

            <div className="grid grid-cols-3 xs:grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-3">
              {category.techs.map((name, i) => {
                const tech = techMap[name];
                return tech ? <TechCard key={name} index={i} {...tech} /> : null;
              })}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");