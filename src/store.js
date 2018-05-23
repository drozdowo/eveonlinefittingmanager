import { applyMiddleware, createStore, combineReducers } from 'redux';
import reducers from './reducers/reducers.js';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';

const middleware = applyMiddleware(thunk, createLogger());

export default createStore(reducers, middleware);