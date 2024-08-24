"use client";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import styles from "./styles.module.scss";

const Overview = ({ overview, points, images }) => {
  return (
    <div className="flex flex-col lg:flex-row items-center px-6 lg:px-28 xl:px-48 lg:py-36 lg:gap-20 xl:gap-36 overflow-hidden">
      <div className="flex flex-col items-center lg:items-start justify-center basis-1/2 w-full z-10 py-12">
        <h2 className="text-2xl lg:text-[42px] custom-font  mb-6 lg:mb-10">
          {overview}
        </h2>
        <ul className="list-disc list-inside leading-6 md:leading-8 flex flex-col gap-2 md:gap-6 text-sm md:text-base">
          {points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
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
  );
};

export default Overview;
