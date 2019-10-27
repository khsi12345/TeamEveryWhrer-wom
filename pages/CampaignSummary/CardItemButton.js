import React, { PureComponent } from 'react';
import 'style/scss/carditembutton.scss';

class CardItemButton extends PureComponent {
  render() {
    return (
      <div className={this.props.className}>
        <button className="btn">+{this.props.name}        </button>
      </div>
    );
  }
}
export default CardItemButton;
