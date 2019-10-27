import React, { PureComponent } from 'react';
import 'style/scss/toggle.scss';

class Toggle extends PureComponent {
  render() {
    return (
      <div className="toggle_box">
        <div className="toggle">
          <input type="checkbox" />
          <span className="btn" />
          <span className="labels">
            <span className="on">{this.props.name1}</span>
            <span className="off">{this.props.name2}</span>
          </span>
          <span className="bg" />
        </div>
      </div>
    );
  }
}
export default Toggle;
