import React from "react";
import '../Style/common.css'
import '../Style/Introduce.css'
import { Link } from "react-router-dom";
import Header_introduce from "../Component/Header_introduce";
import { motion } from "framer-motion";

const Experience_dable = ( {Props} ) => {
    
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
        >
            <div className="container">
                <div className="content">
                    <Header_introduce Props={Props} />
                    <div className="Introduce_main">
                        디에이블에서 내가 분담한 부분 서술
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

export default Experience_dable;