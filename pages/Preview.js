import React, { PureComponent } from "react";
import "style/scss/preview.scss";
import PreviewCombined from "./PreviewCombined";
import PreviewSeparated from "./PreviewSeparated";

class Preview extends PureComponent {
  constructor() {
    super();
    this.state = {
      clicked: true
    };
  }

  onClickHandler = () => {
    const { clicked } = this.state;
    if (!clicked) {
      this.setState({ clicked: true });
    } else {
      this.setState({ clicked: false });
    }
  };

  render() {
    const { clicked } = this.state;
    return (
      <>
        <div className="empty_space" />
        <div className="inside_slap_btn ">
          <input
            id="toggle-on"
            className="toggle toggle-left left_radius"
            name="toggle"
            value="false"
            type="radio"
            defaultChecked
            onClick={this.onClickHandler}
          />
          <label htmlFor="toggle-on" className="btn left_radius">
            Combined
          </label>
          <input
            id="toggle-off"
            className="toggle toggle-right right_radius"
            name="toggle"
            value="true"
            type="radio"
            onClick={this.onClickHandler}
          />
          <label htmlFor="toggle-off" className="btn right_radius">
            Separated
          </label>

          {/* <div className="half_pill_left">
            <span>Combined</span>
          </div>
          <div className="half_pill_right">
            <span>Separated</span>
          </div> */}
        </div>
        <div className="preview_container">
          {clicked ? <PreviewCombined /> : <PreviewSeparated />}
        </div>
      </>
    );
  }
}

export default Preview;
