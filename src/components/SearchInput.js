import React from "react";

function SearchInput(props) {
  // console.log({props});
  return (
    <form>
      <div className="form-group">
        <label htmlFor="search">Search:</label>
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search a User"
          id="search"
        />
        <br />
        <button onClick={props.handleSortAsc} className="btn btn-primary" name="sortType" value="asc">
          Sort Name by Ascending
        </button> { }
        <button onClick={props.handleSortAsc} className="btn btn-primary" name="sortType" value="dec">
          Sort Name by Descending
        </button>
      </div>
    </form>
  );
}

export default SearchInput;
