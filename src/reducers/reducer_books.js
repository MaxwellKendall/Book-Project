import { handleActions } from 'redux-actions';
import * as actions from '../actions/index';
  
const initialState = [
    { title: 'Moby Dick', pages: 452, ISBN: null },
    { title: 'Great Expectations', pages: 365, ISBN: null },
    { title: 'Lord of the Rings', pages: 547, ISBN: null },
    { title: 'Your Best Life Now', pages: 69, ISBN: null },
    { title: 'Mortification of Sin', pages: 135, ISBN: null },
    { title: 'Ordinary', pages: 254, ISBN: null },
    { title: 'Radical', pages: 241, ISBN: null },
    { title: 'Desiring God', pages: 300, ISBN: null },
];


export default handleActions({
    // make each function return the object you want state to be for the given object
    [actions.newBook]: (state, action) => {console.log('newbookAC'); return [action.payload, ...state]},
    [actions.deleteBook]: (state, action) => {
        let filteredState = state.filter( (element) => element.title != action.payload.title);
        return [
            ...filteredState
        ]
    },
    [actions.editBook]: (state, action) => {
        let newState = state.map( (element) => {
            if (element.title === action.payload.oldBook.title){
                return action.payload.newBook;
            } else {
                return element;
            }
        })
        return [...newState]
    }
}, initialState);
