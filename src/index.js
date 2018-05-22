import './index.css';
import React, { Component } from "react";
import ReactDOM from "react-dom";
import {LoginBar} from "./loginbar/loginbar.js";


class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {toggle: true};
    }
    doTest = () =>{
        this.setState(prevState => ({
            toggle: !prevState.toggle
        }));
    }
    render(){
        return (
            <div className='mainApp'>
                <LoginBar/>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));