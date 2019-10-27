import React, { PureComponent } from 'react';
import 'style/scss/filter.scss';

class Filter extends PureComponent {
  constructor() {
    super();
    this.state = {
      tags: ['Adidas'],
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

  render() {
    const { tags } = this.state;

    return (
      <div className="filter_container">
        <h5>{this.props.method}</h5>
        <div className="filter_wrapper">
          <ul className="filter_content">
            {tags.map((tag, i) => (
              <li key={tag} className="list_tag_btn">
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
      </div>
    );
  }
}

export default Filter;
