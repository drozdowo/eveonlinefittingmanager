import React, {Component} from "react";
import ReactDOM from "react-dom";
import * as Actions from '../../actions/AppActions.js';
import store from '../../store.js';



export class LoginBar extends Component{
  constructor(props){
    super(props);
    console.log('login bar ', store.getState());
  }
  fireLogin = () =>{
      store.dispatch(Actions.userLoggedIn());
  }
  componentWillUpdate(){
    console.log('update');
  }
    render(){
      return (
        <div>
            <input 
            type="button"
            value ="Click Me"
            onClick={this.fireLogin}/>
        </div>
      ); 
    }
}