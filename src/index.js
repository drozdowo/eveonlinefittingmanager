import './index.css';
import React, { Component } from "react";
import ReactDOM from "react-dom";


class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {toggle: true};

        this.doTest = this.doTest.bind(this);
    }
    doTest(){
        this.setState(prevState => ({
            toggle: !prevState.toggle
        }));
    }
    render(){
        return (
            <div className='mainApp'>
                <h1> Welcome to Eve Online Fitting Manager! </h1>
                <button onClick={this.doTest}>
                 Content Here {this.state.toggle ? 'ON' : 'OFF'}
                </button>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));