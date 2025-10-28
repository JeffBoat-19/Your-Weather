import React from "react";

const SearchBar = () => {
  return (
    <form action="#" className="search-form">
      <span className="material-symbols-rounded">search</span>
      <input type="text" placeholder="Enter a city name" required />
      <button className="location-button">
        <span className="material-symbols-rounded">my_location</span>
      </button>
    </form>
  );
};

export default SearchBar;
