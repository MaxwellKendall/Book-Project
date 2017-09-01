// State argument is not application state, only the state
// this reducer is responsible for

import { handleActions } from 'redux-actions';
import * as actions from '../actions/index';


export default handleActions({
    [actions.selectBook]: (state, action) => action.payload
}, null);
