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
  tripguide,
  threejs,
  linkedin,
  githublogo,
  ingram,
  gep,
  ambrosial,
  ens,
  portfolio,
  health,
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

export const socialLinks = [
  {
    label: 'Linkedin',
    url: 'https://www.linkedin.com/in/shubham-bagwe/',
    icon: linkedin,
  },
  {
    label: 'Github',
    url: 'https://github.com/suhas1711',
    icon: githublogo,
  },
]

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Software Testing",
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Associate Software Developer",
    company_name: "Ingram Micro",
    icon: ingram,
    iconBg: "#1e76bd",
    date: "July 2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js, .net and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Associate Analyst - TSO",
    company_name: "GEP Worldwide",
    icon: gep,
    iconBg: "#E6DEDD",
    date: "June 2022 - July 2022",
    points: [
      "Developing different web interfaces, API and integrate them for various clients",
      "Collaborating with cross-functional teams including business team, product managers, and other developers",
      "Contributed in success of GEP SMART and GEP NEXXE",
    ],
  },
  {
    title: "Co-Owner",
    company_name: "ENS Wardrobe",
    icon: ens,
    iconBg: "#E6DEDD",
    date: "August 2022 - April 2022",
    points: [
      "Started a bootstrap business which catered to client needs for customised clothing and perfumes.",
      "Learned a lot about social media marketing, SEO, team management, business operations, etc.",
      "Also developed an e-commerce website “enswardrobe.com” using the MERN stack.",
    ],
  },
  {
    title: "Web Developer - Intern",
    company_name: "Ambrosial Inc.",
    icon: ambrosial,
    iconBg: "#E6DEDD",
    date: "December 2019 - January 2020",
    points: [
      "Developing and maintaining web applications according to client needs",
      "Gained hands-on experience under guidance of senior developers",
      "Acquainted regarding the technologies like HTML5, CSS3, React",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "We did a thorough research regarding the health and medical technology used in INDIA and published a research papaer, in which we provided a solution 'Health Bridge' ",
    name: "International Journal of Research Publication",
    designation: "Vol 3 Issue 4",
    company: "",
  },
  {
    testimonial:
      "Dashing Debut Award for outstanding debutant performance in whole Ingram Micro SSC",
    name: "Ingram Micro SSC",
    designation: "",
    company: "",
  },
];

const projects = [
  {
    name: "Portfolio Website",
    description:
      "A portfolio website to showcase myself. One you're probably looking at right now.",
    image: portfolio,
  },
  {
    name: "Health Bridge",
    description:
      "Web application that enables users to avail medical services on go such as appointment booking, e-prescription, ambulance on demand, disease prediction",
    image: health,
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
