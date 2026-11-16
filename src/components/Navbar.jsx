import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";

import { navLinks, LINKEDIN, GITHUB } from "../constants";
import { menu, close } from "../assets";
import { downloadResume } from "../utils/resumeDownload";
import Magnetic from "./Magnetic";
import { GitHubIcon, LinkedInIcon } from "./icons";

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
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const measure = () =>
      navLinks
        .map((nav) => {
          const el = document.getElementById(nav.id);
          if (!el) return null;
          return {
            id: nav.id,
            title: nav.title,
            top: el.offsetTop - 140,
            bottom: el.offsetTop + el.offsetHeight - 140,
          };
        })
        .filter(Boolean);

    let sections = measure();
    const refresh = () => {
      sections = measure();
    };

    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        const y = window.scrollY;
        setScrolled(y > 40);
        for (let i = sections.length - 1; i >= 0; i -= 1) {
          if (y >= sections[i].top) {
            setActive(sections[i].title);
            break;
          }
        }
        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", refresh);
    const t = window.setTimeout(refresh, 600);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", refresh);
      window.clearTimeout(t);
    };
  }, []);

  return (
    <>
      <motion.div className="scroll-progress" style={{ scaleX: progress }} />

      <nav className="fixed top-3 sm:top-4 left-0 w-full z-20 px-3 sm:px-6">
        <div
          className={`max-w-5xl mx-auto flex justify-between items-center rounded-full pl-5 pr-3 py-2.5 transition-all duration-500 ease-apple-spring ${
            scrolled ? "nav-pill" : "bg-transparent border border-transparent"
          }`}
        >
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex flex-col leading-tight"
          >
            <span className="text-white font-semibold text-[16px] tracking-tight">
              Pavan Kusunuri
            </span>
            <span className="eyebrow !text-[10px] !tracking-[0.1em] before:content-none">
              Senior Full-Stack Engineer
            </span>
          </Link>

          <ul className="hidden sm:flex items-center gap-6">
            {navLinks.map((nav) => (
              <li key={nav.id}>
                <a
                  href={`#${nav.id}`}
                  className={`relative text-[14px] font-medium transition-colors ${
                    active === nav.title
                      ? "text-white"
                      : "text-white/50 hover:text-white"
                  }`}
                >
                  {nav.title}
                  {active === nav.title && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-px bg-[#10b981]"
                    />
                  )}
                </a>
              </li>
            ))}

            <li className="flex gap-2">
              <SocialIcon href={LINKEDIN} label="LinkedIn">
                <LinkedInIcon size={14} />
              </SocialIcon>
              <SocialIcon href={GITHUB} label="GitHub">
                <GitHubIcon size={14} />
              </SocialIcon>
            </li>

            <li>
              <Magnetic strength={0.2}>
                <button
                  onClick={downloadResume}
                  className="apple-btn apple-btn-primary px-5 py-2 text-[14px]"
                >
                  Download Resume
                </button>
              </Magnetic>
            </li>
          </ul>

          <div className="sm:hidden relative">
            <button type="button" onClick={() => setToggle(!toggle)} aria-label="Toggle menu">
              <img src={toggle ? close : menu} className="w-5 h-5" alt="" />
            </button>

            {toggle && (
              <div className="absolute right-0 top-14 nav-pill p-5 rounded-2xl min-w-[180px]">
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
                  <li>
                    <button
                      onClick={downloadResume}
                      className="apple-btn apple-btn-primary"
                    >
                      Resume
                    </button>
                  </li>
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
