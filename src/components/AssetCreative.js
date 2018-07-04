import React, { Component } from 'react';
import './AssetText.css';

class AssetCreative extends Component {

  render() {
    return (
      <div className={this.props.index===this.props.activeIndex ? "desktop-svg-active" : "desktop-svg"}>
        <img src={this.props.svg} alt="svg"/>
      </div>

    );
  }
}

export default AssetCreative;
