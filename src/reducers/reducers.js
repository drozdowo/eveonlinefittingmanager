import { combineReducers } from 'redux';
import AppReducers from './AppReducers.js';
import UserReducers from './UserReducers.js';
import SearchReducers from './SearchReducers.js';
import ShipInfoReducers from './ShipInfoReducers';

const reducers = combineReducers({
    app: AppReducers,
    user: UserReducers,
    search: SearchReducers,
    shipInfo: ShipInfoReducers 
});

export default reducers;