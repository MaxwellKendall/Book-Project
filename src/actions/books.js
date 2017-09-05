import { createAction } from 'redux-actions';

export const selectBook = createAction('BOOK_SELECTED');
export const newBook = createAction('NEW_BOOK');
export const deleteBook = createAction('DELETE_BOOK');
export const editBook = createAction('EDIT_BOOK');
