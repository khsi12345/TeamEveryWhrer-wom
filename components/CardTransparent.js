import React, { PureComponent } from 'react';
import Link from 'next/link';
import 'style/scss/cardtransparent.scss';

class CardTransparent extends PureComponent {
  render() {
    return (
      <div className="transparent_shell">
        <div className="shell_top">
          <div className="emoticon_wrapper">
            <img src="/static/images/emoticon.png" alt="emoticon" />
          </div>
          <p>P: 102M V: 84% E: 92% C:84% B; 72%(25%) </p>
        </div>
        <div className="shell_mid_empty" />
        <div className="shell_bottom">
          <ul className="list">
            <li className="icon_list">
              <div className="small_circle">
                <img src="/static/images/tagicon.png" alt="tag" />
              </div>
              <span>Adidas</span>
            </li>
            <li className="icon_list">
              <div className="small_circle">
                <img src="/static/images/shoesicon.png" alt="shoes" />
              </div>
              <span>Shoes</span>
            </li>
            <li className="icon_list">
              <div className="small_circle">
                <img src="/static/images/sporticon.png" alt="sport" />
              </div>
              <span>Sport Shoes</span>
            </li>
            <li className="icon_list">
              <div className="small_circle">
                <img src="/static/images/supericon.png" alt="super" />
              </div>
              <span>Superstar</span>
            </li>
          </ul>
          <p>Redesigned from scratch and completely revised.</p>
        </div>
      </div>
    );
  }
}
export default CardTransparent;
