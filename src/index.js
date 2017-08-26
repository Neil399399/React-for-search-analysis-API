import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import Counter from './Result'
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<Counter />, document.getElementById('root'));
registerServiceWorker();
