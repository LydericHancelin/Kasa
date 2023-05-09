import { Banner } from "../components/Banner";
import { Dropdown } from "../components/Dropdown";
import React from "react";
export default function APropos() {
  const imgSource = "img-apropos.png";
  const text = "";
  const title1 = "Fiabilité";
  const text1 =
    "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.";
  const title2 = "Respect";
  const text2 =
    "Les La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.";
  const title3 = "Service";
  const text3 =
    "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.";
  const title4 = "Sécurité";
  const text4 =
    "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.";
  return (
    <section id="apropos">
      <Banner text={text} imgSource={imgSource} />
      <Dropdown title={title1} text={text1} />
      <Dropdown title={title2} text={text2} />
      <Dropdown title={title3} text={text3} />
      <Dropdown title={title4} text={text4} />
    </section>
  );
}
