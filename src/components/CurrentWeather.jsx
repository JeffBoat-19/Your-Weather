const CurrentWeather = ({ weather, unit, onToggleUnit }) => {
  return (
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

      <p className="weather-description">{weather.current.condition.text}</p>

      <p className="weather-city">
        {weather.location.name}, {weather.location.country}
      </p>

      <div className="weather-details">
        <p>💧 Humidity: {weather.current.humidity}%</p>
        <p>🌬️ Wind: {weather.current.wind_kph} km/h</p>
        <p>🕓 Updated: {weather.current.last_updated}</p>
      </div>

      <button className="unit-toggle" onClick={onToggleUnit}>
        Switch to °{unit === "C" ? "F" : "C"}
      </button>
    </div>
  );
};

export default CurrentWeather;
