import React, { Component } from 'react';
import './NavPanel.css';
import NavButton from './NavButton';

class NavPanel extends Component {
  constructor(){
    super()
    this.state = {
      
    }
  }

  handleChange(){
    console.log(this)
  }


  render() {
    return (

        <div className="navigation">
          <NavButton id="usecase" label="Use Cases" onChange={this.handleChange} />
          <NavButton id="tech" label="Technologies"/>
          <NavButton id="deploy" label="Deployment"/>
          <NavButton id="custom" label="Customization"/>
          <NavButton id="result" label="Result"/>
        </div>

    );
  }
}

export default NavPanel;
