import React, { Component } from 'react';
import BookImage from './BookImage';

export default class BookDetail extends Component {
  handleAddBook = () => {
    const { book, books, newBook } = this.props;

    if (!books.some(el => el.title === book.title)) {
      newBook(book);
    } else {
      window.alert('You already got this book in your books, hombre!');
    }
  }

  render() {
    const { book } = this.props;
    return (
      <div id="book-details">
        <BookImage activeBook={book} />
        <div className="book-details">
          <h2 className="title"><span>Title: </span>{book && book.title ? book.title : ''}</h2>
          <h2 className="pages"><span>Pages: </span>{book && book.pages ? book.pages : ''}</h2>
          <button
            onClick={this.handleAddBook}
            className="btn btn-primary"
          >Add Book to My Library</button>
        </div>
      </div>
    );
  }
}
