import React, { Component } from 'react';
import './App.css';
import Intro from  './Intro';
import Static from  './Static';
import VideoModule from  '../containers/VideoModule';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <VideoModule />
        <Intro />
        <Static />
      </div>
    );
  }
}

export default App;
