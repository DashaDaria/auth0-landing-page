import React, { Component } from 'react';
import './AssetsRender.css';

class AssetsRender extends Component {
  constructor() {
    super()

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
      <div>
        <video src={this.props.video.source} className="video-autoplay-active" autoPlay muted></video>
      </div>
    );
  }
}

export default AssetsRender;
