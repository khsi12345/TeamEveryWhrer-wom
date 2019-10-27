import React, { PureComponent } from 'react';
import Layout from 'components/Layout';
import AdminCurvedBoard from 'components/AdminCurvedBoard';
import Organisation from './Admin/Organisation';
import User from './Admin/User';

class Admin extends PureComponent {
  render() {
    return (
      <Layout>
        <AdminCurvedBoard>
          {/* <Organisation /> */}
          <User />
        </AdminCurvedBoard>
      </Layout>
      // <Layout
      //   img="/static/images/photo-1511746315387-c-4-a-76990-fdce.png"
      //   name="WOM Admin"
      // >
      //   <AdminCurvedBoard />
      // </Layout>
    );
  }
}
export default Admin;
