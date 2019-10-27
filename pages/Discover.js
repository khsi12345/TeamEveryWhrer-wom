import React, { PureComponent } from 'react';
// import ImgList from "./ImgList";
// import '../style/scss/discover.scss';

class Discover extends PureComponent {
  constructor() {
    super();
    this.state = {
      // pageNum: 0,
      tags: ['adidas'],
    };
  }

  removeTags = i => {
    const newTags = [...this.state.tags];
    newTags.splice(i, 1);
    this.setState({ tags: newTags });
  };

  inputKeyDown = e => {
    const val = e.target.value;
    if (e.key === 'Enter' && val) {
      if (
        this.state.tags.find(tag => tag.toLowerCase() === val.toLowerCase())
      ) {
        return;
      }
      this.setState({ tags: [...this.state.tags, val] });
      this.tagInput.value = null;
    } else if (e.key === 'Backspace' && !val) {
      this.removeTags(this.state.tags.length - 1);
    }
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  getListNum = () => {
    return ['<', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, '>'];
  };

  //   getPagination = () => {
  //     const { pageNum } = this.state;
  //     let list = [];
  //     list = ImgList;
  //     console.log(list, "list");
  //     const newList = list.slice(pageNum * 8, pageNum * 8 + 8);
  //     console.log(newList, "nL");
  //     {
  //       newList.map(el => <img src={el.img} alt={el.name} />);
  //     }
  //   };
  render() {
    const { tags } = this.state;
    console.log(tags);
    return (
      <div className="discover_container">
        <button className="create_cam_btn" type="button">
          Create Campaign
        </button>
        <div className="filter_container">
          <h5>Filter</h5>
          <div className="filter_wrapper">
            <ul className="filter_content">
              {tags.map((tag, i) => (
                <li key={tag}>
                  {tag}
                  <button
                    className="btn_x"
                    type="button"
                    onClick={() => {
                      this.removeTags(i);
                    }}
                  >
                    +
                  </button>
                </li>
              ))}
              <li className="tag_list">
                <input
                  onKeyDown={this.inputKeyDown}
                  ref={c => {
                    this.tagInput = c;
                  }}
                />
              </li>
            </ul>
          </div>
          <div className="img_list" />
        </div>
        <div className="page_num_wrapper">
          <ul>
            {this.getListNum().map((el, key) => (
              <li key={key}>{el}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Discover;
