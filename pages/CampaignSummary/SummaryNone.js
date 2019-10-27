import React, { PureComponent } from 'react';
import CreateCampaign from 'components/CreateCampaign';
import 'style/scss/campaignnone.scss';

class SummaryNone extends PureComponent {
  render() {
    return (
      <div className="campaign_none">
        {/* <div className="line" /> */}
        <div className="campaign_none_wrap">
          <div className="no_campaigns">No Campaigns</div>
          <div className="text">
            It looks like you haven't created any Campaigns in this
          </div>
          <div className="text">Ad Account yet.</div>
          <CreateCampaign className="create_btn" />
          <div>
            <CreateCampaign className="btn" />
          </div>
        </div>
      </div>
    );
  }
}
export default SummaryNone;
