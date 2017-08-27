import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';


class SearchBar extends Component {
    constructor(props) {
        super(props);
       
        this.search = this.search.bind(this);
    }

/**Function */

  search() {
    let store = this.props.store;
    store.dispatch({type:'Search Loading'})
    /**fetch get */
    //const url = 'http://d82253f9.ngrok.io/search-mock';
      const url = 'http://d82253f9.ngrok.io/search?APIKEY=AIzaSyCHczxUWw4cq6mnEYqWKvpUkfMF8A6vNMI&KEYWORD=coffee&LAT=25.0348&LNG=121.5678';
      //const url = 'http://d82253f9.ngrok.io/search?APIKEY=AIzaSyCHczxUWw4cq6mnEYqWKvpUkfMF8A6vNMI&KEYWORD='+this.props.keyword+'&LAT='+this.props.lat+'&LNG='+this.props.lng;
    fetch(url,{
      method:"get",
    })
      .then( (response) => {
        response.json().then( (json)=>{
          store.dispatch({type:'INPUTDATA', data: json})
          console.log("response OK");
          
          
        })     
      })
      .catch( (error) => {
        console.log(error);
      });  
  }

    render () {
      return (
        <RaisedButton label="Search !!"  primary={true}  onClick={this.search} />
          );
      }

}

  export default SearchBar;
  