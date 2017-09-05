import React, { Component } from 'react';


const NewBookForm = (props) => {
  let title, pageLength;
  let { books, newBook_A_C, exitForm } = props;
  console.log('newBookform props', props);
  const AddBooktoMyLibrary = (book) => {
    let test = books.some( (el, index) => {
      if (el.title === book.title){
        return true;
      } else {
        return false;
      }});
    if(!test){
      //this is hte action creator, only called when conditions pass and test is false
      newBook_A_C(book);
    } else {
      window.alert('You already got this book in your books, hombre!');
    };
    }

  return (
      <div className="new-book-container">
          <button onClick={exitForm}>x</button>
          <label>Title</label>
          <input id='title'
              onChange={ (event) => {
                  title = event.target.value;
                  }
              }
          />
          <label>Page Length</label>
          <input id='pageLength'
              type="text"
              onChange={ (event) => {
                  pageLength = event.target.value;
              }
          }
          />
          <button
              onClick={()=> {
                  document.getElementById('pageLength').value = '';
                  document.getElementById('title').value = '';
                    AddBooktoMyLibrary({
                    title: title,
                    pages: pageLength
                    })
                }}
              >
              Submit
          </button>
      </div>
  )
}

export default NewBookForm;
