import React, {Component} from 'react';
import axios from 'axios';
import { selectBook } from '../actions/index';
import { connect } from 'react-redux';
import SearchBar from '../components/search_bar';


class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            searchedBook:''
        }
    this.makeAPIRequest = this.makeAPIRequest.bind(this);
    }

    makeAPIRequest(event, searchTerm) {
        event.preventDefault();
        const config = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`;
        axios.get(config)
        .then( (response) => {
            let book = {
                title : response.data.items[0].volumeInfo.title,
                pages: response.data.items[0].volumeInfo.pageCount,
                ISBN: response.data.items[0].volumeInfo.industryIdentifiers.length > 1
                ? response.data.items[0].volumeInfo.industryIdentifiers[1].identifier
                : null
            };
            this.props.selectBook(book);
         })
        .catch( (err) => { console.warn(err) });
    }
    render(){
        console.log(this.props);
        return (
            <div className="header">
                <h1>My Books</h1>
                    <SearchBar APIRequest={this.makeAPIRequest}/>
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
