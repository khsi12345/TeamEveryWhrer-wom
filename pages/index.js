import React, { PureComponent } from 'react';
// import Head from "next/head";
// import Home from './Home';
import Background from '../components/Background';
// import AdminCurvedBoard from '../components/AdminCurvedBoard';
import Layout from '../components/Layout';
// import Nav from "../components/nav";
import CurvedBoard from '../components/CurvedBoard';
import Footer from '../components/Footer';
import Login from './Login';
import Discover from './Discover';

class Index extends PureComponent {
  render() {
    return (
      // <div />
      // <div>
      //   * ******로그인 입니다******
      // <Login />
      //   * *******메인화면 입니다*****
      //   <Home />
      //   <Footer />
      //   * ****Discover page, Discover글씨 눌러주세요!****
      // </div>
      <Layout>
        <Background />
        {/* <AdminCurvedBoard /> */}
        {/* <CurvedBoard /> */}
      </Layout>
    );
  }
}

export default Index;
