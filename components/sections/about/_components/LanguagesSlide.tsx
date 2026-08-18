"use client";

import { motion } from "motion/react";
import { profile } from "@/constant";

export const LanguagesSlide = () => {
  return (
    <motion.div
      key="slide-languages"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col gap-3"
    >
      <span className="font-mono text-xs uppercase tracking-widest text-accent font-semibold">
        // Languages
      </span>
      <h3 className="font-heading text-lg sm:text-xl font-bold text-white leading-snug">
        Spoken Languages
      </h3>
      <div className="flex flex-wrap gap-2">
        {profile.languages.map((lang, idx) => (
          <span
            key={idx}
            className="px-3 py-1.5 rounded-md bg-neutral-900 border border-neutral-800 text-neutral-300 font-mono text-xs sm:text-sm"
          >
            {lang}
          </span>
        ))}
      </div>
    </motion.div>
  );
};
