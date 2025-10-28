const getWeatherIcon = (condition) => {
  const lower = condition.toLowerCase();
  if (lower.includes("cloud")) return "/icons/cloudy.png";
  if (lower.includes("rain")) return "/icons/drizzle.png";
  if (lower.includes("sun")) return "/icons/sunny.png";
  if (lower.includes("snow")) return "/icons/snowflake.png";
  if (lower.includes("storm")) return "/icons/storm.png";
  if (lower.includes("fog")) return "/icons/fog.png";
  if (lower.includes("lightning")) return "/icons/lightning.png";
  return "/icons/cloudy-day.png";
};

const CurrentWeather = ({ data }) => {
  const iconPath = getWeatherIcon(data.current.condition.text);

  return (
    <div className="current-weather">
      <img
        src={iconPath}
        alt={data.current.condition.text}
        className="weather-icon"
      />
      <p className="weather-temperature">
        {data.current.temp_c} <span>°C</span>
      </p>
      <p className="weather-description">{data.current.condition.text}</p>
      <p className="weather-city">{data.location.name}</p>
      <p>Humidity: {data.current.humidity}%</p>
      <p>Wind: {data.current.wind_kph} km/h</p>
    </div>
  );
};

export default CurrentWeather;
