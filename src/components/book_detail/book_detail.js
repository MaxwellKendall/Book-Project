import React from 'react';
import BookImage from './book_image';

const BookDetail = (props) => {
  let activeBook = props.book;
  let newBook_A_C = props.newBook_A_C;
    if (!props.book){
        return (
            <div id="book-details">
                <h3>Please Select a Book.</h3>
            </div>
        )
    }
    return (
        <div id="book-details">
            <BookImage activeBook={activeBook}/>
            <div className="book-details">
                <h2 className="title"><span>Title:</span> {activeBook.title}</h2>
                <h2 className="pages"><span>Pages:</span> {activeBook.pages}</h2>
                <button onClick={ () => newBook_A_C(activeBook)}
                    className="btn btn-primary">Add Book to My Library</button>
            </div>

        </div>
    )
}

export default BookDetail;
