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

const HOC3 = (Component) => class extends React.Component {
    constructor(props) {
      super(props);
      this.state ={ 
          result: null,
          status:"hide", 
          word1:'',
          word2:'',
          word3:'',
          open: false,
          Params:[],
          Data:[]
          
      }
      let store = this.props.store;
    //   Params = [this.state.word1, this.state.word2, this.state.word3]
    //   this.state.RequestMessage.Data = this.state.data
    store.subscribe(() =>{
       const state = store.getState()
          //console.log(state.SearchAnalysisResult)
       if (state.Loading===true){
         this.setState({status: state.Status}) 
       }
       if (state.Loading===false){
        this.setState({status: state.Status})
        this.setState({result:state.SearchAnalysisResult})
       
      }
    })  
  }

  
  /**Handle */

  handleInputdata = (event) => { 
    this.setState({Data: event.target.value})
    
  }
  handleChangeword1 = (event) => { 
    this.setState({word1: event.target.value})
  }
  handleChangeword2 = (event) => { 
    this.setState({word2: event.target.value})
  }
  handleChangeword3 = (event) => { 
    this.setState({word3: event.target.value})
  }
  handleCheck = () => {
    this.setState({Params:[this.state.word1, this.state.word2, this.state.word3]});
    console.log("Data",this.state.Data)
    console.log("word1",this.state.word1)
    console.log("Params",this.state.Params)
  };
  handleOpen = () => {
    this.setState({open: true});
  };
  handleClose = () => {
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
        <div class ="SearchAnalysisBar">
            <br></br>
            <h2> INPUT JSON </h2>
            <textarea rows="20" cols="80" onChange={this.handleInputdata}/>
            <br></br>
            <h2> Analysis-word</h2>
            <TextField hintText="ANALYSIS_WORD1"  onChange={this.handleChangeword1}/>
            <br></br>
            <TextField hintText="ANALYSIS_WORD2"  onChange={this.handleChangeword2}/>
            <br></br>
            <TextField hintText="ANALYSIS_WORD3"  onChange={this.handleChangeword3}/>
            <br></br>
           <RefreshIndicator percentage={5} size={50} left={0} top={0} loadingColor="#FF9800" status={this.state.status} style={style.refresh}/>
           < br></br>
           < br></br>
           <Component {...this.props}/>
           <RaisedButton label="Check !!" onClick={this.handleCheck} />
            <Dialog
              title="Commend TOP3 Places "
              actions={actions}
              modal={false}
              open={this.state.open}
              onRequestClose={this.handleClose}>
                {/* ANSWER: */}
                {this.state.result}
             </Dialog> 
           
           
        </div>
      );
    }
  }
  
  export default HOC3;
  