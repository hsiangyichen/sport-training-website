import React from "react";
import { useTranslations } from "next-intl";
import MainPageMainSection from "@components/MainPageMainSection";
import Contact from "@components/Contact";
import CardSlider from "@components/CardSlider";
import Image from "next/image";
import OfferSection from "@components/OfferSection";

const About = () => {
  const t = useTranslations("About");
  const images = [
    { src: "/images/HomePage3.jpg", alt: "HomePage3" },
    { src: "/images/HomePage3.jpg", alt: "HomePage3" },
  ];

  return (
    <div>
      <div className="w-full flex flex-col items-center ">
        <MainPageMainSection title={t("title")} image="/images/About.jpg" />

        <div className="max-w-[1500px] text-white text-sm md:text-base flex flex-col  items-center lg:items-start  leading-8 lg:leading-10 w-full py-12 lg:pb-0 lg:pt-20 px-6 xl:px-48">
          <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-12 ">
            <Image
              src="/images/sky-sports-academy-banner.png"
              alt="Sky Sports Academy Logo"
              width={500}
              height={500}
              className="lg:w-1/3 h-auto"
            />
            <p className="lg:w-2/3">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {t("intro")}
            </p>
          </div>
          <div className="flex flex-col gap-6 md:gap-12 pt-6 md:pt-12">
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {t("description")}
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {t("mission")}
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {t("browse")}
            </p>
          </div>
        </div>
        <div className="max-w-[1500px]">
          <OfferSection sectionKey="About" images={images} />
        </div>
      </div>
      <CardSlider />
      <Contact />
    </div>
  );
};

export default About;
