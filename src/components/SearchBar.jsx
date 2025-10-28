import { useState } from "react";

const SearchBar = ({ onSearch, onLocationClick }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== "") onSearch(input);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a city name"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        required
      />
      <button
        type="button"
        className="location-button"
        onClick={onLocationClick}
      >
        <span className="material-symbols-rounded">my_location</span>
      </button>
    </form>
  );
};

export default SearchBar;
