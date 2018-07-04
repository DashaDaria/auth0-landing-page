import React, { Component } from 'react';
import './App.css';
import Intro from  './Intro';
import Static from  './Static';
import Columns from  './Columns';
import AssetModule from  '../containers/AssetModule';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <AssetModule/>
        <Intro />
        <Static />
        <Columns />
      </div>
    );
  }
}

export default App;
