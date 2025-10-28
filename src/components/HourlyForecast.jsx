import React from "react";

const HourlyForecast = () => {
  const sampleHours = [1, 2, 3, 4, 5, 6]; // Placeholder, will come from API later

  return (
    <div className="hourly-weather">
      {sampleHours.map((hour, index) => (
        <div className="hourly-item" key={index}>
          <p className="hourly-time">00:00</p>
          <img src="/icons/cloudy.png" className="hourly-image" alt="weather" />
          <p className="hourly-temperature">
            20<span>°C</span>
          </p>
          <p className="hourly-description">Partly cloudy</p>
        </div>
      ))}
    </div>
  );
};

export default HourlyForecast;
