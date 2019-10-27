import React, { PureComponent } from 'react';
import 'style/scss/createcampaign.scss';

class CreateCampaign extends PureComponent {
  render() {
    return (
      <div className="create_campaign">
        <button className={this.props.className}>+ Create Campagin</button>
      </div>
    );
  }
}
export default CreateCampaign;
