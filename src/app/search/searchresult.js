//Import React
import React, { Component } from "react";
import ReactDOM from "react-dom";

//Import CSS
import '../../css/search.css';

export default class Result extends Component{
    constructor(props){
        super(props);
    }
    render(){
        var imgSrc = 'https://image.eveonline.com/Render/'+this.props.shipTypeId+'_64.png';
        return(
            <div className='search-ResultBox'>

                <div className='resimg'><img src={imgSrc}/> </div>
                <div className='resname'>{this.props.shipName}</div>
                <div className='resdesc'>{this.props.description}</div>
                <div className='resinfo'>{this.props.race}</div>

            </div>
        )
    }
}