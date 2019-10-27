import React, { PureComponent } from 'react';
import Header from './Header';
import Background from './Background';
import Footer from './Footer';
// import 'style/scss/reset.css';

class Layout extends PureComponent {
  render() {
    return (
      <>
        <div
          style={{
            // backgroundColor: '#000000',
            // width: '1920px',
            // height: '2344px',
            position: 'relative',
          }}
        >
          <Header />
          <Background
            black={this.props.black}
            img={this.props.img}
            name={this.props.name}
          />
          {/* <div> */}
          {this.props.children}
          {/* </div> */}
          <Footer className={this.props.className} />
        </div>
      </>
    );
  }
}

export default Layout;
