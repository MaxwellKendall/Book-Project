import React, { Component } from 'react';
import { connect } from 'react-redux';
import BookImage from '../components/book_image';

class BookDetail extends Component {
    render(){
        if (!this.props.book){
            return (
                <div id="book-details">
                    <h3>Please Select a Book.</h3>
                </div>
            )
        }
        return (
            <div id="book-details">
                <BookImage />
                <h2 className="title"><span>Title:</span> {this.props.book.title}</h2>
                <h2 className="pages"><span>Pages:</span> {this.props.book.pages}</h2>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        book: state.activeBook
    };
}

export default connect(mapStateToProps)(BookDetail);
