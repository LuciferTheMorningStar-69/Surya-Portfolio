import { socials } from "./social";

export interface PageSeoConfig {
  title: string;
  description: string;
  keywords: string[];
  path: string;
  ogImage?: string;
  type?: "website" | "article" | "profile";
}

export interface ConstructMetadataOptions {
  title?: string;
  useTitleTemplate?: boolean;
  description?: string;
  keywords?: string[];
  image?: string | null;
  path?: string;
  type?: "website" | "article" | "profile";
  publishedTime?: string;
  authors?: { name: string; url?: string }[];
  noIndex?: boolean;
}

const xSocial = socials.find((s) => s.name === "X");
const githubSocial = socials.find((s) => s.name === "GitHub");

function resolveSiteUrl() {
  if (process.env.NODE_ENV === "development") return "http://localhost:3000";

  return `https://${process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL}`;
}

export const SITE_SEO = {
  siteName: "Surya's Portfolio",
  siteTitle: "Pinapa Naga Surya Teja - AI & Machine Learning Student",
  siteUrl: resolveSiteUrl(),
  titleTemplate: "%s | Pinapa Naga Surya Teja",
  defaultDescription:
    "Personal portfolio, projects, and CV of Pinapa Naga Surya Teja — AI & Machine Learning Student specializing in Python, Data Science, and Real-world problem solving.",
  defaultKeywords: [
    "Pinapa Naga Surya Teja",
    "Surya Teja Portfolio",
    "AI Student",
    "Machine Learning",
    "Python Developer",
    "Data Science",
  ],
  author: {
    name: "Pinapa Naga Surya Teja",
    url: resolveSiteUrl(),
    email: "suryateja8165@gmail.com",
    handle: `@${githubSocial?.handle || "sur935"}`,
  },
  creator: "Pinapa Naga Surya Teja",
  publisher: "Pinapa Naga Surya Teja",
  defaultOgImage: "/images/thumbnail.png",
  twitterHandle: `@surya__14`,
  socialLinks: socials.map((s) => s.url),
  locale: "en_US",
  themeColor: "#000000",
  robotsDefault: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
} as const;

export const PAGE_SEO: Record<
  "home" | "projects" | "blogs" | "resume" | "license",
  PageSeoConfig
> = {
  home: {
    title: "Pinapa Naga Surya Teja - AI & Machine Learning Student",
    description:
      "Welcome to the official portfolio of Pinapa Naga Surya Teja. Discover machine learning projects, web applications, and experience.",
    keywords: [
      "Pinapa Naga Surya Teja",
      "Surya Teja Portfolio",
      "Machine Learning",
    ],
    path: "/",
    type: "website",
  },
  projects: {
    title: "Projects & Works",
    description:
      "Explore machine learning models, applications, and open-source GitHub repositories created by Pinapa Naga Surya Teja.",
    keywords: [
      "Projects",
      "Machine Learning Applications",
      "Open Source",
    ],
    path: "/projects",
    type: "website",
  },
  blogs: {
    title: "Blog & Technical Articles",
    description:
      "Explore technical articles, tutorials, and insights by Pinapa Naga Surya Teja.",
    keywords: [
      "Blog",
      "Tech Articles",
      "Machine Learning Blog",
    ],
    path: "/blogs",
    type: "website",
  },
  resume: {
    title: "Resume & CV",
    description:
      "Curriculum vitae and professional experience of Pinapa Naga Surya Teja.",
    keywords: [
      "Resume",
      "CV",
      "Pinapa Naga Surya Teja Resume",
    ],
    path: "/resume",
    type: "profile",
  },
  license: {
    title: "License & Terms of Usage",
    description:
      "Official software license, usage permissions, restrictions, and copyright terms.",
    keywords: [
      "License",
      "Terms of Use",
    ],
    path: "/license",
    type: "website",
  },
};