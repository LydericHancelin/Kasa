import "../assets/css/banner.css";

import React from "react";

export function Banner({ imgSource, text }) {
  return (
    <div className="banner">
      <img src={imgSource} alt="background image" />
      <h1>{text}</h1>
    </div>
  );
}
