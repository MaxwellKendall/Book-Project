import React, { Component } from 'react';

export default class BookEditor extends Component {
  constructor(props){
      super(props);
      this.state = {
          editMode: false,
      }
  }

  setEditMode = (bool) => {
    this.setState(() => {
        return {
            editMode: bool
        }})
  }

  updateBook = (bookIndex) => {
      this.setEditMode(false);
      const { books, editBook_A_C } = this.props;
      const pages = document.querySelector(`input.input_pages_el_${bookIndex}`).value;
      const title = document.querySelector(`input.input_title_el_${bookIndex}`).value;
      const oldBook = books[bookIndex];
      const newBook = { title: title, pages: pages, ISBN: null};
      editBook_A_C({newBook, oldBook});
  }
    render() {
      const { book, bookIndex, books, deleteBook_A_C, editBook_A_C } = this.props;
        {if(!this.state.editMode){
          return (
            <div className="book-editor">
                <span
                  className={`book-title book-title_el_${bookIndex}`}
                  >{book.title}
                </span>
                <div className="btn-group">
                    <button
                        onClick={ () => deleteBook_A_C(book) }
                        className={`btn btn-secondary delete_button_${bookIndex}`}
                        value="Delete"
                    >Delete
                    </button>
                    <button
                        onClick={ () => this.setEditMode(true) }
                        className={`btn btn-secondary edit_button_${bookIndex}`}
                        value="Edit"
                        >Edit
                    </button>
                </div>
            </div>
          )
        } else {
        return (
          <div className="book-editor">
            <input
                className={`input_title_el_${bookIndex}`}
                type="text"
                placeholder="Title"
                defaultValue={book.title}
            />
            <input
                className={`input_pages_el_${bookIndex}`}
                type="text" placeholder="Pages"
                defaultValue={book.pages}
            />
        <button
            onClick={ () => this.updateBook(bookIndex)}
            className="btn btn-secondary save"
        >Save
      </button>
        <button
          onClick={ () => this.setEditMode(false)}
          className="btn btn-secondary save">
            Cancel
        </button>
          </div>
        )}}
    }
  }
