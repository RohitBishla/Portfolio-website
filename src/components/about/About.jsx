import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { MdTaskAlt } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { IoSchoolSharp } from "react-icons/io5";
import { VscFolderLibrary } from "react-icons/vsc";

const about = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image"></img>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <IoSchoolSharp className="about__icon" />
              <h5>3rd Year</h5>
              <small>PEC Chandigarh</small>
            </article>
            <article className="about__card">
              <MdTaskAlt className="about__icon" />
              <h5>DSA</h5>
              <small>500+ Question</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Projects</small>
            </article>
          </div>
          <p>
            Hello, I am Rohit Bishla from Karnal Haryana. Currently I am in 3rd
            Year of Electrical Engineering from Punjab Engineering College
            (deemed to be university) Chandigarh.
          </p>
          <a href="#contact" className="btn btn-primary">
            {" "}
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default about;
