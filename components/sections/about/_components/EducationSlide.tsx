"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { profile } from "@/constant";
import { cn } from "@/lib/utils";

export const EducationSlide = () => {
  const [eduIndex, setEduIndex] = useState(0);
  const totalEdu = profile.education.length;

  const handleNext = () => {
    setEduIndex((prev) => (prev + 1) % totalEdu);
  };

  const handlePrev = () => {
    setEduIndex((prev) => (prev - 1 + totalEdu) % totalEdu);
  };

  const currentEdu = profile.education[eduIndex];

  return (
    <motion.div
      key="slide-1"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col gap-2.5 h-full relative pr-8"
    >
      <span className="font-mono text-xs uppercase tracking-widest text-accent font-semibold">
        // Education &amp; Background
      </span>

      <div className="flex flex-col h-full min-h-[100px] justify-center relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={eduIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-2.5"
          >
            <h3 className="font-heading text-lg sm:text-xl font-bold text-white leading-snug">
              {currentEdu.uni}
            </h3>
            <p className="font-mono text-xs sm:text-sm text-neutral-300 font-medium">
              {currentEdu.degree} in {currentEdu.major}
            </p>
            <div className="flex items-center gap-3 font-mono text-xs text-neutral-400 pt-1">
              <span className="px-2 py-0.5 rounded-md bg-neutral-900 border border-neutral-800 text-accent">
                Batch: {currentEdu.batch}
              </span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">
                {currentEdu.location.city}, {currentEdu.location.state}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {totalEdu > 1 && (
        <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-2">
          <button
            onClick={handlePrev}
            className="p-1 rounded-md border border-neutral-800 bg-neutral-900/60 text-neutral-400 hover:text-accent hover:border-accent/50 transition-all cursor-pointer"
          >
            <ChevronUp className="size-4" />
          </button>
          <button
            onClick={handleNext}
            className="p-1 rounded-md border border-neutral-800 bg-neutral-900/60 text-neutral-400 hover:text-accent hover:border-accent/50 transition-all cursor-pointer"
          >
            <ChevronDown className="size-4" />
          </button>
        </div>
      )}
    </motion.div>
  );
};
