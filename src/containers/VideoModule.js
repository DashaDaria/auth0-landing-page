import React, { Component } from 'react';
import './VideoModule.css';

class VideoModule extends Component {
  constructor(){
    super()
  }

  render() {
    return (
      <div className="video-container">
        <div className="auth0-intro">What's' Auth0</div>
        <div className="auth0-pitch">{information.use.text}</div>
        <div className="video"></div>
        <div className="navigation">
          <button className="nav-button">Use Case</button>
          <button className="nav-button">Technologies</button>
          <button className="nav-button">Deployment</button>
          <button className="nav-button">Customization</button>
          <button className="nav-button">Result</button>
        </div>
      </div>
    );
  }
}

export default VideoModule;



const information = {
  use: {
    text: "Choose your use case. Auth0’s Universal Identity Platform for web, mobile and IoT can handle any of them — B2C, B2B, B2E or a combination.",
    video:"use case"
  },
  tech: {
    text:"Your language. Your stack. Auth0 can connect to any application or API. Our 65+ SDKs and pre-configured Quickstarts offer rapid integration.",
    video:"technologies"
  },
  deploy: {
    text:"Choose the deployment that suits your needs — your cloud, Auth0 Cloud, on-premise, or hybrid.",
    video:"deployment"
  },
  custom: {
    text:"Easily customize your app’s authentication process by writing code or picking one of our 100+ pre-built Auth0 Rules and Extensions.",
    video:"customization"
  },
  result: {
    text:"Your use case(s) + Your tech stack + Your deployment model + Your customization + Your changing needs = a seamless and secure Auth0 Identity solution that adapts to your future",
    video:"result"
  }
}
