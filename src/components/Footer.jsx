import "../assets/css/footer.css";

import { Link, useLocation } from "react-router-dom";

import React from "react";

function Footer() {
  return (
    <footer>
      <img src="/LOGO2.svg" width="122" height="39.5" loading="lazy" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
