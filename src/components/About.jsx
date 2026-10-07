import React, { useMemo } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import Spotlight from "./Spotlight";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => {
  const cardVariants = useMemo(
    () => fadeIn("up", "tween", index * 0.12, 0.5),
    [index],
  );

  return (
    <motion.div variants={cardVariants}>
      <Spotlight className="p-6 min-h-[190px] flex flex-col justify-between group">
        <div className="w-12 h-12 rounded-2xl bg-[rgba(16,185,129,0.1)] flex items-center justify-center group-hover:bg-[rgba(16,185,129,0.22)] transition-colors">
          <img src={icon} alt="" className="w-7 h-7 object-contain" />
        </div>
        <div>
          <span className="eyebrow !text-[10px]">0{index + 1}</span>
          <h3 className="text-white text-[19px] font-semibold tracking-tight leading-snug mt-1">
            {title}
          </h3>
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
        Senior Software Engineer with over 6 years of experience building and
        supporting enterprise and SaaS web applications across healthcare and
        aviation domains. I've delivered production-critical features end-to-end
        at companies like{" "}
        <span className="text-[#6ee7b7] font-medium">ValueLabs</span>,{" "}
        <span className="text-[#6ee7b7] font-medium">Oracle Cerner</span>, and{" "}
        <span className="text-[#6ee7b7] font-medium">AeroSimple</span>, with
        deep expertise in React, Node.js, Python, and scalable API design.
      </motion.p>

      {/* Education */}
      <motion.div variants={fadeIn("", "", 0.25, 0.7)} className="mt-8">
        <Spotlight className="inline-flex items-center gap-4 px-5 py-4 !rounded-2xl">
          <div className="w-10 h-10 rounded-xl bg-[rgba(16,185,129,0.12)] flex items-center justify-center shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
              <path d="M6 12v5c3 3 9 3 12 0v-5"/>
            </svg>
          </div>
          <div>
            <p className="eyebrow !text-[10px]">Education</p>
            <p className="text-white text-[15px] font-semibold tracking-tight mt-0.5">
              B.Tech · Electronics &amp; Communication Engineering
            </p>
          </div>
        </Spotlight>
      </motion.div>

      {/* Bento grid of focus areas */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
