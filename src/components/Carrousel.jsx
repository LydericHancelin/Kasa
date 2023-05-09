import "../assets/css/carrousel.css";

import React, { useState } from "react";

const Carrousel = ({ pictures }) => {
  const [index, setIndex] = useState(0);
  const length = pictures.length;

  const handlePrevious = () => {
    const newIndex = index - 1;
    setIndex(newIndex < 0 ? length - 1 : newIndex);
  };

  const handleNext = () => {
    const newIndex = index + 1;
    setIndex(newIndex >= length ? 0 : newIndex);
  };

  return (
    <div className="carrousel">
      <button
        className={length > 1 ? "previous" : "hide-arrow"}
        onClick={handlePrevious}
      >
        <img src="/bigarrow.svg" className="arrow-previous" />
      </button>
      <button
        className={length > 1 ? "next" : "hide-arrow"}
        onClick={handleNext}
      >
        <img src="/bigarrow.svg" className="arrow-next" />
      </button>
      <img src={pictures[index]} />
      <p className="pictures-number">
        {index + 1}/{length}
      </p>
    </div>
  );
};

export default Carrousel;
