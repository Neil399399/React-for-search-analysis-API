import React  from 'react';
import DrawerUndocked from'./Drawer';
import ResultViewer from './ResultViewer';
import SearchBar from './SearchBar';
import SearchAnalysis from './search-analysis';
import Analysis from './Analysis';
import HOC1 from './High-Order';
import HOC2 from './High-Order2';
import HOC3 from './High-Order3';

const WrappedSearch = HOC1(SearchBar ,{...this.props});
const WrappedSearchAnalysis = HOC2(SearchAnalysis ,{...this.props});
const WrappedAnalysis = HOC3(Analysis ,{...this.props});
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
  

  /**PAGECHANGE */
  turnpage() {
    if (this.state.open === "searchpage"){
        return(
        <div>
            <WrappedSearch {...this.props}/>
            <ResultViewer {...this.props}/></div>);
        }
    if (this.state.open === "analysispage"){
        return(
        <div>
          <WrappedAnalysis {...this.props}/></div>);
        }
    if (this.state.open === "search-analysispage"){
        return(
        <div>
          <WrappedSearchAnalysis {...this.props}/></div>);
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
  