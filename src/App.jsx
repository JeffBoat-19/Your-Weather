import { useState } from "react";
import "./index.css";

const App = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [unit, setUnit] = useState("C");

  const apiKey = "6314cccfd789441b846201422250110";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() !== "") {
      fetchWeather(city);
    }
  };

  const toggleUnit = () => {
    setUnit((prev) => (prev === "C" ? "F" : "C"));
  };
  const fetchWeather = async (query) => {
    try {
      setError("");
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${encodeURIComponent(
          query
        )}`
      );

      if (!response.ok) {
        throw new Error("Location not found");
      }

      const data = await response.json();
      setWeather(data);
    } catch (err) {
      setError(err.message);
      setWeather(null);
    }
  };

  return (
    <div className="container">
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
        <button className="location-button" type="submit">
          <span className="material-symbols-rounded">my_location</span>
        </button>
      </form>

      {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
      {weather && (
        <div className="current-weather">
          <img
            src={weather.current.condition.icon}
            alt={weather.current.condition.text}
            className="weather-icon"
          />

          <p className="weather-temperature">
            {unit === "C" ? weather.current.temp_c : weather.current.temp_f}
            <span>°{unit}</span>
          </p>

          <p className="weather-description">
            {weather.current.condition.text}
          </p>

          <p className="weather-city">
            {weather.location.name}, {weather.location.country}
          </p>

          <div className="weather-details">
            <p>💧 Humidity: {weather.current.humidity}%</p>
            <p>🌬️ Wind: {weather.current.wind_kph} km/h</p>
            <p>🕓 Updated: {weather.current.last_updated}</p>
          </div>

          <button className="unit-toggle" onClick={toggleUnit}>
            Switch to °{unit === "C" ? "F" : "C"}
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
