import React, { Component } from 'react';
import './Columns.css';

class Columns extends Component {

  render() {
    return (


        <div className="columns">
          <div className="left">
            <div className="column-header">Risk-based, security-first approach</div>
          </div>
          <div className="right">
            <div className="column-header">Enterprise-class availability. Always ready.</div>
          </div>
        </div>

    );
  }
}

export default Columns;
