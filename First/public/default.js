import React from 'react';
import ReactDOM from 'react-dom';
import MainUI from './Landing/MainUI';
import './src/css/index.css';
//import $ from './src/js/jquery-3.3.1.min.js';

var serviceName = 'React';

ReactDOM.render(<MainUI serviceName={serviceName} />, document.getElementById('root'));
