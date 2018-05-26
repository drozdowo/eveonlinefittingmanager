import { combineReducers } from 'redux';
import AppReducers from './AppReducers.js';
import UserReducers from './UserReducers.js';
import SearchReducers from './SearchReducers.js';
import GetShipReducers from './GetShipReducers.js';

const reducers = combineReducers({
    app: AppReducers,
    user: UserReducers,
    search: SearchReducers,
    getShip: GetShipReducers 
});

export default reducers;