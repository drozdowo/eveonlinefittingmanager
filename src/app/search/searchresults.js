//Import React
import React, { Component } from "react";
import ReactDOM from "react-dom";

//Import CSS
import '../../css/search.css';

export default class SearchResult extends Component {
    constructor(props){
        super(props);
    }
    getShipList = () =>{
        var shipList = this.props.ships.shipNameArray.map((name, i)=>{
            if (name.shipName.toLowerCase().includes(this.props.searchText.toLowerCase())){
                return <li key={name.shipName}><b>{name.shipName}</b></li>
            }
            return null;
        });
        if (shipList.length > 15){
            shipList.slice(1,15);
        }
        return shipList;
    }
    render() {
        return (
            <div className='search-ListContainer'>
                {this.getShipList()}
            </div>
        );
    }
}