import React from "react";
import Overview from "@/app/components/Overview/Overview";
import { useTranslations } from "next-intl";
import SubPageMainSection from "@/components/SubPageMainSection";
import Contact from "@/components/Contact";
import CardSlider from "@/components/CardSlider";

const ExperienceDay = () => {
  const t = useTranslations("Volleyball.experienceDay");
  const title = t("title");
  const overview = t("overview");
  const points = t.raw("points");
  const images = [
    { src: "/images/ExperienceDay1.jpg", alt: "ExperienceDay1" },
    { src: "/images/ExperienceDay2.jpg", alt: "ExperienceDay2" },
    { src: "/images/ExperienceDay3.jpg", alt: "ExperienceDay3" },
  ];

  return (
    <div>
      <SubPageMainSection
        title={t("title")}
        image1="/images/Volleyball.jpg"
        image2="/images/ExperienceDay.jpg"
      />
      <Overview
        title={title}
        overview={overview}
        points={points}
        images={images}
      />
      <CardSlider />
      <Contact />
    </div>
  );
};

export default ExperienceDay;
