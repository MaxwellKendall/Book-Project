import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

const rootReducer = combineReducers({
    // creates initial state;
    // key is state.
    // Value is reducer that returns state
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;
