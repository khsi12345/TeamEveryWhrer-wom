import React, { PureComponent } from 'react';
import 'style/scss/login.scss';

class Login extends PureComponent {
  render() {
    return (
      <>
        <div className="login_page">
          <div className="login_wrap">
            {/* <img src="/static/images/photo-1511746315387-c-4-a-76990-fdce.png" /> */}
            <div className="login_info_wrap">
              <div className="login_info_container">
                <div href="" className="adidas_logo">
                  <a href="">
                    <img
                      alt="adidas logo"
                      src="static/images/adidas-logo-6-copy.png"
                      srcSet="static/images/adidas-logo-6-copy@2x.png 2x,
                        static/images/adidas-logo-6-copy@3x.png 3x"
                      className="logo"
                    />
                  </a>
                </div>
                <div className="title_box">
                  <p className="title">Hello @adidas</p>
                  <p className="subtitle">to discover & manage WOM Content</p>
                </div>
                <div className="info_wrap">
                  <div className="mail_box">
                    <p className="mail">Mail</p>
                    <input className="mail_input" />
                  </div>
                  <div className="password_box">
                    <p className="password">Password</p>
                    <input className="password_input" />
                  </div>
                  <div className="forgot_pw">
                    <a href="">Forgot Password?</a>
                  </div>
                  <button className="login_btn">LOGIN</button>
                </div>
              </div>
            </div>
            <div className="account">
              <span>New here?</span>
              <span className="account_text_2">Create an Account now!</span>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Login;
