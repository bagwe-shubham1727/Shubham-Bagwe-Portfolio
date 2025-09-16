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
  neu,
  vit,
  pace,
  sphs,
  studentnexus,
  staymaster,
  curvebike
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
    url: 'https://github.com/bagwe-shubham1727',
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
    title: "Software Development Engineer (Full Stack)",
    company_name: "Ingram Micro",
    icon: ingram,
    iconBg: "#1e76bd",
    date: "July 2022 - August 2024",
    points: [
      "Developed and maintained web applications using React JS, .NET and other related technologies.",
      "Collaborated with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implemented responsive design and ensuring cross-browser compatibility.",
      "Participated in code reviews and providing constructive feedback to fellow developers.",
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "GEP Worldwide",
    icon: gep,
    iconBg: "#E6DEDD",
    date: "May 2022 - July 2022",
    points: [
      "Developed different web interfaces, API and integrate them for various clients",
      "Collaborated with cross-functional teams including business team, product managers, and other developers",
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
      "Developed and maintained web applications according to client needs",
      "Gained hands-on experience under guidance of senior developers",
      "Acquainted regarding the technologies like HTML5, CSS3, React",
    ],
  },
];

const schools = [
  {
    title: "Master Of Science - Computer Software Engineering",
    company_name: "Northeastern University",
    icon: neu,
    iconBg: "#FFFFFF",
    date: "August 2024 - Present",
  },
  {
    title: "Bachelor of Engineering - Information Technology",
    company_name: "Vidyalankar Institute of Technology",
    icon: vit,
    iconBg: "#FFFFFF",
    date: "August 2018 - May 2022",
  },
  {
    title: "Higher Secondary Certificate - Science",
    company_name: "Pace Junior Science College",
    icon: pace,
    iconBg: "#FFFFFF",
    date: "July 2016 - March 2018",
  },
  {
    title: "Secondary School Certificate",
    company_name: "St. Paul High School",
    icon: sphs,
    iconBg: "#FFFFFF",
    date: "June 2015 - May 2016",
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
  {
    testimonial:
      "Completion of CS50x from Havard University",
    name: "Cambridge, Massachusetts",
    designation: "",
    company: "",
  },
];

const projects = [
  {
    name: "Student Nexus - A Comprehensive Student Accommodation System",
    description:
      "A full-stack student housing and services platform that enables secure onboarding, personalized accommodation recommendations, and seamless global access with integrated payments and responsive multi-device support.",
    image: studentnexus,
    source_code_link: "https://student-nexus.vercel.app/"
  },
  {
    name: "StayMaster: Hotel Booking Management System",
    description:
      "A Java-based hotel booking management system that ensures real-time room availability, optimized booking retrieval, and efficient admin operations with a layered architecture and PostgreSQL backend.",
    image: staymaster,
    source_code_link: "https://bustling-bellflower-465.notion.site/StayMaster-A-Smart-Hotel-Booking-Platform-1f0a1c2c8ee281008d62c81ef4406df9"
  },
  {
    name: "Curve Bike Management System",
    description:
      "A data-driven bike-sharing management system that models station demand and route traffic with time and climate factors to optimize bike inventory, rider incentives, and operational efficiency.",
    image: curvebike,
    source_code_link: "https://bustling-bellflower-465.notion.site/Curve-E-Bike-Management-System-1f0a1c2c8ee2817ca684c3f449f6abd1"
  },
  {
    name: "Health Bridge - One Stop Healthcare",
    description:
      "Web application that enables users to avail medical services on go such as appointment booking, e-prescription, ambulance on demand, disease prediction",
    image: health,
    source_code_link: "https://bustling-bellflower-465.notion.site/Health-Bridge-All-In-One-HealthCare-System-1f0a1c2c8ee28170b200f3b1263efb66"
  },
  {
    name: "Portfolio Website",
    description:
      "A portfolio website to showcase myself. One you're probably looking at right now.",
    image: portfolio,
    source_code_link: "https://github.com/bagwe-shubham1727/Shubham-Bagwe-Portfolio"
  }
];

export { services, technologies, experiences, schools, testimonials, projects };
