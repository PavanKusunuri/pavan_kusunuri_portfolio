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
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  oc_logo,
  aero_logo,
  Valuelabs_logo,
  newlife_preview,
} from "../assets";

// CDN icon URLs for skills without local images (devicons CDN)
const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";
const pythonIcon = `${DEVICON}/python/python-original.svg`;
const djangoIcon = `${DEVICON}/django/django-plain.svg`;
const postgresIcon = `${DEVICON}/postgresql/postgresql-original.svg`;
const awsIcon = `${DEVICON}/amazonwebservices/amazonwebservices-original-wordmark.svg`;
const javaIcon = `${DEVICON}/java/java-original.svg`;

/* ---------------- NAVIGATION ---------------- */

export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Experience" },
  { id: "works", title: "Projects" },
  { id: "contact", title: "Contact" },
];

/* ---------------- SERVICES ---------------- */

export const services = [
  { title: "Senior Software Engineer", icon: web },
  { title: "Full-Stack Engineer", icon: mobile },
  { title: "Frontend Systems Engineer", icon: creator },
  { title: "Backend & API Engineer", icon: backend },
];

/* ---------------- TECHNOLOGIES ---------------- */

export const technologies = [
  { name: "HTML5", icon: html },
  { name: "CSS3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React.js", icon: reactjs },
  { name: "Redux", icon: redux },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node.js", icon: nodejs },
  { name: "Python", icon: pythonIcon },
  { name: "Django / DRF", icon: djangoIcon },
  { name: "PostgreSQL", icon: postgresIcon },
  { name: "MongoDB", icon: mongodb },
  { name: "Docker", icon: docker },
  { name: "AWS", icon: awsIcon },
  { name: "Git", icon: git },
  { name: "Figma", icon: figma },
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
    techStack: ["React.js", "Node.js", "PostgreSQL", "AWS", "TypeScript"],
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
    techStack: ["React.js", "Java", "REST APIs", "Oracle DB", "Spring Boot"],
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
    techStack: ["Django", "React.js", "PostgreSQL", "Docker", "Python"],
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
      { name: "Next.js", color: "blue-text-gradient" },
      { name: "Tailwind", color: "pink-text-gradient" },
      { name: "Framer Motion", color: "green-text-gradient" },
    ],
    gradient: ["#0f2027", "#203a43", "#2c5364"],
    type: "Personal",
    image: carrent,
    source_code_link: "https://github.com/PavanKusunuri/metaverse",
  },
  {
    name: "WorkPlace – Job Discovery",
    description:
      "A full-stack web application enabling users to search job listings, view salary estimates, and discover opportunities based on location.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Node.js", color: "green-text-gradient" },
      { name: "Express", color: "pink-text-gradient" },
    ],
    gradient: ["#0a2342", "#1a3a5c", "#1e5f74"],
    type: "Personal",
    image: jobit,
    source_code_link: "https://github.com/PavanKusunuri/Job_portal",
  },
  {
    name: "GlobalCalqulate",
    description:
      "Production-grade financial calculator platform helping users make informed decisions across investments, loans, and cost-of-living scenarios. SEO-optimized with scalable architecture.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Next.js", color: "green-text-gradient" },
      { name: "Tailwind", color: "pink-text-gradient" },
      { name: "SEO", color: "blue-text-gradient" },
    ],
    gradient: ["#064e3b", "#065f46", "#047857"],
    type: "SaaS",
    image: tripguide,
    source_code_link: "https://www.globalcalqulate.com",
    live_link: "https://www.globalcalqulate.com",
  },
  {
    name: "Techinifinity",
    description:
      "Modern, fully responsive IT consulting website with 10 service pages, MDX-powered blog, dark/light mode, and a Zod-validated contact form backed by Resend API.",
    tags: [
      { name: "Next.js", color: "blue-text-gradient" },
      { name: "TypeScript", color: "green-text-gradient" },
      { name: "Tailwind", color: "pink-text-gradient" },
      { name: "MDX", color: "blue-text-gradient" },
    ],
    gradient: ["#1a1a2e", "#16213e", "#0f3460"],
    type: "Personal",
    image: carrent,
    source_code_link: "https://github.com/PavanKusunuri/techinifinity",
    live_link: "https://techinifinity.vercel.app/",
  },
  {
    name: "NewLife IT Consultancy",
    description:
      "Production-grade, Apple-inspired HR consultancy website in vanilla HTML/CSS/JS + GSAP 3. Custom cursor, magnetic buttons, scroll-triggered animations — zero frameworks.",
    tags: [
      { name: "HTML5", color: "blue-text-gradient" },
      { name: "CSS3", color: "pink-text-gradient" },
      { name: "GSAP", color: "green-text-gradient" },
      { name: "Vanilla JS", color: "blue-text-gradient" },
    ],
    gradient: ["#1a0533", "#2d0a4e", "#4a1a6b"],
    type: "Personal",
    image: newlife_preview,
    source_code_link: "https://github.com/PavanKusunuri/newlife_consultancy",
    live_link: "https://pavankusunuri.github.io/newlife_consultancy/",
  },
];

