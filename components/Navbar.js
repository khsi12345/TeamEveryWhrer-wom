import React, { PureComponent } from 'react';
import 'style/scss/navbar.scss';

class Navbar extends PureComponent {
  render() {
    return (
      <div className="navbar">
        <div className="logo_title">
          <div className="adidas_logo">
            <a href="">
              <div className="logo" />
            </a>
          </div>
          <div className="title">
            <header>{this.props.name}</header>
          </div>
        </div>
        <div className="user_info_wrap">
          <div className="user_info_box">
            <div className="user_name">John Doe</div>
            <div className="user_state">Logout</div>
          </div>
          <div className="user_profile_img">
            <a href="">
              <img src="/static/images/oval.png" className="profile_img" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default Navbar;
