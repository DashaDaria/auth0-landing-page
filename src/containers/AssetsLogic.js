import React, { Component } from 'react';
import AssetsRender from './AssetsRender'

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

class AssetsLogic extends Component {
  constructor() {
    super()
    this.state = {
      autoplay: true,
      current_asset: assets.usecase
    }
    this.changeVideo  = this.changeVideo.bind(this)
  }

  changeVideo(video_name, autoplay) {
    let next_video = assets[video_name]
    this.setState({
      current_asset: next_video,
      autoplay: autoplay
    })
  }

  render() {
    return (
      <AssetsRender video={this.state.current_asset} autoplay={this.state.autoplay} changeVideo={this.changeVideo}/>
      );
    }
  }

export default AssetsLogic;

const assets = {
  usecase: {
    name: "Use Case",
    key: 'usecase',
    text: "Choose your use case. Auth0’s Universal Identity Platform for web, mobile and IoT can handle any of them — B2C, B2B, B2E or a combination.",
    source: usecase,
    duration: 8000,
    next_video: 'tech',
    desktop: usecaseDesktop,
    mobile: usecaseMobile
  },
  tech: {
    name: "Technologies",
    key: 'tech',
    text:"Your language. Your stack. Auth0 can connect to any application or API. Our 65+ SDKs and pre-configured Quickstarts offer rapid integration.",
    source: tech,
    duration: 10000,
    next_video: 'deploy',
    desktop: techDesktop,
    mobile: techMobile
  },
  deploy: {
    name: "Deployment",
    key: 'deploy',
    text:"Choose the deployment that suits your needs — your cloud, Auth0 Cloud, on-premise, or hybrid.",
    source: deploy,
    duration: 6000,
    next_video: 'custom',
    desktop: deployDesktop,
    mobile: deployMobile
  },
  custom: {
    name: "Customization",
    key: 'custom',
    text:"Easily customize your app’s authentication process by writing code or picking one of our 100+ pre-built Auth0 Rules and Extensions.",
    source: custom,
    duration: 30000,
    next_video: 'result',
    desktop: customDesktop,
    mobile: customMobile
  },
  result: {
    name: "Result",
    key: 'result',
    text:"Your use case(s) + Your tech stack + Your deployment model + Your customization + Your changing needs = a seamless and secure Auth0 Identity solution that adapts to your future.",
    source: result,
    duration: 4000,
    next_video: 'usecase',
    desktop: resultDesktop,
    mobile: resultMobile
  }
}
