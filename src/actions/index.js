
// using action creators the above would translate to an action creator that returns
//
// {
//     type: 'BOOK_SELECTED'
// }
//
// And the payload would be created implicity based on whatever the action creator is // passed at run time; for example:
// selectBook(book) =
// {
//     type: 'BOOK_SELECTED',
//     payload: book
// }

import { createAction } from 'redux-actions';
import { normalize, schema } from 'normalizr';

export const selectBook = createAction('BOOK_SELECTED');
export const newBook = createAction('NEW_BOOK');
export const deleteBook = createAction('DELETE_BOOK');
export const editBook = createAction('EDIT_BOOK');

// export function selectBook (book) {
//     // selectBook is an ActionCreator, it needs to return an action,
//     // an object with a type property
//     return {
//         type: 'BOOK_SELECTED',
//         payload: book
//     };
// }
//
// export function newBook(book){
//     return {
//         type: 'NEW_BOOK',
//         payload: book
//     }
// }
//
// export function deleteBook(book){
//     return {
//         type: 'DELETE_BOOK',
//         payload: book
//     }
// }
//
// export function editBook(newBook, oldBook){
//     return {
//         type: 'EDIT_BOOK',
//         payload: {
//             newBook: newBook,
//             oldBook: oldBook
//         }
//     }
// }
