import React from "react";
import { LINKEDIN, GITHUB } from "../constants";
import { GitHubIcon, LinkedInIcon } from "./icons";

const Footer = () => (
  <footer
    className="w-full py-10 px-6 sm:px-16"
    style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
  >
    <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5">
      <div className="text-center sm:text-left">
        <p className="text-white font-semibold text-[15px] tracking-tight">
          Pavan{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #10b981, #06b6d4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Kusunuri
          </span>
        </p>
        <p className="text-[rgba(255,255,255,0.35)] text-[12px] mt-0.5">
          Senior Software Engineer · Full-Stack Developer
        </p>
      </div>

      <div className="flex items-center gap-3">
        <a
          href={LINKEDIN}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="w-9 h-9 rounded-full glass flex items-center justify-center text-[rgba(255,255,255,0.5)] hover:text-white transition-all"
        >
          <LinkedInIcon size={15} />
        </a>
        <a
          href={GITHUB}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="w-9 h-9 rounded-full glass flex items-center justify-center text-[rgba(255,255,255,0.5)] hover:text-white transition-all"
        >
          <GitHubIcon size={15} />
        </a>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="w-9 h-9 rounded-full glass flex items-center justify-center text-[rgba(255,255,255,0.5)] hover:text-white transition-all"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="18 15 12 9 6 15"/>
          </svg>
        </button>
      </div>

      <p className="text-[rgba(255,255,255,0.25)] text-[12px]">
        © {new Date().getFullYear()} Pavan Kusunuri. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
