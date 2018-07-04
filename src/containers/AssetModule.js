import React, { Component } from 'react';
import './AssetModule.css';
import VideoAutoplay from './VideoAutoplay'

////////VIDEOS//////
import usecase from '../videos/01_UseCase.mp4';
import tech from '../videos/02_Technologies.mp4';
import deploy from '../videos/03_Deployment.mp4';
import custom from '../videos/04_Customization.mp4';
import result from '../videos/05_Result.mp4';

////////DESKTOP SVG//////
import usecaseDesktop from '../svg/desktop/01_UseCase.svg';
import techDesktop from '../svg/desktop/02_Technologies.svg';
import deployDesktop from '../svg/desktop/03_Deployment.svg';
import customDesktop from '../svg/desktop/04_Customization.svg';
import resultDesktop from '../svg/desktop/05_Result.svg';

////////MOBILE SVG//////
import usecaseMobile from '../svg/mobile/01_UseCase.svg';
import techMobile from '../svg/mobile/02_Technologies.svg';
import deployMobile from '../svg/mobile/03_Deployment.svg';
import customMobile from '../svg/mobile/04_Customization.svg';
import resultMobile from '../svg/mobile/05_Result.svg';



class AssetModule extends Component {
  constructor(){
    super()
    this.state = {
      autoplay: true,
      active: assets.usecase
    }
  }

  renderVideo(){

  }



  render() {
    return (
      <div className="video-container">
        <div className="auth0-intro">What's' Auth0 </div>

        <VideoAutoplay source={this.state.active.video.source}/>

      </div>
    );
  }
}

export default AssetModule;

const assets = {

  usecase: {
    name: "Use Case",
    text: "Choose your use case. Auth0’s Universal Identity Platform for web, mobile and IoT can handle any of them — B2C, B2B, B2E or a combination.",
    video: {
      source: usecase,
      duration: 8
    },
    next_video: 'tech',
    desktop: usecaseDesktop,
    mobile: usecaseMobile,
    color: "#40BEEA"
  },
  tech: {
    name: "Technologies",
    text:"Your language. Your stack. Auth0 can connect to any application or API. Our 65+ SDKs and pre-configured Quickstarts offer rapid integration.",
    video: {
      source: tech,
      duration: 10
    },
    next_video: 'deploy',
    desktop: techDesktop,
    mobile: techMobile,
    color: "#00B08C"
  },
  deploy: {
    name: "Deployment",
    text:"Choose the deployment that suits your needs — your cloud, Auth0 Cloud, on-premise, or hybrid.",
    video: {
      source: deploy,
      duration: 6
    },
    next_video: 'custom',
    desktop: deployDesktop,
    mobile: deployMobile,
    color: "#E9CF51"
  },
  custom: {
    name: "Customization",
    text:"Easily customize your app’s authentication process by writing code or picking one of our 100+ pre-built Auth0 Rules and Extensions.",
    video: {
      source: custom,
      duration: 30
    },
    next_video: 'result',
    desktop: customDesktop,
    mobile: customMobile,
    color: "#FB9D5E"
  },
  result: {
    name: "Result",
    text:"Your use case(s) + Your tech stack + Your deployment model + Your customization + Your changing needs = a seamless and secure Auth0 Identity solution that adapts to your future.",
    video: {
      source: result,
      duration: 4
    },
    next_video: 'usecase',
    desktop: resultDesktop,
    mobile: resultMobile,
    color: "#EA5323"
  }
}
