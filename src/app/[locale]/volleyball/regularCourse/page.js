import React from "react";
import { useTranslations } from "next-intl";
import Overview from "@components/Overview";
import Contact from "@components/Contact";
import SubPageMainSection from "@components/SubPageMainSection";
import CourseDetailSection from "@components/CourseDetailSection";
import CardSlider from "@components/CardSlider";

const RegularCourse = () => {
  const t = useTranslations("Volleyball.regularCourse");

  const title = t("title");
  const overview = t("overview");
  const points = t.raw("points");
  const images = [
    { src: "/images/RegularCourse1.jpg", alt: "RegularCourse1" },
    { src: "/images/RegularCourse2.jpg", alt: "RegularCourse2" },
  ];
  const courseTitle = t("courseSection.title");
  const courses = t.raw("courseSection.courses");

  return (
    <div>
      <SubPageMainSection
        title={t("title")}
        image1="/images/Volleyball.jpg"
        image2="/images/RegularCourse.jpg"
      />
      <Overview
        title={title}
        overview={overview}
        points={points}
        images={images}
      />
      <CourseDetailSection title={courseTitle} courses={courses} />
      <CardSlider />
      <Contact />
    </div>
  );
};

export default RegularCourse;
