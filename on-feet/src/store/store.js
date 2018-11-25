import { createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
const initialState = {};

const middleware = [thunk];

// The store holds the state of the application and can only be modified by actions that are dispatched
//
// Middleware extends redux custom functionality
// https://redux.js.org/api/applymiddleware
//
// Redux Thunk middleware allows you to write action creators that return a function instead of an action.
// https://github.com/reduxjs/redux-thunk
//
// The last line enables Redux Devtools extension
const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    //applys redux dev tools extension
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
