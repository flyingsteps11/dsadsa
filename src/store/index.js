import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import rootReducer from 'reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(combineReducers(rootReducer), composeEnhancers(applyMiddleware(thunk)));