import React, { Component } from 'react';
import logo from './src/img/logo.svg';
import './src/css/App.css';
import TimerView from './Mobx/TimerView';



class App extends Component {


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <TimerView/>
        </div>
      </div>
      
    );
  }
}

export default App;
