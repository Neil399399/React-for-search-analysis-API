import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';



class Analysis extends Component {
    constructor(props) {
        super(props);
        this.analysis = this.analysis.bind(this);
    }

  /**Fuction */
  analysis() {
    let store = this.props.store;
    store.dispatch({type:'Analysis Loading'})
    var RequestMessage = (this.props.Params,this.props.Data)
    // console.log("requset params",this.props.Params)
    // console.log("requset data",RequestMessage)
    /**fetch post */
    //const url = 'http://d82253f9.ngrok.io/search-mock';
      const url = 'http://75fabb19.ngrok.io/analysis';
     // const url = 'http://d82253f9.ngrok.io/analysis?APIKEY=AIzaSyCHczxUWw4cq6mnEYqWKvpUkfMF8A6vNMI&KEYWORD='+this.props.keyword+'&LAT='+this.props.lat+'&LNG='+this.props.lng+'&analysis_word1='+this.props.word1+'&analysis_word2='+this.props.word2+'&analysis_word3='+this.props.word3;
     fetch(url,{
        method:"post",
        body: JSON.stringify(this.props.Params,this.props.Data)
    })
      .then( (response) => {
        response.json().then( (json)=>{
          store.dispatch({type:'INPUTANALYSISRESULT', data: json})
          //console.log("response OK");
        })     
      })
      .catch( (error) => {
        console.log(error);
      });
  
  }

    render () {
      return (
        <div>
        <RaisedButton label="TO ANALYSIS !!"  primary={true}  onClick={this.analysis} />
        </div>
          );
      }
    
}

export default Analysis ;