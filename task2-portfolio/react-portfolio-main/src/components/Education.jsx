import React from "react";
import { FaGraduationCap } from "react-icons/fa";

function Education() {
  return (
    <section className="text-center align-items-center" id="education">
      <h3>
        Education <FaGraduationCap />
      </h3>
      <div className="edu-div align-items-center" data-aos="fade-left">
        <div>
          <h5>Secondary Education </h5>
          <p>
            12th - CBSE 90% Kendriya Vidyalya,Pune <br />
            10th - CBSE 95.2% Kendriya Vidyalya,Bareilly{" "}
          </p>
        </div>
        <div>
          <h5>B.E First year</h5>
          <p>SGPA - 9.91 (D.Y.Patil College of Engineering) </p>
        </div>
        <div>
          <h5>B.E Second year</h5>
          <p>SGPA - 9.23 (D.Y.Patil College of Engineering) </p>
        </div>
      </div>
    </section>
  );
}
export default Education;
