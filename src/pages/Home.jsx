import "../assets/css/home.css";

import { Banner } from "../components/Banner";
import Galerie from "../components/Galerie";
import React from "react";

function Home() {
  const imgSource = "IMG.jpg";
  const text = "Chez vous, partout et ailleurs";
  return (
    <section id="home">
      <Banner text={text} imgSource={imgSource} />
      <Galerie />
    </section>
  );
}

export default Home;
