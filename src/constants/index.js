import { aerosimple, oracleCerner, valuelabs } from "../assets";
import awsLambda from "../assets/tech/aws-lambda.svg";
import cloudwatch from "../assets/tech/cloudwatch.svg";
import newrelic from "../assets/tech/newrelic.svg";

/* Transparent SVG icons via Devicons CDN — crisp at any size, no black boxes */
const DI = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

const icon = (path) => `${DI}/${path}`;

/* ---------------- NAVIGATION ---------------- */

export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Experience" },
  { id: "works", title: "Projects" },
  { id: "contact", title: "Contact" },
];

/* ---------------- CAPABILITIES ---------------- */
/* Icons rendered as inline SVGs in About.jsx (icon key) */

export const services = [
  {
    title: "End-to-End Ownership",
    description:
      "Own features from React screens through Node/Python APIs into production.",
    icon: "ownership",
  },
  {
    title: "API & Systems Design",
    description:
      "REST APIs, RBAC, and service workflows across finance and healthcare.",
    icon: "api",
  },
  {
    title: "Cloud & Monitoring",
    description:
      "AWS Lambda jobs, CloudWatch, and New Relic for live incident support.",
    icon: "cloud",
  },
  {
    title: "Production Reliability",
    description:
      "L1/L2 troubleshooting, partner feeds, and batch-job recovery.",
    icon: "reliability",
  },
];

/* ---------------- TECHNOLOGIES (from resume) ---------------- */

export const technologies = [
  { name: "React.js", icon: icon("react/react-original.svg") },
  { name: "Next.js", icon: icon("nextjs/nextjs-original.svg") },
  { name: "JavaScript", icon: icon("javascript/javascript-original.svg") },
  { name: "TypeScript", icon: icon("typescript/typescript-original.svg") },
  { name: "HTML5", icon: icon("html5/html5-original.svg") },
  { name: "CSS3", icon: icon("css3/css3-original.svg") },
  { name: "Tailwind CSS", icon: icon("tailwindcss/tailwindcss-original.svg") },
  { name: "Redux", icon: icon("redux/redux-original.svg") },
  { name: "Node.js", icon: icon("nodejs/nodejs-original.svg") },
  { name: "Express.js", icon: icon("express/express-original.svg") },
  { name: "Python", icon: icon("python/python-original.svg") },
  { name: "Django / DRF", icon: icon("django/django-plain.svg") },
  { name: "Ruby on Rails", icon: icon("rails/rails-plain.svg") },
  { name: "PostgreSQL", icon: icon("postgresql/postgresql-original.svg") },
  { name: "MongoDB", icon: icon("mongodb/mongodb-original.svg") },
  { name: "AWS Lambda", icon: awsLambda },
  { name: "CloudWatch", icon: cloudwatch },
  { name: "New Relic", icon: newrelic },
  { name: "Git", icon: icon("git/git-original.svg") },
  { name: "GitHub", icon: icon("github/github-original.svg") },
  { name: "CI/CD", icon: icon("githubactions/githubactions-original.svg") },
];

export const techCategories = [
  {
    label: "Frontend",
    description: "UI systems, dashboards, and reusable components",
    techs: [
      "React.js",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Redux",
    ],
  },
  {
    label: "Backend & APIs",
    description: "Services, REST APIs, and domain workflows",
    techs: [
      "Node.js",
      "Express.js",
      "Python",
      "Django / DRF",
      "Ruby on Rails",
    ],
  },
  {
    label: "Databases",
    description: "Persistent data for product and ops workflows",
    techs: ["PostgreSQL", "MongoDB"],
  },
  {
    label: "Cloud & Monitoring",
    description: "Serverless processing and production observability",
    techs: ["AWS Lambda", "CloudWatch", "New Relic"],
  },
  {
    label: "Engineering Tools",
    description: "Version control, delivery, and collaboration",
    techs: ["Git", "GitHub", "CI/CD"],
  },
];

/* ---------------- EXPERIENCE (aligned to resume) ---------------- */

export const experiences = [
  {
    title: "Senior Software Engineer",
    company_name: "ValueLabs",
    date: "Feb 2024 – Present · Hyderabad",
    icon: valuelabs,
    iconBg: "#0B1F1C",
    highlights: "Financial services · AWS Lambda · New Relic / CloudWatch",
    points: [
      "Contribute to a financial-services platform with React and Node.js — enhancements and production issue resolution",
      "Build React screens and operational dashboards for financial and partner-processing visibility",
      "Develop and maintain AWS Lambda functions for batch-oriented processing and data workflows",
      "Troubleshoot batch-job failures and partner data-feed issues to restore processing and availability",
      "Support a partner-monitoring app tracking data volumes, partner status, failures, and downtime",
      "Use New Relic and Amazon CloudWatch to investigate anomalies and support incident resolution",
      "Resolve L1/L2 issues including payment-status checks, bank-maintenance incidents, and portal support",
    ],
    techStack: ["React", "Node.js", "AWS Lambda", "CloudWatch", "New Relic"],
  },
  {
    title: "Software Engineer",
    company_name: "Oracle Cerner",
    date: "Jan 2022 – Feb 2024 · Bangalore",
    icon: oracleCerner,
    iconBg: "#FFFFFF",
    highlights: "Healthcare web apps · RBAC · production releases",
    points: [
      "Developed healthcare web applications with React.js, Node.js, Ruby on Rails, HTML, CSS, and JavaScript",
      "Implemented Role-Based Access Control (RBAC) for secure, role-specific feature access",
      "Delivered features, enhancements, and bug fixes with cross-functional teams into production",
      "Participated in code reviews focused on maintainability, performance, and application security",
    ],
    techStack: ["React", "Node.js", "Ruby on Rails", "RBAC"],
  },
  {
    title: "Software Development Engineer",
    company_name: "AeroSimple Technologies",
    date: "Dec 2019 – Jan 2022 · Visakhapatnam",
    icon: aerosimple,
    iconBg: "#FFFFFF",
    highlights: "Aviation SaaS · microservices · React/TypeScript",
    points: [
      "Built aviation SaaS features with React, Python, Django REST Framework, Node.js, and Express",
      "Contributed to microservice-based airport operations and related workflows",
      "Implemented RBAC and standardized reusable React/TypeScript components across the frontend",
      "Optimized backend APIs and reduced unnecessary client–server data transfer",
    ],
    techStack: ["React", "TypeScript", "Django", "Node.js", "Express"],
  },
  {
    title: "Software Development Engineer Trainee",
    company_name: "UnoSimple Technologies",
    date: "Sep 2019 – Dec 2019 · Visakhapatnam",
    icon: aerosimple,
    iconBg: "#FFFFFF",
    highlights: "Early-stage product · full-stack foundations",
    points: [
      "Contributed to early-stage product development and built foundational experience in React.js, Node.js, and full-stack engineering",
    ],
    techStack: ["React", "Node.js"],
  },
];

/* ---------------- PROJECTS ---------------- */

export const projects = [
  {
    name: "GlobalCalqulate",
    description:
      "Client-side calculator platform with 500 calculators across multiple countries — shared calculation logic, reusable UI, Cloudflare deployment, and ongoing ownership.",
    tags: [
      { name: "Next.js", color: "blue-text-gradient" },
      { name: "React", color: "green-text-gradient" },
      { name: "Cloudflare", color: "pink-text-gradient" },
    ],
    gradient: ["#064e3b", "#065f46", "#047857"],
    type: "SaaS",
    impact: "500 calculators · multi-country · live at globalcalqulate.com",
    source_code_link: "https://www.globalcalqulate.com",
    live_link: "https://www.globalcalqulate.com",
  },
  {
    name: "Techinifinity",
    description:
      "IT consulting site with 10 service pages, MDX blog, dark/light mode, and a Zod-validated contact form powered by Resend.",
    tags: [
      { name: "Next.js", color: "blue-text-gradient" },
      { name: "TypeScript", color: "green-text-gradient" },
      { name: "Tailwind", color: "pink-text-gradient" },
      { name: "MDX", color: "blue-text-gradient" },
    ],
    gradient: ["#1a1a2e", "#16213e", "#0f3460"],
    type: "Personal",
    impact: "10 service pages · MDX blog · production contact API",
    source_code_link: "https://github.com/PavanKusunuri/techinifinity",
    live_link: "https://techinifinity.vercel.app/",
  },
  {
    name: "NewLife IT Consultancy",
    description:
      "Apple-inspired HR consultancy site in vanilla HTML/CSS/JS + GSAP — custom cursor, magnetic buttons, and scroll-triggered motion with zero frameworks.",
    tags: [
      { name: "HTML5", color: "blue-text-gradient" },
      { name: "CSS3", color: "pink-text-gradient" },
      { name: "GSAP", color: "green-text-gradient" },
      { name: "Vanilla JS", color: "blue-text-gradient" },
    ],
    gradient: ["#1a0533", "#2d0a4e", "#4a1a6b"],
    type: "Personal",
    impact: "Zero frameworks · GSAP motion system · live demo",
    source_code_link: "https://github.com/PavanKusunuri/newlife_consultancy",
    live_link: "https://pavankusunuri.github.io/newlife_consultancy/",
  },
  {
    name: "WorkPlace – Job Discovery",
    description:
      "Full-stack job discovery app for searching listings, estimating salaries, and filtering opportunities by location.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Node.js", color: "green-text-gradient" },
      { name: "Express", color: "pink-text-gradient" },
    ],
    gradient: ["#0a2342", "#1a3a5c", "#1e5f74"],
    type: "Personal",
    impact: "MERN stack · search & salary estimates",
    source_code_link: "https://github.com/PavanKusunuri/Job_portal",
  },
  {
    name: "Metaverse Experience",
    description:
      "Interactive marketing experience with layered Framer Motion scenes and a responsive Next.js + Tailwind layout.",
    tags: [
      { name: "Next.js", color: "blue-text-gradient" },
      { name: "Tailwind", color: "pink-text-gradient" },
      { name: "Framer Motion", color: "green-text-gradient" },
    ],
    gradient: ["#0f2027", "#203a43", "#2c5364"],
    type: "Personal",
    impact: "Motion-led UI · responsive landing experience",
    source_code_link: "https://github.com/PavanKusunuri/metaverse",
  },
];

export const LINKEDIN = "https://www.linkedin.com/in/pavan-kusunuri-a6ab67133";
export const GITHUB = "https://github.com/PavanKusunuri";
export const EMAIL = "pavantejakusunuri@gmail.com";
export const PHONE = "+91 83339 44812";
