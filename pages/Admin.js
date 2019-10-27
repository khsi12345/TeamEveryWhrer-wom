import React, { PureComponent } from 'react';
import Layout from 'components/Layout';
import AdminCurvedBoard from 'components/AdminCurvedBoard';
import Organisation from './Admin/Organisation';
import User from './Admin/User';

class Admin extends PureComponent {
  render() {
    return (
<<<<<<< HEAD
      <Layout>
=======
      <Layout
        img="/static/images/photo-1511746315387-c-4-a-76990-fdce.png"
        name="WOM Admin"
      >
>>>>>>> bdf63b204c7c15c8f96debffff35872bef8bcf4f
        <AdminCurvedBoard>
          {/* <Organisation /> */}
          <User />
        </AdminCurvedBoard>
      </Layout>
<<<<<<< HEAD
      // <Layout
      //   img="/static/images/photo-1511746315387-c-4-a-76990-fdce.png"
      //   name="WOM Admin"
      // >
      //   <AdminCurvedBoard />
      // </Layout>
=======
>>>>>>> bdf63b204c7c15c8f96debffff35872bef8bcf4f
    );
  }
}
export default Admin;
