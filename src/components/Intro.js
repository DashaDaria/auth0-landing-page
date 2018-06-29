import React, { Component } from 'react';
import './Intro.css';

class Intro extends Component {

  render() {
    return (
      <div className="intro-container">
      <div className="intro-header">Never compromise on <span className="identity-color">identity</span></div>
      <div className="intro-subheader">We provide a universal authentication & authorization platform for web, mobile and legacy applications.</div>
      </div>
    );
  }
}

export default Intro;
