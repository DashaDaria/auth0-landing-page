import React, { Component } from 'react';
import './App.css';
import Intro from  './Intro';
import BrandsModule from  './BrandsModule';
import Columns from  './Columns';
import AssetsLogic from  '../containers/AssetsLogic';

class App extends Component {
  render() {
    return (
      <main className="app-container">
        <Intro />
        <AssetsLogic/>
        <BrandsModule/>
        <Columns />
      </main>
    );
  }
}

export default App;
