import type { IconType } from "react-icons";

import {
  FaGitAlt,
  FaGithub,
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa6";

import {
  SiCplusplus,
  SiJupyter,
  SiLeetcode,
} from "react-icons/si";

import { BiLogoPostgresql } from "react-icons/bi";
import { TbBrain } from "react-icons/tb";
import { MdOutlineComputer } from "react-icons/md";

interface LogoProps {
  title: string;
  logoComponent: IconType;
  color?: string;
}

interface SkillsDataProps {
  title: string;
  data: LogoProps[];
}

export const skillsData: SkillsDataProps[] = [
  {
    title: "Programming & Databases",
    data: [
      { title: "Python", logoComponent: FaPython, color: "#3776AB" },
      { title: "Java", logoComponent: FaJava, color: "#007396" },
      { title: "C / C++", logoComponent: SiCplusplus, color: "#00599C" },
      { title: "SQL", logoComponent: BiLogoPostgresql, color: "#4169E1" },
    ],
  },
  {
    title: "Web Technologies",
    data: [
      { title: "HTML5", logoComponent: FaHtml5, color: "#E34F26" },
      { title: "CSS3", logoComponent: FaCss3Alt, color: "#1572B6" },
    ],
  },
  {
    title: "Machine Learning & Concepts",
    data: [
      { title: "Machine Learning", logoComponent: TbBrain, color: "#EE4C2C" },
      { title: "Data Structures", logoComponent: MdOutlineComputer, color: "#000000" },
    ],
  },
  {
    title: "Tools & Platforms",
    data: [
      { title: "Git", logoComponent: FaGitAlt, color: "#F05032" },
      { title: "GitHub", logoComponent: FaGithub, color: "#181717" },
      { title: "Jupyter", logoComponent: SiJupyter, color: "#F37626" },
      { title: "LeetCode", logoComponent: SiLeetcode, color: "#FFA116" },
    ],
  },
];
