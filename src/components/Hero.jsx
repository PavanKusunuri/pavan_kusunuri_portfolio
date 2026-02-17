import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen mx-auto">
      <div
        className={`max-w-7xl mx-auto ${styles.paddingX} 
        flex flex-col md:flex-row items-center justify-between 
        min-h-screen gap-10`}
      >
        {/* LEFT: Text Content */}
        <div className="flex-1 mt-20 flex flex-row items-start gap-5">
          {/* Vertical Accent */}
          <div className="flex flex-col justify-center items-center mt-2">
            <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
            <div className="w-1 h-40 sm:h-64 violet-gradient" />
          </div>

          {/* Text */}
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I’m <span className="text-[#915EFF]">Pavan Kusunuri</span>
            </h1>

            <p className={`${styles.heroSubText} mt-4 text-white-100`}>
              Senior Software Engineer with 6+ years of experience
              <br className="hidden sm:block" />
              building scalable enterprise & SaaS web applications
            </p>

            <p className="mt-4 text-white-100 max-w-xl leading-relaxed">
              I specialize in React, Node.js, and API-driven systems, with
              hands-on experience in performance optimization, production
              support, and end-to-end feature ownership.
            </p>
          </div>
        </div>

        {/* RIGHT: Canvas (Desktop) */}
        <div className="hidden md:flex flex-1 h-[500px] items-center justify-center">
          <ComputersCanvas />
        </div>

        {/* Canvas (Mobile) */}
        <div className="md:hidden w-full h-[360px]">
          <ComputersCanvas />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 w-full flex justify-center items-center">
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
