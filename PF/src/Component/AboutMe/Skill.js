import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

const Skill = () => {
  return (
    <>
      <div className="AboutMe_footer">
        <h2>Skill</h2>
        <h4>HTML</h4>
        <ProgressBar completed={65} />
        <h4>JAVASCRIPT</h4>
        <ProgressBar completed={50} />
        <h4>TYPESCRIPT</h4>
        <ProgressBar completed={35} />
        <h4>CSS</h4>
        <ProgressBar completed={60} />
        <h4>REACT</h4>
        <ProgressBar completed={45} />
        <h4>C/C++</h4>
        <ProgressBar completed={25} />
        <h4>JAVA</h4>
        <ProgressBar completed={25} />
        <h4>PYTHON</h4>
        <ProgressBar completed={20} />
      </div>
    </>
  );
};

export default Skill;
