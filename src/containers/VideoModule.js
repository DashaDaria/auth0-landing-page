import React, { Component } from 'react';
import './VideoModule.css';
import AssetCreative from './AssetCreative';
import AssetText from './AssetText';
import NavButton from './NavButton';
import VideoAutoplay from './VideoAutoplay';


class VideoModule extends Component {
  constructor(props){
    super(props)
    this.state = {
      activeIndex: 0,
      autoplay: true
    }
    this.goToImage      = this.goToImage.bind(this);
    this.autoplayVideos = this.autoplayVideos.bind(this);
    this.goToNextVideo  = this.goToNextVideo.bind(this);
  }

  componentDidMount(){
    this.autoplayVideos()
  }

  autoplayVideos(){
    if(this.state.autoplay){
      let x = window.setInterval(() => {
        this.goToNextVideo()
      }, 3000)
      this.setState({ interval: x })
    } else {
      let x = window.clearInterval(this.state.interval)
      this.setState({ interval : x })
    }
  }

  goToNextVideo(){
    this.setState({ activeIndex: this.state.activeIndex + 1})
  }

  goToImage(index){
    this.setState({
      activeIndex: index
    })
  }

  render() {
    return (
      <div className="video-container">
        <div className="auth0-intro">What's' Auth0 </div>


        {this.props.assets.map((asset, index) =>
          <AssetText
            key={index}
            index={index}
            activeIndex={this.state.activeIndex}
            text={asset.text}
           />
         )}


         {this.props.assets.map((asset, index) =>
           <VideoAutoplay
             key={index}
             index={index}
             activeIndex={this.state.activeIndex}
             svg={asset.desktop}
             video={asset.video.source}
            />
          )}


        <div className="navigation">
          {this.props.assets.map((asset, index) =>
          <NavButton
            key={index}
            index={index}
            label={asset.name}
            activeIndex={this.state.activeIndex}
            isActive={this.state.activeIndex===index}
            onClick={e => this.goToImage(index)}
          />
        )}
      </div>
    </div>
    );
  }
}
asset['usecase']
export default VideoModule;

const assetData = [
  {
    name: "Use Case",
    text: "Choose your use case. Auth0’s Universal Identity Platform for web, mobile and IoT can handle any of them — B2C, B2B, B2E or a combination.",
    video: {
      source: usecase,
      duration: 8
    },
    desktop: usecaseDesktop,
    mobile: usecaseMobile,
    color: "#40BEEA"
  },
  {
    name: "Technologies",
    text:"Your language. Your stack. Auth0 can connect to any application or API. Our 65+ SDKs and pre-configured Quickstarts offer rapid integration.",
    video: {
      source: tech,
      duration: 10
    },
    desktop: techDesktop,
    mobile: techMobile,
    color: "#00B08C"
  },
  {
    name: "Deployment",
    text:"Choose the deployment that suits your needs — your cloud, Auth0 Cloud, on-premise, or hybrid.",
    video: {
      source: deploy,
      duration: 6
    },
    desktop: deployDesktop,
    mobile: deployMobile,
    color: "#E9CF51"
  },
  {
    name: "Customization",
    text:"Easily customize your app’s authentication process by writing code or picking one of our 100+ pre-built Auth0 Rules and Extensions.",
    video: {
      source: custom,
      duration: 30
    },
    desktop: customDesktop,
    mobile: customMobile,
    color: "#FB9D5E"
  },
  {
    name: "Result",
    text:"Your use case(s) + Your tech stack + Your deployment model + Your customization + Your changing needs = a seamless and secure Auth0 Identity solution that adapts to your future.",
    video: {
      source: result,
      duration: 4
    },
    next_video: 'use_cases'
    desktop: resultDesktop,
    mobile: resultMobile,
    color: "#EA5323"
  }
]
