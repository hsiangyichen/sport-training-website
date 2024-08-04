import React from "react";
import Image from "next/image";

const MainPageMainSection = ({ title, image }) => {
  return (
    <div className="custom-font w-screen h-[80vh] flex items-center relative">
      <div className="absolute inset-0 z-20 flex items-center">
        <h1 className="text-white text-4xl relative left-72 md:text-7xl font-semibold">
          {title}
        </h1>
      </div>
      <div className="bg-gradient z-10 w-full h-full absolute left-0"></div>
      <div className="flex flex-col w-full h-full absolute left-0">
        <div className=" w-full h-full relative overflow-hidden">
          <Image
            src={image}
            alt="Main Image"
            className="absolute w-full"
            fill
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default MainPageMainSection;
