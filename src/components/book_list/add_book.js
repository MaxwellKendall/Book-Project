import React, { Component } from 'react';
import NewBookForm from './new_book_form';

const AddBook = (props) => {
    const { newBook_A_C, newBookState, showNewBookForm, books } = props;
    if (!newBookState) {
      return (
        <li
          className='btn btn-primary'
          onClick={ () => showNewBookForm(true)}
        >
          Add Book
        </li>
      )
    } else {
          return (
              <NewBookForm
                  exitForm={() => showNewBookForm(false)}
                  newBook_A_C={newBook_A_C}
                  books={books}
              />
          )
      }
  }

export default AddBook;
