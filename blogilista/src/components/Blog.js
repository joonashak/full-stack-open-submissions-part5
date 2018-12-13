import React from 'react';
import PropTypes from 'prop-types';
import blogService from '../services/blogs';


export default class Blog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false,
      likes: props.blog.likes,
      removed: false,
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

  remove = () => {
    const { _id } = this.props.blog;

    if (!window.confirm('Are you sure?')) return null;

    blogService.remove(_id);
    this.setState({ removed: true });
  };


  render() {
    const { expanded, likes, removed } = this.state;
    const { title, author, url, user } = this.props.blog;
    const { loggedInUser } = this.props;

    const blogStyle = {
      padding: '10 0',
      display: removed ? 'none' : '',
    };

    return (
      <div style={blogStyle}>
        <div onClick={this.toggleDetails} className="blog-heading">
          {`${title} / ${author}`}
        </div>
        <div className="hidden" style={{ display: expanded ? '' : 'none' }}>
          <div className="url">
            <a href={url}>
              {url}
            </a>
          </div>
          <div className="likes">
            {`${likes} likes`}
            <button onClick={this.like}>
              Like
            </button>
          </div>
          <div className="user">
            {user ? `Added by ${user.name}` : null}
          </div>
          <div style={{ display: (!user || user.username === loggedInUser.username) ? '' : 'none' }}>
            <button onClick={this.remove}>
              Remove
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  loggedInUser: PropTypes.object.isRequired,
};
