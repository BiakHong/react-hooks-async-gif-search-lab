import React, { useState } from "react";

function GifSearch({ onSubmitQuery }) {
  const [querySearch, setQuerySearch] = useState("");


  function handleSearchChange(event) {
    setQuerySearch(event.target.value);
  }
  
  function handleQuerySearch(e) {
    e.preventDefault();
    onSubmitQuery(querySearch);

  }

  

  return (
    <div>
      <form onSubmit={handleQuerySearch}>
        <div className="form-group">
          <label >Search:</label>
          <input
            id="search"
            className="form-search"
            type="text"
            value={querySearch}
            onChange={handleSearchChange}
          />
        </div>
        <button type="submit" className="submitBtn">
          Search Gifs
        </button>
      </form>
    </div>
  );
}

export default GifSearch;