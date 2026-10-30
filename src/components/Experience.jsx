import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "rgba(20,20,30,0.85)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "16px",
        boxShadow: "0 8px 32px rgba(0,0,0,0.6)",
        color: "#fff",
        padding: "20px clamp(16px, 4vw, 28px)",
      }}
      contentArrowStyle={{
        borderRight: "7px solid rgba(16,185,129,0.35)",
      }}
      date={
        <div className="text-emerald-300 font-medium text-[13px]">
          {experience.date}
        </div>
      }
      iconStyle={{
        background: experience.iconBg || "#0B1220",
        boxShadow: "0 0 0 3px rgba(16,185,129,0.3)",
        width: 56,
        height: 56,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        padding: 0,
      }}
      icon={
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[56px] h-[56px] object-cover"
          loading="lazy"
        />
      }
    >
      <h3 className="text-white text-[18px] font-semibold">
        {experience.title}
      </h3>
      <p className="text-emerald-400 text-[14px] font-medium mt-1 !mb-0">
        {experience.company_name}
      </p>
      <p className="text-white/40 text-[12px] mt-1">{experience.highlights}</p>

      <ul className="mt-4 pl-0 space-y-2 list-none">
        {experience.points.map((point, index) => (
          <li
            key={index}
            className="text-white/70 text-[13px] leading-relaxed pl-4 relative before:content-['▹'] before:absolute before:left-0 before:text-emerald-400"
          >
            {point}
          </li>
        ))}
      </ul>

      <div className="mt-4 flex flex-wrap gap-1.5 max-w-full">
        {experience.techStack.map((tech) => (
          <span
            key={tech}
            className="text-[11px] px-2.5 py-0.5 rounded-full whitespace-nowrap max-w-full overflow-hidden text-ellipsis"
            style={{
              background: "rgba(16,185,129,0.1)",
              border: "1px solid rgba(16,185,129,0.25)",
              color: "#6ee7b7",
            }}
          >
            {tech}
          </span>
        ))}
      </div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Professional Journey
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Experience that compounds.
        </h2>
      </motion.div>

      <div className="mt-16">
        <VerticalTimeline lineColor="rgba(16,185,129,0.25)">
          {experiences.map((exp, index) => (
            <ExperienceCard key={`${exp.company_name}-${index}`} experience={exp} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
