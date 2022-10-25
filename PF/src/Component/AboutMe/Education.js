import React from "react";
import { Link } from "react-router-dom";

const Education = () => {
  return (
    <>
      <div className="AboutMe_header">
        <h2>Education</h2>
        <br />
        <ul className="education_ul">
          <li>2015.02 대구 상인고등학교 졸업</li>
          <br />
          <li>2015.03 대구대학교 컴퓨터소프트웨어 공학과 입학</li>
          <br />
          <li>2021.11 정보처리기사 자격증 취득</li>
          <br />
          <li>2022.03 대구대학교 컴퓨터소프트웨어 공학과 졸업</li>
        </ul>
        <br />
        <hr />

        <h2>Experience</h2>
        <br />
        <ul className="experience_ul">
          <li>
            <Link to="/education_dable">>> 2022.03 ~ 2022.08 디에이블</Link>
          </li>
          <br />
          <li></li>
        </ul>
      </div>
    </>
  );
};

export default Education;
