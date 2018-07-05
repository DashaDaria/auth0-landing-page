import React, { Component } from 'react';
import './Intro.css';
import atom from '../videos/atom.mp4';
import auth0 from '../images/auth0.png';

class Intro extends Component {

  render() {
    return (
      <div className="intro-container">
        <header className="mobile-header">
          <img src={auth0} alt="logo" />
          <div className="hamburger-menu">
            <div className="long-line"></div>
            <div className="middle-line"></div>
            <div className="long-line"></div>
          </div>
        </header>
        <video className="intro-video" autoPlay loop muted>
          <source src={atom} type='video/mp4'/>
          </video>
        <div className="intro-text-container">
          <h1 className="intro-header">Never compromise on <span className="identity-color">identity</span></h1>
          <p className="intro-subheader">We provide a universal authentication & authorization platform for web, mobile and legacy applications.</p>

          <div className="mobile-cta">
            <button className="std-button">Get Started ➔</button>
            <button className="std-button" id="read">Read The Docs</button>
          </div>

          <div className="caret-down"></div>
          <div className="line"></div>
        </div>
      </div>
    );
  }
}

export default Intro;
