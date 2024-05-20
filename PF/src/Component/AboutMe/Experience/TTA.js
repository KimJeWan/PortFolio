import React, { useState } from "react";

const TTA = () => {
  const [test, setTest] = useState(1);
  const [scroll, setScroll] = useState(false);

  const testfn = (n) => {
    console.log(test);
    if (n === "add") {
      if (test === 9) {
        setTest(1);
      } else {
        setTest(test + 1);
      }
    } else {
      if (test === 1) {
        setTest(9);
      } else {
        setTest(test - 1);
      }
    }
  };

  const test2 = () => {
    <div>test</div>;
  };

  return (
    <div
      className={scroll === true ? "AboutMe_main_onEnter" : "AboutMe_main"}
      onMouseEnter={() => setScroll(true)}
      onMouseLeave={() => setScroll(false)}
    >
      <div className="education_header">
        <div className={test < 6 ? "" : "none"}>
          <h2>GS 인증 시험</h2>
        </div>
        <div className={test >= 6 ? "" : "none"}>
          <h2>실선박 육해상 실증테스트(INS)</h2>
        </div>
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
          <img src={`img/TTA/TTA${test}.png`} className="education_img" />
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
        <div className="education_TTA">
          <h2>사진 설명{test}</h2>
          <br></br>
          <div className={test == 1 ? "" : "none"}>
            IEC 25051, 25023을 기반으로 SW를 테스트 한 후 나온 결함들을 정리한
            문서
          </div>
          <div className={test == 2 ? "" : "none"}>
            테스트 케이스 작성과 SW 이해도 향상을 위한 메뉴얼 기반의 기능리스트
          </div>
          <div className={test == 3 ? "" : "none"}>현재까지 진행한 GS 개수</div>
          <div className={test == 4 ? "" : "none"}>
            절차서를 바탕으로 V&V 시험 진행 후 해당 시나리오의 시험 결과를
            작성한 문서
          </div>
          <div className={test == 5 ? "" : "none"}>
            현재까지 진행한 V&V 개수
          </div>
          <div className={test == 6 ? "" : "none"}>
            기자재의 특정 기능을 실증하기 위한 절차서
          </div>
          <div className={test == 7 ? "" : "none"}>
            표준을 기준으로 실증할 기능 구분 및 SW 이해도 향상을 위한 메뉴얼
            기반의 기능리스트
          </div>
          <div className={test == 8 ? "" : "none"}>
            한 항차(배의 이동 경로포인트) 마다 실증할 포인트를 정리한 시나리오
          </div>
          <div className={test == 9 ? "" : "none"}>
            절차서를 바탕으로 실제 실증 결과를 기입
          </div>
          {/* <div className={test < 5 ? "" : "none"}>
            해당 앱은 react-ionic을 중심으로 만들어진 앱 입니다.
            <br />
            이 앱은 난임관리를 메인기능으로 두고 있습니다.
            <br />
            저는 이 앱에서 프론트엔드 제작 및 백엔드와의 연결을 담당하였습니다.
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default TTA;
