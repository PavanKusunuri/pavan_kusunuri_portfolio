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
    className="w-8 h-8 rounded-full glass flex items-center justify-center text-white/50 hover:text-white hover:border-[#10b981]/40 transition"
  >
    {children}
  </a>
);

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // 🔥 Scroll tracking + active section detection
  useEffect(() => {
    const sections = navLinks.map((nav) => document.getElementById(nav.id));

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;

          setScrolled(scrollY > 60);

          // progress
          const docHeight =
            document.documentElement.scrollHeight - window.innerHeight;
          setScrollProgress((scrollY / docHeight) * 100);

          // active section detection
          sections.forEach((section, index) => {
            if (!section) return;
            const top = section.offsetTop - 120;
            const height = section.offsetHeight;

            if (scrollY >= top && scrollY < top + height) {
              setActive(navLinks[index].title);
            }
          });

          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Scroll Progress */}
      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      />

      <nav
        className={`${styles.paddingX} fixed w-full z-20 py-4 transition ${
          scrolled ? "glass-dark shadow-glass" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* 🔥 Logo (Improved branding) */}
          <Link to="/" className="flex flex-col leading-tight">
            <span className="text-white font-semibold text-[16px]">
              Pavan Kusunuri
            </span>
            <span className="text-[11px] text-[#6ee7b7]">
              Senior Full-Stack Engineer
            </span>
          </Link>

          {/* Desktop */}
          <ul className="hidden sm:flex items-center gap-6">
            {navLinks.map((nav) => (
              <li key={nav.id}>
                <a
                  href={`#${nav.id}`}
                  className={`text-[14px] font-medium ${
                    active === nav.title
                      ? "text-white"
                      : "text-white/50 hover:text-white"
                  }`}
                >
                  {nav.title}
                </a>
              </li>
            ))}

            {/* Social */}
            <li className="flex gap-2">
              <SocialIcon href={LINKEDIN} label="LinkedIn">
                <svg width="14" height="14" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                </svg>
              </SocialIcon>

              <SocialIcon href={GITHUB} label="GitHub">
                <svg width="14" height="14" fill="currentColor">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87" />
                </svg>
              </SocialIcon>
            </li>

            {/* 🔥 Strong CTA */}
            <li>
              <button
                onClick={downloadResume}
                className="apple-btn apple-btn-primary px-5 py-2 text-[14px]"
              >
                Download Resume
              </button>
            </li>
          </ul>

          {/* Mobile */}
          <div className="sm:hidden">
            <button onClick={() => setToggle(!toggle)}>
              <img src={toggle ? close : menu} className="w-5 h-5" />
            </button>

            {toggle && (
              <div className="absolute right-4 top-16 glass-dark p-5 rounded-xl">
                <ul className="flex flex-col gap-4">
                  {navLinks.map((nav) => (
                    <li key={nav.id}>
                      <a
                        href={`#${nav.id}`}
                        onClick={() => setToggle(false)}
                        className="text-white/70 hover:text-white"
                      >
                        {nav.title}
                      </a>
                    </li>
                  ))}

                  <button
                    onClick={downloadResume}
                    className="apple-btn apple-btn-primary"
                  >
                    Resume
                  </button>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;