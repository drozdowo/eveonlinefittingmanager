//Import React
import React, { Component } from "react";
import ReactDOM from "react-dom";

//Import CSS
import '../../css/search.css';

import Result from './searchresult';

export default class SearchResult extends Component {
    constructor(props){
        super(props);
        console.log(props);
    }
    getShipList = () =>{
        var shipList = [];
        if (this.props.searchText.length < 1){
            return null;
        }
        if (this.props.ships.shipInfoArray === undefined){
            return null;
        }
        for(var i = 0; i < this.props.ships.shipInfoArray.length; i++){
            var ship = this.props.ships.shipInfoArray[i];
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
                                    description={shipDesc}
                                    onClickShipResult={this.props.onClickShipResult}
                                    />
                )
            }
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