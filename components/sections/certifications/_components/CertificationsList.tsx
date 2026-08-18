"use client";

import { type Certification } from "@/constant";
import { CertificationsItem } from "./CertificationsItem";

interface CertificationsListProps {
  items: Certification[];
}

export const CertificationsList = ({ items }: CertificationsListProps) => {
  return (
    <div className="mt-8 flex w-full flex-col gap-6 sm:gap-8">
      {items.map((item, index) => (
        <CertificationsItem
          key={`${item.company}-${index}`}
          item={item}
          index={index}
        />
      ))}
    </div>
  );
};

