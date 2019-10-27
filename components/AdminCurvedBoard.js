import React, { PureComponent } from 'react';
import Organisation from 'pages/Admin/Organisation';
import User from 'pages/Admin/User';
import 'style/scss/admincurvedboard.scss';

class AdminCurvedBoard extends PureComponent {
  constructor() {
    super();
    this.state = {
      activeTab: 'User',
    };
  }

  switchTab = activeTab => {
    this.setState({ activeTab });
  };

  render() {
    const { activeTab } = this.state;
    return (
      <div className="admin_curved_wrapper">
        <div className="admin_tab_wrapper">
          <ul>
            <li
              name="Organisation"
              className={activeTab === 'Organisation' ? 'admin_active' : null}
              onClick={() => this.switchTab('Organisation')}
            >
              Organisation
            </li>
            <li
              name="User"
              className={activeTab === 'User' ? 'admin_active' : null}
              onClick={() => this.switchTab('User')}
            >
              User
            </li>
          </ul>
        </div>
        {this.props.children}
      </div>
    );
  }
}
export default AdminCurvedBoard;
