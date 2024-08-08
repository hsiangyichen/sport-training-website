import React from "react";
import { useTranslations } from "next-intl";
import CoachCardSection from "@components/CoachCardSection";
import SubPageMainSection from "@components/SubPageMainSection";
import Contact from "@components/Contact";
import CardSlider from "@components/CardSlider";

const Coaches = () => {
  const t = useTranslations("Volleyball.coaches");

  const coaches = [
    {
      name: t("CheungNgaiYiu.name"),
      title: t("CheungNgaiYiu.title"),
      image: "/images/Coach-Cheung-Ngai-Yiu-w.png",
    },
    {
      name: t("WanKaNam.name"),
      title: t("WanKaNam.title"),
      image: "/images/Coach-Wan-Ka-Nam-w.png",
    },
    {
      name: t("NgTszYing.name"),
      title: t("NgTszYing.title"),
      image: "/images/Coach-Ng-Tsz-Ying-w.png",
    },
    {
      name: t("CheungYuCham.name"),
      title: t("CheungYuCham.title"),
      image: "/images/Coach-Cheung-Yu-Cham-w.png",
    },
    {
      name: t("LiuNgaiKam.name"),
      title: t("LiuNgaiKam.title"),
      image: "/images/Coach-Liu-Ngai-Kam-w.png",
    },
    {
      name: t("LeungHinWai.name"),
      title: t("LeungHinWai.title"),
      image: "/images/Coach-Leung-Hin-Wai-w.png",
    },
  ];

  return (
    <div className="custom-font">
      <SubPageMainSection
        title={t("title")}
        image1="/images/Volleyball.jpg"
        image2="/images/HomePage4.jpg"
      />
      <div className="py-20">
        <CoachCardSection coaches={coaches} />
      </div>
      <CardSlider />
      <Contact />
    </div>
  );
};

export default Coaches;
