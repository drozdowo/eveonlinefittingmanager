//React <3
import React, { Component } from "react";
import ReactDOM from "react-dom";

//Import a bunch of redux shit
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import store from '../store.js';
import * as Actions from '../actions/AppActions.js';
import { push } from 'react-router-redux';
import CONSTANTS from '../constants.js';

//Import our css
import '../css/app.css';
import '../css/index.css';

//Import some key components
import Header from './header/header';
import Footer from './footer/footer';
import Search from './search/search'


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
            MainBodyApp = (<Search className='AppContainer' />);
        } else if (this.props.location.pathname === '/app'){
            MainBodyApp = (<div className='AppContainer'> App Here </div> );
        }
        return(
            <div className='LayoutContainer'>
                <Header className='HeaderContainer'/>
                <div className='AppContainer'>
                    <Search />
                </div>
                <Footer className='FooterContainer'/>
            </div>
        );
    }
}
