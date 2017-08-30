import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class BookEditor extends Component {
    constructor(props){
        super(props);
        this.state = {
            editMode: false
        }
        this.setEditMode = this.setEditMode.bind(this);
        this.updateBook = this.updateBook.bind(this);
    }

    setEditMode(bool){
        this.setState(() => {
            return {
                editMode: bool
            }
        })

    }

    updateBook(bookIndex){
        this.setEditMode(false);
        let books = this.props.books;
        let editBook_A_C = this.props.editBook_a_c;
        let pages = document.querySelector(`input.input_pages_el_${bookIndex}`).value;
        let title = document.querySelector(`input.input_title_el_${bookIndex}`).value;
        let oldBook = books[bookIndex];
        console.log('here is the newBook param to the AC from updateBook on Book_editory.js', newBook);
        let newBook = { title: title, pages: pages, ISBN: null};
        editBook_A_C({newBook, oldBook});
    }

    render () {
        const deleteBook_A_C = this.props.deleteBook_a_c;
        const bookIndex = this.props.bookIndex;
        const book = this.props.book;
        if(!this.state.editMode){
            return (
                <div className="book-editor">
                    <span className={`book-title book-title_el_${bookIndex}`}>
                        {book.title}
                    </span>
                    <div className="btn-group">
                        <button
                            onClick={ () => deleteBook_A_C(book) }
                            className={`btn btn-secondary delete_button_${bookIndex}`}
                            value="Delete"
                        >Delete
                        </button>
                        <button
                            onClick={ () => this.setEditMode(true) }
                            className={`btn btn-secondary edit_button_${bookIndex}`}
                            value="Edit"
                            >Edit
                        </button>
                    </div>
                </div>
            );
    } else {
        return (
            <div className="book-editor">
                <input
                    className={`input_title_el_${bookIndex}`} type="text" placeholder=" Title" defaultValue={book.title}
                />
                <input
                    className={`input_pages_el_${bookIndex}`} type="text" placeholder=" Pages" defaultValue={book.pages}
                />
            <button
                onClick={ () => this.updateBook(bookIndex)}
                className="btn btn-secondary save">
                Save
            </button>
            <button
                onClick={ () => this.setEditMode(false)}
                className="btn btn-secondary save">
                Cancel
            </button>
        </div>

        );
    }}
}
function mapStateToProps(state){
    return {
        books: state.books
    }
}

function mapDispatchToProps(dispatch){
    return {
        deleteBook_a_c: (book) => dispatch(actions.deleteBook(book)),
        editBook_a_c: (newBook, oldBook) => dispatch(actions.editBook(newBook, oldBook))
    }
}

// Promote BookList from a component to a container - it needs to knw about this new dispatch method, selectBook. Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookEditor);
