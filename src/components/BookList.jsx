import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddBook from './book_list/add_book';
import BookContainer from '../containers/BookContainer';

class BookList extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    createBook: PropTypes.func.isRequired,
  };

  state = {
    newBook: false,
  };

  showNewBookForm = (bool) => {
    this.setState((prevState, bool) => ({ ...prevState, newBook: bool }));
  }

  renderBook = () => this.props.books.map((book, index) => (<BookContainer book={book} index={index} key={index} />))

  render() {
    const { createBook, books } = this.props;

    return (
      <div>
        <AddBook
          books={books}
          newBook={createBook}
          newBookState={this.state.newBook}
          showNewBookForm={this.showNewBookForm}
        />
        <ul className="list-group col-sm-4">
          {this.renderBook()}
        </ul>
      </div>
    );
  }
}

export default BookList;
