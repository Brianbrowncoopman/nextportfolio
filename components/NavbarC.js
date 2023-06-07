import React from "react";
import Link from "next/link";

const NavbarC = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container text-center">
      <div className="mx-auto">
        <Link href="/" className="text-decoration-none">
          <div className="navbar-brand">PORTFOLIO</div>
        </Link>
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse " id="navbarNav">
        <ul className="navbar-nav">
          {/*<li className="nav-item">
            <Link href="/About" className="text-decoration-none">
              <div className="nav-link">Acerca de mi</div>
            </Link>
          </li>*/}
          <li className="nav-item">
            <Link href="/Github" className="text-decoration-none">
              <div className="nav-link">Github</div>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/Conocimientos " className="text-decoration-none">
              <div className="nav-link">Conocimientos</div>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/Juegos" className="text-decoration-none">
              <div className="nav-link">Juegos</div>
            </Link>
          </li>

          {/*<li className="nav-item ">
            <Link href="/Experiencia " className="text-decoration-none">
              <div className="nav-link ">Experiencia</div>
            </Link>
          </li>*/}
          <li className="nav-item">
            <Link href="/Proyectos" className="text-decoration-none">
              <div className="nav-link">Proyectos</div>
            </Link>
          </li>
          <li className="nav-item ">
            <Link href="/Contactame " className="text-decoration-none">
              <div className="nav-link ">Contactame</div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default NavbarC;
