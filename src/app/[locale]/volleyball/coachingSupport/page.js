import React from "react";
import Overview from "@/app/components/Overview/Overview";
import { useTranslations } from "next-intl";
import SubPageMainSection from "@/components/SubPageMainSection";
import Contact from "@/components/Contact";
import CardSlider from "@/components/CardSlider";

const CoachingSupport = () => {
  const t = useTranslations("Volleyball.coachingSupport");
  const title = t("title");
  const overview = t("overview");
  const points = t.raw("points");
  const images = [
    { src: "/images/CoachingSupport1.jpg", alt: "CoachingSupport1" },
    { src: "/images/CoachingSupport2.jpg", alt: "CoachingSupport2" },
  ];

  return (
    <div>
      <SubPageMainSection
        title={t("title")}
        image1="/images/Volleyball.jpg"
        image2="/images/CoachingSupport.jpg"
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

export default CoachingSupport;
