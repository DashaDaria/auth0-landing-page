import React, { Component } from 'react';
import './AssetsRender.css';
import MediaQuery from 'react-responsive';
import TrackVisibility from 'react-on-screen';

class AssetsRender extends Component {
  constructor() {
    super()
    this.setAutoPlayTimer = this.setAutoPlayTimer.bind(this)
    this.changeVideo = this.changeVideo.bind(this)
  }

  componentDidMount() {
      this.setAutoPlayTimer()
  }

  componentDidUpdate() {
    this.setAutoPlayTimer()
  }

  setAutoPlayTimer() {
    if (this.props.autoplay) {
      let current_video_duration = this.props.video.duration;
      let next_video             = this.props.video.next_video;

      if(this.props.video.key === "custom"){
        this.timerId = setInterval(
          () => this.changeVideo(next_video, false),
          current_video_duration
        )
      } else {
        this.timerId = setInterval(
          () => this.changeVideo(next_video, true),
          current_video_duration
        )
      }
    }
  }

  changeVideo(next_video, autoplay){
    clearInterval(this.timerId)
    this.props.changeVideo(next_video, autoplay)
  }


  render() {
    let { text, key, desktop, mobile, name, source } = this.props.video
    return (
      <div className="video-container">

        <h1 className="auth0-intro">What's Auth0 </h1>
        <p className="asset-text"> {text} </p>


        <MediaQuery maxWidth={960}>
        {(matches) => {
          if(matches && !this.props.autoplay){
            return <div className="mobile-svg"><img src={mobile} alt={name} /></div>
          } else if(matches && this.props.autoplay){
            return <div className="mobile-svg"><img src={desktop} alt={name} /></div>
          } else if(!matches && !this.props.autoplay){
            return <div className="desktop-svg"><img src={desktop} alt={name} /></div>
          } else {
            return <video src={source} className="video-autoplay-active" autoPlay muted></video>
          }
        }}
        </MediaQuery>


        <div className="navigation">
          <button className={key === "usecase" ? 'nav-button-active' : 'nav-button'} id={key === "result" ? "black" : ""}
          onClick={e => this.changeVideo('usecase', false)}
          >
        <MediaQuery maxWidth={700}>
            {(matches) => {
              if(matches){
                return <div className="circle" id="color-usecase"></div>
              } else {
                return <div className="circle" id={key === "result" ? "color-usecase" : "no-color"}></div>
              }
            }}
          </MediaQuery>
            Use Case
          </button>

          <button className={key === "tech" ? 'nav-button-active' : 'nav-button'} id={key === "result" ? "black" : ""}
          onClick={e => this.changeVideo('tech', false)}
          >
          <MediaQuery maxWidth={700}>
              {(matches) => {
                if(matches){
                  return <div className="circle" id="color-tech"></div>
                } else {
                  return <div className="circle" id={key === "result" ? "color-tech" : "no-color"}></div>
                }
              }}
            </MediaQuery>
            Technologies
          </button>

          <button className={key === "deploy" ? 'nav-button-active' : 'nav-button'} id={key === "result" ? "black" : ""}
          onClick={e => this.changeVideo('deploy', false)}
          >
          <MediaQuery maxWidth={700}>
              {(matches) => {
                if(matches){
                  return <div className="circle" id="color-deploy"></div>
                } else {
                  return <div className="circle" id={key === "result" ? "color-deploy" : "no-color"}></div>
                }
              }}
            </MediaQuery>
            Deployment
          </button>

          <button className={key === "custom" ? 'nav-button-active' : 'nav-button'} id={key === "result" ? "black" : ""}
          onClick={e => this.changeVideo('custom', false)}
          >
          <MediaQuery maxWidth={700}>
              {(matches) => {
                if(matches){
                  return <div className="circle" id="color-custom"></div>
                } else {
                  return <div className="circle" id={key === "result" ? "color-custom" : "no-color"}></div>
                }
              }}
            </MediaQuery>
            Customization
          </button>

          <button className={key === "result" ? 'nav-button-active' : 'nav-button'} id={key === "result" ? "black" : ""}
          onClick={e => this.changeVideo('result', false)}
          >
          <MediaQuery maxWidth={700}>
              {(matches) => {
                if(matches){
                  return <div className="circle" id="color-result"></div>
                } else {
                  return <div className="circle" id={key === "result" ? "color-result" : "no-color"}></div>
                }
              }}
            </MediaQuery>

            Result
          </button>
        </div>
      </div>
    );
  }
}

export default AssetsRender;
