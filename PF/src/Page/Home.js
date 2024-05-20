import "../Style/common.css";
import "../Style/Home.css";
import Header_introduce from "../Component/Common/Header_introduce";
import { motion } from "framer-motion";
import SideMenu from "../Component/Common/SideMenu";

const Home = ({ Props }) => {
  // 550 ~ 1550 px
  const makeSnowflake = () => {
    let arr = [];
    for (let i = 0; i < 500; i++) {
      arr.push(
        <div
          className="test1234"
          style={{
            left: `${randomNum(550, 1550)}px`,
            animationDelay: `${delay()}s`,
          }}
        ></div>
      );
    }
    return arr;
  };

  const randomNum = (min, max) => {
    const ranNum = Math.floor(Math.random() * (max - min + 1)) + min + 1;
    return ranNum;
  };

  const delay = () => {
    const delay = Math.random() * 10;
    return delay;
  };

  console.log(delay);
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
              {makeSnowflake()}
              <h1 className="center ">KimJeWan`s Portfolio</h1>
              <h3 className="center ">
                김제완의 포트폴리오에 오신것을 환영합니다 !
              </h3>
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

export default Home;
