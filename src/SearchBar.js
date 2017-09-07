import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';



class SearchBar extends Component  {
constructor(props) {
    super(props);
  
    //bind
    this.search= this.search.bind(this)
}
  search(){
    let store = this.props.store;
    store.dispatch({type:'Search', data:[this.props.keyword,this.props.lng,this.props.lat]})
    console.log("search start")
    this.state = store.getState()
    console.log("type search =",this.state.search)
    

  }


/**Function */
    render () {
      return (
        <RaisedButton label="Search !!"  primary={true}  onClick={this.search} />
          );
      }

}

  export default SearchBar;
  