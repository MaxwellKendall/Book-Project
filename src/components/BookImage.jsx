import React from 'react';

const BookImage = (props) => {
  // const viewer = new google.books.DefaultViewer(document.getElementById('book-details'));

  return (
    <div id="book-image">
      {props.activeBook && props.activeBook.ISBN
        ? <p>Image.</p> // viewer.load(props.activeBook.ISBN)
        : <p>No Image Available</p>
      }
    </div>
  );
};

export default BookImage;
