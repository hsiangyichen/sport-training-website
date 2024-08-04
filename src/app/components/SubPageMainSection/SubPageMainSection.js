// SubPageMainSection.js
import React from "react";
import Image from "next/image";

const SubPageMainSection = ({ title, image1, image2 }) => {
  return (
    <div className="custom-font sub-page-main-section relative w-full h-[80vh] flex items-center">
      <div className="absolute inset-0 z-20 flex items-center">
        <h1 className="text-white text-4xl w-[550px] relative left-72 md:text-7xl font-semibold md:leading-[100px]">
          {title}
        </h1>
      </div>
      <div className="bg-gradient z-10 w-full h-full absolute left-0"></div>
      <div className="flex w-full h-full">
        <div className="w-1/3 h-full relative">
          {image1 && (
            <Image
              src={image1}
              alt="Image 1"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          )}
        </div>
        <div className="w-2/3 h-full relative">
          {image2 && (
            <Image
              src={image2}
              alt="Image 2"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SubPageMainSection;
