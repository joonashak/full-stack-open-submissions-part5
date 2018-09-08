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

    const authenticatedUser = window.localStorage.getItem('authenticatedUser');

    if (authenticatedUser) {
      const user = JSON.parse(authenticatedUser);
      this.setState({ user });
    }
  }

  setUser = user => {
    this.setState({ user });
    window.localStorage.setItem('authenticatedUser', JSON.stringify(user));
  };

  logout = (event) => {
    event.preventDefault();
    
    this.setState({ user: null });
    window.localStorage.removeItem('authenticatedUser');
  };


  render() {
    const { blogs, user } = this.state;

    return (
      <div>
        {
          user
            ? (
              <div>
                <div>
                  {`${user.name} logged in.`}
                  <button onClick={this.logout}>Log Out</button>
                </div>
                <BlogList blogs={blogs} />
              </div>
            )
            : <LoginForm setUser={this.setUser} />
        }
      </div>
    );
  }
}
