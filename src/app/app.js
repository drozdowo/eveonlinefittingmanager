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
import * as searchActions from '../actions/SearchActions';


//Constants
import CONSTANTS from '../constants.js';

//Import some CSS
import '../css/app.css';
import '../css/index.css';

//Import Components
import Header from './header/header';
import Footer from './footer/footer';
import Search from './search/search';

import background from '../images/bg.jpg';


//Modal Components
import ModalShipSelect from './modals/ModalShipSelect'

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
        axios.get('http://localhost:3030/api/shipInfo/getShips')
        .then((response) => {
            this.props.dispatch(getShipsActions.gotFetchingShipNames(response.data))
        })
        .catch((error) =>{
            console.log(error);
        });
    }
    hideModal = () => {
        this.props.dispatch(searchActions.selectedShip(null));
    }
    shouldDoModal = () => {
        var toRet = null;
        if(this.props.store.shipInfo.selectedShipInfoArray !== null){
            toRet = (
                <div className='app-modalOverlay' onClick={this.hideModal}>
                    <div className='app-modalMenu'>
                        <ModalShipSelect
                        shipInfo={this.props.store.shipInfo.selectedShipInfoArray}
                        />
                    </div>
                </div>
            );
        }
        return toRet;
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
                {this.shouldDoModal()}
                <Header className='app-HeaderContainer'/>
                    <div className='app-AppContainer'>
                        {MainBodyApp}
                    </div>
                <Footer className='app-FooterContainer'/>
            </div>
        );
    }
}
