//Import React
import React, { Component } from "react";
import ReactDOM from "react-dom";
import _ from 'lodash'

//Import CSS
import '../../css/search.css';

export default class Result extends Component{
    constructor(props){
        super(props);
        console.log('result ', this.props.shipInfoArray)
    }
    render(){
        var imgSrc = 'https://image.eveonline.com/Render/'+this.props.shipTypeId+'_64.png';
        return(
            <div className='search-ResultBox' onClick={_.partial(this.props.onClickShipResult, this.props.shipInfoArray)}>

                <div className='resimg unselectable'><img src={imgSrc}/> </div>
                <div className='resname unselectable'>{this.props.shipName}</div>
                <div className='resdesc unselectable'>{this.props.description}</div>
                <div className='resinfo unselectable'>{this.props.race}</div>

            </div>
        )
    }
}