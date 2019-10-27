import React, { PureComponent } from 'react';
import 'style/scss/footer.scss';

class Footer extends PureComponent {
  render() {
    return (
      <>
        <div className={this.props.className}>
          <div className="bg">
            <footer>
              <div className="footer_wrap">
                <h1>
                  <img
                    alt="WOM Footer logo"
                    src="/static/images/5-b-0420645832098816-a-30187-wom-logo-web-1.png"
                    //   srcSet="/static/images/5-b-0420645832098816-a-30187-wom-logo-web-1@2x.png,
                    // /static/images/5-b-0420645832098816-a-30187-wom-logo-web-1@3x.png"
                  />
                </h1>
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
export default Footer;
