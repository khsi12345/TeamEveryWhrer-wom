import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'

import '../style/scss/index.scss';

const Home = () => (
  <div>
    <Head>
      <h1 className="home">Home</h1>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <h1 className="home">Home</h1>
    {/* <Nav /> */}
  </div>
);
export default Home
