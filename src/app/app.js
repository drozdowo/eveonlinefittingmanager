import '../css/index.css';
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from 'react-redux';
import { LoginBar } from './loginbar/loginbar.js';
import { Provider } from 'react-redux';
import store from '../store.js';

/*  This should be the entire application. */
@connect((store) => {
    return {
        store: store.app
    }
})
export default class App extends Component{
    componentWillMount(){
        console.log(this.props.store);
    }
    render(){
        return(
            <div>
                    <LoginBar />
            </div>
        );
    }
}
