import React, { PureComponent } from 'react';
import 'style/scss/targetcard.scss';

class TargetCard extends PureComponent {
  render() {
    return (
      <div className="target_card">
        <div className="card_wrap">
          <div className="number_text">{this.props.numbertext}</div>
          <div className="text_des">
            <div className="text">{this.props.text}</div>
            <div className="euro">{this.props.price}</div>
          </div>
        </div>
      </div>
    );
  }
}
export default TargetCard;
