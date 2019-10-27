import React, { PureComponent } from 'react';
import Footer from 'components/Footer';
import 'style/scss/home.scss';

class Home extends PureComponent {
  render() {
    return (
      <>
        <div className="home_container">
          <div className="top_container">
            <div className="top_section">
              <div className="logo_wrapper">
                <img src="/static/images/logo_color.png" alt="logo_color" />
              </div>
              <div className="checkIn_btn">
                <h5>CHECK IN</h5>
              </div>
            </div>
            <div className="top_content_wrapper">
              <div className="logo_big">
                <img src="/static/images/logo_black.png" alt="logo_black" />
              </div>
              <div className="top_title_wrapper">
                <h1>Campaign Manager</h1>
                <h4>
                  This is the heart of the WoM system, allowing you to use your
                  brand
                  <br />
                  champions to speard the Word-of-Mouth recommendations.
                </h4>
              </div>
              <div className="content_btn_wrapper">
                <button className="learn_btn" type="button">
                  LEARN MORE
                </button>
                <button className="live_btn" type="button">
                  LIVE DEMO
                </button>
              </div>
            </div>
            <div className="screen_wrapper">
              <img
                className="screen"
                src="/static/images/screen.png"
                alt="screen"
              />
            </div>
          </div>
          <div className="mid_container">
            <div className="mid_content_wrapper">
              <div className="mid_title_wrapper">
                <h1>
                  Discover
                  <br />
                  WOM Content
                </h1>
                <h5>
                  This is the heart of the WoM system, allowing you to use your
                  brand champions to speard the Word-of-Mouth recommendations.
                </h5>
              </div>
              <div className="screen_mirror_wrapper">
                <img
                  className="screen_mirror"
                  src="/static/images/screen_mirror.png"
                  alt="mirror"
                />
              </div>
            </div>
          </div>
          <div className="home_btn_wrapper">
            <button type="button">
              <img src="/static/images/medium.svg" alt="medium" />
            </button>
            <button type="button">
              <img src="/static/images/bitcoin.svg" alt="bicoin" />
            </button>
            <button type="button">
              <img src="/static/images/instagram.svg" alt="instagram" />
            </button>
            <button type="button">
              <img src="/static/images/twitter.svg" alt="twitter" />
            </button>
            <button type="button">
              <img src="/static/images/telegram.svg" alt="telegram" />
            </button>
          </div>
        </div>
        <Footer className="footer" />
      </>
    );
  }
}

export default Home;
