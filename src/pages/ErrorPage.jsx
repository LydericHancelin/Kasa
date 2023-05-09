import "../assets/css/error-page.css";

import { Link } from "react-router-dom";
import React from "react";
export default function ErrorPage() {
  return (
    <div id="error-page">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/">Retourner à la pager d'accueil</Link>
    </div>
  );
}
