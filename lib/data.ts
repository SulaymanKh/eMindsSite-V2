import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap, LuSchool } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import { FaFacebook, FaGithubSquare, FaInstagram, FaTwitter } from "react-icons/fa";

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
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "What We Offer",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Specialized Tuition for KS1 and KS2 SATs:",
    location: "",
    description:
      "Prepare for success with our targeted tuition designed specifically for Key Stage 1 and Key Stage 2 SATs. Our expert teachers ensure you're ready to excel when it matters most.",
    icon: React.createElement(LuSchool),
    date: "",
  },
  {
    title: "Comprehensive Maths Tuition:",
    location: "",
    description:
      "From Key Stage 1 to Key Stage 4, we cover it all. Our lessons are perfectly aligned with the national curriculum, offering a seamless learning experience throughout your school years.",
    icon: React.createElement(LuSchool),
    date: "",
  },
  {
    title: "GCSE Exam Mastery:",
    location: "",
    description:
      "Navigate the GCSE challenge with confidence. Our comprehensive exam practice covers all topics and equips you with essential exam techniques, ensuring you're well-prepared for success.",
    icon: React.createElement(LuSchool),
    date: "",
  },
  {
    title: "Rich Learning Resources:",
    location: "",
    description:
      " We've got you covered with everything you need. Our resource library includes worksheets, past papers, and an online revision guide tailored for AQA, Edexcel, and OCR. What's more, we provide detailed feedback to help you identify areas for improvement and growth.",
    icon: React.createElement(LuSchool),
    date: "",
  },
] as const;

export const projectsData = [
  {
    title: "Post 1",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Post 2",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Post 3",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "Supportive",
  "Friendly",
  "Knowledgeable",
  "Approachable",
  "Engaging",
  "Experienced",
  "Adaptable",
  "Team Leadership",
  "Supervisory Skills",
  "Adaptability",
  "Assessment",
  "Passion",
  "Organization",
] as const;
