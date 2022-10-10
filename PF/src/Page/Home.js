import React, { useEffect, useState } from "react";
import '../Style/common.css'
import '../Style/Home.css'
import { Link } from "react-router-dom";
import Header_introduce from "../Component/Header_introduce";
import { motion } from "framer-motion";

const Home = ( {Props} ) => {

   
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
        >
            <div className="container">
                <div className="content">
                    <Header_introduce Props={Props}/>
                    <div className="Home_main">
                        <div className="first">
                            <h1 className="center f700">KimJeWan`s Portfolio</h1>
                            <h3 className="center">하루하루 발전하는 개발자 김제완입니다</h3>
                        </div>
                        <div className="second">2</div>
                        <div className="third">3</div>
                    </div>
                </div>
                <div className="sideMenu">
                    <ul>
                        <li><Link to='/'>Home</Link></li><br/>
                        <li><Link to='/Introduce'>Introduce</Link></li><br/>
                        <li><Link to='/Contact'>Contact</Link></li><br/>
                        <li>4</li><br/>
                        <li>5</li><br/>
                    </ul>
                </div>
               
            </div>
        </motion.div>
    )
}

export default Home;