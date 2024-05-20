import React from "react";
import "../Style/common.css";
import Header_introduce from "../Component/Common/Header_introduce";
import { motion } from "framer-motion";
import SideMenu from "../Component/Common/SideMenu";
import Dable from "../Component/AboutMe/Experience/TTA";

const Experience_TTA = ({ Props }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container">
        <div className="content">
          <Header_introduce Props={Props} />
          <Dable />
        </div>
        <div className="sideMenu">
          <SideMenu />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience_TTA;
