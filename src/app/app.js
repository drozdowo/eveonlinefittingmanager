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
import Search from './search/search';
import '../css/app.css';

import axios from 'axios';

/*  This should be the entire application. */
@connect((store) => {
    return {
        store: store
    }
})
export default class App extends Component{
    constructor(props){
        super(props);
    }
    componentWillMount(){
        if (CONSTANTS.debugging){console.log('DEBUG: Mounting Main Application Component');}
        //All needed data will come from here!
        axios.get('http://localhost:3030/api/getShips')
        .then(function(response){
            console.log('Recieved Ship Names! + ' + response.data.length);
            for(var i = 0; i < response.data.length; i++){
                console.log(response.data[i].shipName);
            }
        })
        .catch(function(error){
            console.log('Error receiving ship names!');
        });
    }
    componentWillUpdate(){
        if (CONSTANTS.debugging){console.log('DEBUG: Rerendering Main Application Component');}
    }
    render(){
        var MainBodyApp = ('how\'d you get here');
        if (this.props.location.pathname === '/'){ //Homepage -- display Search
            MainBodyApp =  <Search />
        } else if (this.props.location.pathname === '/app'){
            MainBodyApp = ('App Here');
        }
        return(
            <div className='app-LayoutContainer'>
                <Header className='app-HeaderContainer'/>
                    <div className='app-AppContainer'>
                        {MainBodyApp}
                    </div>
                <Footer className='app-FooterContainer'/>
            </div>
        );
    }
}
