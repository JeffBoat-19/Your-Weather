import React from "react";

const CurrentWeather = () => {
  return (
    <div className="current-weather">
      <img src="/icons/cloudy.png" className="weather-icon" alt="weather" />
      <p className="weather-temperature">
        20<span>°C</span>
      </p>
      <p className="weather-description">Partly cloudy</p>
    </div>
  );
};

export default CurrentWeather;
