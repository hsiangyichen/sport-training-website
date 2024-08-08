import React from "react";
import Image from "next/image";
import ReadMoreSection from "@components/ReadMoreSection";
import { useTranslations } from "next-intl";
import styles from "./styles.module.scss";

const VolleyballOfferSection = () => {
  const t = useTranslations("Volleyball");
  return (
    <div className="flex flex-col items-center lg:items-start ">
      <h1 className="lg:hidden custom-font text-2xl mt-12 mb-6 ">
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
            title={t("sections.regularCourse.title")}
            description={t("sections.regularCourse.description")}
            linkText={t("sections.regularCourse.linkText")}
            linkHref={t("sections.regularCourse.linkHref")}
          />
          <ReadMoreSection
            title={t("sections.trainingCamp.title")}
            description={t("sections.trainingCamp.description")}
            linkText={t("sections.trainingCamp.linkText")}
            linkHref={t("sections.trainingCamp.linkHref")}
          />
          <ReadMoreSection
            title={t("sections.experienceDay.title")}
            description={t("sections.experienceDay.description")}
            linkText={t("sections.experienceDay.linkText")}
            linkHref={t("sections.experienceDay.linkHref")}
          />
        </div>
        <div className="hidden lg:basis-1/2 lg:flex items-center justify-center relative">
          <Image
            src="/images/HomePage1.jpg"
            alt="home page 1"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
      </div>
    </div>
  );
};

export default VolleyballOfferSection;
