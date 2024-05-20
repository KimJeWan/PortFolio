import "../Style/common.css";
import "../Style/Home.css";
import Header_introduce from "../Component/Common/Header_introduce";
import { motion } from "framer-motion";
import SideMenu from "../Component/Common/SideMenu";

const Test = ({ Props }) => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container">
          <div className="content">
            <Header_introduce Props={Props} />
            <div className="Home_main">
              <h3 className="center timetest2">이것 저것 테스트</h3>
            </div>
          </div>
          <div className="sideMenu">
            <SideMenu />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Test;
