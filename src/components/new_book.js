import React, { Component } from 'react';
import { connect } from 'react-redux';
import { newBook } from '../actions/index';

const NewBookForm = (props) => {
    let title, pageLength;
    return (
        <div className="new-book-container">
            <button onClick={props.exitForm}>x</button>
            <label>Title</label>
            <input id='title'
                onChange={ (event) => {
                    title = event.target.value;
                    console.log('title', title);
                    }
                }
            />
            <label>Page Length</label>
            <input id='pageLength'
                type="text"
                onChange={ (event) => {
                    pageLength = event.target.value;
                    console.log('pageLength', pageLength);
                }
            }
            />
            <button
                onClick={()=> {
                    document.getElementById('pageLength').value = '';
                    document.getElementById('title').value = '';
                    props.newBook({
                    title: title,
                    pages: pageLength
                })}}
                >
                Submit
            </button>
        </div>
    )
}

function mapDispatchToProps(dispatch){
    return {
        newBook: (book) => dispatch(newBook(book))
    }
}

export default connect(null, mapDispatchToProps)(NewBookForm);
