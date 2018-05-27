//Inport react, redux, and router
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import { push } from 'react-router-redux';

//Store and Actions
import store from '../store.js';
import * as appActions from '../actions/AppActions.js';
import * as getShipsActions from '../actions/ShipInfoActions';

//Constants
import CONSTANTS from '../constants.js';

//Import some CSS
import '../css/app.css';
import '../css/index.css';

//Import Components
import Header from './header/header';
import Footer from './footer/footer';
import Search from './search/search';


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
        this.getShipNames();
    }
    componentWillUpdate(){
        if (CONSTANTS.debugging){console.log('DEBUG: Rerendering Main Application Component');}
    }

    getShipNames = () =>{
        //All needed data will come from here!
        this.props.dispatch(getShipsActions.startFetchingShipNames());
        axios.get('http://localhost:3030/api/getShips')
        .then((response) => {
            this.props.dispatch(getShipsActions.gotFetchingShipNames(response.data))
        })
        .catch((error) =>{
            console.log(error);
        });
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
