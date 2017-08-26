import React, { Component } from 'react';
import Redux, { createStore} from 'redux';


class SearchBar extends Component {
    constructor(props) {
      super(props);
      this.state ={
  
          keyword: '',
          lat: '',
          lng: '',
          result: null,
        
      }
      this.search = this.search.bind(this);
    }
   
    handleChange1 = (event) => { 
      this.setState({keyword: event.target.value})
    }
    handleChange2 = (event) => { 
      this.setState({lat: event.target.value})
    }
    handleChange3 = (event) => { 
      this.setState({lng: event.target.value})
    }
    handleChange4 = (event) => { 
      this.setState({result: event.target.value})
    }
    
  
    search() {
      const url = 'http://ce1568c1.ngrok.io/search?APIKEY=AIzaSyCigqPQLr341O-UL_jyJQNdX76fO0TtywA&KEYWORD=coffee&LAT=25.0348&LNG=121.5678';
      //const url = 'http://deb9e04d.ngrok.io/search?APIKEY=AIzaSyCigqPQLr341O-UL_jyJQNdX76fO0TtywA&KEYWORD='+this.state.keyword+'&LAT='+this.state.lat+'&LNG='+this.state.lng;
      fetch(url,{
        method:"get",
      })
        .then( (response) => {
          
          //this.setState({result:response.json()})
          response.json().then( (json)=>{
            console.log("response:",json);
            this.setState({result : json}); 
            
          })     
        })
        
        .catch( (error) => {
          console.log(error);
        });  
    }

    render() {
      return (
        <div>
            <input placeholder="KEYWORD" onChange={this.handleChange1} />
            <br></br>
            <input placeholder="LAT" onChange={this.handleChange2}/>
            <br></br>
            <input placeholder="LNG" onChange={this.handleChange3}/>
           < br></br>
            <button onClick={this.search}>Search</button>
            < br></br>
            < br></br>
            <textarea rows="20" cols="80" value={JSON.stringify(this.state.result,null,2)} />
            
        </div>
      );
    }
  }

  class GetData extends Component {
    render() {
      return (
        <button >
      
        </button>
      );
    }
  }
  