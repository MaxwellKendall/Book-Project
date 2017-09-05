import { connect } from 'react-redux';
import * as actions from '../actions/books';
import Book from '../components/Book';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  selectBook: book => dispatch(actions.selectBook(book)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Book);
