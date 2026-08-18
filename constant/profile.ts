interface Name {
  full: string;
  first: string;
  last: string;
}

interface Work {
  title: string;
  company: string;
}

interface Location {
  city: string;
  state: string;
}

interface Education {
  uni: string;
  degree: string;
  major: string;
  batch: string;
  location: Location;
}

interface DOB {
  dd: number;
  mm: number;
  yyyy: number;
}

interface Titles {
  constant_word: string;
  rotating_words: string[];
}

interface Profile {
  name: Name;
  email: string;
  work: Work;
  education: Education[];
  languages: string[];
  DOB: DOB;
  curr_location: Location;
  about: string[];
  hero_titles: Titles;
  quote: string;
}

export const profile: Profile = {
  name: {
    full: "Pinapa Naga Surya Teja",
    first: "Pinapa",
    last: "Naga Surya Teja",
  },

  email: "suryateja8165@gmail.com",

  work: {
    title: "Artificial Intelligence & Machine Learning Student",
    company: "RMD Engineering College",
  },

  education: [
    {
      uni: "RMD Engineering College",
      degree: "B. Tech",
      major: "Artificial Intelligence & Machine Learning",
      batch: "2024 - 2028",
      location: {
        city: "Kavaraipettai",
        state: "Tamil Nadu",
      },
    },
    {
      uni: "Narayana Junior College",
      degree: "Intermediate",
      major: "MPC",
      batch: "2022 - 2024",
      location: {
        city: "Ongole",
        state: "Andhra Pradesh",
      },
    },
    {
      uni: "Narayana e-Techno School",
      degree: "SSC",
      major: "10th Standard",
      batch: "2021 - 2022",
      location: {
        city: "Ongole",
        state: "Andhra Pradesh",
      },
    }
  ],

  languages: ["English", "Telugu", "Hindi"],

  DOB: {
    dd: 1,
    mm: 1,
    yyyy: 2004,
  },

  curr_location: {
    city: "Ongole",
    state: "Andhra Pradesh",
  },

  about: [
    "Artificial Intelligence and Machine Learning (AIML) student with a strong foundation in Python, Machine Learning, SQL, and Data Science.",
    "Hands-on experience through AI/ML projects, coding practice, and hackathons, with a passion for building practical, real-world solutions.",
    "Always looking for opportunities to learn, build and solve complex problems using modern technology.",
  ],

  hero_titles: {
    constant_word: "Passionate",
    rotating_words: [
      "Developer",
      "AI Enthusiast",
      "Problem Solver",
      "Learner",
    ],
  },

  quote: "Building practical, real-world solutions.",
};
