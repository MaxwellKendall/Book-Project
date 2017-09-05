import { connect } from 'react-redux';
import { newBook } from '../actions/books';
import BookDetail from '../components/BookDetail';

const mapStateToProps = state => ({
  book: state.books.activeBook,
  books: state.books.books,
});

const mapDispatchToProps = dispatch => ({
  newBook: book => dispatch(newBook(book)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookDetail);
