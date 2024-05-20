import RouteControl from "./Router/Route";
import { useEffect, useState } from "react";
import { Config } from "../src/Config/Config";
import axios from "axios";
import "../src/Style/common.css";

function App() {
  const [city, setCity] = useState("daegu");
  const [weather, setWeather] = useState("");
  const [temperature, setTemperature] = useState();
  const [humidity, setHumidity] = useState();
  const [wind, setWind] = useState();

  const [IsLoading, setIsLoading] = useState(false);

  const weatherApiKey = Config.WeathetAPI;

  const Props = {
    cityWeather: {
      city: city,
      setCity: setCity,
      weather: weather,
      temperature: temperature,
      humidity: humidity,
      wind: wind,
    },
  };

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApiKey}`
      )
      .then((respone) => {
        setWeather(respone.data.weather[0].main); // 날씨 ( 바람 , 비 .. ) 설정
        setTemperature(Math.floor(respone.data.main.temp) - 273); // 온도 설정
        setHumidity(respone.data.main.humidity); // 습도 설정
        setIsLoading(true); // 바람 새기 설정
        setWind(respone.data.wind.speed);
        console.log(respone);
      })
      .catch((err) => {
        setWeather("err");
        console.log(err);
      });
  }, [city]);

  return (
    <div className="testBG">
      <RouteControl Props={Props} />
    </div>
  );
}

export default App;
