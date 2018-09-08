import React from 'react';
import Notification from './Notification';
import blogService from '../services/blogs';


export default class NewBlog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      author: '',
      url: '',
      notification: null,
      error: null,
    };
  }

  handleFieldChange = event => this.setState({ [event.target.name]: event.target.value });

  create = async (event) => {
    event.preventDefault();

    const { title, author, url } = this.state;
    const { addBlog } = this.props;

    const newBlog = {
      title,
      author,
      url,
    };

    try {
      const response = await blogService.create(newBlog);
      addBlog(response);

      this.setState({
        notification: `New blog ${title} by ${author} added!`,
        title: '',
        author: '',
        url: '',
      });

      setTimeout(() => {
        this.setState({ notification: null });
      }, 3000);
    } catch (ex) {
      this.setState({ error: 'Could not add blog.' });

      setTimeout(() => {
        this.setState({ error: null });
      }, 3000);
    }
  };

  render() {
    const {
      title,
      author,
      url,
      error,
      notification,
    } = this.state;

    return (
      <div>
        <h4>
          Create New Blog
        </h4>
        <Notification type="error" message={error} />
        <Notification type="info" message={notification} />
        <div>
          Title:
          <input
            type="text"
            name="title"
            value={title}
            onChange={this.handleFieldChange}
          />
        </div>
        <div>
          Author:
          <input
            type="text"
            name="author"
            value={author}
            onChange={this.handleFieldChange}
          />
        </div>
        <div>
          URL:
          <input
            type="text"
            name="url"
            value={url}
            onChange={this.handleFieldChange}
          />
        </div>
        <button onClick={this.create}>Create</button>
      </div>
    );
  }
}
