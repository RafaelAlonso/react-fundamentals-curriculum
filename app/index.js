import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';
require ('./index.css');

ReactDom.render(<App />, document.querySelector('#root'));