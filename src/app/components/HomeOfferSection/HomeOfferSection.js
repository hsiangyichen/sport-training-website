import React from "react";
import Image from "next/image";
import ReadMoreSection from "@components/ReadMoreSection";
import { useTranslations } from "next-intl";
import styles from "./styles.module.scss";

const HomeOfferSection = () => {
  const t = useTranslations("WhatWeOffer");

  return (
    <div className="flex flex-col items-center lg:items-start ">
      <h1 className=" lg:hidden custom-font text-2xl mt-12 mb-6 ">
        {t("label")}
      </h1>
      <div
        className={`flex flex-col lg:flex-row px-6 lg:px-28 xl:px-48 lg:py-36 lg:gap-20 xl:gap-36 lg:items-stretch relative ${styles.mainSection}`}
      >
        <div className={`basis-1/2 flex flex-col justify-between `}>
          <h1 className="hidden lg:block custom-font text-2xl mt-12 mb-2 lg:text-[42px] lg:font-medium lg:mt-0 lg:mb-6">
            {t("label")}
          </h1>
          <ReadMoreSection
            title={t("sections.coaches.title")}
            description={t("sections.coaches.description")}
            linkText={t("sections.coaches.linkText")}
            linkHref={t("sections.coaches.linkHref")}
          />
          <ReadMoreSection
            title={t("sections.programs.title")}
            description={t("sections.programs.description")}
            linkText={t("sections.programs.linkText")}
            linkHref={t("sections.programs.linkHref")}
          />
          <ReadMoreSection
            title={t("sections.coachingSupport.title")}
            description={t("sections.coachingSupport.description")}
            linkText={t("sections.coachingSupport.linkText")}
            linkHref={t("sections.coachingSupport.linkHref")}
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
      </div>
    </div>
  );
};

export default HomeOfferSection;
