//Import React
import React, { Component } from "react";
import ReactDOM from "react-dom";

//Import Redux Connector and store
import { connect } from 'react-redux';
import store from '../../store.js';

//Import push for Router
import { push } from 'react-router-redux';


//Import CSS
import '../../css/footer.css';

//Constants
import CONSTANTS from '../../constants';


@connect((store) => {
    return {
        store: store.app
    }
})
export default class Footer extends Component {
    render(){
        return(
            <div className='FooterContainer'>
                <h1> Footer </h1>
            </div>
        );
    }
}