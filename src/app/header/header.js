//Import React
import React, { Component } from "react";
import ReactDOM from "react-dom";

//Import Redux Connector and store
import { connect } from 'react-redux';
import store from '../../store.js';

//Import push for Router
import { push } from 'react-router-redux';


//Import CSS
import '../../css/header.css';

//Constants
import CONSTANTS from '../../constants';


@connect((store) => {
    return {
        store: store.app
    }
})
export default class Header extends Component {
    constructor(props){
        super(props);
    }
    componentWillMount(){
        if(CONSTANTS.debugging){console.log('DEBUG: Mounted Header Container Component')}
    }
    render(){
        return (
            <div className='header-HeaderContainer'>
                <div className='header-HeaderLogo'>
                    <h1>Logo Here</h1>
                </div>
                <div className='header-HeaderUser'>    
                    <h1>User Component Here</h1>
                </div>
            </div>
        );
    }
}
