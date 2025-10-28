import React from "react";
import "./index.css";
import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import HourlyForecast from "./components/HourlyForecast";

const App = () => {
  return (
    <div className="container">
      <SearchBar />
      <CurrentWeather />
      <HourlyForecast />
    </div>
  );
};

export default App;
