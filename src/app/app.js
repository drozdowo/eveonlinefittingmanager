import '../css/index.css';
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import store from '../store.js';
import * as Actions from '../actions/AppActions.js';
import { push } from 'react-router-redux';
import CONSTANTS from '../constants.js';

/*  This should be the entire application. */
@connect((store) => {
    return {
        store: store.app
    }
})
export default class App extends Component{
    constructor(props){
        super(props);
    }
    componentWillMount(){
        if (CONSTANTS.debugging){console.log('Mounting Main Application Component');}
    }
    componentWillUpdate(){
        if (CONSTANTS.debugging){console.log('Rerendering Main Application Component');}
    }
    render(){
        var MainBodyApp = (<div> how'd you get here </div>);
        if (this.props.location.pathname === '/'){ //Homepage -- display Search
            MainBodyApp = (<div> Search Box Here </div>);
        } else if (this.props.location.pathname === '/app'){
            MainBodyApp = (<div> App Here </div> );
        }
        return(
            <div>
                <h1>Header</h1>
                {MainBodyApp}
                <h1>Footer</h1>
            </div>
        );
    }
}
