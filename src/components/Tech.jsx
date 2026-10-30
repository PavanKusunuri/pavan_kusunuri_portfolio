import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { technologies, techCategories } from "../constants";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";

const EASE = [0.16, 1, 0.3, 1];

const needsLightBg = (name) =>
  ["Next.js", "Express.js", "GitHub", "Django / DRF"].includes(name);

const TechCard = ({ name, icon, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.4, delay: index * 0.03, ease: EASE }}
    whileHover={{ y: -4 }}
    className="group"
  >
    <div
      className="flex flex-col items-center justify-center gap-3 p-4 rounded-2xl h-full transition-colors"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center p-2.5 transition-transform group-hover:scale-105"
        style={{
          background: needsLightBg(name)
            ? "rgba(255,255,255,0.95)"
            : "rgba(255,255,255,0.07)",
          border: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <img
          src={icon}
          alt={name}
          loading="lazy"
          className="w-9 h-9 object-contain"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      </div>
      <span className="text-[12px] text-white/75 font-medium text-center leading-tight">
        {name}
      </span>
    </div>
  </motion.div>
);

const Tech = () => {
  const techMap = Object.fromEntries(technologies.map((t) => [t.name, t]));

  return (
    <>
      <motion.div variants={textVariant()} className="mb-12 text-center">
        <p className={styles.sectionSubText}>Engineering Capabilities</p>
        <h2 className={styles.sectionHeadText}>Stack I ship with.</h2>
        <p className="text-white/50 text-[14px] max-w-2xl mx-auto mt-4 leading-relaxed">
          Skills from my resume — frontend, backend, cloud, monitoring, and the
          tools I use to ship and support production systems.
        </p>
        <p className="text-[#10b981] text-[13px] font-medium mt-3">
          React · Node.js · Python · Django · AWS Lambda · New Relic
        </p>
      </motion.div>

      <div className="flex flex-col gap-12">
        {techCategories.map((category) => (
          <div key={category.label}>
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

            <div className="grid grid-cols-3 xs:grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-3">
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
