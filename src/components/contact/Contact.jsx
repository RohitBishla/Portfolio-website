import "./contact.css";
import { TfiEmail } from "react-icons/tfi";
import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import React, { useRef, useState, useEffect } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const [showElement, setShowElement] = React.useState(false);
  useEffect(() => {
    setTimeout(function () {
      setShowElement(false);
    }, 10);
  }, []);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_5h53f7c",
      "template_7jn6f2t",
      form.current,
      "RoGDUmK8MYcEoZJSo"
    );
    {
      setShowElement(true);
    }
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <TfiEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>rohit.btele20@pec.edu.in</h5>
            <a href="mailto:rohit.btele20@pec.edu.in" target="_Mail">
              Send a Message
            </a>
          </article>
          <article className="contact__option">
            <BsInstagram className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>rohit_bishla</h5>
            <a href="https://ig.me/m/rohit_bishla" target="_Instagram">
              Send a Message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+91 9306007327</h5>
            <a
              href="https://api.whatsapp.com/send?phone=919306007327"
              target="_WhatsApp"
            >
              Send a Message
            </a>
          </article>
        </div>
        {/* END */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="sumbit" className="btn btn-primary">
            Send Message
          </button>
          <div>
            {showElement ? (
              <div
                style={{
                  height: "2.5rem",
                  background: "#23cf70",

                  color: "white",
                  // fontSize: "30px",
                  margin: "1rem",
                  borderRadius: "1.25rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "roboto",
                  opacity: showElement ? 1 : 0,
                }}
              >
                Message Sent!
              </div>
            ) : (
              <div></div>
            )}{" "}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
