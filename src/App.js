import logo from './logo.svg';
import './App.css';
//import Counter  from './counter';
import React, { Component } from 'react';
import { createStore } from 'redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import  ChangePage from './ChangePage';



const initialState ={
  Counter:0,
  TODOID:0,
  SearchResult:[],
  SearchAnalysisResult:[],
  Loading: Boolean,
  Status:"",
  OpenPage: ""

}

/**action */
const counter = (state,action) => {
  switch (action.type){
    case 'INCREMENT':
    const INCounter = state.Counter+1
    //console.log("Increment: ", state.counter)
    return Object.assign({}, state, {
      Counter:INCounter,
      SearchResult:state.SearchResult
      })

    case 'DECREMENT':
    //console.log("Decrement: ")
    const DECounter = state.Counter-1
    return Object.assign({}, state, {
      Counter:DECounter,
      SearchResult:state.SearchResult
      })

    case 'INPUTDATA':
    //console.log("INPUTDATA CALLED")
    return Object.assign({}, state, {
      ...state, 
      SearchResult: action.data,Loading:false, Status:"hide"
      })

    case 'INPUTANALYSISRESULT':
    //console.log("INPUTDATA CALLED")
    return Object.assign({}, state, {
      ...state, 
      SearchAnalysisResult: action.data,Loading:false, Status:"hide"
      })
      
    case 'INCREMENTLIST':
    //console.log("INCREMENTLIST CALLED",state.TODOID)    
    return Object.assign({}, state, {
      ...state,TODOID:action.id
      })

    case 'DECREMENTLIST':
    //console.log("INCREMENTLIST CALLED",state.TODOID)  
    return Object.assign({}, state, {
      ...state,TODOID:action.id
      })
      
    case 'Search Loading':
    return Object.assign({}, state, {
      ...state,Loading:true, Status:"loading"
      })

    case 'TurnSearchPage':
    return Object.assign({}, state, {
      ...state,OpenPage:"searchpage",SearchResult:[]
      })
    case 'TurnAnalysisPage':
    return Object.assign({}, state, {
      ...state,OpenPage:"analysispage"
      })
    case 'TurnSearch-AnalysisPage':
    return Object.assign({}, state, {
      ...state,OpenPage:"search-analysispage"
      })
       
      
    default:
return state;
  }
}

//TurnPage:Object.assign({},state.TurnPage,{...state,SearchPage:true})

/**CreateStore */
const store = createStore(counter,initialState);



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




