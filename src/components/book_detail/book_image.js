import React, { Component } from 'react';

const BookImage = (props) => {
    const viewer = new google.books.DefaultViewer(document.getElementById('book-details'));
    return(
        <div id='book-image'>
            {props.activeBook.ISBN != null
                ? viewer.load(props.activeBook.ISBN)
                : <p>No Image Available</p>
        }
        </div>
    )
  }

export default BookImage;
