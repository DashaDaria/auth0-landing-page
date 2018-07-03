import React, { Component } from 'react';
import './VideoModule.css';
import Videos from './Videos';
import usecases from '../videos/01_UseCases.mp4';
import tech from '../videos/02_Technology.mp4';
import deploy from '../videos/03_Deployment.mp4';
import custom from '../videos/04_Customization.mp4';
import result from '../videos/05_Result.mp4';

class VideoModule extends Component {
  constructor(){
    super()
    this.state = {
      autoPlay: false
    }
  }


  render() {
    return (
      <div className="video-container">
        <div className="auth0-intro">What's' Auth0</div>
        <div className="auth0-pitch">{this.props.use.text}</div>
        <Videos props={this.props}/>
        <div className="navigation">
          <button className="nav-button"><div className="circle"></div>Use Case</button>
          <button className="nav-button"><div className="circle"></div>Technologies</button>
          <button className="nav-button"><div className="circle"></div>Deployment</button>
          <button className="nav-button"><div className="circle"></div>Customization</button>
          <button className="nav-button"><div className="circle"></div>Result</button>
        </div>
      </div>
    );
  }
}

export default VideoModule;


VideoModule.defaultProps = {
  use: {
    text: "Choose your use case. Auth0’s Universal Identity Platform for web, mobile and IoT can handle any of them — B2C, B2B, B2E or a combination.",
    video: usecases,
    desktop: "",
    mobile:""
  },
  tech: {
    text:"Your language. Your stack. Auth0 can connect to any application or API. Our 65+ SDKs and pre-configured Quickstarts offer rapid integration.",
    video: tech,
    desktop: "",
    mobile:""
  },
  deploy: {
    text:"Choose the deployment that suits your needs — your cloud, Auth0 Cloud, on-premise, or hybrid.",
    video: deploy,
    desktop: "",
    mobile:""
  },
  custom: {
    text:"Easily customize your app’s authentication process by writing code or picking one of our 100+ pre-built Auth0 Rules and Extensions.",
    video: custom,
    desktop: "",
    mobile:""
  },
  result: {
    text:"Your use case(s) + Your tech stack + Your deployment model + Your customization + Your changing needs = a seamless and secure Auth0 Identity solution that adapts to your future",
    video: result,
    desktop: "",
    mobile:""
  }
}
