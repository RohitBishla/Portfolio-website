import React from "react";
import "./footer.css";
import { GrInstagram } from "react-icons/gr";
import { SiTwitter } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <section id="footer">
      <footer>
        <a href="#" className="footer__logo">
          Rohit Bishla
        </a>

        <ul className="parmalinks">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <div className="footer__socials">
          <a href="https://www.linkedin.com/in/rohitbishla/" target="_Linkedin">
            <BsLinkedin />
          </a>
          <a href="https://www.instagram.com/rohit_bishla/" target="_Instagram">
            <GrInstagram />
          </a>
          <a href="https://twitter.com/rohit_bishla/" target="_Twitter">
            <SiTwitter />
          </a>
        </div>

        <div className="footer__copyright">
          <small>&copy; Rohit Bishla. All rights reserved.</small>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
