import React, { PureComponent } from 'react';
import Layout from 'components/Layout';
import CurvedBoard from 'components/CurvedBoard';
import ImgList from 'data/ImgList';
import Link from 'next/link';
import PageNumber from 'components/PageNumber';
import Filter from 'components/Filter';
import CardTransparent from 'components/CardTransparent';
import DiscoverDetail from './DiscoverDetail';
import 'style/scss/discover.scss';

class Discover extends PureComponent {
  constructor() {
    super();
    this.state = {
      // pageNum: 0,
    };
  }

  render() {
    return (
      <>
        <Layout className="big_footer">
          <CurvedBoard>
            <div className="discover_container">
              <button className="dis_create_cam_btn" type="button">
                Create Campaign
              </button>
              <Filter />
              <div className="discover_convert_area">
                {/* <DiscoverDetail /> */}
                <div className="img_list">
                  {ImgList.map(el => (
                    <>
                      <div
                        className="img_card"
                        style={{ backgroundImage: `url(${el.src})` }}
                      >
                        <CardTransparent />
                        <div className="btn_wrapper">
                          <button className="play_btn" type="button">
                            <span> Play Video</span>
                          </button>
                          <Link href="DiscoverDetail">
                            <button className="detail_btn" type="button">
                              <span> Details here</span>
                            </button>
                          </Link>
                        </div>
                      </div>
                      <div />
                    </>
                  ))}
                </div>
              </div>
            </div>
            <div className="empty_white_space" />
            <div className="page_num_wrapper">
              <PageNumber />
            </div>
          </CurvedBoard>
        </Layout>
      </>
    );
  }
}

export default Discover;
