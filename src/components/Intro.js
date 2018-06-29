import React, { Component } from 'react';
import atom from './atom.mp4';

class Intro extends Component {

  render() {
    return (
      <div className="intro-container">
        <video className="intro-video" autoPlay loop muted>
          <source src={atom} type='video/mp4' />
        </video>
      </div>
    );
  }
}

export default Intro;
