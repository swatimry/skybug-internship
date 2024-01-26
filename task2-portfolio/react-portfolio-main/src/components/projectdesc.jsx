import projects from "../projects";
import { PiProjectorScreenChartFill } from "react-icons/pi";
const projectdesc=(project)=>{
    return(
       <article >
       
            <div ><img src={project.img}  alt="project img" className="projectimgdet"/></div>
            <div>
                <h3>{project.name}</h3>
                <p>{project.desc}</p>
                <a href={project.github} className=" mybtn2" target="_blank">Github</a>
                <a href={project.live} className=" mybtn2" target="_blank">Live Demo</a>
            </div>
        
       </article>
    )
}

function Projectdet() {
    return (
      <section  className="descsection">
        <h2 className="text-center projectheading" >
          My Projects <PiProjectorScreenChartFill />
        </h2>
        <div className= "">
          {projects.map(projectdesc)}
        </div>
      </section>
    );
  }

export default Projectdet;  