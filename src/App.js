import logo from './logo.svg';
import './App.css';
//import Counter  from './counter';
import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import  ChangePage from './ChangePage';
import  store from './reducer';
import  APIManager from './SearchFunction';

var apiManager = new APIManager(store, "http://73550c9e.ngrok.io/")
console.log("apiManager start !",apiManager)
// apiManager.getsearchfunc()

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>  
        </div>
           <br></br>
            < ChangePage store ={store}/>
          <br></br>
      </div>
      </MuiThemeProvider>

    );
  }
}
export default App;




