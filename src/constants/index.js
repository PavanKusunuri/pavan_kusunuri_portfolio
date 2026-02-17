import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  carrent,
  jobit,
  tripguide,
  oc_logo,
  aero_logo,
  Valuelabs_logo,
} from "../assets";

/* ---------------- NAVIGATION ---------------- */

export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "contact", title: "Contact" },
];

/* ---------------- SERVICES ---------------- */

export const services = [
  {
    title: "Senior Software Engineer",
    icon: web,
  },
  {
    title: "Full-Stack Engineer",
    icon: mobile,
  },
  {
    title: "Frontend Systems Engineer",
    icon: creator,
  },
  {
    title: "Backend & API Engineer",
    icon: backend,
  },
];

/* ---------------- TECHNOLOGIES ---------------- */

export const technologies = [
  { name: "HTML5", icon: html },
  { name: "CSS3", icon: css },
  { name: "JavaScript (ES6+)", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React.js", icon: reactjs },
  { name: "Redux Toolkit", icon: redux },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node.js", icon: nodejs },
  { name: "Django / Django REST Framework", icon: backend },
  { name: "PostgreSQL / MongoDB", icon: mongodb },
  { name: "Git & Version Control", icon: git },
];

/* ---------------- EXPERIENCE ---------------- */

export const experiences = [
  {
    title: "Senior Software Engineer",
    company_name: "ValueLabs",
    icon: Valuelabs_logo, // replace with ValueLabs logo if you add one later
    iconBg: "#1E293B",
    date: "February 2024 - Present",
    points: [
      "Developing and enhancing internal product platforms using React.js and Node.js with a focus on scalability and maintainability.",
      "Designing and implementing secure RESTful APIs for enterprise applications.",
      "Building reusable UI components and modular frontend architecture to improve development efficiency.",
      "Identifying and resolving performance bottlenecks in production systems.",
      "Handling production issues and mentoring junior engineers through code reviews.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Oracle Cerner",
    icon: oc_logo,
    iconBg: "#2E3A59",
    date: "January 2022 - February 2024",
    points: [
      "Worked on enterprise healthcare platforms supporting 10k–100k users.",
      "Developed and maintained internal modules for business-critical workflows.",
      "Designed and consumed REST APIs with authentication and authorization mechanisms.",
      "Resolved production issues to ensure system reliability and compliance.",
      "Collaborated with cross-functional teams in a regulated enterprise environment.",
    ],
  },
  {
    title: "Software Development Engineer",
    company_name: "AeroSimple (UnoSimple Group)",
    icon: aero_logo,
    iconBg: "#E6DEDD",
    date: "December 2019 - January 2022",
    points: [
      "Contributed to early-stage SaaS product development in the aviation domain.",
      "Designed and built RESTful APIs using Django REST Framework.",
      "Developed scalable React components for core product workflows.",
      "Owned critical modules including Work Order Management and Asset Management.",
      "Worked closely with product stakeholders to translate business requirements into technical solutions.",
    ],
  },
];

/* ---------------- PROJECTS ---------------- */

/* ---------------- PROJECTS ---------------- */

export const projects = [
  {
    name: "Metaverse Experience",
    description:
      "A modern interactive web experience built using Next.js, Tailwind CSS, and Framer Motion, focusing on smooth animations and responsive UI design.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
      { name: "framer-motion", color: "green-text-gradient" },
    ],
    image: carrent,
    source_code_link: "https://github.com/PavanKusunuri/metaverse",
  },
  {
    name: "WorkPlace – Job Discovery Platform",
    description:
      "A full-stack web application enabling users to search job listings, view salary estimates, and discover opportunities based on location.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "nodejs", color: "green-text-gradient" },
      { name: "express", color: "pink-text-gradient" },
    ],
    image: jobit,
    source_code_link: "https://github.com/PavanKusunuri/Job_portal",
  },
  {
    name: "GlobalCalqulate – Financial Calculator Platform",
    description:
      "A production-grade financial calculator platform designed to help users make informed decisions across investments, loans, and cost-of-living scenarios. Built with a focus on accurate computation logic, scalable architecture, SEO optimization, and a clean, user-friendly interface.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "nextjs", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
      { name: "seo", color: "blue-text-gradient" },
    ],
    image: tripguide, // replace with GlobalCalqulate image if available
    source_code_link: "https://www.globalcalqulate.com",
  },
];

