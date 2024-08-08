import React, { useRef, useState, useEffect } from "react";
import "../../styles/fonts.css";

const IrregularTitle = ({ title }) => {
  const words = title.split(" ");
  const firstRowRef = useRef(null);
  const [firstRowWidth, setFirstRowWidth] = useState(0);

  useEffect(() => {
    if (firstRowRef.current) {
      setFirstRowWidth(firstRowRef.current.offsetWidth);
    }
  }, []);

  const groupedWords = [];
  for (let i = 0; i < words.length; i += 2) {
    if (i + 1 < words.length) {
      groupedWords.push([words[i], words[i + 1]]);
    } else {
      groupedWords.push([words[i]]);
    }
  }

  const getMarginLeft = (index) => {
    if (index === 1) {
      return firstRowWidth / 1;
    } else if (index === 2) {
      return firstRowWidth / 2;
    }
    return 0;
  };

  return (
    <div className="custom-font text-[32px] sm:text-5xl font-medium lg:text-7xl xl:text-[98px] lg:font-semibold">
      {groupedWords.map((group, index) => (
        <div
          key={index}
          ref={index === 0 ? firstRowRef : null}
          style={{ marginLeft: getMarginLeft(index) }}
        >
          {group.join(" ")}
        </div>
      ))}
    </div>
  );
};

export default IrregularTitle;
