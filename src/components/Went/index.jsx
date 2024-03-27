import { FaSearchLocation } from "react-icons/fa";
import { TbWind } from "react-icons/tb";
import { WiHumidity } from "react-icons/wi";
import { IoMdSunny } from "react-icons/io";
import { FaCloudSun } from "react-icons/fa";

import "./index.css";

const Weather = () => {
  let api_key = "67ef8efc16075712ac688ebea524a925";
  const search = async () => {
    const element = document.getElementsByClassName("cityInput");
    if (element[0].value === "") {
      return 0;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
    let response = await fetch(url);
    let data = await response.json();

    const humidity = document.getElementsByClassName("humidity-percent");
    const wind = document.getElementsByClassName("wind-rate");
    const temperature = document.getElementsByClassName("weather-temp");
    const location = document.getElementsByClassName("weather-location");

    humidity[0].innerHTML = data.main.humidity;
    wind[0].innerHTML = data.wind.speed;
    temperature[0].innerHTML = data.main.temp;
    location[0].innerHTML = data.name;
  };

  return (
    <div className="container">
      <div className="top-bar">
        <input type="text" className="cityInput" placeholder="Search" />
        <div
          className="search-icon"
          onClick={() => {
            search();
          }}
        >
          <FaSearchLocation />
        </div>
      </div>
      <div className="weather-image">
        <FaCloudSun />
      </div>
      <div className="weather-temp">+22°</div>
      <div className="weather-location">London</div>
      <div className="data-container">
        <div className="element">
          <WiHumidity className="icon" />
          <div className="data">
            <div className="humidity-percent">12%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <TbWind className="icon" />
          <div className="data">
            <div className="wind-rate">8-9 km/h</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
