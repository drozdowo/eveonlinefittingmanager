import { applyMiddleware, createStore, combineReducers } from 'redux';
import LoginReducer from './reducers/LoginReducer.js';
import AppReducer from './reducers/AppReducers.js';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';

const reducers = combineReducers({
    app: AppReducer,
    user: LoginReducer
});

const middleware = applyMiddleware(thunk, createLogger());

export default createStore(reducers, middleware);