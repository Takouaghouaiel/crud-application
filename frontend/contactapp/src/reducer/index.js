import contactReducer from './contact.reducer'
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    contact:contactReducer
})
// combine reducers into a single reducer function , root reducer fih les reducers lkol .. here we have just one reducer for the contact 

export default rootReducer ;