import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import NewBookForm from '../components/new_book';
import BookEditor from '../components/book_editor';

const API_KEY = 'AIzaSyClsT0LS-_m8YU5-AbGKYkhwi2mqdsrqyM';


class BookList extends Component {
    constructor(props){
        super(props);
        this.state = {
            newBook: false,
        };

    }

    renderListOfBooks() {
        return this.props.books.map( (book, index) => {
            return (
                <li
                    key={index}
                    className="list-group-item"
                    onClick={ () => {
                        this.props.selectBook(book);
                        }
                    }
                >
                    <BookEditor
                        delete={this.props.deleteBook}
                        edit={this.editBook}
                        bookIndex={index}
                        book={book}
                    />
                </li>
            );
        });
    }

    showNewBookForm(bool){
        this.setState( () => {
            return { newBook: bool }
        });
    }

    renderAddBookBtn() {
        if (!this.state.newBook){
            return (
                <li
                    className='btn btn-primary'
                    onClick={ () => this.showNewBookForm(true)}
                >
                    Add Book
                </li>
            )
        } else {
            return (
                <NewBookForm exitForm={() => this.showNewBookForm(false)} />
            )
        }
    }
    render(){
        return (
            <div className="list-of-books">
                <ul className="list-group col-sm-4">
                    {this.renderListOfBooks()}
                    {this.renderAddBookBtn()}
                </ul>
            </div>
        )
    }
}
    function mapStateToProps(state){
        //take our app state as an argument (array of books and active book)
        // whatever is returned will show up as props inside of BookList
        return {
            books: state.books
        }
    }

    //anything returned from this function will end up as props
    // on the BookList container
    function mapDispatchToProps(dispatch){
        // Whenever selectBook is called, the result should
        // be passed to all of our reducers
        return {
            selectBook: (book) => dispatch(selectBook(book)),
        }
    }

// Promote BookList from a component to a container - it needs to knw about this new dispatch method, selectBook. Make it available as a prop.
    export default connect(mapStateToProps, mapDispatchToProps)(BookList);
