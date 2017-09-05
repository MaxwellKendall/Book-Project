import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = (props) => {
  let searchTerm;

  return (
    <div className="search_bar">
      <input
        id="searchBox"
        onChange={(event) => { searchTerm = event.target.value; }}
        className="form-control mr-sm-2"
        type="text"
        placeholder="Search for a Book"
      />
      <button
        className="btn btn-outline-success my-2 my-sm-0"
        type="submit"
        onClick={(event) => { props.APIRequest(event, searchTerm); }}
      >
        Search
      </button>
    </div>
  );
};

SearchBar.propTypes = {
  APIRequest: PropTypes.func.isRequired,
};

export default SearchBar;
