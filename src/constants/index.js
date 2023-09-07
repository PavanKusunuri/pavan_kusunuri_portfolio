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
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    oc_logo,
    uno_logo,
    aero_logo,
    imaginnovate_logo
 } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Frontend Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "React Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    }
  ];
  
  const experiences = [
    {
      title: "Software Engineer",
      company_name: "Oracle Cerner",
      icon: oc_logo,
      iconBg: "#383E56",
      date: "January 2022 - Present",
      points: [
       
"Developed web applications in the health domain, leveraging React.js, Node.js, Ruby on Rails, HTML, CSS, and JavaScript.",
"Collaborate with cross-functional teams to design, develop, and deploy user-friendly and scalable solutions that address critical healthcare challenges.",
"Implement best practices for code quality, performance, and security, ensuring compliance with industry standards and regulations.",
"Conduct regular code reviews and mentor junior developers to foster a culture of continuous learning and improvement.",
"Utilize agile methodologies to deliver features, enhancements, and bug fixes on schedule and within budget.",
      ],
    },
    {
      title: "Software Development Engineer",
      company_name: "Aerosimple",
      icon: aero_logo,
      iconBg: "#E6DEDD",
      date: "December 2019 - January 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Software Development Engineer Trainee",
      company_name: "UnoSimple",
      icon: uno_logo,
      iconBg: "#383E56",
      date: "Sep 2019 - Dec 2019",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Intern",
      company_name: "Imaginnovate",
      icon: imaginnovate_logo,
      iconBg: "#E6DEDD",
      date: "Jan 2019 - Sep 2019",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  
  const projects = [
    {
      name: "Meta Verse",
      description:
        "A Website which was built using latest next.js and tailwind css to render beautiful animations used framermotion.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/PavanKusunuri/metaverse"
    },
    {
      name: "Work Place",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "nodejs",
          color: "green-text-gradient",
        },
        {
          name: "express.js",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/PavanKusunuri/Job_portal",
    },
    {
      name: "Threads",
      description:
        "An Social Platform which was developed for users to register and add communities and maintain communites like Threads App created by Meta.Our threads was built using Next.js, React.js, Node.js and Mongodb",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "reactjs",
          color: "green-text-gradient",
        },
        {
          name: "nodejs",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/PavanKusunuri/threads",
    },
  ];
  
  export { services, technologies, experiences, projects };