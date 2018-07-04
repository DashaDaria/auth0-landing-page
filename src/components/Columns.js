import React, { Component } from 'react';
import './Columns.css';
import usa from '../images/usa.svg';
import au from '../images/au.svg';
import eu from '../images/eu.svg';

class Columns extends Component {

  render() {
    return (


        <div className="columns">
          <div className="left">
            <div className="column-header">Risk-based,<br/> security-first approach</div>
            <div className="column-subheader">Robust security architecture and features providing adaptive multi-layer security, designed by world-class security experts.</div>
            <div className="subcolumns">
              <div className="subcolumn-left">
                <div className="column-numbers">1.1B<span className="identity-color">+</span></div>
                <div className="column-fineprint">Monthly Logins</div>
                <div className="column-fineprint">Securely Authenticated</div>
                <div className="learn-more">Learn more <span className="caret-right"></span></div>
              </div>
              <div className="subcolumn-right">
                <div className="column-numbers">1.3M<span className="identity-color">+</span></div>
                <div className="column-fineprint">Malicious Logins Prevented</div>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="column-header">Enterprise-class availability. Always ready.</div>
            <div className="column-subheader">Advanced infrastructure ensuring high availability and resiliency for its users with globally distributed data centers and full disaster recovery systems.</div>

            <div className="subcolumns">
              <div className="subcolumn-right">

              <div className="number-flag-container">
                <div className="column-numbers">3</div>
                  <div className="flag-container">
                    <img className="flag" src={usa} alt="usa"/>
                    <img className="flag" src={au} alt="au"/>
                    <img className="flag" src={eu} alt="eu" />
                  </div>


                </div>

                <div className="column-fineprint">Clusters</div>
                <div className="column-fineprint" id="grey-text">(US, EU, AU)</div>
                <div className="learn-more">Learn more <span className="caret-right"></span></div>
              </div>

              <div className="subcolumn-left">
                <div className="column-numbers">99.9<span className="identity-color">%</span></div>
                <div className="column-fineprint">Guaranteed SLA</div>
                <div className="column-fineprint" id="grey-text">For Prod Environments</div>
              </div>
            </div>


        </div>
      </div>

    );
  }
}

export default Columns;
