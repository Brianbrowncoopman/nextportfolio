import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaVercel } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container text-center">
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
            <li className="nav-item">
              <Link
                href="https://wa.me/+56951397667"
                passHref
                className="nav-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="https://www.linkedin.com/in/brianbrowncoopman/"
                passHref
                className="nav-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="https://github.com/Brianbrowncoopman"
                passHref
                className="nav-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </Link>
            </li>
            <li className="nav-item ">
              <Link
                href="mailto:brianbrowncoopman@gmail.com"
                passHref
                className="nav-link"
              >
                <FaEnvelope />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Contact;
