import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div className="w-full h-full flex flex-col md:flex-row items-center justify-between">
        {/* Text Content - Left Side */}
        <div
          className={`absolute md:relative inset-0 md:inset-auto top-[200px] md:top-auto md:flex-1 max-w-2xl mx-auto md:mx-0 ${styles.paddingX} flex flex-col justify-center z-10`}
        >
          <div className="flex flex-row items-start gap-5 md:gap-3">
            <div className="flex flex-col justify-center items-center mt-5">
              <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
              <div className="w-1 sm:h-80 h-40 violet-gradient" />
            </div>

            <div>
              <h1 className={`${styles.heroHeadText} text-white`}>
                Hi, I’m <span className="text-[#915EFF]">Pavan Kusunuri</span>
              </h1>

              <p className={`${styles.heroSubText} mt-3 text-white-100`}>
                Senior Software Engineer with 6+ years of experience{" "}
                <br className="sm:block hidden" />
                building scalable enterprise & SaaS web applications
              </p>

              <p className="mt-4 text-white-100 max-w-xl">
                I specialize in React, Node.js, and API-driven systems, with
                hands-on experience in performance optimization, production
                support, and end-to-end feature ownership.
              </p>
            </div>
          </div>
        </div>

        {/* 3D Canvas - Right Side */}
        <div className="hidden md:flex md:flex-1 h-full justify-end items-center">
          <ComputersCanvas />
        </div>

        {/* Mobile Canvas - Below Text */}
        <div className="md:hidden w-full h-96">
          <ComputersCanvas />
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
