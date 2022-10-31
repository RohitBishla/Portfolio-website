import React from "react";
import "./header.css";
import ME from "../../assets/me.png";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Rohit Bishla</h1>
        <h5 className="text-light">Student</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="Rohit Photo" />
        </div>
        <a href="#footer" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
