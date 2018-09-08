import React from 'react';
import Blog from './components/Blog';
import blogService from './services/blogs';


export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      blogs: [],
    };
  }

  componentDidMount() {
    blogService.getAll().then(blogs => this.setState({ blogs }));
  }

  render() {
    const { blogs } = this.state;

    return (
      <div>
        <h2>blogs</h2>
        {
          blogs.map(blog => (
            <Blog key={blog._id} blog={blog} />
          ))
        }
      </div>
    );
  }
}
