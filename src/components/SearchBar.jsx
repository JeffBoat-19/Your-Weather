import { useState } from "react";

const SearchBar = ({ onSearch }) => {
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
      />
      <button className="location-button" type="submit">
        <span className="material-symbols-rounded">my_location</span>
      </button>
    </form>
  );
};

export default SearchBar;
