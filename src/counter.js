import React, { Component } from 'react';



class Counter extends Component {
  // componentDidMount() {}

  // componentWillUnmount() {}

  constructor(props) {
    super(props);
    this.state ={
      value :0,
    }

    /**state changeed */
    let store = this.props.store;
    store.subscribe(() =>{
     // console.log("state changed")
      const state = store.getState()
     //console.log("COUNTER:",state.Counter)
      this.setState({value: state.Counter}) 
      
    })
    }
    /**handler */
    onIncrement = ()=>{
      let store = this.props.store;
      store.dispatch({type: 'INCREMENT'})
    }
    onDecrement = ()=>{
      let store = this.props.store;
      store.dispatch({type: 'DECREMENT'}) 
    }
   
  render() {
    return (
      <div>
  <h1>{this.state.value}</h1>
  <button onClick ={this.onIncrement}>+</button>
  <button onClick ={this.onDecrement}>-</button>
  </div>
  
    );
  }
  
}

export default Counter;



