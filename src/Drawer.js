import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';


export default class DrawerUndocked extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleToSearchPage =()=> {
    this.setState({open: false});
    let store = this.props.store;
    store.dispatch({type:'TurnSearchPage'})
  }

  handleToAnalysisPage =()=> {
    this.setState({open: false});
    let store = this.props.store;
    store.dispatch({type:'TurnAnalysisPage'})
  }
  
  handleToSearchAnalysisPage =()=> {
    this.setState({open: false});
    let store = this.props.store;
    store.dispatch({type:'TurnSearch-AnalysisPage'})
  }

  render() {
    return (
      <div>
        <RaisedButton
          label="Open Drawer"
          onClick={this.handleToggle}
        />
        <Drawer
          docked={false}
          width={300}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
        <h3>WELCOME</h3>
          <MenuItem onClick={this.handleToSearchPage}>SEARCH</MenuItem>
          {/* <MenuItem onClick={this.handleToAnalysisPage}>ANALYSIS</MenuItem> */}
          <MenuItem onClick={this.handleToSearchAnalysisPage}>SEARCH - ANALYSIS</MenuItem>
        </Drawer>
      </div>
    );
  }
}