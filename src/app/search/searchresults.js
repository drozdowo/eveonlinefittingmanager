//Import React
import React, { Component } from "react";
import ReactDOM from "react-dom";

//Import CSS
import '../../css/search.css';

import Result from './searchresult';

export default class SearchResult extends Component {
    constructor(props){
        super(props);
    }
    getShipList = () =>{
        var shipList = [];
        this.props.ships.shipInfoArray.forEach((ship)=>{
            if (ship.shipName.toLowerCase().includes(this.props.searchText.toLowerCase())){
                var shipDesc = ship.description+'';
                if (shipDesc.length > 302){
                    shipDesc = shipDesc.substring(0,302) + '...';
                }
                shipList.push( <Result 
                                    shipName={ship.shipName} 
                                    key={ship.shipName}
                                    shipTypeId={ship.typeID}
                                    description={ship.description}
                                    race={ship.raceName}
                                    description={shipDesc}/>
                )
            }
            return null;
        });
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