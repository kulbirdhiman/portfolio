import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/ecommerce.jpeg";
import ipbImg from "@/public/car-audio.jpeg";
import soicImg from "@/public/image-3.png";

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

export const experiencesData = [
   {
    title: "B.C.A Student",
    location: "Punjab Group of Colleges, Punjab",
    description:
      "I'm currently pursuing my Bachelor's in Computer Applications (B.C.A.). I'm in my 3rd year and actively learning web development.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - Present",
  },
  {
    title: "Intern - Full-Stack Developer",
    location: "Navabi Marketing Pvt. Ltd.",
    description:
      "I'm working as a full-stack development intern at Navabi Marketing Pvt. Ltd. My stack includes React, Next.js, TypeScript, Tailwind, MySQL, and MongoDB.",
    icon: React.createElement(FaReact),
    date: "2025 - Present",
  },
] as const;

export const projectsData = [
{
  title: "Mern e Commerce",
  description:
    "I worked as a full-stack developer on this project. Nestle is managing its officer hierarchy to distribute medical books as gifts to doctors.",
  tags: ["React", "express", "mongodb", "Tailwind", ],
  imageUrl: corpcommentImg,
},

{
  title: "Car Audio Expert",
  description:
    "An e-commerce site for premium car audio systems and accessories. I built the front end with a focus on responsive design and smooth user experience.",
  tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
  imageUrl: ipbImg,
}

,
 {
  title: "Manual Invoice Generator",
  description:
    "A web app to create and manage manual invoices easily. Built with a focus on user-friendly forms, PDF export, and responsive design.",
  tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
  imageUrl: soicImg, // Replace with your actual image variable
}


] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
//  "AWS",
//  "PHP",
//  "Laravel",
  "MongoDB",
  "Redux",
  // "GraphQL",
//  "Mysql",
  "Express",
 
] as const;
