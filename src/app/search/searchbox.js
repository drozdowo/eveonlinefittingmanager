/* PRESENTATIONAL component 
    Will NOT be connected to 
            redux.      */

//Import React
import React, { Component } from "react";
import ReactDOM from "react-dom";

//Import CSS
import '../../css/search.css';

export default class SearchBar extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <input
            type = "text"
            value = {(() => {
                    if (!this.props.isActive && this.props.val === ''){
                        return this.props.initialVal;
                    } else {
                        return this.props.val
                    }
                })()
            }
            onBlur = {this.props.handleBlur}
            onFocus = {this.props.handleFocus}
            onChange = {this.props.handleChange}
            />
        );
    }
}