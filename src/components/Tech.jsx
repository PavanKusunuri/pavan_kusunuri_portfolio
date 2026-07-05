import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";

const EASE = [0.16, 1, 0.3, 1];

/**
 * 🔥 REFINED CATEGORIES (Senior-level grouping)
 */
const techCategories = [
  {
    label: "Frontend Engineering",
    description: "Building performant, scalable UI systems",
    techs: ["React.js", "TypeScript", "JavaScript", "Redux", "Tailwind CSS"],
  },
  {
    label: "Backend & APIs",
    description: "Designing scalable APIs and business logic",
    techs: ["Node.js", "Express.js", "Python", "Django / DRF"],
  },
  {
    label: "Databases & Data",
    description: "Efficient data modeling and querying",
    techs: ["PostgreSQL", "MongoDB"],
  },
  {
    label: "Cloud & DevOps",
    description: "Deployment, infrastructure, and tooling",
    techs: ["AWS", "Git"],
  },
];

/**
 * 🔥 TECH CARD
 */
const TechCard = ({ name, icon, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.4, delay: index * 0.04, ease: EASE }}
    className="flex flex-col items-center justify-center gap-2 p-3 rounded-xl 
               bg-white/[0.02] border border-white/[0.06] 
               hover:border-[#10b981]/40 hover:bg-white/[0.04] 
               transition-all duration-200"
  >
    <img
      src={icon}
      alt={name}
      loading="lazy"
      className="w-8 h-8 object-contain"
      onError={(e) => {
        e.target.style.opacity = 0.3;
      }}
    />
    <span className="text-[12px] text-white/80 font-medium text-center">
      {name}
    </span>
  </motion.div>
);

/**
 * 🔥 MAIN COMPONENT
 */
const Tech = () => {
  const techMap = Object.fromEntries(
    technologies.map((t) => [t.name, t])
  );

  return (
    <>
      {/* 🔥 HEADER (Upgraded positioning) */}
      <motion.div variants={textVariant()} className="mb-12 text-center">
        <p className={styles.sectionSubText}>Engineering Capabilities</p>

        <h2 className={styles.sectionHeadText}>
          Technical Expertise
        </h2>

        <p className="text-white/50 text-[14px] max-w-2xl mx-auto mt-4 leading-relaxed">
          Technologies I use to design and build scalable, high-performance
          applications across frontend, backend, and cloud systems.
        </p>

        {/* 🔥 CORE SIGNAL LINE */}
        <p className="text-[#10b981] text-[13px] font-medium mt-3">
          React • Node.js • System Design • Performance Optimization
        </p>
      </motion.div>

      {/* 🔥 TECH CATEGORIES */}
      <div className="flex flex-col gap-12">
        {techCategories.map((category) => (
          <div key={category.label}>
            
            {/* Category Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-5 gap-2">
              <div>
                <h3 className="text-white text-[15px] font-semibold">
                  {category.label}
                </h3>
                <p className="text-white/40 text-[12px] mt-1">
                  {category.description}
                </p>
              </div>

              <div className="h-[1px] sm:flex-1 sm:ml-6 bg-white/[0.06]" />
            </div>

            {/* Grid */}
            <div className="grid grid-cols-3 xs:grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-3">
              {category.techs.map((name, i) => {
                const tech = techMap[name];
                return tech ? (
                  <TechCard key={name} index={i} {...tech} />
                ) : null;
              })}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
