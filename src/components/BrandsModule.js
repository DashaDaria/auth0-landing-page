import React, { Component } from 'react';
import './BrandsModule.css';
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


class BrandsModule extends Component {

  render() {
    return (
    <section className="static-container">
      <div className="brands">
      <img className="map" src={BG_map} alt="map"/>
        <h2 className="brands-title">Join thousands of companies that trust Auth0 everyday</h2>
        <div className="logos-container">
          <div className="all-logos">
            <figure className="logo"><img className="image-fit" src={atalssian} alt="atalssian"/></figure>
            <figure className="logo"><img className="image-fit" src={vmware} alt="vmware"/></figure>
            <figure className="logo"><img className="image-fit" src={polaris} alt="polaris"/></figure>
            <figure className="logo"><img className="image-fit" src={nvidia} alt="nvidia"/></figure>
            <figure className="logo"><img className="image-fit" src={amd} alt="amd"/></figure>
            <figure className="logo"><img className="image-fit" src={newscorp} alt="newscorp"/></figure>
            <figure className="logo"><img className="image-fit" src={jetairways} alt="jetairways"/></figure>
            <figure className="logo"><img className="image-fit" src={mozilla} alt="mozilla"/></figure>
            <figure className="logo"><img className="image-fit" src={harpercollins} alt="harpercollins"/></figure>
            <figure className="logo"><img className="image-fit" src={bluetooth} alt="bluetooth"/></figure>
            <figure className="logo"><img className="image-fit" src={pbs} alt="pbs"/></figure>
            <figure className="logo"><img className="image-fit" src={ms} alt="ms"/></figure>
            <figure className="logo"><img className="image-fit" src={aeromexico} alt="aeromexico"/></figure>
            <figure className="logo"><img className="image-fit" src={mazda} alt="mazda"/></figure>
          </div>
        </div>
        <aside className="see-all">See All Customers <span className="caret-right"></span></aside>
      </div>
    </section>
    );
  }
}

export default BrandsModule;
