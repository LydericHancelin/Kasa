import "../assets/css/location.css";

import { Navigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

import Carrousel from "../components/Carrousel";
import { Dropdown } from "../components/Dropdown";
import Rating from "../components/Rating";
import Tag from "../components/Tag";

function Location() {
  const [logements, setLogements] = useState("");
  const { id } = useParams();
  useEffect(() => {
    fetch("../logements.json")
      .then((response) => response.json())
      .then((data) => {
        const location = data.find((logement) => logement.id === id);
        setLogements(location);
      })
      .catch(() => console.log("error"));
  }, []);
  if (logements === undefined) {
    return <Navigate to="/*" />;
  }
  return (
    <div className="location">
      {logements && <Carrousel pictures={logements.pictures} />}
      <div className="informations">
        <div className="details">
          <div className="location-desc">
            {logements && <h2>{logements.title}</h2>}
            {logements && <p>{logements.location}</p>}
          </div>
          {logements && <Tag tags={logements.tags} />}
        </div>
        <div className="rating-div">
          <div className="host">
            {logements && <p>{logements.host.name}</p>}
            {logements && (
              <img className="profil" src={logements.host.picture} />
            )}
          </div>
          {logements && <Rating rating={logements.rating} />}
        </div>
      </div>

      <div className="dropdowns">
        {logements && (
          <Dropdown title="Description" text={logements.description} />
        )}
        {logements && (
          <Dropdown title="Equipements" list={logements.equipments} />
        )}
      </div>
    </div>
  );
}

export default Location;
