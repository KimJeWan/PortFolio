import React, { useState } from "react";
import "../Style/common.css";
import "../Style/AboutMe.css";
import Header_introduce from "../Component/Common/Header_introduce";
import { motion } from "framer-motion";
import Introduce_chip from "../Component/AboutMe/Introduce_chip";
import Education from "../Component/AboutMe/Education";
import Skill from "../Component/AboutMe/Skill";
import AboutMe_Intro from "../Component/AboutMe/AboutMe_Intro";
import SideMenu from "../Component/Common/SideMenu";

const AboutMe = ({ Props }) => {
  const [scroll, setScroll] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container">
        <div className="content">
          <Header_introduce Props={Props} />
          <div
            className={scroll == true ? "AboutMe_main_onEnter" : "AboutMe_main"}
            onMouseEnter={() => setScroll(true)}
            onMouseLeave={() => setScroll(false)}
          >
            <div className="AboutMe_Introduce">
              <AboutMe_Intro />
            </div>
            <div className="aboutMe_information">
              <Education />
              <Skill />
              <Introduce_chip />
            </div>
          </div>
        </div>
        <div className="sideMenu">
          <SideMenu />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutMe;
