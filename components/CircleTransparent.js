import React, { PureComponent } from 'react';
import 'style/scss/circletransparent.scss';

class CircleTransparent extends PureComponent {
  render() {
    return (
      <div className="colorful_point_container">
        <div className="color_wrapper">
          <p className="color_gray_word">YEAY</p>
          <img src="/static/images/orange_circle.svg" alt="circle" />
          <div className="stick_flex">
            <div className="hide_stick" />
            <div className="gray_stick" />
          </div>
        </div>
        <div className="color_wrapper">
          <p className="color_gray_word">Submarino</p>
          <img src="/static/images/orange_circle.svg" alt="circle" />
          <div className="stick_flex">
            <div className="hide_stick" />
            <div className="gray_stick" />
          </div>
        </div>
        <div className="color_wrapper">
          <p className="color_gray_word">Submarino</p>
          <img src="/static/images/green_circle.svg" alt="circle" />
          <div className="stick_flex">
            <div className="hide_stick" />
            <div className="gray_stick" />
          </div>
        </div>
        <div className="color_wrapper">
          <p className="color_gray_word">Submarino</p>
          <img src="/static/images/pink_circle.svg" alt="circle" />
          <div className="stick_flex">
            <div className="hide_stick" />
            <div className="gray_stick" />
          </div>
        </div>
      </div>
    );
  }
}

export default CircleTransparent;
