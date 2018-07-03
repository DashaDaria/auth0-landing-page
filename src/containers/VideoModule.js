import React, { Component } from 'react';
import './VideoModule.css';
import Videos from './Videos';
import VideoText from './VideoText';
import NavPanel from './NavPanel';
import usecase from '../videos/01_UseCases.mp4';
import tech from '../videos/02_Technology.mp4';
import deploy from '../videos/03_Deployment.mp4';
import custom from '../videos/04_Customization.mp4';
import result from '../videos/05_Result.mp4';

class VideoModule extends Component {
  constructor(){
    super()
    this.state = {
      autoPlay: false,
    }
  }


  render() {
    return (
      <div className="video-container">
        <div className="auth0-intro">What's' Auth0</div>
        <VideoText />
        <Videos />
        <NavPanel />
      </div>
    );
  }
}

export default VideoModule;
