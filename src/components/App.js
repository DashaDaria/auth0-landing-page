import React, { Component } from 'react';
import './App.css';
import Intro from  './Intro';
import Static from  './Static';
import Columns from  './Columns';
import VideoModule from  '../containers/VideoModule';

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

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <VideoModule assets={assetData} />
        <Intro />
        <Static />
        <Columns />
      </div>
    );
  }
}

export default App;

const assetData = [
  {
    name: "Use Case",
    text: "Choose your use case. Auth0’s Universal Identity Platform for web, mobile and IoT can handle any of them — B2C, B2B, B2E or a combination.",
    video: usecase,
    desktop: usecaseDesktop,
    mobile: usecaseMobile
  },
  {
    name: "Technologies",
    text:"Your language. Your stack. Auth0 can connect to any application or API. Our 65+ SDKs and pre-configured Quickstarts offer rapid integration.",
    video: tech,
    desktop: techDesktop,
    mobile: techMobile
  },
  {
    name: "Deployment",
    text:"Choose the deployment that suits your needs — your cloud, Auth0 Cloud, on-premise, or hybrid.",
    video: deploy,
    desktop: deployDesktop,
    mobile: deployMobile
  },
  {
    name: "Customization",
    text:"Easily customize your app’s authentication process by writing code or picking one of our 100+ pre-built Auth0 Rules and Extensions.",
    video: custom,
    desktop: customDesktop,
    mobile: customMobile
  },
  {
    name: "Result",
    text:"Your use case(s) + Your tech stack + Your deployment model + Your customization + Your changing needs = a seamless and secure Auth0 Identity solution that adapts to your future.",
    video: result,
    desktop: resultDesktop,
    mobile: resultMobile
  }
]
