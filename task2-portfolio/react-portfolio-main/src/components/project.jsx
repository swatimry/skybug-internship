import React from "react";
import projects from "../projects";
import { PiProjectorScreenChartFill } from "react-icons/pi";
function mapprojects(project) {
  return (
    <article key={project.id} className="project-entity" data-aos="fade-right">
      <div className="project-imgdiv">
        <img src={project.img} alt="project img" className="projectimg" />
      </div>
      <div className="heading-link-div">
        <h4>{project.name}</h4>
        <p className="desc-para">{project.desc}</p>
        <a href={project.github} className=" mybtn" target="_blank">
          Github
        </a>
        <a href={project.live} className=" mybtn" target="_blank">
         live
        </a>
      </div>
    </article>
  );
}
function Project() {
  return (
    <section className="Project-section">
      <h2 className="text-center" >
        My Projects <PiProjectorScreenChartFill />
      </h2>
      <div className="container ">
        {projects.map(mapprojects)}
      </div>
    </section>
  );
}
export default Project;
