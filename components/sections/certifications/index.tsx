"use client";

import { SectionHeader } from "@/components/common";
import { certifications } from "@/constant";
import { CertificationsList } from "./_components/CertificationsList";

export const CertificationsSection = () => {
  return (
    <section
      id="certifications"
      className="relative w-full select-none px-6 py-28 md:px-12 lg:px-20 overflow-hidden"
    >
      <div className="mx-auto w-full max-w-5xl relative">
        <SectionHeader number="05" title="Certifications" align="left" />

        <CertificationsList items={certifications} />
      </div>
    </section>
  );
};
