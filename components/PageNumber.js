import React, { PureComponent } from 'react';
import 'style/scss/pagenumber.scss';

class PageNumber extends PureComponent {
  getListNum = () => {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  };

  render() {
    return (
      <div className="pagenumber_container">
        <div className="circle_space">
          <span className="previous">{`<`}</span>
        </div>
        <ul>
          {this.getListNum().map(el => (
            <li key={el}>{el}</li>
          ))}
        </ul>
        <div className="circle_space">
          <span className="next">{`>`}</span>
        </div>
      </div>
    );
  }
}
export default PageNumber;
