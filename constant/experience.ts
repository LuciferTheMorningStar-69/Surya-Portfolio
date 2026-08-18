export interface ExperienceDate {
  dd: number;
  mm: string;
  yyyy: number;
}

export interface BaseExperience {
  role: string;
  startDate: ExperienceDate;
  description: string[];
  company: string;
  companySite: string;
  technologies: string[];
}

export type Experience =
  | (BaseExperience & {
      current: true;
      // endDate?: never;
    })
  | (BaseExperience & {
      current?: false;
      endDate: ExperienceDate;
    });

export const experience: Experience[] = [
  {
    role: "AI Internship & Training",
    startDate: {
      dd: 1,
      mm: "January",
      yyyy: 2024,
    },
    current: true,
    description: [
      "Completed hands-on Artificial Intelligence Internship and Training.",
      "Gained practical experience in applying AI/ML concepts.",
    ],
    company: "KRUTANIC Solutions",
    companySite: "#",
    technologies: ["Artificial Intelligence", "Machine Learning"],
  }
];
