import React, { useMemo } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import Spotlight from "./Spotlight";
import { fadeIn, textVariant } from "../utils/motion";

const CapabilityIcon = ({ name }) => {
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#10b981",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  switch (name) {
    case "ownership":
      return (
        <svg {...common}>
          <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" />
          <path d="M12 12l8-4.5" />
          <path d="M12 12v9" />
          <path d="M12 12L4 7.5" />
        </svg>
      );
    case "api":
      return (
        <svg {...common}>
          <path d="M8 9H4v6h4" />
          <path d="M16 9h4v6h-4" />
          <rect x="8" y="7" width="8" height="10" rx="2" />
          <path d="M11 12h2" />
        </svg>
      );
    case "cloud":
      return (
        <svg {...common}>
          <path d="M7 18h10a4 4 0 0 0 .4-8 5.5 5.5 0 0 0-10.6 1.5A3.5 3.5 0 0 0 7 18z" />
          <path d="M12 14v-3" />
          <path d="M10.5 12.5L12 11l1.5 1.5" />
        </svg>
      );
    case "reliability":
      return (
        <svg {...common}>
          <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
          <path d="M9.5 12.5l1.8 1.8 3.7-3.8" />
        </svg>
      );
    default:
      return null;
  }
};

const ServiceCard = ({ index, title, description, icon }) => {
  const cardVariants = useMemo(
    () => fadeIn("up", "tween", index * 0.1, 0.5),
    [index],
  );

  return (
    <motion.div variants={cardVariants} whileHover={{ y: -4 }} transition={{ duration: 0.25 }}>
      <Spotlight className="p-6 min-h-[200px] flex flex-col justify-between group h-full">
        <div className="w-12 h-12 rounded-2xl bg-[rgba(16,185,129,0.1)] border border-[rgba(16,185,129,0.2)] flex items-center justify-center group-hover:bg-[rgba(16,185,129,0.18)] transition-colors">
          <CapabilityIcon name={icon} />
        </div>
        <div>
          <span className="eyebrow !text-[10px]">0{index + 1}</span>
          <h3 className="text-white text-[18px] font-semibold tracking-tight leading-snug mt-1">
            {title}
          </h3>
          {description && (
            <p className="text-white/45 text-[13px] leading-relaxed mt-2">
              {description}
            </p>
          )}
        </div>
      </Spotlight>
    </motion.div>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 0.8)}
        className="mt-5 text-[rgba(255,255,255,0.6)] text-[16px] max-w-3xl leading-[1.8] tracking-tight"
      >
        Senior Software Engineer with 6+ years across financial services,
        healthcare, and aviation SaaS. Full-stack background in{" "}
        <span className="text-[#6ee7b7] font-medium">React</span>,{" "}
        <span className="text-[#6ee7b7] font-medium">Node.js</span>,{" "}
        <span className="text-[#6ee7b7] font-medium">Python/Django</span>, and
        REST APIs — with hands-on AWS Lambda processing, production
        troubleshooting, and monitoring of application and partner-data
        workflows at{" "}
        <span className="text-[#6ee7b7] font-medium">ValueLabs</span>,{" "}
        <span className="text-[#6ee7b7] font-medium">Oracle Cerner</span>, and{" "}
        <span className="text-[#6ee7b7] font-medium">AeroSimple</span>.
      </motion.p>

      <motion.div variants={fadeIn("", "", 0.25, 0.7)} className="mt-8">
        <Spotlight className="inline-flex items-center gap-4 px-5 py-4 !rounded-2xl">
          <div className="w-10 h-10 rounded-xl bg-[rgba(16,185,129,0.12)] border border-[rgba(16,185,129,0.2)] flex items-center justify-center shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
              <path d="M6 12v5c3 3 9 3 12 0v-5" />
            </svg>
          </div>
          <div>
            <p className="eyebrow !text-[10px]">Education</p>
            <p className="text-white text-[15px] font-semibold tracking-tight mt-0.5">
              B.Tech · Sri Prakash College of Engineering
            </p>
            <p className="text-white/40 text-[12px] mt-0.5">2012 – 2016</p>
          </div>
        </Spotlight>
      </motion.div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
