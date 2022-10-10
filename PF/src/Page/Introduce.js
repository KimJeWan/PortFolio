import React from "react";
import '../Style/common.css'
import '../Style/Introduce.css'
import { Link } from "react-router-dom";
import Header_introduce from "../Component/Header_introduce";
import { motion } from "framer-motion";
import Introduce_chip from "../Component/Introduce_chip";
import Education from "../Component/Education";
import Skill from "../Component/Skill"

const Introduce = ( {Props} ) => {

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
                        <Education />
                        <div className="Introduce_body">
                            <Introduce_chip />
                        </div>

                        <div className="Introduce_footer">
                            <Skill />
                        </div>
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

export default Introduce;