import './css/index.css';
import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "./app/app.js";
import { Provider } from 'react-redux';
import store from './store.js';

const TheApp = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(TheApp, document.getElementById('app'));