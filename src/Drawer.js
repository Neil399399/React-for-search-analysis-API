import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';


export default class DrawerUndocked extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};

    this.handleToggle = this.handleToggle.bind(this)
    this.handleToSearchpage = this.handleToSearchpage.bind(this)
    this.handleToSearchAnalysispage = this.handleToSearchAnalysispage.bind(this)
  }


  handleToggle () {
    this.setState({open: !this.state.open})
  };

  handleToSearchpage (){
    this.setState({open: false});
    let store = this.props.store;
    store.dispatch({type:'TurnSearchPage'})
  };
  
  handleToSearchAnalysispage() {
    this.setState({open: false});
    let store = this.props.store;
    store.dispatch({type:'TurnSearch-AnalysisPage'})
  }

  render() {
    return (
      <div>
        <RaisedButton
          label="push me "
          onClick={this.handleToggle}
        />
        <Drawer
          docked={false}
          width={300}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
        <h3>WELCOME</h3>
          <MenuItem onClick={this.handleToSearchpage}>SEARCH</MenuItem>
          <MenuItem onClick={this.handleToSearchAnalysispage}>SEARCH - ANALYSIS</MenuItem>
        </Drawer>
      </div>
    );
  }
}