import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends React.Component{
    render(){
        return <h1> Welcome to Eve Online Fitting Manager! </h1>
    }
}

const theApp = <App />

ReactDOM.render(theApp, document.getElementById('app'));