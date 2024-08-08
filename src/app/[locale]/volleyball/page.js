import React from "react";
import Contact from "@components/Contact";
import MainPageMainSection from "@components/MainPageMainSection";
import { useTranslations } from "next-intl";
import CardSlider from "@components/CardSlider";
import VolleyballOfferSection from "@components/VolleyballOfferSection";

const Volleyball = () => {
  const t = useTranslations("Volleyball");
  return (
    <div className="flex flex-col justify-between items-center w-full">
      <MainPageMainSection title={t("title")} image="/images/Volleyball.jpg" />
      <VolleyballOfferSection />
      <CardSlider />
      <Contact />
    </div>
  );
};

export default Volleyball;
