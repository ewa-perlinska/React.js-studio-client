import React, { Component } from "react";

class SearchForm extends Component {
  render() {
    return (
      <div>
        <h1>Search : </h1>
        <form>
          <input
            type="text"
            name="searchText"
            placeholder="Search for studios"
          ></input>
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}

export default SearchForm;
