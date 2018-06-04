//Import React
import React, { Component } from "react";
import ReactDOM from "react-dom";
import _ from 'lodash'

//Import CSS
import '../../css/search.css';

export default class ModalShipSelect extends Component{
    constructor(props){
        super(props);
    }
    render(){
        var imgSrc = 'https://image.eveonline.com/Render/'+this.props.shipTypeId+'_64.png';
        return(
            <div>
                Selected Ship TypeID: {this.props.shipTypeID}
            </div>
        )
    }
}