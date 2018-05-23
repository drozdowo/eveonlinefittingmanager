import '../css/index.css';
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import store from '../store.js';

/*  This should be the entire application. */
@connect((store) => {
    return {
        store: store.app
    }
})
export default class App extends Component{
    render(){
        return(
            <div>
                App
            </div>
        );
    }
}
