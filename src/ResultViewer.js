import React, { Component } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentRemove from 'material-ui/svg-icons/content/remove';

const styleRight = {
    marginRight: 10,
  };
  const styleLeft = {
    marginLeft: 10,
  };
let nextTodoId =0;
class ResultViewer extends Component {
    constructor(props) {
        super(props);
        this.state ={
            Name:[],
            Rate:[],
            Addr:[]
          }
          //bind
          this.onIncrement = this.onIncrement.bind(this)
          this.onDecrement = this.onDecrement.bind(this)
        //   this.onListChange = this.onListChange.bind(this)

    }
/** WillMount*/
componentWillMount = function(){
    let store = this.props.store;
    this.unsubscribe = store.subscribe(() =>{
         // console.log("state changed")
        const state = store.getState()
         // need chack 
        if (nextTodoId < 0){
            alert("No Data to show !!")
         }else {
             if (nextTodoId < state.SearchResult.length){
            this.setState({INT: state.TODOID,Name: state.SearchResult[nextTodoId].Name,Rate: state.SearchResult[nextTodoId].Rate,Addr: state.SearchResult[nextTodoId].Addr})
            }
            }
            
    })
}
/**WillUnmount */
componentWillUnmount = function(){
        this.unsubscribe()        
}

// onListChange(event){
// console.log(event.target)
// }



onIncrement(){
    let store = this.props.store;
    const state = store.getState()
    if (state.SearchResult.length ===0){
        alert("Please Search Data First !!")
    }else{
        if (state.SearchResult.length>nextTodoId){
    store.dispatch({type: 'INCREMENTLIST',id:  nextTodoId++})
    var li = document.createElement("li");
    var name = document.createTextNode(this.state.Name);
    var rate = document.createTextNode(this.state.Rate);
    var addr = document.createTextNode(this.state.Addr);
    li.appendChild(name);
    li.innerHTML += '&nbsp;&nbsp;&nbsp;';
    li.appendChild(rate);
    li.innerHTML += '&nbsp;&nbsp;&nbsp;';
    li.appendChild(addr);
    document.getElementById("ui").appendChild(li);
        }else {
            alert("INCREMENTLIST OUT OF RANGE !")
            //console.log("Increment: ",nextTodoId)
        }
    }
    }
    
onDecrement(){
    let store = this.props.store;
    const state = store.getState()
    if (state.SearchResult.length ===0){
        alert("Please Search Data First !!")
    }else{
   if (nextTodoId >0){
    store.dispatch({type: 'DECREMENTLIST',id: nextTodoId--}) 
    var list = document.getElementById("ui");
    list.removeChild(list.childNodes[nextTodoId]);
    }else{
        alert("STOP PUSH DECREMENT!!")
        nextTodoId =0;
    }
}
}


    render() {
      return (
        <div>
            <h2>ResultDetail</h2>
            <ui id="ui">
            
            </ui>
            <FloatingActionButton style={styleRight} onClick ={this.onIncrement}><ContentAdd /></FloatingActionButton>
            <FloatingActionButton style={styleLeft} secondary={true} onClick ={this.onDecrement}><ContentRemove /></FloatingActionButton>
        </div>
      );
    }
  }
  
  export default ResultViewer;
  