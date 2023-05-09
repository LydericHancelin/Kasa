import "../assets/css/card.css";

import React from "react";

const Card = ({ titre, cover }) => {
  return (
    <div className="card">
      <h2>{titre}</h2>
      <img src={cover} />
    </div>
  );
};

export default Card;
