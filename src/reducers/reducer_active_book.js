// State argument is not application state, only the state
// this reducer is responsible for

import { handleActions } from 'redux-actions';
import * as actions from '../actions/index';


export default handleActions({
    [actions.selectBook]: (state, action) => action.payload
}, null);


// export default function(state = null, action){
//     switch (action.type) {
//         case 'BOOK_SELECTED' :
//             return action.payload
//         default :
//             return state
//         }
// }
