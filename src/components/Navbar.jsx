import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close } from "../assets";
import { downloadResume } from "../utils/resumeDownload";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
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
          <span className="text-white text-[17px] font-semibold tracking-tight group-hover:text-[#a78bfa] transition-colors duration-200">
            Pavan
          </span>
          <span className="text-[#7c3aed] text-[17px] font-semibold tracking-tight">
            Kusunuri
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="list-none hidden sm:flex flex-row gap-8 items-center">
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
                  <span className="absolute left-0 bottom-0 h-[2px] w-full bg-[#7c3aed] rounded-full" />
                )}
              </a>
            </li>
          ))}
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
  );
};

export default Navbar;
