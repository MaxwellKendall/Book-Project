import { connect } from 'react-redux';
import { selectBook } from '../actions/books';

import Header from '../components/Header';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  selectBook: book => dispatch(selectBook(book)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
