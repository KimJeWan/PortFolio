import React, { useEffect, useState } from "react";
import { IoIosCloud, IoIosSunny, IoIosRainy } from "react-icons/io";
import { Quotes } from "../../Config/Quotes";

const Header_introduce = ({ Props }) => {
  const [cityKorean, setCityKorean] = useState("대구");
  const now = new Date();

  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const Sconds = String(now.getSeconds()).padStart(2, "0");
  const nowDay = now.getDate() - 1;

  const nowTime = `( ${hours} : ${minutes} : ${Sconds} )`;
  const changeCity = (city) => {
    Props.cityWeather.setCity(city);
  };

  useEffect(() => {
    if (Props.cityWeather.city === "seoul") setCityKorean("서울");
    else if (Props.cityWeather.city === "daejeon") setCityKorean("대전");
    else if (Props.cityWeather.city === "daegu") setCityKorean("대구");
    else if (Props.cityWeather.city === "busan") setCityKorean("부산");
    else if (Props.cityWeather.city === "jeju") setCityKorean("제주");
  }, [Props]);

  const weatherDivision = () => {
    if (Props.cityWeather.weather === "Clouds")
      return (
        <>
          <IoIosCloud /> ( 구름 )
        </>
      );
    else if (Props.cityWeather.weather === "Clear")
      return (
        <>
          <IoIosSunny /> ( 맑음 )
        </>
      );
    else if (Props.cityWeather.weather === "Rain")
      return (
        <>
          <IoIosRainy /> ( 비 )
        </>
      );
  };

  console.log(nowDay);

  const secret = () => {
    window.location.href = "http://localhost:3000/PortFolio/Secret";
  };

  return (
    <div className="introduce">
      <img
        src="./img/jewan2.jpg"
        className="Propile"
        onClick={() => {
          secret();
        }}
      />
      <h1 className="introduce_text">김제완</h1>
      <h3 className="introduce_text">FrontEnd Developer</h3>
      <img
        onClick={() => window.open("https://github.com/KimJeWan")}
        className="introduce_img pointer"
        src="./img/GH.png"
      ></img>
      <img
        onClick={() => window.open("https://blog.naver.com/wpdhksdl04")}
        className="introduce_img pointer"
        src="./img/naverBlog.png"
      ></img>
      <img
        onClick={() => window.open("https://www.instagram.com/jewangim/")}
        className="introduce_img pointer"
        src="./img/instar.png"
      ></img>
      <div>
        <p className="introduce_quotes">"{Quotes[nowDay].quote}"</p>
        <p className="introduce_quotes">-{Quotes[nowDay].author}-</p>
      </div>
      {/* <div>
        <br />
        <div className="weather_box">
          {Props.cityWeather.weather === "err" ? (
            "날씨정보 받아오지 못함"
          ) : (
            <>
              현재 <span className="time_text">{nowTime}</span>
              <br />
              <span className="city_text">{cityKorean}</span> 날씨 <br />
              <br />
              {weatherDivision()}
              <br />
              기온 : {Props.cityWeather.temperature} ℃<br />
              습도 : {Props.cityWeather.humidity} %<br />
              초속 : {Props.cityWeather.wind} m/s
              <br />
              <br />
              <span className="another_city_search_text">
                ↓↓↓↓다른도시 검색하기↓↓↓↓
              </span>
              <br />
              <button onClick={() => changeCity("seoul")}>서울</button>
              <button onClick={() => changeCity("daejeon")}>대전</button>
              <button onClick={() => changeCity("daegu")}>대구</button>
              <button onClick={() => changeCity("busan")}>부산</button>
              <button onClick={() => changeCity("jeju")}>제주</button>
              <br />
              <br />
            </>
          )}
        </div>{" "}
        뭔가 넣고보니 이상한
      </div> */}
    </div>
  );
};

export default Header_introduce;
