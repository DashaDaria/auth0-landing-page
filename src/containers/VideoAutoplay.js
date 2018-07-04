import React, { Component } from 'react';
import './VideoAutoplay.css';

class VideoAutoplay extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    let video_duration = this.props.video.duration;
    let next_video     = this.props.video.next_video;

    this.interval = setInterval(() => {
      this.changeVideo(next_video)
    }, video_duration)
  }

  changeVideo(next_video) {
    clearInterval(this.interval)
    this.props.changeVideo(next_video)
  }

  render() {
    return (
      <div>
        <video className="video-autoplay-active" autoPlay muted>
          <source src={this.props.video.source} type='video/mp4'/>
        </video>
      </div>
    );
  }
}

export default VideoAutoplay;
