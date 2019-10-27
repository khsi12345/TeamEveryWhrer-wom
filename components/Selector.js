import React, { PureComponent } from 'react';
import 'style/scss/selector.scss';

class Selector extends PureComponent {
  render() {
    return (
      <div className="select">
        <select name="slct" id="slct">
          <option selected disabled>
            OTHER
          </option>
          <option value="1">SHOES</option>
          <option value="2">HOOD</option>
          <option value="3">BALL</option>
        </select>
        <div className="select_btn">
          <div className="box">V</div>
        </div>
      </div>
    );
  }
}
export default Selector;
