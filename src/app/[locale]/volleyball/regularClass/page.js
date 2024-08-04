// Coaches.js
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import ReadMoreSection from "@/components/ReadMoreSection";
import CoachCardSection from "@/components/CoachCardSection";
import SubPageMainSection from "@/components/SubPageMainSection";
import Contact from "@/components/Contact";

const regularClass = () => {
  const t = useTranslations("Volleyball.regularCourse");

  return (
    <div className="custom-font">
      <SubPageMainSection
        title={t("title")}
        image1="/images/Volleyball.jpg"
        image2="/images/RegularClass.jpg"
      />
      <Contact />
    </div>
  );
};

export default regularClass;
