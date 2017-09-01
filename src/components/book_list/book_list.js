import React, { Component } from 'react';
import AddBook from './add_book';
import Books from '../book/books';

class BookList extends Component {
  constructor(props){
      super(props);
      this.state = {
          newBook: false
      }
  }

  showNewBookForm = (bool) => {
      this.setState( () => {
          return { newBook: bool }
      });
  }

  render(){
    const newBook_A_C = this.props.newBook_A_C;
    return (
        <ul className="list-group col-sm-4">
          <AddBook
            addBook={newBook_A_C}
            newBookState={this.state.newBook}
            showNewBookForm={this.showNewBookForm}
            />
          {this.props.children}
      </ul>
    )}
}

export default BookList;
