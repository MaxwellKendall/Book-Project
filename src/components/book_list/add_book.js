import React, { Component } from 'react';
import NewBookForm from './new_book_form';

const AddBook = (props) => {
    const newBook_A_C = props.addBook;
    const newBook_S = props.newBookState;
    const showNewBookForm = props.showNewBookForm;
    if (!newBook_S) {
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
                  newBook={newBook_A_C}/>
          )
      }
  }

export default AddBook;
