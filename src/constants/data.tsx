import { v4 as uuidv4 } from "uuid";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const skillsData = [
  {
    img: "https://img.icons8.com/?size=512&id=13441&format=png",
    title: "Python",
  },
  {
    img: "./golang.svg",
    title: "Golang",
  },

  {
    img: "https://img.icons8.com/?size=512&id=108784&format=png",
    title: "JavaScript",
  },
  {
    img: "https://img.icons8.com/?size=512&id=uJM6fQYqDaZK&format=png",
    title: "TypeScript",
  },
  {
    img: "https://img.icons8.com/?size=512&id=qV-JzWYl9dzP&format=png",
    title: "Django",
  },
  {
    img: "./fastapi.svg",
    title: "FastAPI",
  },
  {
    img: "https://img.icons8.com/?size=512&id=bzf0DqjXFHIW&format=png",
    title: "ReactJS",
  },
  {
    img: "./nextjs.png",
    title: "NextJS",
  },

  {
    img: "https://img.icons8.com/?size=512&id=QSjnrUKYMnxO&format=png",
    title: "SQL",
  },
  {
    img: "https://voidbetweenears.files.wordpress.com/2018/01/nosqlpng.png",
    title: "NoSQL",
  },
  {
    img: "https://img.icons8.com/?size=512&id=cdYUlRaag9G9&format=png",
    title: "Docker",
  },
  {
    img: "https://foghornconsulting.com/wp-content/uploads/2022/01/kubernetes-1.png",
    title: "Kubernetes",
  },

  {
    img: "https://img.icons8.com/?size=512&id=t2x6DtCn5Zzx&format=png",
    title: "NGINX",
  },

  {
    img: "https://img.icons8.com/?size=512&id=33039&format=png",
    title: "AWS",
  },
];

export const projectsData = [
  {
    id: uuidv4(),
    title: "MeetSpace Web",
    description: "meetsapce api develop using JavaScript ReactJS",
    img: "https://raw.githubusercontent.com/indalyadav56/meetspace_web/main/screenshots/meetspace.png",
    sourceCode: "https://github.com/indalyadav56/meetspace_web",
    tags: [
      "TypeScript",
      "Next.js",
      "Zustand",
      "ReactJS",
      "Tailwind",
      "Shadcn",
      "Docker",
      "Nginx",
    ],
  },
  {
    id: uuidv4(),
    title: "MeetSpace API",
    description: "meetsapce api develop using Python Django",
    img: "https://raw.githubusercontent.com/indalyadav56/meetspace_backend/main/screenshots/swagger.png",
    sourceCode: "https://github.com/indalyadav56/meetspace_backend",
    tags: [
      "Golang",
      "Gin",
      "GORM",
      "WebSocket",
      "PostgreSQL",
      "Redis",
      "DDD Design Architechture",
      "Docker",
      "Docker Compose",
      "Nginx",
      "CI & CD",
    ],
  },
  {
    id: uuidv4(),
    title: "MeetSpace Admin",
    description: "meetsapce api development using Python Django",
    img: "https://raw.githubusercontent.com/indalyadav56/meetspace_admin/main/screenshots/dashboard.png",
    sourceCode: "https://github.com/indalyadav56/meetspace_admin",
    tags: ["Golang", "TypeScript", "ReactJS", "Material UI", "Docker"],
  },
  {
    id: uuidv4(),
    title: "Portfolio",
    description: "portfolio project",
    img: "https://raw.githubusercontent.com/indalyadav56/indalyadav56.github.io/main/screenshots/portfolio.png",
    sourceCode: "https://github.com/indalyadav56/indalyadav56.github.io",
    tags: ["TypeScript", "Next.js", "React", "Tailwind", "CI & CD"],
  },
  {
    id: uuidv4(),
    title: "Social Media Project",
    description: "social media project",
    img: "https://raw.githubusercontent.com/indalyadav56/Django-React-Projects/main/SocialMedia%20Project/social.png",
    sourceCode:
      "https://github.com/indalyadav56/Django-React-Projects/tree/main/SocialMedia%20Project",
    tags: ["Python", "Django", "ReactJS", "Redux", "styled-components"],
  },
];
