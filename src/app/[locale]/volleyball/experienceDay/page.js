// Coaches.js
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import SubPageMainSection from "@/components/SubPageMainSection";
import Contact from "@/components/Contact";

const experienceDay = () => {
  const t = useTranslations("Volleyball.experienceDay");

  return (
    <div className="custom-font">
      <SubPageMainSection
        title={t("title")}
        image1="/images/Volleyball.jpg"
        image2="/images/ExperienceDay.jpg"
      />
      <Contact />
    </div>
  );
};

export default experienceDay;
