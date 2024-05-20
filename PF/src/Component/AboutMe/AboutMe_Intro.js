import React, { useEffect, useState } from "react";

const AboutMe_Intro = () => {
  const today = new Date();
  const myBirthday = new Date(1997, 2, 17);
  const [age, setAge] = useState(
    today.getFullYear() - myBirthday.getFullYear() - 1
  );

  useEffect(() => {
    if (today.getMonth() - myBirthday.getMonth() > 0) {
      setAge(age + 1);
    } else if (
      today.getMonth() - myBirthday.getMonth() == 0 &&
      today.getDate() - myBirthday.getDate() >= 0
    )
      setAge(age + 1);
  }, []);

  return (
    <>
      <div className="AboutMe_area">
        <h2>Greetings</h2>
        <p className="aaaa">
          반갑습니다, 항상 발전하기위해 노력하는 김제완 입니다.
          <br />
          저는 현재 QA로써 테스터 업무를 진행 중입니다
          <br />
          이 사이트는 저를 소개함과 동시에 저의 개발 성장 과정을 기록하기 위한
          공간 입니다.
          <br />
          혹시 문의하실 사항이 있으시다면 언제든 상관없이 연락주셔도 좋습니다.
          😊
        </p>
      </div>
      <div className="AboutMe_area">
        <h2>introduce</h2>
        <ul>
          <li>이름 : 김 제 완 ( 金 帝 完 / KimJeWan)</li>
          <br />
          <li>생년월일 : 1997년 2월 17일 (만 {age} 세 )</li>
          <br />
          <li>거주지 : 대구 남구 대명동</li>
          <br />
          <li>이메일 : wpdhksdl04@naver.com</li>
          <br />
          <li>핸드폰 : +82 10 2488 2170</li>
        </ul>
      </div>
    </>
  );
};

export default AboutMe_Intro;
