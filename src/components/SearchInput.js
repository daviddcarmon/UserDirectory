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
        <button onClick={props.handleSubmit} className="btn btn-primary">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchInput;
