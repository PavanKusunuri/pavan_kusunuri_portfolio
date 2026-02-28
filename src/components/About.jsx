import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt
      tiltMaxAngleDegrees={10}
      scale={1.03}
      transitionSpeed={600}
      className="xs:w-[230px] w-full"
    >
      <motion.div
        variants={fadeIn("right", "tween", index * 0.15, 0.5)}
        className="w-full p-[1px] rounded-2xl"
        style={{
          background:
            "linear-gradient(135deg, rgba(124,58,237,0.5) 0%, rgba(99,102,241,0.15) 100%)",
        }}
      >
        <div className="glass rounded-2xl py-6 px-8 min-h-[220px] flex flex-col justify-center items-center gap-4 group">
          <div className="w-14 h-14 rounded-2xl bg-[rgba(124,58,237,0.15)] flex items-center justify-center group-hover:bg-[rgba(124,58,237,0.3)] transition-colors">
            <img src={icon} alt={title} className="w-8 h-8 object-contain" />
          </div>
          <h3 className="text-white text-[15px] font-semibold text-center tracking-tight leading-snug">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
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
        <span className="text-[#a78bfa] font-medium">ValueLabs</span>,{" "}
        <span className="text-[#a78bfa] font-medium">Oracle Cerner</span>, and{" "}
        <span className="text-[#a78bfa] font-medium">AeroSimple</span>, with
        deep expertise in React, Node.js, Python, and scalable API design.
      </motion.p>

      <div className="mt-14 flex flex-wrap gap-6 justify-start">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
