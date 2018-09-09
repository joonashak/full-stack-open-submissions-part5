import React from 'react';
import blogService from './services/blogs';
import LoginForm from './components/LoginForm';
import BlogList from './components/BlogList';
import NewBlog from './components/NewBlog';
import Hidable from './components/Hidable';


export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      blogs: [],
      user: null,
    };
  }

  componentDidMount() {
    blogService.getAll().then((blogs) => {
      const ordered = blogs.sort((a, b) => b.likes - a.likes);
      this.setState({ blogs: ordered });
    });

    const authenticatedUser = window.localStorage.getItem('authenticatedUser');

    if (authenticatedUser) {
      const user = JSON.parse(authenticatedUser);
      this.setState({ user });
      blogService.setToken(user.token);
    }
  }

  setUser = user => {
    this.setState({ user });
    window.localStorage.setItem('authenticatedUser', JSON.stringify(user));
    blogService.setToken(user.token);
  };

  logout = (event) => {
    event.preventDefault();

    this.setState({ user: null });
    window.localStorage.removeItem('authenticatedUser');
    blogService.removeToken();
  };

  addBlog = blog => this.setState(prevState => ({ blogs: [...prevState.blogs, blog] }));


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
                <Hidable
                  buttonLabel="Create New Blog"
                  ref={component => this.blogForm = component}
                >
                  <NewBlog
                    addBlog={this.addBlog}
                    formRef={this.blogForm}
                  />
                </Hidable>
                <BlogList blogs={blogs} loggedInUser={user} />
              </div>
            )
            : <LoginForm setUser={this.setUser} />
        }
      </div>
    );
  }
}
