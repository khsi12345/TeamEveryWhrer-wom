import React, { PureComponent } from 'react';
import TargetCard from 'components/TargetCard';
import Filter from 'components/Filter';
import Toggle from 'components/Toggle';
import Selector from 'components/Selector';
import CardTransparent from 'components/CardTransparent';
import data from 'data/data.json';
import data2 from 'data/data2.json';
import CardItemButton from './CardItemButton';
import 'style/scss/campaignmain.scss';

class SummaryNone extends PureComponent {
  constructor() {
    super();

    this.state = {
      card: data.cardList,
      campaign: data2.campaignList,
      def: 'sss',
    };
  }

  render() {
    return (
      <div className="campaign_main">
        <div className="card_list">
          {this.state.card.map(el => {
            return (
              <TargetCard
                numbertext={el.numberText}
                text={el.textDes}
                price={el.value}
              />
            );
          })}
        </div>
        <div className="cn_box">
          <span className="cn">Campaign</span>
          <span className="cn">Niterunner</span>
        </div>
        <div className="filter_custom">
          <Filter method="Hashtag Filter" />
        </div>
        <div className="sp_l lan">
          <span>Spoken language</span>
          <Toggle />
          <Toggle />
          <Toggle />
          <Toggle />
          <Toggle />
          {/* <Selector /> */}
        </div>
        <div className="su_l lan">
          <span>Subtitle language</span>
          <Toggle />
          <Toggle />
          <Toggle />
          <Toggle />
          <Toggle />
          <Toggle />
          {/* <Selector /> */}
        </div>
        <div className="main_left">
          <div className="custom">
            <CardTransparent />
          </div>
          <div className="img">
            <CardItemButton name="REMOVE" className="item_btn_big" />
          </div>

          <div className="side">
            <div className="financials">Financials</div>
            <div className="sale">Estimated cost per sale:</div>
            <div className="side_content_flex">
              <img src="/static/images/wom-token-logo.png" />
              <div className="side_content">
                <div className="deco">31.03</div>
                <div className="est">€ 3.10 est</div>
              </div>
            </div>
            <div className="confi">Confidence:</div>
            <div className="pers">85%</div>
            <div className="budget">Campaign Budget:</div>
          </div>
        </div>
        <div className="main_right">
          <div className="main line" />
          <div className="card_item_list">
            <div className="custom">
              <CardTransparent />
              <div className="img">
                <CardItemButton name="Add" className="item_btn" />
              </div>
            </div>
            <div className="custom">
              <CardTransparent />
              <div className="img">
                <CardItemButton name="Add" className="item_btn" />
              </div>
            </div>

            <div className="custom">
              <CardTransparent />
              <div className="img">
                <CardItemButton name="Add" className="item_btn" />
              </div>
            </div>
            <div className="custom">
              <CardTransparent />
              <div className="img">
                <CardItemButton name="Add" className="item_btn" />
              </div>
            </div>
          </div>
          <div className="content">Similar Content</div>
          <div className="main line bottom" />
          <div className="text">Channels</div>
          <table>
            <thead>
              <th>Branded Retail</th>
              <th>Retail Partners</th>
              <th>Retail Affiliates</th>
              <th>Branded Aware</th>
              <th>Bran</th>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span>ADIDAS COM</span>
                  <Toggle />
                </td>
                <td>
                  K-MART COM
                  <Toggle />
                </td>
                <td>
                  YEAY COM
                  <Toggle />
                </td>
                <td>
                  KADEWE COM
                  <Toggle />
                </td>
                <td>FOOT</td>
              </tr>
              <tr>
                <td>
                  ADIDAS AU
                  <Toggle />
                </td>
                <td />
                <td />
                <td>
                  ADIDAS BER S...
                  <Toggle />
                </td>
                <td>FOOT</td>
              </tr>
              <tr>
                <td>
                  ADIDAS DE
                  <Toggle />
                </td>
                <td />
                <td />
                <td />
                <td />
              </tr>
            </tbody>
          </table>
          <div className="main line bottom" />
          <div className="text">Options</div>
          <div className="main_option">
            <div>
              <span>Satched Override</span>
              <Toggle />
            </div>
            <div>
              <span>Must Watch</span>
              <Toggle />
            </div>
            <div className="boost">
              <span>Boost Content</span>
              <span className="option_div">{`< 1 >`}</span>
            </div>
            <div className="boost">
              <span>Boost Creator</span>
              <span className="option_div">{`< 1 >`}</span>
            </div>
          </div>
          <div className="main line bottom" />
          <div className="text">Hashtags</div>
          <div className="hashtag_wrap">
            <span className="hashtag">
              <span className="hashtag_left">
                <span className="hashtag_left_text">#ADIDAS</span>
                <span className="hashtag_left_text">(2k5)</span>
              </span>
              <span className="hashtag_right">
                <span className="hashtag_right_text">{`< 1 >`}</span>
              </span>
            </span>
            <span className="hashtag">
              <span className="hashtag_left">
                <span className="hashtag_left_text">#SPORTSHOE</span>
                <span className="hashtag_left_text">(2k5)</span>
              </span>
              <span className="hashtag_right">
                <span className="hashtag_right_text">{`< 1 >`}</span>
              </span>
            </span>
            <span className="hashtag">
              <span className="hashtag_left">
                <span className="hashtag_left_text">#STREETWARE</span>
                <span className="hashtag_left_text">(2k5)</span>
              </span>
              <span className="hashtag_right">
                <span className="hashtag_right_text">{`< 1 >`}</span>
              </span>
            </span>
          </div>
          <div className="main line bottom" />
          <div className="main_bottom">
            <span>Set budget to</span>
            <div className="temp">
              <span className="num">20.000</span>
              <span className="tempAbsolute" style={{ fontSize: '26px' }}>
                € 2000 est
              </span>
            </div>
            <span>Starting on</span>
            <span className="num">25/07/19</span>
            <span>For</span>
            <span className="num">45</span>
            <span>Days</span>
            <span className="commit">COMMIT</span>
          </div>
        </div>

        <div className="campaign_main_wrap" />
      </div>
    );
  }
}
export default SummaryNone;
