import { combineReducers } from 'redux';
import AppReducers from './AppReducers.js';

const reducers = combineReducers({
    app: AppReducers
});

export default reducers;