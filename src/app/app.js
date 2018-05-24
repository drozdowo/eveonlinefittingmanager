import '../css/index.css';
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import store from '../store.js';
import * as Actions from '../actions/AppActions.js';
import { push } from 'react-router-redux';
import CONSTANTS from '../constants.js';
import Header from './header/header';
import Footer from './footer/footer';
import '../css/app.css';

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
        if (CONSTANTS.debugging){console.log('DEBUG: Mounting Main Application Component');}
    }
    componentWillUpdate(){
        if (CONSTANTS.debugging){console.log('DEBUG: Rerendering Main Application Component');}
    }
    render(){
        var MainBodyApp = (<div className='AppContainer'> how'd you get here </div>);
        if (this.props.location.pathname === '/'){ //Homepage -- display Search
            MainBodyApp = (<div className='AppContainer'> Search Box Here </div>);
        } else if (this.props.location.pathname === '/app'){
            MainBodyApp = (<div className='AppContainer'> App Here </div> );
        }
        return(
            <div className='LayoutContainer'>
                <Header className='HeaderContainer'/>
                {MainBodyApp}
                <Footer className='FooterContainer'/>
            </div>
        );
    }
}
