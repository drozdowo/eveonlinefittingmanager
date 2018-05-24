import { applyMiddleware, createStore, combineReducers } from 'redux';
import reducers from './reducers/reducers.js';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import history from './history';
import CONSTANTS from './constants';

import {routerReducer, routerMiddleware } from 'react-router-redux';

const middleware = {};

if (CONSTANTS.debugging){
    const middleware = applyMiddleware(routerMiddleware(history), thunk, createLogger());    
} else {
    const middleware = applyMiddleware(routerMiddleware(history), thunk);
}

export default createStore(reducers, middleware);