import React from "react";
import { FaPhone, FaSquareInstagram } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";

function Contact() {
  return (
    <div className="text-center align-items-center contactdiv container">
      <h3>
        Let's Connect <BsPeopleFill />{" "}
      </h3>
      <div className="row socialpack">
        <div className="col-3 socialdiv">
          <a
            href="https://www.linkedin.com/in/swati-457b35229/"
            className="icon-contact"
            target="_blank"
          >
            <FaLinkedin />
          </a>
          <h5>LinkedIn</h5>
        </div>
        <div className="col-3  socialdiv">
          <a href="https://www.instagram.com/behove_is_quirk/" target="_blank">
            <FaSquareInstagram />
          </a>
          <h5>Instagram</h5>
        </div>
        <div className="col-3  socialdiv">
          <a href="swati2003mry@gmail.com" target="_blank">
            <FaEnvelope />
          </a>

          <h5>Mail</h5>
        </div>
        <div className="col-3 socialdiv">
          <a href="https://github.com/swatimry" target="_blank">
            <FaSquareGithub />
          </a>
          <h5>Github</h5>
        </div>
      </div>
    </div>
  );
}
export default Contact;
