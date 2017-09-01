import React, { Component } from 'react';


const NewBookForm = (props) => {
    let title, pageLength;
    let newBook_A_C = props.newBook;
    let exitForm = props.exitForm;
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
                      newBook_A_C({
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
