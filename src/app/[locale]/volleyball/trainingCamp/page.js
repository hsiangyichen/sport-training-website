import React from "react";
import { useTranslations } from "next-intl";
import Overview from "@components/Overview";
import Contact from "@components/Contact";
import SubPageMainSection from "@components/SubPageMainSection";
import CourseDetailSection from "@components/CourseDetailSection";
import CardSlider from "@components/CardSlider";

const TrainingCamp = () => {
  const t = useTranslations("Volleyball.trainingCamp");
  const title = t("title");
  const overview = t("overview");
  const points = t.raw("points");
  const images = [
    { src: "/images/TrainingCamp1.jpg", alt: "TrainingCamp1" },
    { src: "/images/TrainingCamp2.jpg", alt: "TrainingCamp2" },
    { src: "/images/TrainingCamp3.jpg", alt: "TrainingCamp3" },
  ];
  const courseTitle = t("courseSection.title");
  const courses = t.raw("courseSection.courses");
  const courseImages = [
    {
      src: "/images/TrainingCampSection1.jpg",
      alt: "TrainingCamp",
    },
    {
      src: "/images/TrainingCampSection2.jpg",
      alt: "TrainingCamp",
    },
  ];
  const extraInfo = t("courseSection.extraInfo", { default: "" });

  return (
    <div className="flex flex-col justify-between items-center w-full">
      <SubPageMainSection
        title={t("title")}
        image1="/images/Volleyball.jpg"
        image2="/images/TrainingCamp.jpg"
      />
      <div className="max-w-[1500px]">
        {" "}
        <Overview
          title={title}
          overview={overview}
          points={points}
          images={images}
        />
        <CourseDetailSection
          title={courseTitle}
          courses={courses}
          image={courseImages}
          extraInfo={extraInfo}
        />
      </div>

      <CardSlider />
      <Contact />
    </div>
  );
};

export default TrainingCamp;
