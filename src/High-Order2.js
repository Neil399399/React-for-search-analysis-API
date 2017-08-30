import React  from 'react';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';


  
const style = {
  container: {
    position: 'relative',
  },
  refresh: {
    display: 'inline-block',
    position: 'relative',
  },
};

const HOC2 = (Component) => class extends React.Component {
    constructor(props) {
      super(props);
      this.state ={ 
          keyword: '',
          lat: '',
          lng: '',
          result: null,
          status:"hide", 
          word1:'',
          word2:'',
          word3:'',
          open: false,
      }
      /**bind */
      this.onTextChange=this.onTextChange.bind(this)
      this.handleOpen=this.handleOpen.bind(this)
      this.handleClose=this.handleClose.bind(this)
  }
/**WillMount */
componentWillMount = function(){
  let store = this.props.store;
  this.unsubscribe = store.subscribe(() =>{
    const state = store.getState()
      //  console.log(state.SearchAnalysisResult)
    if (state.Loading===true){
      this.setState({status: state.Status}) 
    }
    if (state.Loading===false){
     this.setState({status: state.Status,result:state.SearchAnalysisResult})
   }
 })  
}
/**WillUnMount */
componentWillUnmount =function(){
  this.unsubscribe()
  
}

  /**Handle */
  onTextChange(event) {
    if (event.target.id==="keyword"){
      this.setState({keyword: event.target.value})
    }
    if (event.target.id==="lat"){
      this.setState({lat: event.target.value})
    }
    if (event.target.id==="lng"){
      this.setState({lng: event.target.value})
    }
    if (event.target.id==="word1"){
      this.setState({word1: event.target.value})
    }
    if (event.target.id==="word2"){
      this.setState({word2: event.target.value})
    }
    if (event.target.id==="word3"){
      this.setState({word3: event.target.value})
    }
  }

  handleOpen(){
    this.setState({open: true});
  };

  handleClose(){
    this.setState({open: false});
  };


    render() {
      const actions = [
        <FlatButton
          label="Submit"
          primary={true}
          keyboardFocused={true}
          onClick={this.handleClose}
        />,
      ];
      return (
        <div className ="SearchAnalysisBar">
          <h2>Search-Analysis</h2>
            <TextField hintText="KEYWORD" id="keyword"  onChange={this.onTextChange}/>
            <br></br>
            <TextField hintText="LAT"  id="lat" onChange={this.onTextChange}/>
            <br></br>
            <TextField hintText="LNG"  id="lng" onChange={this.onTextChange}/>
            <br></br>
            <h2> Analysis-word</h2>
            <TextField hintText="ANALYSIS_WORD1"  id="word1" onChange={this.onTextChange}/>
            <br></br>
            <TextField hintText="ANALYSIS_WORD2"  id="word2" onChange={this.onTextChange}/>
            <br></br>
            <TextField hintText="ANALYSIS_WORD3"  id="word3s" onChange={this.onTextChange}/>
            <br></br>
           <RefreshIndicator percentage={5} size={50} left={0} top={0} loadingColor="#FF9800" status={this.state.status} style={style.refresh}/>
           < br></br>
           < br></br>
           <Component {...this.props}/>
           <RaisedButton label="Recommend !!" onClick={this.handleOpen} />
            <Dialog
              title="Commend TOP3 Places "
              actions={actions}
              modal={false}
              open={this.state.open}
              onRequestClose={this.handleClose}>
                {this.state.result}
             </Dialog> 
           
           
        </div>
      );
    }
  }
  
  export default HOC2;
  