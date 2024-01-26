import React from "react";

function Skillcomp(props) {
  return (
    <div className="col-lg-2 col-md-4  col-sm-6 compdiv ">
      <img className="skillimg mx-auto" src={props.imgsrc} alt="" />
      <h5 className="text-center skillheading">{props.name}</h5>
    </div>
  );
}
export default Skillcomp;
