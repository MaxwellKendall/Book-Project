import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BookEditorContainer from '../containers/BookEditorContainer';

export default class Book extends Component {
  handleClick = () => {
    this.props.selectBook(this.props.book);
  }

  render() {
    const { book, index } = this.props;

    return (
      <div>
        <li
          className="list-group-item"
          onClick={this.handleClick}
        >
          <span className={`book-title book-title_el_${index}`}>{book.title}</span>
          <BookEditorContainer
            bookIndex={index}
            book={book}
          />
        </li>
      </div>
    );
  }
}
