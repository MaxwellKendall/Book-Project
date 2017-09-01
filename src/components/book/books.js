import React, { Component } from 'react';
import BookEditor from './book_editor';

export default class Books extends Component {
  render(){
    const { books, deleteBook_A_C, editBook_A_C, selectBook_A_C } = this.props;
    return (
      <div>
        {books.map( (book, index) => {
          return (
              <li
                  key={index}
                  className="list-group-item"
                  onClick={ () => {
                      selectBook_A_C(book);
                      }
                  }
              >
                  <BookEditor
                    bookIndex={index}
                    book={book}
                    deleteBook_A_C={deleteBook_A_C}
                    editBook_A_C={editBook_A_C}
                    books={books}
                  />
              </li>
          )}
        )}
      </div>
    )

    }
}
