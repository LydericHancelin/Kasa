import "../assets/css/header.css";

import { Link, useLocation } from "react-router-dom";

import React from "react";

function Header() {
  const currentLocation = useLocation();
  return (
    <header>
      <img src="/logo.svg" width="210" height="68" loading="lazy" />
      <nav>
        <ul>
          <li>
            <Link
              to="/"
              className={currentLocation.pathname === "/" ? "active" : ""}
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link
              to={`apropos`}
              className={
                currentLocation.pathname === "/apropos" ? "active" : ""
              }
            >
              A propos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
