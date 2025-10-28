import { useState } from "react";
import "./index.css";
import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";

const App = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [unit, setUnit] = useState("C");

  const apiKey = "6314cccfd789441b846201422250110";

  const handleLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchWeather(`${latitude},${longitude}`);
        },
        () => setError("Unable to get your location")
      );
    } else {
      setError("Geolocation not supported by your browser");
    }
  };

  const handleSearch = (query) => {
    if (query.trim() !== "") {
      fetchWeather(query);
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
      <SearchBar onSearch={handleSearch} onLocationClick={handleLocation} />
      {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
      {weather && (
        <CurrentWeather
          weather={weather}
          unit={unit}
          onToggleUnit={toggleUnit}
        />
      )}
    </div>
  );
};

export default App;
