import React, { Component } from 'react';
import './Intro.css';
import atom from '../videos/atom.mp4';

class Intro extends Component {

  render() {
    return (
      <div className="intro-container">
        <video className="intro-video" autoPlay loop muted>
          <source src={atom} type='video/mp4'/>
          </video>
        <div className="intro-text-container">
          <div className="intro-header">Never compromise on <span className="identity-color">identity</span></div>
          <div className="intro-subheader">We provide a universal authentication & authorization platform for web, mobile and legacy applications.</div>
          <div className="caret-down"></div>
          <div className="line"></div>
        </div>
      </div>
    );
  }
}

export default Intro;
