const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

// Updated stats based on Bilal's experience
const counterItems = [
  { value: 3, suffix: "+", label: "Years of Experience" },
  { value: 15, suffix: "+", label: "Projects Completed" },
  { value: 3, suffix: "", label: "Companies Worked With" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
];

// Keep original image paths - no changes
const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

// Updated abilities based on Bilal's skills
const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Full-Stack Development",
    desc: "Building scalable web applications using ASP.NET Core, Angular, and React with focus on performance.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Mobile Development",
    desc: "Creating cross-platform mobile apps with React Native for seamless iOS and Android experiences.",
  },
  {
    imgPath: "/images/time.png",
    title: "Team Collaboration",
    desc: "Working with Agile teams and conducting code reviews to deliver quality features on schedule.",
  },
];

// Keep original paths - just update names
const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Angular Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "ASP.NET Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "React Native Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "JavaScript Expert",
    imgPath: "/images/logos/git.svg",
  },
];

// Keep original paths and settings - no changes
const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "node Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "three.js",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "git Expert",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

// Updated with Bilal's actual work experience - FIXED: unique titles
const expCards = [
  {
    review:
      "Bilal has been instrumental in delivering scalable web applications for our projects in Saudi Arabia and Turkey. His expertise in ASP.NET Core and Angular makes him an invaluable team member.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Software Engineer at PAL4IT",
    date: "May 2025 - Present",
    responsibilities: [
      "Design and develop scalable web applications using ASP.NET Core and Angular for projects in Saudi Arabia and Turkey.",
      "Coordinate with large cross-functional teams, applying Agile practices and conducting code reviews.",
      "Optimize API calls and build reusable front-end components for high performance.",
    ],
  },
  {
    review:
      "Bilal's contribution to our web and mobile applications was exceptional. He managed the full development cycle with precision and delivered reliable solutions.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Software Engineer at Claw-Dev",
    date: "July 2024 - March 2025",
    responsibilities: [
      "Built scalable web and mobile applications using ASP.NET Core and React from design to deployment.",
      "Integrated RESTful APIs and optimized code for reliable user experiences.",
      "Delivered high-quality software solutions with focus on performance and maintainability.",
    ],
  },
  {
    review:
      "Bilal delivered an outstanding React website for our luxury car gallery. The booking system and payment integration exceeded our expectations.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "Freelance Web Developer at S Line Edition",
    date: "January 2024 - April 2024",
    responsibilities: [
      "Developed a responsive React website for a luxury car gallery with booking and payment features.",
      "Designed user-friendly interface and admin panel to manage cars, rentals, and customer data.",
      "Optimized for high performance and mobile responsiveness across all devices.",
    ],
  },
];

// Keep original paths - no changes
const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

// Updated testimonials to reflect Bilal's work
const testimonials = [
  {
    name: "Project Manager",
    mentions: "@pal4it",
    review:
      "Bilal's technical expertise in ASP.NET Core and Angular has been crucial for our international projects. His ability to coordinate with large teams and deliver on schedule is exceptional.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Team Lead",
    mentions: "@clawdev",
    review:
      "Working with Bilal was fantastic. He managed the full development cycle professionally, from design to deployment. His code quality and attention to detail are outstanding.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Client",
    mentions: "@slineedition",
    review:
      "Bilal developed our luxury car gallery website with exceptional quality. The booking system and payment integration work flawlessly. He's professional, responsive, and delivers beyond expectations.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Senior Developer",
    mentions: "@colleague",
    review:
      "Bilal is a skilled full-stack developer who excels at both frontend and backend. His expertise in React, Angular, and ASP.NET Core makes him a valuable asset to any team.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Technical Lead",
    mentions: "@teamlead",
    review:
      "Bilal's expertise in web and mobile development is impressive. He delivered robust solutions for our applications, and his React Native skills made our mobile app stand out.",
    imgPath: "/images/client4.png",
  },
  {
    name: "CTO",
    mentions: "@techcompany",
    review:
      "Bilal understood our requirements perfectly and delivered solutions that exceeded expectations. His skills in full-stack development and problem-solving are top-notch.",
    imgPath: "/images/client6.png",
  },
];

// Keep original paths - no changes
const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
