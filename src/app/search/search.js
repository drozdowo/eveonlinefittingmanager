//Import React
import React, { Component } from "react";
import ReactDOM from "react-dom";

//Import Redux Connector and store
import { connect } from 'react-redux';
import store from '../../store.js';

//Import push for Router
import { push } from 'react-router-redux';

//Import our Actions
import * as action from '../../actions/SearchActions';

//Import CSS
import '../../css/search.css';

//Constants
import CONSTANTS from '../../constants';

//Import Presentational Components
import SearchBox from './searchbox';


@connect((store) => {
    return {
        store: store.search
    }
})
export default class Search extends Component {
    constructor(props){
        super(props);
    }
    componentWillMount(){
        if(CONSTANTS.debugging){console.log('DEBUG: Mounted Search Container Component')}
    }
    componentWillUpdate(){
        if(CONSTANTS.debugging){console.log('DEBUG: Updated Search Container Component')}
    }
    //Handles when the search bar has a change
    handleSearchBarChange = (event) => {
        this.props.dispatch(action.userTyped(event.target.value));
        event.preventDefault();
    }
    handleSearchBarBlur = (event) => {
        this.props.dispatch(action.searchBarBlur());
        event.preventDefault();
    }
    handleSearchBarFocus = (event) =>{
        this.props.dispatch(action.searchBarFocus());
        event.preventDefault();
    }
    render(){
        return (
            <div className='search-SearchContainer'>
                <h1> Check out your favorite ship fits below! </h1>
                <div className='search-Spacer'/>
                <SearchBox 
                    isActive={this.props.store.isSearchBarActive}
                    val={this.props.store.searchBarText}
                    initialVal={this.props.store.searchBarInitialValue}
                    handleChange={this.handleSearchBarChange}
                    handleBlur={this.handleSearchBarBlur}
                    handleFocus={this.handleSearchBarFocus}
                />
            </div>
        );
    }
}
