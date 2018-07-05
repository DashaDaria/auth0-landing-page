import React, { Component } from 'react';
import './AssetsRender.css';

class AssetsRender extends Component {
  constructor() {
    super()
    this.setAutoPlayTimer = this.setAutoPlayTimer.bind(this)
    this.changeVideo = this.changeVideo.bind(this)
  }

  setAutoPlayTimer() {
    let current_video_duration = this.props.video.duration;
    console.log(current_video_duration)
    let next_video     = this.props.video.next_video;

    this.timerId = setInterval(
      () => this.changeVideo(next_video),
      current_video_duration
    );
  }

  componentDidMount() {
    this.setAutoPlayTimer()
  }

  componentDidUpdate() {
    this.setAutoPlayTimer()
  }

  changeVideo(next_video){
    clearInterval(this.timerId)
    this.props.changeVideo(next_video)
  }



  render() {
    return (
      <div className="video-container">

        <h1 className="auth0-intro">What's' Auth0 </h1>
        <p className="asset-text"> {this.props.video.text} </p>

        <video src={this.props.video.source} className="video-autoplay-active" autoPlay muted></video>

        <div className="navigation">
          <button className={this.props.video.name === "Use Case" ? 'nav-button-active' : 'nav-button'} id={this.props.video.name === "Result" ? "black" : ""} >
            <div className="circle" id={this.props.video.name === "Result" ? "color-usecase" : "no-color"}></div>
            Use Case
          </button>

          <button className={this.props.video.name === "Technologies" ? 'nav-button-active' : 'nav-button'} id={this.props.video.name === "Result" ? "black" : ""}>
            <div className="circle" id={this.props.video.name === "Result" ? "color-tech" : "no-color"}></div>
            Technologies
          </button>

          <button className={this.props.video.name === "Deployment" ? 'nav-button-active' : 'nav-button'} id={this.props.video.name === "Result" ? "black" : ""}>
            <div className="circle" id={this.props.video.name === "Result" ? "color-deploy" : "no-color"}></div>
            Deployment
          </button>

          <button className={this.props.video.name === "Customization" ? 'nav-button-active' : 'nav-button'} id={this.props.video.name === "Result" ? "black" : ""}>
            <div className="circle" id={this.props.video.name === "Result" ? "color-custom" : "no-color"}></div>
            Customization
          </button>

          <button className={this.props.video.name === "Result" ? 'nav-button-active' : 'nav-button'} id={this.props.video.name === "Result" ? "black" : ""}>
            <div className="circle" id={this.props.video.name === "Result" ? "color-result" : "no-color"}></div>
            Result
          </button>
        </div>


      </div>
    );
  }
}

export default AssetsRender;
