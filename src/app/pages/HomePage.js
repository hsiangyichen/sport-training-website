"use client";
import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the styles
import Image from "next/image";
import styles from "./styles.module.scss";
import IrregularTitle from "@/components/IrregularTitle";

const HomePage = () => {
  const images = [
    {
      id: 1,
      url: "/images/HomePage1.JPG",
      title: "FIND YOUR BEST SPORT MOTIVATION",
      top: "-270px",
    },
    {
      id: 2,
      url: "/images/HomePage2.JPG",
      title: "SKY IS THE LIMIT",
      top: "-630px",
    },
    {
      id: 3,
      url: "/images/HomePage4.JPG",
      title: "WHERE CHAMPIONS TAKE FLIGHT",
      top: "-380px",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isInitialMount, setIsInitialMount] = useState(true);

  useEffect(() => {
    if (isInitialMount) {
      setIsInitialMount(false);
    } else {
      // Force re-render to restart animation
      const titleElement = document.querySelector(`.${styles.title}`);
      if (titleElement) {
        titleElement.style.animation = "none";
        titleElement.offsetHeight; // Trigger reflow
        titleElement.style.animation = "";
      }
    }
  }, [currentSlide]);

  return (
    <div className={`h-[80vh] ${styles.sliderContainer}`}>
      <div className={styles.gradientOverlay}></div>
      <div className="absolute">
        <Carousel
          showArrows={false}
          autoPlay={true}
          infiniteLoop={true}
          interval={5000}
          showStatus={false}
          stopOnHover={false}
          transitionTime={1000}
          onChange={(index) => setCurrentSlide(index)}
        >
          {images.map((image) => (
            <div key={image.id} className="h-[80vh] relative">
              <Image
                src={image.url}
                alt={image.title}
                width={4000}
                height={4000}
                className="w-full relative -z-20"
                style={{ top: image.top }}
              />
            </div>
          ))}
        </Carousel>
      </div>

      <div className="flex flex-col items-center justify-center w-screen h-[80vh] z-10">
        <div
          key={currentSlide}
          className={` ${styles.title} ${!isInitialMount ? styles.fadeIn : ""}`}
        >
          <IrregularTitle title={images[currentSlide]?.title} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
