//Import React
import React, { Component } from "react";
import ReactDOM from "react-dom";

//Import Redux Connector and store
import { connect } from 'react-redux';
import store from '../../store.js';

//Import push for Router
import { push } from 'react-router-redux';


//Import CSS
import '../../css/search.css';

//Constants
import CONSTANTS from '../../constants';


@connect((store) => {
    return {
        store: store
    }
})
export default class Search extends Component {
    onChange = (event) => {
        console.log('Changed! ', event);
    }
    render(){
        return (    
            <div className='SearchContainer'>
                <input
                type="text"
                onChange={this.onChange}
                />
                                <input
                type="text"
                onChange={this.onChange}
                />
                                <input
                type="text"
                onChange={this.onChange}
                />
                                <input
                type="text"
                onChange={this.onChange}
                />
            </div>
        );
    }
}