import React, { Component } from 'react';
import BookList from '../containers/book_list_container';
import BookDetail from '../containers/book_detail_container';
import Books from '../containers/books_container';
import Header from '../containers/header';

export default class App extends Component  {
  render() {
    return (
        <div>
            <Header />
            <BookList>
              <Books />
            </BookList>
            <BookDetail />
        </div>
    );
  }
}
