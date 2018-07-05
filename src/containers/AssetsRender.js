import React, { Component } from 'react';
import './AssetsRender.css';

class AssetsRender extends Component {
  constructor() {
    super()
    this.setAutoPlayTimer = this.setAutoPlayTimer.bind(this)
    this.changeVideo = this.changeVideo.bind(this)
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
    this.setAutoPlayTimer()
  }

  componentDidUpdate() {
    this.setAutoPlayTimer()
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll)
  }

  setAutoPlayTimer() {
    if (this.props.autoplay) {
      let current_video_duration = this.props.video.duration;
      let next_video             = this.props.video.next_video;

      this.timerId = setInterval(
        () => this.changeVideo(next_video, true),
        current_video_duration
      )
    }
  }

  changeVideo(next_video, autoplay){
    clearInterval(this.timerId)
    this.props.changeVideo(next_video, autoplay)
  }

  handleScroll(event){
    // console.log('scroll', event)
  }

  renderAsset() {
    let { source, desktop, name } = this.props.video

    if (this.props.autoplay) {
      return <video src={source} className="video-autoplay-active" autoPlay muted></video>
    } else {
      return (
        <div className="desktop-svg">
          <img src={desktop} alt={name} />
        </div>
      )
    }
  }

  render() {
    let { text, name, key } = this.props.video
    return (
      <div className="video-container">

        <h1 className="auth0-intro">What's' Auth0 </h1>
        <p className="asset-text"> {text} </p>

        { this.renderAsset() }

        <div className="navigation">
          <button className={key === "usecase" ? 'nav-button-active' : 'nav-button'} id={key === "result" ? "black" : ""}
          onClick={e => this.changeVideo('usecase', false)}
          >
            <div className="circle" id={key === "result" ? "color-usecase" : "no-color"}></div>
            Use Case
          </button>

          <button className={key === "tech" ? 'nav-button-active' : 'nav-button'} id={key === "result" ? "black" : ""}
          onClick={e => this.changeVideo('tech', false)}
          >
            <div className="circle" id={key === "result" ? "color-tech" : "no-color"}></div>
            Technologies
          </button>

          <button className={key === "deploy" ? 'nav-button-active' : 'nav-button'} id={key === "result" ? "black" : ""}
          onClick={e => this.changeVideo('deploy', false)}
          >
            <div className="circle" id={key === "result" ? "color-deploy" : "no-color"}></div>
            Deployment
          </button>

          <button className={key === "custom" ? 'nav-button-active' : 'nav-button'} id={key === "result" ? "black" : ""}
          onClick={e => this.changeVideo('custom', false)}
          >
            <div className="circle" id={key === "result" ? "color-custom" : "no-color"}></div>
            Customization
          </button>

          <button className={key === "result" ? 'nav-button-active' : 'nav-button'} id={key === "result" ? "black" : ""}
          onClick={e => this.changeVideo('result', false)}
          >
            <div className="circle" id={key === "result" ? "color-result" : "no-color"}></div>
            Result
          </button>
        </div>


      </div>
    );
  }
}

export default AssetsRender;
