import './css/index.css';
//Import React & ReactDOM
import React, { Component } from "react";
import ReactDOM from "react-dom";

//Import the Redux provider
import { Provider } from 'react-redux';

//Import ReactRouter stuff
import { ConnectedRouter as Router } from 'react-router-redux';
import history from './history';
import { Route } from 'react-router';

//Import our Store and our App Component
import store from './store.js';
import App from "./app/app.js";

import spacebg from './images/bg.jpg';

var bg = document.getElementById('bgme');
bg.background = spacebg;

const TheApp = (
    <Provider store={store}>
        <Router history={history}>
            <div>
                <Route path="/" component={App}/>
                <Route path="test" component={App}/>
            </div>
        </Router>
    </Provider>
);

ReactDOM.render(TheApp, document.getElementById('app'));