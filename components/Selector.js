import React, { PureComponent } from 'react';
import 'style/scss/selector.scss';

class Selector extends PureComponent {
  render() {
    return (
<<<<<<< HEAD
      <div className="selector">
        <section>
          <article>
            <form className="dropdown" tabIndex="0">
              <ul className="dropdown_list">
                <li>
                  <input
                    type="radio"
                    name="dropdown_val"
                    id="val-null"
                    value="null"
                    checked="checked"
                  />
                  <label htmlFor="val-null">Select an option</label>
                </li>
                <li>
                  <input
                    type="radio"
                    name="dropdown_val"
                    id="val-0"
                    value="0"
                  />
                  <label htmlFor="val-0">Option 0</label>
                </li>
                <li>
                  <input
                    type="radio"
                    name="dropdown_val"
                    id="val-1"
                    value="1"
                  />
                  <label htmlFor="val-1">Option 1</label>
                </li>
                <li>
                  <input
                    type="radio"
                    name="dropdown_val"
                    id="val-2"
                    value="2"
                  />
                  <label htmlFor="val-2">Option 2</label>
                </li>
                <li>
                  <input
                    type="radio"
                    name="dropdown_val"
                    id="val-3"
                    value="3"
                  />
                  <label htmlFor="val-3">Option 3</label>
                </li>
                <li>
                  <input
                    type="radio"
                    name="dropdown_val"
                    id="val-4"
                    value="4"
                  />
                  <label htmlFor="val-4">Option 4</label>
                </li>
              </ul>
              <span className="dropdown_switch" tabIndex="1" />
            </form>
          </article>
        </section>
=======
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
>>>>>>> bdf63b204c7c15c8f96debffff35872bef8bcf4f
      </div>
    );
  }
}
export default Selector;
