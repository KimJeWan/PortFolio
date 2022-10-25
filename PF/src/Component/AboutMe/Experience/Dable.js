import React, { useState } from "react";
import { Chip } from "@mui/material";

const Dable = () => {
  const [test, setTest] = useState(1);
  const [scroll, setScroll] = useState(false);

  const testfn = (n) => {
    console.log(test);
    if (n === "add") {
      if (test === 4) {
        setTest(1);
      } else {
        setTest(test + 1);
      }
    } else {
      if (test === 1) {
        setTest(4);
      } else {
        setTest(test - 1);
      }
    }
  };

  return (
    <div
      className={scroll === true ? "AboutMe_main_onEnter" : "AboutMe_main"}
      onMouseEnter={() => setScroll(true)}
      onMouseLeave={() => setScroll(false)}
    >
      <div className="education_header">
        <h2>Dplanit Project</h2>
      </div>
      <div className="education_body">
        <div className="education_body_left">
          <button
            onClick={() => testfn("minus")}
            className="education_LefttButton"
          >
            ◀
          </button>
        </div>
        <div className="education_body_center">
          <img src={`img/dable/dable${test}.png`} className="education_img" />
        </div>
        <div className="education_body_right">
          <button
            onClick={() => testfn("add")}
            className="education_RightButton"
          >
            ▶
          </button>
        </div>
      </div>
      <div className="education_footer">
        <div className="education_footer_left">
          <h2>프로젝트 요약</h2>
          <div className={test >= 4 ? "" : "none"}>
            해당 웹은 난임관리 서비스를 받고있는 고객분들의 정보를 관리자 및
            개발자가 관리할 목적으로 만들어졌습니다. 저는 이 웹에서 프론트엔드를
            담당하였습니다.
          </div>
          <div className={test < 4 ? "" : "none"}>
            해당 앱은 react-ionic을 중심으로 만들어진 앱 입니다.
            <br />
            이 앱은 난임관리를 메인기능으로 두고 있습니다.
            <br />
            저는 이 앱에서 프론트엔드 제작 및 백엔드와의 연결을 담당하였습니다.
          </div>
        </div>
        <div className="education_footer_right">
          <h2>사용된 기술</h2>
          <div className={test >= 4 ? "" : "none"}>
            <Chip label="JavaScript" color="primary"></Chip>&nbsp;&nbsp;
            <Chip label="JSX" color="primary"></Chip>&nbsp;&nbsp;
            <Chip label="JSP" color="primary"></Chip>&nbsp;&nbsp;
            <Chip label="CSS" color="primary"></Chip>&nbsp;&nbsp;
            <Chip label="mySQL" color="primary"></Chip>&nbsp;&nbsp;
            <Chip label="jquery" color="primary"></Chip>&nbsp;&nbsp;
            <Chip label="nodeJS" color="primary"></Chip>&nbsp;&nbsp;
            <br />
            <br />
          </div>
          <div className={test < 4 ? "" : "none"}>
            <Chip label="TypeScript" color="primary"></Chip>&nbsp;&nbsp;
            <Chip label="CSS" color="primary"></Chip>&nbsp;&nbsp;
            <Chip label="React" color="primary"></Chip>&nbsp;&nbsp;
            <Chip label="React-ionic" color="primary"></Chip>&nbsp;&nbsp;
            <Chip label="nodeJS" color="primary"></Chip>&nbsp;&nbsp;
            <Chip label="redux" color="primary"></Chip>&nbsp;&nbsp;
            <br />
            <br />
            <Chip label="react query" color="primary"></Chip>&nbsp;&nbsp;
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dable;
