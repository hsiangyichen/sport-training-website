import Contact from "@/components/Contact";
import HomePageMainSection from "@/components/HomePageMainSection";
import ReadMoreSection from "@/components/ReadMoreSection";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("WhatWeOffer");

  return (
    <>
      <HomePageMainSection />
      <div className="flex flex-row px-48 py-36 gap-36 items-stretch">
        <div className="basis-1/2 flex flex-col justify-between">
          <h1 className="custom-font-subtitle mb-6">{t("label")}</h1>
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
        <div className="basis-1/2 flex items-center justify-center relative">
          <Image
            src="/images/HomePage3.JPG"
            alt="home page 3"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
      </div>
      <Contact />
    </>
  );
}
