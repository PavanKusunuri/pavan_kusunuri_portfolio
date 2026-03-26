import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close } from "../assets";
import { downloadResume } from "../utils/resumeDownload";

const LINKEDIN = "https://www.linkedin.com/in/pavan-kusunuri";
const GITHUB = "https://github.com/PavanKusunuri";

const SocialIcon = ({ href, label, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="w-8 h-8 rounded-full glass flex items-center justify-center text-[rgba(255,255,255,0.5)] hover:text-white transition-all"
  >
    {children}
  </a>
);

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;
    let lastScrollProgress = 0;

    const updateScroll = () => {
      setScrolled(window.scrollY > 60);
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const newProgress = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
      if (Math.abs(newProgress - lastScrollProgress) > 0.5) {
        lastScrollProgress = newProgress;
        setScrollProgress(newProgress);
      }
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Scroll progress bar */}
      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%`, transition: "width 0.1s linear" }}
      />

      <nav
        className={`${styles.paddingX} w-full flex items-center py-4 fixed top-0 z-20 transition-all duration-300 ${
          scrolled ? "glass-dark shadow-glass" : "bg-transparent"
        }`}
      >
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 group"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <span className="text-white text-[17px] font-semibold tracking-tight group-hover:text-[#6ee7b7] transition-colors duration-200">
              Pavan
            </span>
            <span className="text-[17px] font-semibold tracking-tight"
              style={{
                background: "linear-gradient(135deg, #10b981, #06b6d4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Kusunuri
            </span>
          </Link>

          {/* Desktop nav */}
          <ul className="list-none hidden sm:flex flex-row gap-6 items-center">
            {navLinks.map((nav) => (
              <li key={nav.id}>
                <a
                  href={`#${nav.id}`}
                  onClick={() => setActive(nav.title)}
                  className={`relative text-[15px] font-medium transition-colors duration-200 pb-1 ${
                    active === nav.title
                      ? "text-white"
                      : "text-secondary hover:text-white"
                  }`}
                >
                  {nav.title}
                  {active === nav.title && (
                    <span className="absolute left-0 bottom-0 h-[2px] w-full bg-[#10b981] rounded-full" />
                  )}
                </a>
              </li>
            ))}

            {/* Social icons */}
            <li className="flex items-center gap-2">
              <SocialIcon href={LINKEDIN} label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </SocialIcon>
              <SocialIcon href={GITHUB} label="GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                </svg>
              </SocialIcon>
            </li>

            <li>
              <button
                onClick={downloadResume}
                className="apple-btn apple-btn-primary text-[14px] font-medium px-5 py-2"
              >
                Resume
              </button>
            </li>
          </ul>

          {/* Mobile hamburger */}
          <div className="sm:hidden flex flex-1 justify-end items-center">
            <button
              className="w-9 h-9 flex items-center justify-center rounded-full glass"
              onClick={() => setToggle(!toggle)}
              aria-label="Toggle menu"
            >
              <img
                src={toggle ? close : menu}
                alt="menu"
                className="w-5 h-5 object-contain"
              />
            </button>

            <div
              className={`${
                !toggle
                  ? "opacity-0 pointer-events-none translate-y-2"
                  : "opacity-100 translate-y-0"
              } transition-all duration-200 ease-out glass-dark absolute top-16 right-4 mx-0 my-0 min-w-[200px] z-30 rounded-2xl p-5`}
            >
              <ul className="list-none flex flex-col gap-4">
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`text-[15px] font-medium cursor-pointer transition-colors ${
                      active === nav.title ? "text-white" : "text-secondary"
                    }`}
                    onClick={() => {
                      setToggle(false);
                      setActive(nav.title);
                    }}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
                <li className="flex gap-2">
                  <SocialIcon href={LINKEDIN} label="LinkedIn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                      <rect x="2" y="9" width="4" height="12"/>
                      <circle cx="4" cy="4" r="2"/>
                    </svg>
                  </SocialIcon>
                  <SocialIcon href={GITHUB} label="GitHub">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                    </svg>
                  </SocialIcon>
                </li>
                <li>
                  <button
                    onClick={() => {
                      downloadResume();
                      setToggle(false);
                    }}
                    className="apple-btn apple-btn-primary w-full text-center text-[14px]"
                  >
                    Resume
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

