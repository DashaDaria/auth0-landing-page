import React, { Component } from 'react';
import './VideoAutoplay.css';

class VideoAutoplay extends Component {

  render() {
    return (
      <video className="video-autoplay-active" autoPlay muted>
        <source src={this.props.source} type='video/mp4'/>
      </video>
    );
  }
}

export default VideoAutoplay;
