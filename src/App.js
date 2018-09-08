import React from 'react';
import blogService from './services/blogs';
import LoginForm from './components/LoginForm';
import BlogList from './components/BlogList';


export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      blogs: [],
      user: null,
    };
  }

  componentDidMount() {
    blogService.getAll().then(blogs => this.setState({ blogs }));
  }

  setUser = user => this.setState({ user });


  render() {
    const { blogs, user } = this.state;

    return (
      <div>
        {
          user
            ? <BlogList blogs={blogs} name={user.name} />
            : <LoginForm setUser={this.setUser} />
        }
      </div>
    );
  }
}
