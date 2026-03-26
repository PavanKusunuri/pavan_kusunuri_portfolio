import React from "react";

const LINKEDIN = "https://www.linkedin.com/in/pavan-kusunuri";
const GITHUB = "https://github.com/PavanKusunuri";

const Footer = () => (
  <footer
    className="w-full py-10 px-6 sm:px-16"
    style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
  >
    <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5">
      {/* Branding */}
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

      {/* Social + Back-to-top */}
      <div className="flex items-center gap-3">
        <a
          href={LINKEDIN}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="w-9 h-9 rounded-full glass flex items-center justify-center text-[rgba(255,255,255,0.5)] hover:text-white transition-all"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
            <rect x="2" y="9" width="4" height="12"/>
            <circle cx="4" cy="4" r="2"/>
          </svg>
        </a>
        <a
          href={GITHUB}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="w-9 h-9 rounded-full glass flex items-center justify-center text-[rgba(255,255,255,0.5)] hover:text-white transition-all"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
          </svg>
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

      {/* Copyright */}
      <p className="text-[rgba(255,255,255,0.25)] text-[12px]">
        © {new Date().getFullYear()} Pavan Kusunuri. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
