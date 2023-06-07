import React from "react";

const Footer = () => (
  <div className="container">
    <h3>&copy; Brian Brown</h3>
    <p>2022-{new Date().getFullYear()}</p>
    <p>Todos los derechos reservados</p>
  </div>
);

export default Footer;
