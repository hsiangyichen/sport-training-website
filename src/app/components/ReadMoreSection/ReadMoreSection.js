import React from "react";
import styles from "./styles.module.scss";
import { FaArrowRightLong } from "react-icons/fa6";

const ReadMoreSection = ({ title, description, linkText, linkHref }) => {
  return (
    <div className={`flex flex-col w-full ${styles.sectionContainer}`}>
      <h2 className={`custom-font text-xl lg:text-2xl font-normal `}>
        {title}
      </h2>
      <p className={styles.description}>{description}</p>
      <a href={linkHref} className={`${styles.link} self-end `}>
        {linkText} <FaArrowRightLong className={`${styles.icon} ml-2`} />
      </a>
    </div>
  );
};

export default ReadMoreSection;
