import { connect } from 'react-redux';
import * as actions from '../actions/books';
import BookEditor from '../components/BookEditor';

const mapStateToProps = state => ({
  books: state.books.books,
});

const mapDispatchToProps = dispatch => ({
  deleteBook: book => dispatch(actions.deleteBook(book)),
  editBook: (newBook, oldBook) => dispatch(actions.editBook(newBook, oldBook)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookEditor);
