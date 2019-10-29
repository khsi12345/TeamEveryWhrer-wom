import React, { PureComponent } from 'react';
import Filter from 'components/Filter';
import PageNumber from 'components/PageNumber';
import 'style/scss/user.scss';

class Admin extends PureComponent {
  render() {
    return (
      <div className="user">
        <Filter method="Search" />
        <table className="table" border="1">
          <thead>
            <tr>
              {/* <th>User</th> */}
              <th colSpan="3">User</th>
              <th>Organisation Name</th>
              <th>Department Name</th>
              <th>Functions</th>
              {/* <th>Organisation Name</th>
              <th>Department Name</th>
              <th>Functions</th> */}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="th_User">firstname</td>
              <td className="th_User">Lastname</td>
              <td className="th_User">email@adidas.com</td>
              <td className="th_Name">Adidas</td>
              <td className="th_Name">&nbsp;</td>
              <td className="th_Func">
                <button type="button" className="plus text">
                  PW RESET
                </button>
                <button type="button" className="plus text">
                  ADMIN
                </button>
                <button type="button" className="plus">
                  -
                </button>
              </td>
            </tr>
            <tr>
              <td className="empty">&nbsp;</td>
              <td className="empty">&nbsp;</td>
              <td className="empty">&nbsp;</td>
              <td>&nbsp;</td>
              <td>Channels</td>
              <td className="empty">&nbsp;</td>
            </tr>
            <tr>
              <td className="empty">&nbsp;</td>
              <td className="empty">&nbsp;</td>
              <td className="empty">&nbsp;</td>
              <td>&nbsp;</td>
              <td>Germany</td>
              <td className="empty">&nbsp;</td>
            </tr>
            <tr>
              <td className="empty">&nbsp;</td>
              <td className="empty">&nbsp;</td>
              <td className="empty">&nbsp;</td>
              <td>&nbsp;</td>
              <td>South America</td>
              <td className="empty">&nbsp;</td>
            </tr>
            <tr>
              <td className="empty">&nbsp;</td>
              <td className="empty">&nbsp;</td>
              <td className="empty">&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td className="empty">&nbsp;</td>
            </tr>
            <tr>
              <td className="empty">&nbsp;</td>
              <td className="empty">&nbsp;</td>
              <td className="empty">&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td className="empty">&nbsp;</td>
            </tr>
            <tr>
              <td className="empty">&nbsp;</td>
              <td className="empty">&nbsp;</td>
              <td className="empty">&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td className="empty">&nbsp;</td>
            </tr>
            <tr>
              <td className="empty">&nbsp;</td>
              <td className="empty">&nbsp;</td>
              <td className="empty">&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td className="empty">&nbsp;</td>
            </tr>
            <tr>
              <td className="empty">
                <button type="button" className="plus">
                  +
                </button>
              </td>
              <td className="empty">&nbsp;</td>
              <td className="empty">&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td className="empty">&nbsp;</td>
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
export default Admin;
