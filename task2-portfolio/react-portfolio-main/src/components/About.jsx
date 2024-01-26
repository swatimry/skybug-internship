import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function About() {
 
  return (
    <div className="container about-section">
      <div className="aboutclass row">
        <div className=" col-lg-8 col-md-12 col-sm-12">
          <h2 data-aos="fade-right"> Hello There 🙋‍♀️I am Swati</h2>
          <div data-aos="fade-right">
            <p>
              A third year student pursuing B.E. Information & Technology at
              DYPCOE,Akurdi. I am currently exploring and learning technologies
              in fullstack development and practicing DSA along the way.I'm
              looking for working opportunities in web domain. I am willing to
              learn new technologies. Apart from coding,I have interest in music
              and travelling. Thanks for sparing your time knowing me, you can
              have a look upon my works in following sections
            </p>
          </div>

          <a className="  mybtn" data-aos="fade-right" href="https://drive.google.com/file/d/13yel2Iu6h-KLDXO2wQ0K0aG9KfVxIedR/view?usp=sharing">
            Download CV
          </a>
          <a className="  mybtn" data-aos="fade-right" href="https://www.linkedin.com/in/swati-457b35229/">
            Contact Me
          </a>
        </div>
        <div className="  col-lg-4 col-md-12 col-sm-12 d-flex align-items-center img-bg-div">
          <img src="./images/profilepic.png" className="mypic mx-auto "></img>
        </div>
      </div>
    </div>
  );
}
export default About;
