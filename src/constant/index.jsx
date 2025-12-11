import dgs from "../assets/1.jpg";
import modena from "../assets/2.jpg";
import snap from "../assets/3.jpg";
import php from "../assets/new-php-logo.svg";
import node from "../assets/jsIconGreen.svg";
import react from "../assets/react-svgrepo-com.svg";
import next from "../assets/nextjs-icon-svgrepo-com.svg";
import vite from "../assets/vitejs-svgrepo-com.svg";
import typescript from "../assets/typescript-svgrepo-com.svg";
import javascript from "../assets/javascript-logo-svgrepo-com.svg";
import netlify from "../assets/netlify-icon-seeklogo.svg";
import appwrite from "../assets/appwrite.svg";
import mongodb from "../assets/mongodb.svg";
import mysql from "../assets/mysql.svg";
import postgresql from "../assets/postgresql.svg";
import prisma from "../assets/prisma.svg";
import redis from "../assets/redis.svg";

export const projects = [
  {
    id: 1,
    title: "فروشگاه اینترنتی",
    description: "یک فروشگاه کامل با قابلیت مدیریت کاربران و محتوای چندزبانه",
    technologies: ["React", "netlify functions", "postgresql"],
    githubLink: "https://github.com/HamidSamiee/clothing-store",
    demoLink: "https://modina.netlify.app/",
    image: modena,
  },
  {
    id: 2,
    title: "  فروشگاه Ecommerce",
    description: "فروشگاه آنلاین با سیستم پرداخت و مدیریت ادمین ",
    technologies: ["React.js", "GSAP", "reduxToolkit"],
    githubLink: "https://github.com/HamidSamiee/Modern_E-commerce",
    demoLink: "https://www.dgsmarket.ir/",
    image: dgs,
  },
  {
    id: 3,
    title: "SocialMedia",
    description:
      "شبیه‌ساز شبکه اجتماعی با قابلیت پست‌گذاری، لایک، کامنت و سیستم فالو",
    technologies: ["React", "TypeScript"],
    githubLink: "https://github.com/HamidSamiee/SocialMedia",
    demoLink: "https://snapsocialmedia.netlify.app/",
    image: snap,
  },
];

export const skillsData = [
  {
    category: "پایگاه‌های داده",
    skills: [
      { name: "MongoDB", level: 82, color: "#47A248" },
      { name: "MySQL", level: 80, color: "#4479A1" },
      { name: "PostgreSQL", level: 79, color: "#336791" },
      { name: "Redis", level: 60, color: "#aa1251ff" },
      { name: "Prisma", level: 81, color: "#2D3748" },
    ],
  },
  {
    category: "تکنولوژی‌های بک‌اند",
    skills: [
      { name: "Node.js", level: 85, color: "#339933" },
      { name: "Express.js", level: 83, color: "#000000" },
      { name: "PHP", level: 78, color: "#777BB4" },
    ],
  },
  {
    category: "تکنولوژی‌های فرانت‌اند",
    skills: [
      { name: "HTML5", level: 95, color: "#E34F26" },
      { name: "CSS3", level: 90, color: "#1572B6" },
      { name: "JavaScript", level: 88, color: "#F7DF1E" },
      { name: "TypeScript", level: 85, color: "#3178C6" },
      { name: "React", level: 92, color: "#61DAFB" },
      { name: "Next.js", level: 87, color: "#000000" },
      { name: "Vite", level: 82, color: "#646CFF" },
    ],
  },
  {
    category: "ابزار و پلتفرم‌ها",
    skills: [
      { name: "Git", level: 89, color: "#F05032" },
      { name: "GitHub", level: 90, color: "#181717" },
      { name: "Docker", level: 80, color: "#1D63ED" },
      { name: "DockerHub", level: 80, color: "#1D63ED" },
      { name: "Vercel", level: 88, color: "#000000" },
      { name: "Netlify", level: 85, color: "#00C7B7" },
      { name: "Appwrite", level: 76, color: "#4285F4" },
    ],
  },
];

// کامپوننت ایکون‌های SVG
export const SkillIcons = {
  // پایگاه‌های داده
  MongoDB: () => (
    <img src={mongodb} alt="" className="" height={"25px"} width={"25px"} />
  ),
  MySQL: () => (
    <img src={mysql} alt="" className="" height={"25px"} width={"25px"} />
  ),
  PostgreSQL: () => (
    <img src={postgresql} alt="" className="" height={"25px"} width={"25px"} />
  ),
  Redis: () => (
    <img src={redis} alt="" className="" height={"25px"} width={"25px"} />
  ),
  Prisma: () => (
    <img src={prisma} alt="" className="" height={"25px"} width={"25px"} />
  ),

  // بک‌اند
  "Node.js": () => (
    <img src={node} alt="" className="" height={"35px"} width={"35px"} />
  ),
  "Express.js": () => (
    <svg viewBox="0 0 24 24" className="skill-icon">
      <path
        fill="#000000"
        d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z"
      />
    </svg>
  ),
  PHP: () => (
    <img src={php} alt="" className="" height={"40px"} width={"40px"} />
  ),

  // فرانت‌اند
  HTML5: () => (
    <svg viewBox="0 0 24 24" className="skill-icon">
      <path
        fill="#E34F26"
        d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"
      />
    </svg>
  ),
  CSS3: () => (
    <svg viewBox="0 0 24 24" className="skill-icon">
      <path
        fill="#1572B6"
        d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"
      />
    </svg>
  ),
  JavaScript: () => (
    <img src={javascript} alt="" className="" height={"25px"} width={"25px"} />
  ),
  TypeScript: () => (
    <img src={typescript} alt="" className="" height={"30px"} width={"30px"} />
  ),
  React: () => (
    <img src={react} alt="" className="" height={"35px"} width={"35px"} />
  ),
  "Next.js": () => (
    <img src={next} alt="" className="" height={"30px"} width={"30px"} />
  ),
  Vite: () => (
    <img src={vite} alt="" className="" height={"25px"} width={"25px"} />
  ),

  // ابزار و پلتفرم‌ها
  Git: () => (
    <svg viewBox="0 0 24 24" className="skill-icon">
      <path
        fill="#F05032"
        d="M23.546 10.93L13.067.452c-.6-.6-1.56-.6-2.16 0L8.708 2.64l2.84 2.84c.645-.215 1.38-.07 1.89.44.51.51.655 1.245.44 1.89l2.84 2.84c.645-.215 1.38-.07 1.89.44.6.6.6 1.56 0 2.16-.6.6-1.56.6-2.16 0-.51-.51-.655-1.245-.44-1.89l-2.84-2.84v7.47c.15.09.3.195.44.33.6.6.6 1.56 0 2.16-.6.6-1.56.6-2.16 0-.6-.6-.6-1.56 0-2.16.15-.15.33-.27.51-.36v-7.59c-.18-.09-.36-.21-.51-.36-.245-.245-.39-.585-.39-.96s.145-.715.39-.96l2.865-2.865L8.708 2.64.452 10.93c-.6.6-.6 1.56 0 2.16l10.48 10.48c.6.6 1.56.6 2.16 0l10.48-10.48c.6-.6.6-1.56 0-2.16z"
      />
    </svg>
  ),
  GitHub: () => (
    <svg viewBox="0 0 24 24" className="skill-icon">
      <path
        fill="#181717"
        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
      />
    </svg>
  ),
  Vercel: () => (
    <svg viewBox="0 0 24 24" className="skill-icon">
      <path fill="#000000" d="M24 22.525H0l12-21.05 12 21.05z" />
    </svg>
  ),
  Netlify: () => (
    <img src={netlify} alt="" className="" height={"30px"} width={"30px"} />
  ),
  Appwrite: () => (
    <img src={appwrite} alt="" className="" height={"25px"} width={"25px"} />
  ),
};
