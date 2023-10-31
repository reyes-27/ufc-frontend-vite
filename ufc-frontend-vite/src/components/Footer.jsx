import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faGithub, faXTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
      <>
        <footer className="bg-dark text-center text-white">
    {/* Grid container */}
    <div className="container p-4 pb-0">
      {/* Section: Social media */}
      <section className="mb-4">
        {/* Facebook */}
        <a
          className="btn btn-outline-light btn-floating m-1"
          href="#!"
          role="button"
        >
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        {/* Twitter */}
        <a
          className="btn btn-outline-light btn-floating m-1"
          href="#!"
          role="button"
        >
          <FontAwesomeIcon icon={faXTwitter} />
        </a>
        {/* Google */}
        {/* <a
          className="btn btn-outline-light btn-floating m-1"
          href="#!"
          role="button"
        >
          <i className="fab fa-google" />
        </a> */}
        {/* Instagram */}
        <a
          className="btn btn-outline-light btn-floating m-1"
          href="#!"
          role="button"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        {/* Linkedin */}
        <a
          className="btn btn-outline-light btn-floating m-1"
          href="#!"
          role="button"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        {/* Github */}
        <a
          className="btn btn-outline-light btn-floating m-1"
          href="#!"
          role="button"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </section>
      {/* Section: Social media */}
    </div>
    {/* Grid container */}
    {/* Copyright */}
    <div
      className="text-center p-3"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
    >
      My portfolio:
      <a className="text-white" href="https://daniel-reyes.onrender.com">
      </a>
    </div>
    {/* Copyright */}
  </footer>
</>

    );
  };

export default Footer;