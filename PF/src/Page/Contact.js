import React from "react";
import "../Style/common.css";
import "../Style/Contact.css";
import Header_introduce from "../Component/Common/Header_introduce";
import { motion } from "framer-motion";
import SideMenu from "../Component/Common/SideMenu";

const Contact = ({ Props }) => {
  const qwer = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(test);
    }
  };

  const test = (e) => {
    const lat = e.coords.latiWtude;
    const lng = e.coords.longitude;

    console.log(`위도 = ${lat}, 경도= ${lng}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container">
        <div className="content">
          <Header_introduce Props={Props} />
          <div className="contact_main">
            <h1>비밀의 공간 ?</h1>
            <button onClick={() => qwer()} className="시발">
              위치
            </button>
            <div draggable={true} className="아니"></div>
            <div draggable={false} className="아니"></div>
          </div>
        </div>
        <div className="sideMenu">
          <SideMenu />
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
