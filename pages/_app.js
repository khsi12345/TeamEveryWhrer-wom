import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import normalize from 'style/scss/reset.css';

class MyApp extends App {
  render() {
    // console.log(this.props);
    const { Component, pageProps } = this.props;

    return (
      // <Container>
      <>
        <Head>
          {/* <title>Deep Connecting</title> */}
          {/* <script
            async
            type="text/javascript"
            src="https://code.jquery.com/jquery-1.12.4.min.js"
          ></script>
          <script
            async
            src="https://cdn.iamport.kr/js/iamport.payment-1.1.5.js"
            type="text/javascript"
          /> */}
          {/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js" /> */}
        </Head>
        {/* <ThemeProvider theme={theme}> */}
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        {/* <CssBaseline /> */}
        <Component {...pageProps} style={normalize} />
        {/* </ThemeProvider> */}
      </>
      // </Container>
    );
  }
}

export default MyApp;
