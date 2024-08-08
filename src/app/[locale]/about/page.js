import React from "react";
import { useTranslations } from "next-intl";
import MainPageMainSection from "@components/MainPageMainSection";
import Contact from "@components/Contact";
import CardSlider from "@components/CardSlider";
import Image from "next/image";
import AboutOfferSection from "@components/AboutOfferSection";

const About = () => {
  const t = useTranslations();

  return (
    <div>
      <div className="w-full flex flex-col items-center ">
        <MainPageMainSection
          title={t("About.title")}
          image="/images/About.jpg"
        />

        <div className=" text-white text-sm md:text-base flex flex-col  items-center lg:items-start  leading-8 lg:leading-10 w-full py-12 lg:pb-0 lg:pt-20 px-6 xl:px-48 max-w-[1500px]">
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
              {t("About.intro")}
            </p>
          </div>
          <div className="flex flex-col gap-6 md:gap-12 pt-6 md:pt-12">
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {t("About.description")}
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {t("About.mission")}
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {t("About.browse")}
            </p>
          </div>
        </div>
        <AboutOfferSection />
      </div>
      <CardSlider />
      <Contact />
    </div>
  );
};

export default About;
