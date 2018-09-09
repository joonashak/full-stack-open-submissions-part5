import React from 'react';
import blogService from '../services/blogs';


export default class Blog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false,
      likes: props.blog.likes,
    };
  }

  toggleDetails = () => this.setState({ expanded: !this.state.expanded });

  like = () => {
    const {
      _id,
      user,
      likes,
      ...rest
    } = this.props.blog;

    const newBlog = {
      user: user.id,
      likes: likes + 1,
      ...rest
    };

    blogService.update(_id, newBlog);
    this.setState({ likes: this.state.likes + 1 });
  };


  render() {
    const { expanded, likes } = this.state;
    const { title, author, url, user } = this.props.blog;

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
            <button onClick={this.like}>
              Like
            </button>
          </div>
          <div>
            {user ? `Added by ${user.name}` : null}
          </div>
        </div>
      </div>
    );
  }
}
