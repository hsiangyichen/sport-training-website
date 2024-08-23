import React from "react";
import Contact from "@components/Contact";
import MainPageMainSection from "@components/MainPageMainSection";
import { useTranslations } from "next-intl";
import CardSlider from "@components/CardSlider";
import OfferSection from "@components/OfferSection";

const Volleyball = () => {
  const t = useTranslations("Volleyball");
  const images = [
    { src: "/images/HomePage1.jpg", alt: "HomePage1" },
    { src: "/images/HomePage1.jpg", alt: "HomePage1" },
  ];

  return (
    <div className="flex flex-col justify-between items-center w-full">
      <MainPageMainSection title={t("title")} image="/images/Volleyball.jpg" />
      <div className="max-w-[1500px]">
        <OfferSection sectionKey="Volleyball" images={images} />
      </div>
      <CardSlider />
      <Contact />
    </div>
  );
};

export default Volleyball;
