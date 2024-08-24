"use client";
import React from "react";
import Image from "next/image";
import ReadMoreSection from "@components/ReadMoreSection";
import { useTranslations } from "next-intl";
import styles from "./styles.module.scss";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const OfferSection = ({ sectionKey, images }) => {
  const t = useTranslations(sectionKey);
  const sections = t.raw("sections");

  return (
    <div className="flex flex-col items-center lg:items-start">
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
          {sections.map((section, index) => (
            <ReadMoreSection
              key={index}
              title={section.title}
              description={section.description}
              linkText={section.linkText}
              linkHref={section.linkHref}
            />
          ))}
        </div>
        <div
          className={`flex justify-center basis-1/2 ${styles.sliderContainer}`}
        >
          <div className={styles.gradientOverlay}></div>
          <div className="absolute w-full top-0">
            <Carousel
              showArrows={false}
              autoPlay={true}
              infiniteLoop={true}
              interval={3000}
              showStatus={false}
              stopOnHover={false}
              transitionTime={1000}
              showThumbs={false}
            >
              {images.map((image, index) => (
                <div key={index} className="h-[80vh] relative">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    objectFit="cover"
                    className="relative -z-20"
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferSection;
