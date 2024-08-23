"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { useTranslations } from "next-intl";

import Card from "@components/Card";
import VolleyballIcon from "@icons/volleyball.svg";
import BadmintonIcon from "@icons/badminton.svg";
import BasketballIcon from "@icons/basketball.svg";
import FootballIcon from "@icons/football.svg";
import TennisIcon from "@icons/tennis.svg";
import Image from "next/image";

function CardSlider() {
  const t = useTranslations("OtherTrainingPrograms");

  const handleComingSoon = () => {};

  return (
    <div className="relative md:h-[50vh] flex flex-col bg-zinc-900 justify-center items-center w-full">
      <div className="absolute inset-0 bg-cover bg-center opacity-10">
        <Image
          src="/images/SkySportsB.png"
          alt="sky-sports-academy-banner"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </div>
      <div className="max-w-[1500px] w-full relative overflow-hidden">
        <Swiper
          effect={"coverflow"}
          centeredSlides={true}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 0,
            depth: 200,
            modifier: 1,
            slideShadows: false,
            scale: 1,
          }}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
        >
          <SwiperSlide>
            <Link href="/volleyball">
              <Card
                title={t("sports.volleyball")}
                svgIcon={<VolleyballIcon />}
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Card
              title={t("sports.badminton")}
              svgIcon={<BadmintonIcon />}
              onClick={handleComingSoon}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              title={t("sports.basketball")}
              svgIcon={<BasketballIcon />}
              onClick={handleComingSoon}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              title={t("sports.football")}
              svgIcon={<FootballIcon />}
              onClick={handleComingSoon}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              title={t("sports.tennis")}
              svgIcon={<TennisIcon />}
              onClick={handleComingSoon}
            />
          </SwiperSlide>
        </Swiper>
        <div className="custom-prev absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-zinc-900 text-white rounded-full cursor-pointer z-10">
          <FaArrowLeft className="h-6 w-6" />
        </div>
        <div className="custom-next absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-zinc-900 text-white rounded-full cursor-pointer z-10">
          <FaArrowRight className="h-6 w-6" />
        </div>
      </div>
    </div>
  );
}

export default CardSlider;
