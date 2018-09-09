import React from 'react';


export default class Blog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false,
    };
  }

  toggleDetails = () => this.setState({ expanded: !this.state.expanded });


  render() {
    const { expanded } = this.state;
    const { title, author,likes, url, user } = this.props.blog;

    const blogStyle = {
      padding: '10 0',
    };

    return (
      <div style={blogStyle}>
        <div onClick={this.toggleDetails}>
          {`${title} / ${author}`}
        </div>
        <div style={{ display: expanded ? '' : 'none' }}>
          <div>
            <a href={url}>
              {url}
            </a>
          </div>
          <div>
            {`${likes} likes`}
            <button>
              Like
            </button>
          </div>
          <div>
            {`Added by ${user.name}`}
          </div>
        </div>
      </div>
    );
  }
}
