import React, { PureComponent } from 'react';
import Filter from 'components/Filter';
import PageNumber from 'components/PageNumber';
import 'style/scss/organisation.scss';

class Organisation extends PureComponent {
  render() {
    return (
      <div className="organisation">
        <Filter method="Filter" />
        <table className="table">
          <thead>
            <tr>
              <th>Organisation Name</th>
              <th>Department Name</th>
              <th>Mandatory Hashtags</th>
              <th className="last_child">WOM</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Adidas</td>
              <td />
              <td>
                <div className="blue text">
                  adidas
                  <button type="button" className="text">
                    x
                  </button>
                </div>
              </td>
              <td className="last_child">5M25</td>
              <button type="button" className="plus">
                ^
              </button>
            </tr>
            <tr>
              <td />
              <td>Channels</td>
              <td>
                <div className="gray text">adidas</div>
              </td>
              <td className="last_child">
                <button type="button" className="plus">
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td />
              <td>Germany</td>
              <td className="flex">
                <div className="gray text">adidas</div>
                <div className="black text">
                  DE
                  <button type="button">x</button>
                </div>
              </td>
              <td className="last_child">
                <button type="button" className="plus">
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td />
              <td>South America</td>
              <td>
                <div className="gray text">adidas</div>
              </td>
              <td className="last_child">
                <button type="button" className="plus last_child">
                  +
                </button>
              </td>
              <button type="button" className="plus">
                -
              </button>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>
                <button type="button" className="plus">
                  +
                </button>
              </td>
              <td />
              <td className="last_child" />
            </tr>
            <tr>
              <td>mövenpick</td>
              <td>{`<4>`}</td>
              <td className="flex">
                <div className="black text">
                  moevenpick
                  <button type="button">x</button>
                </div>
                <div className="blue text">
                  mövenpick
                  <button type="button">x</button>
                </div>
                <div className="black text">
                  hotel
                  <button type="button">x</button>
                </div>
              </td>
              <td className="last_child">
                <button type="button" className="plus">
                  +
                </button>
              </td>
              <button type="button" className="plus">
                v
              </button>
            </tr>
            <tr>
              <td>DeWalt</td>
              <td>
                <button type="button" className="plus">
                  +
                </button>
              </td>
              <td>
                <div className="blue text">
                  dewalt
                  <button type="button">x</button>
                </div>
              </td>
              <td className="last_child">
                <button type="button" className="plus">
                  +
                </button>
              </td>
              <button type="button" className="plus">
                v
              </button>
            </tr>
            <tr>
              <td>Commerzbank</td>
              <td>{`<25>`}</td>
              <td>
                <div className="tag">
                  <div className="blue text">
                    commerzbank
                    <button type="button">x</button>
                  </div>
                </div>
              </td>
              <td className="last_child" />
              <button type="button" className="plus">
                v
              </button>
            </tr>
            <tr>
              <td>
                <button type="button" className="plus">
                  +
                </button>
              </td>
              <td />
              <td />
              <td className="last_child" />
            </tr>
          </tbody>
        </table>
        <div className="page_number">
          <PageNumber />
        </div>
      </div>
    );
  }
}
export default Organisation;
