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
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(
    applyMiddleware(...middleware),
    )
);

export default store;
