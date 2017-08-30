import React, { Component } from 'react';
import { connect } from 'react-redux';


class BookImage extends Component {
    render(){
        const viewer = new google.books.DefaultViewer(document.getElementById('book-details'));
        return(
            <div id='book-image'>
                {this.props.activeBook.ISBN != null
                    ? viewer.load(this.props.activeBook.ISBN)
                    : <p>No Image Available</p>
            }
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        activeBook: state.activeBook
    }
}

export default connect(mapStateToProps)(BookImage);
