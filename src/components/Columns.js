import React, { Component } from 'react';
import './Columns.css';
import usa from '../images/usa.svg';
import au from '../images/au.svg';
import eu from '../images/eu.svg';
import risk from '../images/risk.svg';
import enterprise from '../images/enterprise.svg'


class Columns extends Component {

  render() {
    return (
      <section className="columns">
        <article className="left">
          <figure className="icon"><img src={risk} alt={risk}/></figure>
          <h2 className="column-header">Risk-based, security-first approach.</h2>
          <p className="column-subheader">Robust security architecture and features providing adaptive multi-layer security, designed by world-class security experts.</p>
          <aside className="subcolumns">
            <div className="subcolumn-left" id="midline">
              <div className="column-numbers">1.1B<span className="identity-color">+</span></div>
              <div className="column-fineprint">Monthly Logins</div>
              <div className="column-fineprint">Securely Authenticated</div>
            </div>
            <div className="subcolumn-right">
              <div className="column-numbers">1.3M<span className="identity-color">+</span></div>
              <div className="column-fineprint">Malicious Logins Prevented</div>
              <div className="column-fineprint">Prevented</div>
            </div>
          </aside>
          <aside className="learn-more">Learn more <span className="caret-right"></span></aside>
        </article>

        <article className="right">
          <figure className="icon"><img src={enterprise} alt={enterprise}/></figure>
          <h2 className="column-header">Enterprise-class availability. Always ready.</h2>
          <p className="column-subheader">Advanced infrastructure ensuring high availability and resiliency for its users with globally distributed data centers and full disaster recovery systems.</p>
          <aside className="subcolumns">
            <div className="subcolumn-right" id="midline">
            <div className="number-flag-container">
              <div className="column-numbers">3</div>
                <figure className="flag-container">
                  <img className="flag" id="usa" src={usa} alt="usa"/>
                  <img className="flag" src={au} alt="au"/>
                  <img className="flag" src={eu} alt="eu" />
                </figure>
              </div>
              <div className="column-fineprint">Clusters</div>
              <div className="column-fineprint" id="grey-text">(US, EU, AU)</div>
            </div>
            <div className="subcolumn-left">
              <div className="column-numbers">99.9<span className="identity-color">%</span></div>
              <div className="column-fineprint">Guaranteed SLA</div>
              <div className="column-fineprint" id="grey-text">For Prod Environments</div>
            </div>
         </aside>
         <aside className="learn-more">Learn more <span className="caret-right"></span></aside>
       </article>
     </section>
    );
  }
}

export default Columns;
