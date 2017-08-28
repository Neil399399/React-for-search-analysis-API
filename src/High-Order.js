import React  from 'react';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import TextField from 'material-ui/TextField';

const style = {
  container: {
    position: 'relative',
  },
  refresh: {
    display: 'inline-block',
    position: 'relative',
  },
};

const HOC1 = (Component) => class extends React.Component {
    constructor(props) {
      super(props);
      this.state ={ 
          keyword: '',
          lat: '',
          lng: '',
          result: null,
          status:"hide",  
      }
  }
/** WillMount*/
componentWillMount = function(){
  let store = this.props.store; 
  this.unsubscribe = store.subscribe(() =>{
    const state = store.getState()
   
    if (state.Loading===true){
      this.setState({status: state.Status})
     
    }
    if (state.Loading===false){
     this.setState({status: state.Status})
    
   }
 }) 

}
/**WillUnMount */
componentWillUnmount = function(){
  this.unsubscribe()    
}
  /**Function */
  handleChange1 = (event) => { 
    this.setState({keyword: event.target.value})
  }
  handleChange2 = (event) => { 
    this.setState({lat: event.target.value})
  }
  handleChange3 = (event) => { 
    this.setState({lng: event.target.value})
  }

    render() {
      return (
        <div className ="SearchBar">
          <h2>Search</h2>
            <TextField hintText="KEYWORD"  onChange={this.handleChange1}/>
            <br></br>
            <TextField hintText="LAT"  onChange={this.handleChange2}/>
            <br></br>
            <TextField hintText="LNG"  onChange={this.handleChange3}/>
            <br></br>
           <RefreshIndicator percentage={5} size={50} left={0} top={0} loadingColor="#FF9800" status={this.state.status} style={style.refresh}/>
           < br></br>
           < br></br>
           <Component {...this.props}/>      
        </div>
      );
    }
  }
  
  export default HOC1;
  