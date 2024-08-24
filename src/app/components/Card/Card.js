import React, { useState } from "react";
import Image from "next/image";

const Card = ({ title, svgIcon, onClick }) => {
  const [showAlert, setShowAlert] = useState(false);

  const handleOnClick = () => {
    if (onClick) {
      onClick();
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 2000);
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center text-center py-12 md:py-24 md:h-[40vh] relative cursor-pointer"
      onClick={handleOnClick}
    >
      <div className="absolute inset-0 bg-cover bg-center -z-40"></div>
      <h3 className="text-white text-center custom-font text-2xl md:text-[42px] font-normal mb-4">
        {title}
      </h3>
      <div>{svgIcon}</div>
      {showAlert && (
        <div className="absolute w-28 md:w-36 bottom-5 md:bottom-16 text-white text-xs md:text-base">
          Coming soon!
        </div>
      )}
    </div>
  );
};

export default Card;
