import React, { PureComponent } from 'react';
import Dashboard from 'pages/Dashboard';
import Discover from 'pages/Discover';
import Campaign from 'pages/Campaign';
import Overview from 'pages/Overview';
import 'style/scss/curvedboard.scss';

class CurvedBoard extends PureComponent {
  constructor() {
    super();
    this.state = {
      activeTab: 'Campaign',
    };
  }

  switchTab = activeTab => {
    this.setState({ activeTab });
  };

  render() {
    const tabList = [
      { Dashboard: <Dashboard key="0" /> },
      { Discover: <Discover key="1" /> },
      { Campaign: <Campaign key="2" /> },
      { Overview: <Overview key="3" /> },
    ];
    const { activeTab } = this.state;
    return (
      <div className="curved_wrapper">
        <div className="tab_wrapper">
          <ul>
            <li
              name="Dashboard"
              className={
                Object.keys(tabList[0]).join('') === activeTab ? 'active' : null
              }
              onClick={() => this.switchTab('Dashboard')}
            >
              Dashboard
            </li>
            <li
              name="Discover"
              className={
                Object.keys(tabList[1]).join('') === activeTab ? 'active' : null
              }
              onClick={() => this.switchTab('Discover')}
            >
              Discover
            </li>
            <li
              name="Campaign"
              className={
                Object.keys(tabList[2]).join('') === activeTab ? 'active' : null
              }
              onClick={() => this.switchTab('Campaign')}
            >
              Campaign
            </li>
            <li
              name="Overview"
              className={
                Object.keys(tabList[3]).join('') === activeTab ? 'active' : null
              }
              onClick={() => this.switchTab('Overview')}
            >
              Overview
            </li>
          </ul>
        </div>

        {/* {tabList.map(el => {
            return el[activeTab];
          })} */}
        {this.props.children}
      </div>
    );
  }
}

export default CurvedBoard;
