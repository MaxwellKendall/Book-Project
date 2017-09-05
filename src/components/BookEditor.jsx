import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class BookEditor extends Component {
  state = {
    editMode: false,
  };

  toggleEditMode = () => {
    this.setState(prevState => ({ ...prevState, editMode: !prevState.editMode }))
  }

  updateBook = (bookIndex) => {
    this.toggleEditMode();

    const { books, editBook } = this.props;

    const pages = document.querySelector(`input.input_pages_el_${bookIndex}`).value;
    const title = document.querySelector(`input.input_title_el_${bookIndex}`).value;
    const oldBook = books[bookIndex];
    const newBook = { title, pages, ISBN: null };

    editBook({ newBook, oldBook });
  }

  handleDeleteBook = () => {
    this.props.deleteBook(this.props.book);
  }

  handleUpdateBook = () => {
    this.updateBook(this.props.bookIndex);
  }

  render() {
    const { book, bookIndex } = this.props;
    let markup;

    if (!this.state.editMode) {
      markup = (<div className="book-editor">
        <div className="btn-group">
          <button
            onClick={this.handleDeleteBook}
            className={`btn btn-secondary delete_button_${bookIndex}`}
            value="Delete"
          >
            Delete
          </button>
          <button
            onClick={this.toggleEditMode}
            className={`btn btn-secondary edit_button_${bookIndex}`}
            value="Edit"
          >
            Edit
          </button>
        </div>
      </div>);
    } else {
      markup = (<div className="book-editor">
        <input
          className={`input_title_el_${bookIndex}`}
          type="text"
          placeholder="Title"
          defaultValue={book.title}
        />
        <input
          className={`input_pages_el_${bookIndex}`}
          type="text"
          placeholder="Pages"
          defaultValue={book.pages}
        />
        <button
          onClick={this.handleUpdateBook}
          className="btn btn-secondary save"
        >
          Save
        </button>
        <button
          onClick={this.toggleEditMode}
          className="btn btn-secondary save"
        >
          Cancel
        </button>
      </div>);
    }

    return markup;
  }
}
