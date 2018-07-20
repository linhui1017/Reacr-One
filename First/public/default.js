import React from 'react';
import ReactDOM from 'react-dom';
import MainUI from './Landing/MainUI';
import './src/css/index.scss';
import Viewport from './Viewport/Viewport';
//import $ from './src/js/jquery-3.3.1.min.js';

var serviceName = 'React';



//ReactDOM.render(new Viewport(), document.getElementById('root'));

ReactDOM.render(<MainUI serviceName={serviceName} />, document.getElementById('root'));

const vp = new Viewport({id:'root'});

vp.fixed();
