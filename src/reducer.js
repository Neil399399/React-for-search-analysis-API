import { createStore } from 'redux';

const initialState ={
    Counter:0,
    TODOID:0,
    search:Boolean,
    httpRequest:[],
    SearchResult:[],
    SearchAnalysisResult:[],
    Loading: Boolean,
    Status:"",
    OpenPage: ""
  
  }
  
  /**action */
  const action = (state,action) => {
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
    
        case 'Search':
      return Object.assign({}, state, {
        ...state,search:true,httpRequest:action.data
        })

        case 'clearRequest':
        return Object.assign({}, state, {
          ...state,httpRequest:[],search:false
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
  /**CreateStore */
  const store = createStore(action,initialState);

export default store