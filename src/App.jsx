import { useState } from "react";
import "./index.css";

const App = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const apiKey = "6314cccfd789441b846201422250110"; // your API key

  const fetchWeather = async (cityName) => {
    try {
      setError("");
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}`
      );

      if (!response.ok) {
        throw new Error("City not found");
      }

      const data = await response.json();
      setWeather(data);
    } catch (err) {
      setError(err.message);
      setWeather(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() !== "") {
      fetchWeather(city);
    }
  };

  return (
    <div className="container">
      {/* Search Form */}
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

      {/* Error */}
      {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}

      {/* Weather Display */}
      {weather && (
        <div className="current-weather">
          <img
            src={weather.current.condition.icon}
            alt={weather.current.condition.text}
            className="weather-icon"
          />
          <p className="weather-temperature">
            {weather.current.temp_c}
            <span>°C</span>
          </p>
          <p className="weather-description">
            {weather.current.condition.text}
          </p>
          <p className="weather-city">{weather.location.name}</p>
          <p>Humidity: {weather.current.humidity}%</p>
          <p>Wind: {weather.current.wind_kph} km/h</p>
        </div>
      )}
    </div>
  );
};

export default App;
