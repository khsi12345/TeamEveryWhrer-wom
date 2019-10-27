import React, { PureComponent } from 'react';
import Layout from 'components/Layout';
import CurvedBoard from 'components/CurvedBoard';
import TargetCard from 'components/TargetCard';
import Preview from './Preview';
import View from './View';
import Engage from './Engage';
import Click from './Click';
import Buy from './Buy';
import 'style/scss/dashboard.scss';

class Dashboard extends PureComponent {
  constructor() {
    super();
    this.state = {
      activeDashTab: 'Preview',
    };
  }

  moveTab = activeDashTab => {
    this.setState({ activeDashTab });
  };

  render() {
    const dashTabList = [
      { Preview: <Preview key="0" /> },
      { View: <View key="1" /> },
      { Engage: <Engage key="2" /> },
      { Click: <Click key="3" /> },
      { Buy: <Buy key="4" /> },
    ];

    const { activeDashTab } = this.state;

    return (
      <>
        <Layout>
          <CurvedBoard>
            <div className="dash_top_btn_wrapper">
              <button className="day_btn" type="button">
                <span>7 Days</span>
                <i className="fas fa-chevron-down" />
              </button>
              <button className="create_cam_btn" type="button">
                <span>+ Create Campaign</span>
              </button>
            </div>
            <div className="dash_container">
              <div className="dash_top_wrapper">
                <TargetCard numbertext="25" text="Campaign Running" />
                <TargetCard
                  numbertext="20.000"
                  text="Campaign Budget"
                  price="€2.000"
                />
                <TargetCard
                  numbertext="12.000"
                  text="Campaign Spent"
                  price="€1.200"
                />
                <TargetCard
                  numbertext="1.000"
                  text="Campaign Spend per day"
                  price="€1.000"
                />
                <TargetCard
                  numbertext="10.000"
                  text="Remaining Budget"
                  price="€1.000"
                />
                <TargetCard numbertext="12d" text="Remaining Duration" />
              </div>
              <div className="dash_main_wrapper">
                <div className="dash_tab_wrapper">
                  <div className="tab_list">
                    <ul>
                      <li
                        name="Preview"
                        className={
                          Object.keys(dashTabList[0]).join('') === activeDashTab
                            ? 'activeDash'
                            : null
                        }
                        onClick={() => this.moveTab('Preview')}
                      >
                        <p>Preview</p>
                        <span>1m 23</span>
                        <div className="green_wrapper">
                          <i className="fas fa-long-arrow-alt-up" />
                          <span>2%</span>
                        </div>
                      </li>
                      <li
                        name="View"
                        className={
                          Object.keys(dashTabList[1]).join('') === activeDashTab
                            ? 'activeDash'
                            : null
                        }
                        onClick={() => this.moveTab('View')}
                      >
                        <p>View</p>
                        <span>1m 23</span>
                        <div className="green_wrapper">
                          <i className="fas fa-long-arrow-alt-up" />
                          <span>2%</span>
                        </div>
                      </li>
                      <li
                        name="Engage"
                        className={
                          Object.keys(dashTabList[2]).join('') === activeDashTab
                            ? 'activeDash'
                            : null
                        }
                        onClick={() => this.moveTab('Engage')}
                      >
                        <p>Engage</p>
                        <span>1m 23</span>
                        <div className="green_wrapper">
                          <i className="fas fa-long-arrow-alt-up" />
                          <span>2%</span>
                        </div>
                      </li>
                      <li
                        name="Click"
                        className={
                          Object.keys(dashTabList[3]).join('') === activeDashTab
                            ? 'activeDash'
                            : null
                        }
                        onClick={() => this.moveTab('Click')}
                      >
                        <p>Click</p>
                        <span>1m 23</span>
                        <div className="green_wrapper">
                          <i className="fas fa-long-arrow-alt-up" />
                          <span>2%</span>
                        </div>
                      </li>
                      <li
                        name="Buy"
                        className={
                          Object.keys(dashTabList[4]).join('') === activeDashTab
                            ? 'activeDash'
                            : null
                        }
                        onClick={() => this.moveTab('Buy')}
                      >
                        <p>Buy</p>
                        <span>1m 23</span>
                        <div className="green_wrapper">
                          <i className="fas fa-long-arrow-alt-up" />
                          <span>2%</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="graph_area">
                    {dashTabList.map(el => {
                      return el[activeDashTab];
                    })}
                  </div>
                </div>
              </div>
            </div>
          </CurvedBoard>
        </Layout>
      </>
    );
  }
}

export default Dashboard;
