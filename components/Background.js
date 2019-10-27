import React, { PureComponent } from 'react';
import Navbar from './Navbar';
import 'style/scss/background.scss';

class Background extends PureComponent {
  render() {
    return (
      <>
        <Navbar black={this.props.black} name={this.props.name} />
        <div className="background twotwo">
          <img src={this.props.img} />
        </div>
      </>
    );
  }
}
export default Background;
