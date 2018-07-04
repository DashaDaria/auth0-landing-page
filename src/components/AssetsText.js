import React, { Component } from 'react';


class AssetText extends Component {


  render() {
    return (
        <div className={this.props.index===this.props.activeIndex ? "asset-text-active" : "asset-text"}>
          {this.props.text}
        </div>

    );
  }
}

export default AssetText;
