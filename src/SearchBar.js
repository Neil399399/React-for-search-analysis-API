import React, { Component } from 'react';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import LinearProgress from 'material-ui/LinearProgress';

const style = {
  container: {
    position: 'relative',
  },
  refresh: {
    display: 'inline-block',
    position: 'relative',
  },
};


class SearchBar extends Component {
    constructor(props) {
      super(props);
      this.state ={ 
          keyword: '',
          lat: '',
          lng: '',
          result: null,
          status:"hide",
          completed:0
      }
      let store = this.props.store;
    this.search = this.search.bind(this);
    store.subscribe(() =>{
       const state = store.getState()
       if (state.Loading==true){
         this.setState({status: state.Status})
        
       }
       if (state.Loading==false){
        this.setState({status: state.Status})
       
      }
    })  
  }

  
  /**HandleChange */
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
  /**Function */

  progress(completed) {
    if (completed > 100) {
      this.setState({completed: 100});
    } else {
      this.setState({completed});
      const diff = Math.random() * 20;
      this.timer = setTimeout(() => this.progress(completed + diff), 1000);
    }
  }

    search() {
      /**LinearLoading */
      
      
      /**store dispatch */
      let store = this.props.store;
      store.dispatch({type:'Loading'})
      this.setState({completed: 20});
      this.timer = setTimeout(() => this.progress(20), 1000);
      
      /**fetch get */
      //const url = 'http://d931480d.ngrok.io/search-mock';
        const url = 'http://d931480d.ngrok.io/search?APIKEY=AIzaSyCHczxUWw4cq6mnEYqWKvpUkfMF8A6vNMI&KEYWORD=coffee&LAT=25.0348&LNG=121.5678';
        //const url = 'http://deb9e04d.ngrok.io/search?APIKEY=AIzaSyCigqPQLr341O-UL_jyJQNdX76fO0TtywA&KEYWORD='+this.state.keyword+'&LAT='+this.state.lat+'&LNG='+this.state.lng;
      fetch(url,{
        method:"get",
      })
        .then( (response) => {
          response.json().then( (json)=>{
            store.dispatch({type:'INPUTDATA', data: json})
            this.setState({completed: 100});
            clearTimeout(this.timer);
          })     
        })
        .catch( (error) => {
          console.log(error);
        });  
    }


   

    /**Reder */
    render() {
      return (
        <div>
          <h2>Search</h2>
          < br></br>
            <input placeholder="KEYWORD" onChange={this.handleChange1} />
            <br></br>
            <input placeholder="LAT" onChange={this.handleChange2}/>
            <br></br>
            <input placeholder="LNG" onChange={this.handleChange3}/>
           < br></br>
            <RefreshIndicator percentage={5} size={50} left={0} top={0} loadingColor="#FF9800" status={this.state.status} style={style.refresh}/>
            <LinearProgress mode="determinate" value={this.state.completed}/>
          < br></br>
            <button onClick={this.search}>Search</button>
            < br></br>
            < br></br>
            <textarea rows="20" cols="80" value={JSON.stringify(this.state.result,null,2)} />
            
        </div>
      );
    }
  }
  
  export default SearchBar;
  