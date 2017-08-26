import React  from 'react';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import TextField from 'material-ui/TextField';
import DrawerUndocked from'./Drawer';
import ResultViewer from './ResultViewer';
import SearchBarTEST from './HOCsearch';
import HOC1 from './High-Order';
const WrappedSearch = HOC1(SearchBarTEST ,{...this.props});
class  ChangePage extends React.Component {
    
    constructor(props) {
      super(props);
      this.state = {open:''};
      let store = this.props.store;
  
    store.subscribe(() =>{
       const state = store.getState()
       if (state.OpenPage==="searchpage"){
            this.setState({open:state.OpenPage})    
       }
       if (state.OpenPage==="analysispage"){
            this.setState({open:state.OpenPage})
       }
       if (state.OpenPage==="search-analysispage"){
            this.setState({open:state.OpenPage})
       }
    })  
  }
  

  /**Function */
  turnpage() {
    if (this.state.open === "searchpage"){
        return(
        <div>
            <WrappedSearch {...this.props}/>
            <ResultViewer {...this.props}/></div>);
        }
    if (this.state.open === "analysispage"){
        return(<div><ResultViewer {...this.props}/></div>);
        }
    if (this.state.open === "search-analysispage"){
        return(<div><ResultViewer {...this.props}/></div>);
        }    
    
      }
    
    
        


    render() {
      return (
        <div class =" checkdrawer">
          < DrawerUndocked  {...this.props}/>
          {this.turnpage()}
        </div>
      );
    }
  }
  
  export default ChangePage;
  