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
} from "../assets";

// CDN icon URLs for skills without local images (devicons CDN)
const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";
const pythonIcon = `${DEVICON}/python/python-original.svg`;
const djangoIcon = `${DEVICON}/django/django-plain.svg`;
const expressIcon = `${DEVICON}/express/express-original.svg`;
const postgresIcon = `${DEVICON}/postgresql/postgresql-original.svg`;
const awsIcon = `${DEVICON}/amazonwebservices/amazonwebservices-original-wordmark.svg`;

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
  { name: "Express.js", icon: expressIcon },
  { name: "Python", icon: pythonIcon },
  { name: "Django / DRF", icon: djangoIcon },
  { name: "PostgreSQL", icon: postgresIcon },
  { name: "MongoDB", icon: mongodb },
  { name: "AWS", icon: awsIcon },
  { name: "Git", icon: git },
];

/* ---------------- PROJECTS ---------------- */
/* Note: experience timeline data lives directly in src/components/Experience.jsx
   (it needs the VerticalTimelineElement-specific shape), not here.

   Project `image` previews are intentionally omitted below — the only preview
   assets in src/assets (carrent/jobit/tripguide) are leftover template demo
   screenshots that don't belong to these projects, and newlife_preview.jpg is
   an unresolved thum.io loading placeholder, not a real screenshot. Add a real
   screenshot per project and an `image:` field + <img> in Works.jsx once you
   have one. */

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
    source_code_link: "https://github.com/PavanKusunuri/newlife_consultancy",
    live_link: "https://pavankusunuri.github.io/newlife_consultancy/",
  },
];

