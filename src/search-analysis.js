import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';



class SearchAnalysis extends Component {
    constructor(props) {
        super(props);
        this.search = this.search.bind(this);
    }


  /**Fuction */
  search() {
    let store = this.props.store;
    store.dispatch({type:'Search Loading'})
    /**fetch get */
    //const url = 'http://d82253f9.ngrok.io/search-mock';
      const url = 'http://76b245f4.ngrok.io/search-analysis?APIKEY=AIzaSyCigqPQLr341O-UL_jyJQNdX76fO0TtywA&KEYWORD=coffee&LAT=25.0348&LNG=121.5678&analysis_word1=好&analysis_word2=好喝&analysis_word3=舒服';
     // const url = 'http://d82253f9.ngrok.io/search-analysis?APIKEY=AIzaSyCHczxUWw4cq6mnEYqWKvpUkfMF8A6vNMI&KEYWORD='+this.props.keyword+'&LAT='+this.props.lat+'&LNG='+this.props.lng+'&analysis_word1='+this.props.word1+'&analysis_word2='+this.props.word2+'&analysis_word3='+this.props.word3;
    fetch(url,{
      method:"get",
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
        <RaisedButton label="TO ANALYSIS !!"  primary={true}  onClick={this.search} />
        </div>
          );
      }

}

export default SearchAnalysis ;