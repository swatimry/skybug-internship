import React from "react";
import Skillcomp from "./skillcomp";
import skillset from "../skillset";
import { VscTools } from "react-icons/vsc";
function Skills() {
  function createskill(skill) {
    console.log({ skill });
    return <Skillcomp name={skill.name} imgsrc={skill.src} />;
  }
  return (
    <div className="skilldiv">
      <h2 className="text-center heading">
        Technical skills <VscTools />
      </h2>
      <div className="container" data-aos="fade-right">
        <div className="row innerdiv-of-skill">{skillset.map(createskill)}</div>
      </div>
    </div>
  );
}
export default Skills;
