import React, { PureComponent } from 'react';
import 'style/scss/campaign.scss';
// import 'style/scss/campaignitem.scss';

class CampaignItem extends PureComponent {
  render() {
    // console.log('item', this.props.data, this.props.dif);
    return (
      // <div />
      <>
        <tr className="item" id="it">
          <td className="tbody long_padding name">
            {console.log('name', this.props.data.campaign_name)}
            {this.props.data.campaign_name}
          </td>
          {/* <td className="tbody tr" /> */}
          <td className="tbody long_padding product">
            {this.props.data.product}
            <br />
            <img src={this.props.data.product_img1} className="product_img" />
          </td>
          <td className="tbody long_padding budget">
            {this.props.data.budget}
          </td>
          <td className="tbody short_padding spen">
            {this.props.data.spend}
            <br />
            {this.props.data.spend_percent}
          </td>
          <td className="tbody short_padding preview">
            {this.props.data.preview}
            <br />
            <img src={this.props.data.preview_percent_img1} />
          </td>
          <td className="tbody short_padding view">
            {this.props.data.view}
            <br />
            <img src={this.props.data.view_percent_img1} />
          </td>
          <td className="tbody short_padding engage">
            {this.props.data.engage}
            <br />
            <img src={this.props.data.engage_percent_img1} />
          </td>
          <td className="tbody short_padding click">
            {this.props.data.click}
            <br />
            <img src={this.props.data.click_percent_img1} />
          </td>
          <td className="tbody short_padding buy">
            {this.props.data.buy}
            <br />
            <img src={this.props.data.buy_percent_img1} />
          </td>
          <div className="remove_btn_box">
            <button className="remove_btn">X REMOVE</button>
          </div>
          <div className="detail_btn_box">
            <button className="detail_btn">DETAIL</button>
          </div>
        </tr>
        <tr>
          <td>&nbsp;</td>
        </tr>
        {/* </tbody> */}
      </>
    );
  }
}
export default CampaignItem;
