import { connect } from 'react-redux';
import * as actions from '../actions/index';
import Books from '../components/book/books';

const mapStateToProps = (state) => ({
    //take our app state as an argument (array of books and active book)
    // whatever is returned will show up as props inside of BookList
        books: state.books,
});

//anything returned from this function will end up as props
// on the BookList container
const mapDispatchToProps = (dispatch) => ({
    // Whenever selectBook is called, the result should
    // be passed to all of our reducers
        deleteBook_A_C: (book) => dispatch(actions.deleteBook(book)),
        selectBook_A_C: (book) => dispatch(actions.selectBook(book)),
        editBook_A_C: (newBook, oldBook) => dispatch(actions.editBook(newBook, oldBook)),
})

// Promote BookList from a component to a container - it needs to knw about this new dispatch method, selectBook. Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(Books);
