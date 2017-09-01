import React, { Component } from 'react';
import { connect } from 'react-redux';
import { newBook } from '../actions/index';
import BookDetail from '../components/book_detail/book_detail';

function mapStateToProps(state){
    return {
        book: state.activeBook
    };
}

function mapDispatchToProps(dispatch){
    return {
        newBook_A_C: (book) => {dispatch(newBook(book))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookDetail);
