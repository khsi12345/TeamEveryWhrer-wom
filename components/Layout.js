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
<<<<<<< HEAD
            backgroundColor: '#000000',
            // width: '1920px',
            height: '2344px',
=======
            // backgroundColor: '#000000',
            // width: '1920px',
            // height: '2344px',
>>>>>>> bdf63b204c7c15c8f96debffff35872bef8bcf4f
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
<<<<<<< HEAD
          <Footer />
=======
          <Footer className={this.props.className} />
>>>>>>> bdf63b204c7c15c8f96debffff35872bef8bcf4f
        </div>
      </>
    );
  }
}

export default Layout;
