import React, { Component } from 'react';
import './Static.css';
import aeromexico from '../images/aeromexico.svg';
import amd from '../images/amd.svg';
import atalssian from '../images/atalssian.svg';
import bluetooth from '../images/bluetooth.svg';
import harpercollins from '../images/harpercollins.svg';
import jetairways from '../images/jetairways.svg';
import ms from '../images/ms.svg';
import mazda from '../images/mazda.svg';
import mozilla from '../images/mozilla.svg';
import newscorp from '../images/newscorp.svg';
import nvidia from '../images/nvidia.svg';
import pbs from '../images/pbs.svg';
import polaris from '../images/polaris.svg';
import vmware from '../images/vmware.jpg';
import BG_map from '../images/BG_map.svg';


class Static extends Component {

  render() {
    return (
    <div className="static-container">
      <div className="brands">
      <img className="map" src={BG_map} alt="map"/>
        <div className="brands-title">Join thousands of companies that trust Auth0 everyday</div>
        <div className="logos-container">

          <div className="logo-row">
            <div className="logo"><img className="image-fit" src={atalssian} alt="atalssian"/></div>
            <div className="logo"><img className="image-fit" src={vmware} alt="vmware"/></div>
            <div className="logo"><img className="image-fit" src={polaris} alt="polaris"/></div>
            <div className="logo"><img className="image-fit" src={nvidia} alt="nvidia"/></div>
            <div className="logo"><img className="image-fit" src={amd} alt="amd"/></div>
          </div>

          <div className="logo-row">
            <div className="logo"><img className="image-fit" src={newscorp} alt="newscorp"/></div>
            <div className="logo"><img className="image-fit" src={jetairways} alt="jetairways"/></div>
            <div className="logo"><img className="image-fit" src={mozilla} alt="mozilla"/></div>
            <div className="logo"><img className="image-fit" src={harpercollins} alt="harpercollins"/></div>
            <div className="logo"><img className="image-fit" src={bluetooth} alt="bluetooth"/></div>
          </div>

          <div className="logo-row">
            <div className="logo"><img className="image-fit" src={pbs} alt="pbs"/></div>
            <div className="logo"><img className="image-fit" src={ms} alt="ms"/></div>
            <div className="logo"><img className="image-fit" src={aeromexico} alt="aeromexico"/></div>
            <div className="logo"><img className="image-fit" src={mazda} alt="mazda"/></div>
          </div>

        </div>
        <div className="see-all">See All Customers <span className="caret-right"></span></div>

      </div>
    </div>
    );
  }
}

export default Static;
