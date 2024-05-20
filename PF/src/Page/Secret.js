import React from "react";
import "../Style/common.css";
import "../Style/Secret.css";
import Header_introduce from "../Component/Common/Header_introduce";
import { motion } from "framer-motion";
import SideMenu from "../Component/Common/SideMenu";

const Secret = ({ Props }) => {
  const qwer = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(test);
    }
  };

  const test = (e) => {
    const lat = e.coords.latitude;
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
            <h1>비밀의 공간</h1>
            <h2>이스터에그를 만들어 보자</h2>
            {/* 누르면 현재 위치 좌표뜸 ( 위도 경도 ) */}
            {/* <button onClick={() => qwer()} className="wwwwww none">
              위치 
            </button>  */}
          </div>
        </div>
        <div className="sideMenu">
          <SideMenu />
        </div>
      </div>
    </motion.div>
  );
};

export default Secret;
