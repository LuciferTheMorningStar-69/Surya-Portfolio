import type { IconType } from "react-icons";

import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPhone,
} from "react-icons/fa6";

import { SiLeetcode } from "react-icons/si";

interface Social {
  name: string;
  handle: string;
  url: string;
  icon: IconType;
}

export const socials = [
  {
    name: "Email",
    handle: "suryateja8165@gmail.com",
    url: "mailto:suryateja8165@gmail.com",
    icon: FaEnvelope,
  },
  {
    name: "Phone",
    handle: "+91 9676340978",
    url: "tel:+919676340978",
    icon: FaPhone,
  },
  {
    name: "LinkedIn",
    handle: "Pinapa Naga Surya Teja",
    url: "https://www.linkedin.com/in/pinapa-naga-surya-teja-84a4a1332/",
    icon: FaLinkedin,
  },
  {
    name: "GitHub",
    handle: "sur935",
    url: "https://github.com/sur935",
    icon: FaGithub,
  },
  {
    name: "LeetCode",
    handle: "surya__14",
    url: "https://leetcode.com/u/surya__14/",
    icon: SiLeetcode,
  },
] satisfies Social[];
