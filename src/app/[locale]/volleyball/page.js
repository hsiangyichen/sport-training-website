import React from "react";
import Contact from "@/components/Contact";
import MainPageMainSection from "@/components/MainPageMainSection";
import { useTranslations } from "next-intl";

const Volleyball = () => {
  const t = useTranslations("Volleyball");
  return (
    <div>
      <MainPageMainSection title={t("title")} image="/images/Volleyball.jpg" />
      <Contact />
    </div>
  );
};

export default Volleyball;
