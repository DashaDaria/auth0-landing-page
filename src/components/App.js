import React, { Component } from 'react';
import './App.css';
import Intro from  './Intro';
import Static from  './Static';
import Columns from  './Columns';
import AssetsLogic from  '../containers/AssetsLogic';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Intro />
        <AssetsLogic/>
        <Static />
        <Columns />
      </div>
    );
  }
}

export default App;
