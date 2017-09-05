import { connect } from 'react-redux';
import * as actions from '../actions/books';
import BookList from '../components/BookList';

const mapStateToProps = state => ({
  books: state.books.books,
});

const mapDispatchToProps = dispatch => ({
  createBook: book => dispatch(actions.newBook(book)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
