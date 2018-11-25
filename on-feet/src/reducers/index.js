import { combineReducers } from 'redux';
import modal from './modalReducer';

//Combines all specialized reducers
const rootReducer = combineReducers({
  modal
});

export default rootReducer;
