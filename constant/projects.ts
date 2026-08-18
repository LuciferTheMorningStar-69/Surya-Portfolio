export interface Project {
  name: string;
  description: string;
  technologies: string[];
  links: {
    live?: string;
    github?: string;
  };
}

export const selected_works: Project[] = [
  {
    name: "Spam Detection Using Machine Learning",
    description:
      "Developed a machine learning-based system to classify messages as spam or legitimate. Worked with text preprocessing and classification techniques. Built as a mini project associated with KRUTANIC.",
    technologies: [
      "Python",
      "Machine Learning",
      "Supervised Learning",
      "Text Processing",
    ],
    links: {
      github: "https://github.com/sur935",
    },
  },
  {
    name: "Smart Crop – AI-Based Farmer Advisory System",
    description:
      "Proposed an AI-based mobile application for farmers. Features include crop advisory, soil recommendations, weather alerts, pest/disease detection, market prices, multilingual support, and voice assistance. Designed with the goal of providing accessible technology for rural farmers.",
    technologies: [
      "Artificial Intelligence",
      "Python",
      "Machine Learning",
      "Voice AI",
    ],
    links: {
      github: "https://github.com/sur935",
    },
  },
];

export const works: Project[] = [];
