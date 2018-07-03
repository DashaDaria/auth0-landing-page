import React, { Component } from 'react';
import './NavButton.css'

class NavButton extends Component {

  render() {
    return (

      <button
        className={this.props.index === this.props.activeIndex ? 'nav-button-clicked' : 'nav-button'}
        onClick={this.props.onClick} >
        <div className="circle"></div>
        {this.props.label}
      </button>

    );
  }
}

export default NavButton;
