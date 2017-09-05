import { combineReducers } from 'redux';
import books from './books';

const rootReducer = combineReducers({
  // creates initial state;
  // key is state.
  // Value is reducer that returns state
  books,
});

export default rootReducer;
