import React from "react";
import { useTranslations } from "next-intl";
import ReadMoreSection from "@/components/ReadMoreSection";
import MainPageMainSection from "@/components/MainPageMainSection";
import Contact from "@/components/Contact";
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

        <div className=" text-white flex flex-col items-center leading-10 w-full pt-20 px-48 max-w-[1500px]">
          <div className="flex flex-row items-center gap-12 ">
            <Image
              src="/images/sky-sports-academy-banner.png"
              alt="Sky Sports Academy Logo"
              width={500}
              height={500}
              className="w-1/3 h-auto"
            />
            <p className="w-2/3">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {t("About.intro")}
            </p>
          </div>
          <div className="flex flex-col gap-12 pt-12">
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
        <div className="flex flex-row px-48 py-32 gap-36 items-stretch">
          <div className="basis-1/2 flex flex-col justify-between">
            <h1 className="custom-font-subtitle mb-6">
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
          <div className="basis-1/2 flex items-center justify-center relative">
            <Image
              src="/images/HomePage3.JPG"
              alt="home page 3"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </div>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default About;
