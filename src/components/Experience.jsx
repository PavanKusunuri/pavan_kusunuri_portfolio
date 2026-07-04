import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import { aero_logo, oc_logo, Valuelabs_logo } from "../assets";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

/**
 * EXPERIENCE DATA — rewritten using resume (impact-focused)
 */
const experiences = [
  {
    title: "Senior Software Engineer",
    company_name: "ValueLabs",
    date: "Feb 2024 – Present",
    icon: Valuelabs_logo,
    iconBg: "#ffffff",
    highlights: "High-scale financial systems • Performance optimization",
    points: [
      "Designed and developed financial platforms handling large-scale transaction workflows",
      "Built scalable REST APIs using Node.js (Express) and optimized data handling to reduce latency",
      "Improved system performance by identifying bottlenecks and optimizing database queries",
      "Developed reusable React components for scalable frontend architecture",
      "Implemented tracking systems across multiple customers and payment channels",
      "Mentored junior engineers and improved code quality through reviews",
    ],
    techStack: ["React", "Node.js", "PostgreSQL", "REST APIs"],
  },
  {
    title: "Software Engineer",
    company_name: "Oracle Cerner",
    date: "Jan 2022 – Feb 2024",
    icon: oc_logo,
    iconBg: "#ffffff",
    highlights: "Enterprise healthcare platform • Secure systems",
    points: [
      "Worked on enterprise healthcare platform supporting large-scale user base",
      "Implemented role-based access control (RBAC) for secure system access",
      "Developed modules for license and product management systems",
      "Resolved critical production issues ensuring high system reliability",
      "Collaborated with cross-functional teams to deliver scalable solutions",
    ],
    techStack: ["React", "Node.js", "RBAC", "Enterprise Systems"],
  },
  {
    title: "Software Development Engineer",
    company_name: "AeroSimple",
    date: "Dec 2019 – Jan 2022",
    icon: aero_logo,
    iconBg: "#ffffff",
    highlights: "SaaS platform • Multi-airport operations",
    points: [
      "Scaled aviation SaaS platform to support multiple airport operations",
      "Built backend APIs using Django REST Framework for operational workflows",
      "Standardized frontend architecture using React for improved maintainability",
      "Removed legacy UI code and improved rendering performance",
      "Optimized backend APIs reducing unnecessary data transfer",
    ],
    techStack: ["React", "Django", "REST APIs", "SaaS"],
  },
];

/**
 * CARD COMPONENT
 */
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
        background: experience.iconBg,
        boxShadow: "0 0 0 3px rgba(16,185,129,0.25)",
        width: 48,
        height: 48,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      icon={
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-6 h-6 object-contain"
          loading="lazy"
        />
      }
    >
      <h3 className="text-white text-[18px] font-semibold">
        {experience.title}
      </h3>
      <p className="text-emerald-400 text-[14px] font-medium mt-1">
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
/**
 * MAIN COMPONENT
 */
const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Professional Journey
        </p>

        <h2 className={`${styles.sectionHeadText} text-center`}>
          Building Scalable Systems Across Industries
        </h2>
      </motion.div>

      <div className="mt-16">
        <VerticalTimeline lineColor="rgba(16,185,129,0.25)">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");