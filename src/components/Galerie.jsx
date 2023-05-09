import "../assets/css/galerie.css";

import React, { useEffect, useState } from "react";

import Card from "./Card";
import { Link } from "react-router-dom";

const Galerie = () => {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    fetch("./logements.json")
      .then((response) => response.json())
      .then((data) => {
        setLogements(data);
      })
      .catch(() => console.log("error"));
  }, []);
  return (
    <div className="galerie">
      {logements.map((logement) => (
        <Link to={`location/${logement.id}`} key={`link-${logement.id}`}>
          <Card
            key={logement.id}
            titre={logement.title}
            cover={logement.cover}
            location={logement.location}
          />
        </Link>
      ))}
    </div>
  );
};

export default Galerie;
