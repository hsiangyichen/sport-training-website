import React from "react";
import { useTranslations } from "next-intl";
import ReadMoreSection from "@/components/ReadMoreSection";
import MainPageMainSection from "@/components/MainPageMainSection";
import Contact from "@/components/Contact";
import CardSlider from "@/components/CardSlider";
import Image from "next/image";

const About = () => {
  const t = useTranslations();

  return (
    <div>
      <div className="w-full flex flex-col items-center ">
        <MainPageMainSection
          title={t("About.title")}
          image="/images/About.jpg"
        />

        <div className=" text-white text-sm md:text-base flex flex-col items-center leading-8 lg:leading-10 w-full py-12 lg:pb-0 lg:pt-20 px-6 xl:px-48 max-w-[1500px]">
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
        <div className="flex flex-col lg:flex-row px-6 lg:px-28 xl:px-48 lg:py-36 lg:gap-20 xl:gap-36 lg:items-stretch">
          <div className="basis-1/2 flex flex-col justify-between items-center lg:items-start">
            <h1 className="custom-font text-3xl mt-12 mb-2 lg:text-[42px] lg:font-medium lg:mt-0 lg:mb-6">
              {t("WhatWeOffer.label")}
            </h1>
            <ReadMoreSection
              title={t("WhatWeOffer.sections.coaches.title")}
              description={t("WhatWeOffer.sections.coaches.description")}
              linkText={t("WhatWeOffer.sections.coaches.linkText")}
              linkHref={t("WhatWeOffer.sections.coaches.linkHref")}
            />
            <ReadMoreSection
              title={t("WhatWeOffer.sections.programs.title")}
              description={t("WhatWeOffer.sections.programs.description")}
              linkText={t("WhatWeOffer.sections.programs.linkText")}
              linkHref={t("WhatWeOffer.sections.programs.linkHref")}
            />
            <ReadMoreSection
              title={t("WhatWeOffer.sections.coachingSupport.title")}
              description={t(
                "WhatWeOffer.sections.coachingSupport.description"
              )}
              linkText={t("WhatWeOffer.sections.coachingSupport.linkText")}
              linkHref={t("WhatWeOffer.sections.coachingSupport.linkHref")}
            />
          </div>
          <div className="hidden lg:basis-1/2 lg:flex items-center justify-center relative">
            <Image
              src="/images/HomePage3.jpg"
              alt="home page 3"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </div>
          <div className="absolute left-0 lg:hidden -z-20 overflow-hidden opacity-10">
            <Image
              src="/images/HomePage3.jpg"
              alt="home page 3"
              width={500}
              height={500}
              className="w-screen"
            />
          </div>
        </div>
      </div>
      <CardSlider />
      <Contact />
    </div>
  );
};

export default About;
