import React, { PureComponent } from 'react';
import 'style/scss/footerShort.scss';

class FooterShort extends PureComponent {
  render() {
    return (
      <>
        <div className="footer">
          <div className="bg">
            <footer>
              <div className="footer_wrap">
                <h1>WOM</h1>
                <div className="privacy_policy">
                  <a className="" href="">
                    PRIVACY POLICY
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PRESS</span>
                  </a>
                </div>
                <div className="footer_des">
                  <p>© WOM Token Ltd. All Rights reserved</p>
                  RISK DISCLAIMER: The information contained on this website is
                  not investment advice. Investing in token sales is a high-risk
                  endeavor and one for which
                  <br />
                  we strongly advise you to consult with your registered
                  investment advisor.
                </div>
              </div>
            </footer>
          </div>
        </div>
      </>
    );
  }
}
export default FooterShort;
