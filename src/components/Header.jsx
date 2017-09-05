import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import SearchBar from '../components/SearchBar';

export default class Header extends Component {
  static propTypes = {
    selectBook: PropTypes.func.isRequired,
  };

  state = {
    searchedBook: null,
  }

  makeAPIRequest = (event, searchTerm) => {
    const config = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`;

    event.preventDefault();

    axios.get(config)
      .then((response) => {
        const book = {
          title: response.data.items[0].volumeInfo.title,
          pages: response.data.items[0].volumeInfo.pageCount,
          ISBN: response.data.items[0].volumeInfo.industryIdentifiers.length > 1
            ? response.data.items[0].volumeInfo.industryIdentifiers[1].identifier
            : null,
        };

        this.props.selectBook(book);
      })
      .catch((err) => { console.warn(err); }); // eslint-disable-line no-console
  }

  render() {
    console.log(this.props);
    return (
      <div className="header">
        <h1>My Books</h1>
        <SearchBar APIRequest={this.makeAPIRequest} />
      </div>
    );
  }
}
