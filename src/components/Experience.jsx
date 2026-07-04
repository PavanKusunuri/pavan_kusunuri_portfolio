import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { aero_logo, oc_logo, Valuelabs_logo } from "../assets";

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
        background: "rgba(255,255,255,0.04)",
        backdropFilter: "blur(16px)",
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: "16px",
        boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
        color: "#fff",
        padding: "20px clamp(16px, 4vw, 28px)",
      }}
      contentArrowStyle={{
        borderRight: "7px solid rgba(16,185,129,0.35)",
      }}
      date={
        <span className="text-[#6ee7b7] font-medium text-[13px]">
          {experience.date}
        </span>
      }
      iconStyle={{
        background: experience.iconBg,
        boxShadow: "0 0 0 3px rgba(16,185,129,0.25)",
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
            loading="lazy"
          />
        </div>
      }
    >
      {/* Title */}
      <h3 className="text-white text-[18px] font-semibold">
        {experience.title}
      </h3>

      {/* Company */}
      <p className="text-[#6ee7b7] text-[14px] font-medium mt-1">
        {experience.company_name}
      </p>

      {/* Highlights (NEW – strong signal) */}
      <p className="text-white/40 text-[12px] mt-1">{experience.highlights}</p>

      {/* Points */}
      <ul className="mt-4 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={index}
            className="text-[rgba(255,255,255,0.65)] text-[13px] leading-relaxed"
          >
            {point}
          </li>
        ))}
      </ul>

      {/* Tech Stack */}
      <div className="mt-4 flex flex-wrap gap-1.5">
        {experience.techStack.map((tech) => (
          <span
            key={tech}
            className="text-[11px] px-2.5 py-0.5 rounded-full"
            style={{
              background: "rgba(16,185,129,0.08)",
              border: "1px solid rgba(16,185,129,0.2)",
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