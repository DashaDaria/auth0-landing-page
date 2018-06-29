import React, { Component } from 'react';
import './Static.css';
import atalssian from '../images/atalssian.svg';

class Static extends Component {

  render() {
    return (
    <div className="static-container">
      <div className="brands">
        <div className="brands-title">Join thousands of companies that trust Auth0 everyday</div>
        <div className="logos-container">

          <div className="logo-row">
            <div className="logo"><img src={atalssian} alt="atalssian"/></div>
            <div className="logo"><img src={atalssian} alt="atalssian"/></div>
            <div className="logo"><img src={atalssian} alt="atalssian"/></div>
            <div className="logo"><img src={atalssian} alt="atalssian"/></div>
            <div className="logo"><img src={atalssian} alt="atalssian"/></div>
          </div>

          <div className="logo-row">
            <div className="logo"><img src={atalssian} alt="atalssian"/></div>
            <div className="logo"><img src={atalssian} alt="atalssian"/></div>
            <div className="logo"><img src={atalssian} alt="atalssian"/></div>
            <div className="logo"><img src={atalssian} alt="atalssian"/></div>
            <div className="logo"><img src={atalssian} alt="atalssian"/></div>
          </div>

          <div className="logo-row">
            <div className="logo"><img src={atalssian} alt="atalssian"/></div>
            <div className="logo"><img src={atalssian} alt="atalssian"/></div>
            <div className="logo"><img src={atalssian} alt="atalssian"/></div>
            <div className="logo"><img src={atalssian} alt="atalssian"/></div>
          </div>

        </div>
        <div className="see-all">See All Customers</div>

      </div>
    </div>
    );
  }
}

export default Static;
