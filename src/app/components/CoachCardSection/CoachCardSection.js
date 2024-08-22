import React from "react";
import Image from "next/image";
import styles from "./styles.module.scss";

const CoachCardSection = ({ coaches }) => {
  return (
    <div className="flex flex-wrap justify-center gap-5 p-5">
      {coaches.map((coach, index) => (
        <div
          key={index}
          className={`relative flex items-center text-white overflow-hidden w-full max-w-4xl my-5 ${
            index % 2 === 0 ? "flex-row-reverse" : "flex-row"
          }`}
        >
          <div className="relative w-1/3">
            <Image
              src={coach.image}
              alt={`${coach.name} photo`}
              width={500}
              height={500}
              className="w-full h-auto object-cover shadow-2xl"
            />
            <div className={styles.gradientOverlay}></div>
          </div>
          <div className="w-2/3 flex flex-col mr-16 items-center md:text-left">
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl">{coach.name}</h3>
              <p className="text-lg font-light">{coach.title}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CoachCardSection;
