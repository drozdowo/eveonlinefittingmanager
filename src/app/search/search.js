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
import SearchResult from './searchresults';


@connect((store) => {
    return {
        search: store.search,
        ships: store.shipInfo
    }
})
export default class Search extends Component {
    constructor(props){
        super(props);
    }
    componentWillMount(){
        if(CONSTANTS.debugging){console.log('DEBUG: Mounted Search Container Component')}
        //Grab the ship names:
        
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
    onClickShipResult = (shipInfoArray) => {
        this.props.dispatch(action.selectedShip(shipInfoArray));
    }
    render(){

        
        var ResultContainer;

        if (this.props.search.isSearchBarActive || this.props.search.searchBarText.length >= 1){
            ResultContainer = (
            <div className='search-ResultContainer'>
                <SearchResult
                    ships={this.props.ships}
                    searchText={this.props.search.searchBarText}
                    onClickShipResult={this.onClickShipResult}
                />
            </div>
            );
        } else {
            ResultContainer = (<div className='search-ResultsContainerEmpty'>
                <div />
            </div>)
        }

        return (
            <div className='search-SearchContainer'>
                <div className='search-NotResultContainer'>
                    <h1> Check out your favorite ship fits below! </h1>
                    <div className='search-Spacer'/>
                    <SearchBox 
                        isActive={this.props.search.isSearchBarActive}
                        val={this.props.search.searchBarText}
                        initialVal={this.props.search.searchBarInitialValue}
                        handleChange={this.handleSearchBarChange}
                        handleBlur={this.handleSearchBarBlur}
                        handleFocus={this.handleSearchBarFocus}
                    />
                </div>
                    {ResultContainer}
            </div>
        );
    }
}
