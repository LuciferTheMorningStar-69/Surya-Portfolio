export interface CertificationDate {
  dd: number;
  mm: string;
  yyyy: number;
}

export interface BaseCertification {
  role: string;
  startDate: CertificationDate;
  description: string[];
  company: string;
  companySite: string;
  technologies: string[];
}

export type Certification =
  | (BaseCertification & {
      current: true;
      // endDate?: never;
    })
  | (BaseCertification & {
      current?: false;
      endDate: CertificationDate;
    });

export const certifications: Certification[] = [
  {
    role: "Generative AI Certified Professional",
    startDate: {
      dd: 1,
      mm: "January",
      yyyy: 2024,
    },
    current: true,
    description: [
      "Achieved Oracle Generative AI Certified Professional certification.",
    ],
    company: "Oracle",
    companySite: "https://education.oracle.com/",
    technologies: ["Generative AI", "Oracle"],
  },
  {
    role: "APEX Cloud Developer Certified Professional",
    startDate: {
      dd: 1,
      mm: "January",
      yyyy: 2024,
    },
    current: true,
    description: [
      "Achieved Oracle APEX Cloud Developer Certified Professional certification.",
    ],
    company: "Oracle",
    companySite: "https://education.oracle.com/",
    technologies: ["Oracle APEX", "Cloud"],
  },
  {
    role: "Introduction to Industry 4.0 and Industrial Internet of Things",
    startDate: {
      dd: 1,
      mm: "January",
      yyyy: 2024,
    },
    current: true,
    description: [
      "Completed the NPTEL certification for Introduction to Industry 4.0 and Industrial Internet of Things.",
    ],
    company: "NPTEL",
    companySite: "https://nptel.ac.in/",
    technologies: ["Industry 4.0", "IIoT"],
  },
  {
    role: "Soft Skill Development",
    startDate: {
      dd: 1,
      mm: "January",
      yyyy: 2024,
    },
    current: true,
    description: [
      "Completed the NPTEL certification for Soft Skill Development.",
    ],
    company: "NPTEL",
    companySite: "https://nptel.ac.in/",
    technologies: ["Soft Skills", "Communication"],
  },
];
