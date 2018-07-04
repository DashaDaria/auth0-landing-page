import React, { Component } from 'react';
import './VideoAutoplay.css';

class VideoAutoplay extends Component {

  render() {
    return (
      <video className={this.props.index===this.props.activeIndex ? "video-autoplay-active" : "video"} autoPlay loop muted>
        <source src={this.props.video} type='video/mp4'/>
      </video>
    );
  }
}

export default VideoAutoplay;
