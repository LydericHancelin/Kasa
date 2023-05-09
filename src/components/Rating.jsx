import "../assets/css/rating.css";

import React from "react";

const Rating = ({ rating }) => {
  let ratingTab = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      ratingTab[i] = <img src="/starFull.svg" />;
    } else {
      ratingTab[i] = <img src="/starEmpty.svg" />;
    }
  }
  return (
    <div className="rating">
      {ratingTab.map((rate, index) => (
        <span key={index} className="rate">
          {rate}
        </span>
      ))}
    </div>
  );
};

export default Rating;
