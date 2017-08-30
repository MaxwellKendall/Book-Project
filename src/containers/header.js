import React, {Component} from 'react';
import axios from 'axios';
import { selectBook } from '../actions/index';
import { connect } from 'react-redux';

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            searchedBook: ''
        }
    }

    makeAPIRequest(event, searchTerm) {
        event.preventDefault();
        const config = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`;
        axios.get(config)
        .then( (response) => {
            console.log(response);
            let book = {
                title : response.data.items[0].volumeInfo.title,
                pages: response.data.items[0].volumeInfo.pageCount,
                ISBN: response.data.items[0].volumeInfo.industryIdentifiers.length > 1
                ? response.data.items[0].volumeInfo.industryIdentifiers[1].identifier
                : null
            };
            console.log(book);
            this.props.selectBook(book);
         })
        .catch( (err) => { console.warn(err) });
    }
    render(){
        let searchTerm;
        return (
            <div className="header">
                <h1>My Books</h1>
                  <input
                      id="searchBox"
                      onChange={ (event) => { searchTerm = event.target.value; } }
                      className="form-control mr-sm-2" type="text" placeholder="Search for a Book" />
                  <button
                      className="btn btn-outline-success my-2 my-sm-0"
                      type="submit"
                      onClick={ (event) => { this.makeAPIRequest(event, searchTerm) } }
                      >
                      Search
                  </button>
            </div>

        )
    }
}

function mapDispatchToProps(dispatch){
    return {
        selectBook: (book) => dispatch(selectBook(book))
    }
}

export default connect(null, mapDispatchToProps)(Header);
