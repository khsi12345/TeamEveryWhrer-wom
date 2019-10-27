import React, { PureComponent } from 'react';
import Layout from 'components/Layout';
import CurvedBoard from 'components/CurvedBoard';
import PageNumber from 'components/PageNumber';
import CircleTransparent from 'components/CircleTransparent';
import CardTransparentSimple from 'components/CardTransparetSimple';
import DiscoverGraphCollection from 'components/DiscoverGraphCollection';
import Filter from 'components/Filter';
import 'style/scss/discoverdetail.scss';

class DiscoverDetail extends PureComponent {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <>
        <Layout>
          <CurvedBoard>
            <div className="discover_container">
              <button className="dis_create_cam_btn" type="button">
                Create Campaign
              </button>
              <Filter />
              <div className="discover_convert_area">
                <div className="discover_detail_container">
                  <div className="discover_detail_content_wrapper">
                    <div className="detail_total_left">
                      <div className="detail_top_left_section">
                        <div className="detail_black_circle">
                          <i className="fas fa-chevron-left" />
                        </div>
                        <div className="detail_top_btn_wrapper">
                          <div className="details_btn">
                            <span>Details</span>
                          </div>
                          <div className="details_btn">
                            <span>Promote +</span>
                          </div>
                        </div>
                      </div>
                      <div className="left_right_wrapper">
                        <div className="detail_left_section">
                          <div className="detail_left_table">
                            <tr>
                              <td className="table_left_gray">Brand</td>
                              <td className="table_right_bold">Adidas</td>
                            </tr>
                            <tr>
                              <td className="table_left_gray">Category</td>
                              <td className="table_right_bold">Shoes</td>
                            </tr>
                            <tr>
                              <td className="table_left_gray">Sub-cat</td>
                              <td className="table_right_bold">Sport Shoes</td>
                            </tr>
                            <tr>
                              <td className="table_left_gray">Item</td>
                              <td className="table_right_bold">Superstar</td>
                            </tr>
                            <tr>
                              <td className="table_left_gray">Creator</td>
                              <td className="table_right_bold">Miles Stone</td>
                            </tr>
                            <tr>
                              <td className="table_left_gray">Videos</td>
                              <td className="table_right_bold">10 (20)</td>
                            </tr>
                          </div>
                          <div className="discover_detail_img">
                            <CardTransparentSimple />
                          </div>
                          <div className="detail_left_bottom_table">
                            <tr>
                              <td className="bottom_left_bold">Cat</td>
                              <td className="bottom_right_gray">Apparel</td>
                              <td className="bottom_right_gray">Accessories</td>
                            </tr>
                            <tr>
                              <td className="bottom_left_bold">Sub-Cat</td>
                              <td className="bottom_right_gray">Socks</td>
                              <td className="bottom_right_gray">Sunglasses</td>
                            </tr>
                            <tr>
                              <td className="bottom_left_bold">Item</td>
                              <td className="bottom_right_gray">
                                8 Pack Sport
                              </td>
                              <td className="bottom_right_gray">Whipstart</td>
                            </tr>
                            {/* <div className="empty_space" /> */}
                            <div className="hash_wrapper">
                              <p className="hash_bold">Hashtags</p>
                              <div className="hash_tag_list">
                                <div className="hash_tag_btn">
                                  <span>#ADIDAS x</span>
                                </div>
                                <div className="hash_tag_btn">
                                  <span>#SUPERSTAR x</span>
                                </div>
                                <div className="hash_tag_btn">
                                  <span>#SPORTSHOE x</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="detail_right_section">
                          <div className="detail_right_top">
                            <p>Authenticator</p>
                            <tr>
                              <td>H</td>
                              <td>8.5</td>
                              <td>C</td>
                              <td>7.8</td>
                              <td>P</td>
                              <td>9.2</td>
                            </tr>
                            <p>Viewers</p>
                            <tr>
                              <td>Preview</td>
                              <td className="padding_left_up">1248</td>
                              <td />
                            </tr>
                            <tr>
                              <td>View</td>
                              <td>
                                <span className="padding_left_down">1152</span>
                                <span className="small_td">(96.0%)</span>
                              </td>
                            </tr>
                            <tr>
                              <td className="small_left">{`<25%`}</td>
                              <td className="small_right">10%</td>
                            </tr>
                            <tr>
                              <td className="small_left">25 - 50%</td>
                              <td className="small_right">20%</td>
                            </tr>
                            <tr>
                              <td className="small_left">50 - 75%</td>
                              <td className="small_right">30%</td>
                            </tr>
                            <tr>
                              <td className="small_left">75% +</td>
                              <td className="small_right">40%</td>
                            </tr>
                          </div>
                          <div className="detail_right_mid">
                            <p>Engagement</p>
                            <tr>
                              <td>Like</td>
                              <td className="align_right_td">
                                <span className="padding_td">152</span>
                                <span className="small_td">(12.7%)</span>
                              </td>
                            </tr>
                            <tr>
                              <td>Save</td>
                              <td className="align_right_td">
                                <span className="padding_td">205</span>
                                <span className="small_td">(17.1%)</span>
                              </td>
                            </tr>
                            <tr>
                              <td>Comment</td>
                              <td className="align_right_td">
                                <span className="padding_td">52</span>
                                <span className="small_td">(4.8%)</span>
                              </td>
                            </tr>
                            <tr>
                              <td>Rate</td>
                              <td className="align_right_td">
                                <span className="padding_td">1038</span>
                                <span className="small_td">(86.5%)</span>
                              </td>
                            </tr>
                            <tr>
                              <td>Honesty</td>
                              <td className="align_right_td">
                                <span className="padding_td">9.2</span>
                                <span className="green_td">+0.7</span>
                              </td>
                            </tr>
                            <tr>
                              <td>Creativity</td>
                              <td className="align_right_td">
                                <span className="padding_td">8.3</span>
                                <span className="green_td">+0.5</span>
                              </td>
                            </tr>
                            <tr>
                              <td>Positivity</td>
                              <td className="align_right_td">
                                <span className="padding_td">8.8</span>
                                <span className="red_td">-0.4</span>
                              </td>
                            </tr>
                            <tr>
                              <td>Click</td>
                              <td className="align_right_td">
                                <span className="padding_td">1095</span>
                                <span className="small_td">(91.3%)</span>
                              </td>
                            </tr>
                            <tr>
                              <td>Buy</td>
                              <td className="align_right_td">
                                <span className="padding_td">876</span>
                                <span className="small_td">(73.0%)</span>
                              </td>
                            </tr>
                          </div>
                          <div className="detail_right_bottom">
                            <p className="detail_bottom_p">In-use</p>
                            <tr>
                              <td className="width_limit">
                                YEAY, Zelando, Submarino{' '}
                              </td>
                            </tr>
                            <p className="detail_bottom_p">In-promotion</p>
                            <tr>
                              <td>Zelando </td>
                            </tr>
                            <p className="detail_bottom_p">Available</p>
                            <tr>
                              <td className="width_limit">
                                YEAY, Zelando, Submarino, Adidas
                              </td>
                            </tr>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="detail_total_right">
                      <div className="mildstone_wrapper">
                        <span className="mile_word">Milestones</span>
                        <div className="right_top_btn_wrapper">
                          <div className="details_btn">
                            <span>Allow</span>
                          </div>
                          <div className="details_btn">
                            <span>Start Promo</span>
                          </div>
                          <div className="details_btn">
                            <span>End Promo</span>
                          </div>
                        </div>
                      </div>
                      <div className="detail_chart_wrapper">
                        <CircleTransparent />

                        <DiscoverGraphCollection />
                      </div>
                    </div>
                  </div>
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
export default DiscoverDetail;
