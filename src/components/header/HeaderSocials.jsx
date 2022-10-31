import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://linkedin.com/in/rohitbishla"
        target="https://www.linkedin.com/in/rohitbishla/"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/rohitbishla"
        target="https://github.com/rohitbishla"
      >
        <BsGithub />
      </a>
      <a
        href="https://leetcode.com/rohit_bishla"
        target="https://leetcode.com/rohitbishla"
      >
        <SiLeetcode />
      </a>
    </div>
  );
};

export default HeaderSocials;
