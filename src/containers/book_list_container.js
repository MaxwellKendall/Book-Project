import { connect } from 'react-redux';
import * as actions from '../actions/index';
import BookList from '../components/book_list/book_list';

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
        newBook_A_C: (book) => dispatch(actions.newBook(book))
})

// Promote BookList from a component to a container - it needs to knw about this new dispatch method, selectBook. Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
