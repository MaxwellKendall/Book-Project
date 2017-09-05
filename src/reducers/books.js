import { handleActions } from 'redux-actions';
import * as actions from '../actions/books';

const initialState = {
  activeBook: null,
  books: [
    { title: 'Moby Dick', pages: 452, ISBN: null },
    { title: 'Great Expectations', pages: 365, ISBN: null },
    { title: 'Lord of the Rings', pages: 547, ISBN: null },
    { title: 'Your Best Life Now', pages: 69, ISBN: null },
    { title: 'Mortification of Sin', pages: 135, ISBN: null },
    { title: 'Ordinary', pages: 254, ISBN: null },
    { title: 'Radical', pages: 241, ISBN: null },
    { title: 'Desiring God', pages: 300, ISBN: null },
  ],
};

export default handleActions({
  // make each function return the object you want state to be for the given object
  [actions.selectBook]: (state, action) => ({ ...state, activeBook: action.payload }),
  [actions.newBook]: (state, action) => [action.payload, ...state],
  [actions.deleteBook]: (state, action) => {
    const filteredState = state.books.filter(element => element.title !== action.payload.title);
    return { ...state, books: filteredState };
  },
  [actions.editBook]: (state, action) => {
    const newBooks = state.books.map((element) => {
      let rtrn;

      if (element.title === action.payload.oldBook.title) {
        rtrn = action.payload.newBook;
      } else {
        rtrn = element;
      }

      return rtrn;
    });
    return { ...state, books: newBooks };
  },
}, initialState);
