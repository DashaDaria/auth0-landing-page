import React, { Component } from 'react';
import './NavButton.css'

class NavButton extends Component {
  constructor(){
    super()
    this.state = { active: false }
    this.userClick = this.userClick.bind(this)
  }

  userClick(e){
    this.setState({ active: true})
    console.log(this.props.id)
  }

  render() {
    return (

          <button className={this.state.active ? 'nav-button-clicked' : 'nav-button'}
            onClick={this.userClick}
            id={this.props.id}
            >
            <div className="circle"></div>
            {this.props.label}
          </button>

    );
  }
}

export default NavButton;
