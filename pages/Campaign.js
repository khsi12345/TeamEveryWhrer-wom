<<<<<<< HEAD
import React, { PureComponent } from "react";

class Campaign extends PureComponent {
  render() {
    return <div> 캠페인</div>;
=======
import React, { PureComponent } from 'react';
import TargetCard from 'components/TargetCard';
import CreateCampaign from 'components/CreateCampaign';
import PageNumber from 'components/PageNumber';
import CampaignItem from 'components/CampaignItem';
import data from 'data/data.json';
import data2 from 'data/data2.json';
import 'style/scss/campaign.scss';
import CampaignMain from './CampaignSummary/CampaignMain';
import SummaryNone from './CampaignSummary/SummaryNone';
import Layout from '../components/Layout';
import CurvedBoard from '../components/CurvedBoard';

class Campaign extends PureComponent {
  constructor() {
    super();

    this.state = {
      card: data.cardList,
      campaign: data2.campaignList,
    };
  }
  // static async getInitialProps() {
  //   console.log('Get Initial Props');
  //   // console.log(initialProps());

  //   return {
  //     card: data.cardList,
  //     campaign: data2.campaignList,
  //   };
  // }

  render() {
    // console.log(this.state.campaign);
    return (
      <Layout
        img="/static/images/photo-1511746315387-c-4-a-76990-fdce.png"
        className="big_footer"
      >
        <CurvedBoard>
          <div className="campaign">
            {/* <CampaignMain /> */}

            {/* 페이지에 list item이 없는 페이지 */}
            {/* <div className="card_list">
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
            <div className="line" />
            <SummaryNone /> */}

            {/* 페이지에 list item이 있는 페이지 */}
            <CreateCampaign className="create_btn" />
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
            <div className="line" />
            <div className="item_list_title">
              <table>
                <thead className="thead">
                  <tr>
                    <th className="title long_padding">Campaign Name</th>
                    <th className="title long_padding">Product</th>
                    <th className="title long_padding">Budget</th>
                    <th className="title short_padding">Spen</th>
                    <th className="title short_padding">Preview</th>
                    <th className="title short_padding">View</th>
                    <th className="title short_padding">Engage</th>
                    <th className="title short_padding">Click</th>
                    <th className="title short_padding">Buy</th>
                  </tr>
                </thead>
                <div className="blank"> </div>
                <tbody>
                  {this.state.campaign !== undefined &&
                    this.state.campaign.map(el => {
                      // console.log('s', this.state.campaign);
                      return <CampaignItem data={el} def={this.state.dif} />;
                    })}
                </tbody>
              </table>
            </div>
            <div className="page_number">
              <PageNumber />
            </div>
          </div>
        </CurvedBoard>
      </Layout>
    );
>>>>>>> bdf63b204c7c15c8f96debffff35872bef8bcf4f
  }
}

export default Campaign;
