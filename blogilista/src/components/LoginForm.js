import React from 'react';
import Notification from './Notification';
import loginService from '../services/loginService';


export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      error: null,
    };
  }

  handleFieldChange = event => this.setState({ [event.target.name]: event.target.value });

  login = async (event) => {
    event.preventDefault();

    const { username, password } = this.state;
    const { setUser } = this.props;

    try {
      const user = await loginService.login({ username, password });
      setUser(user);
    } catch (ex) {
      this.setState({
        username: '',
        password: '',
        error: 'Login failed',
      });

      setTimeout(() => {
        this.setState({ error: null });
      }, 3000);
    }
  }


  render() {
    const { username, password } = this.state;

    return (
      <div>
        <Notification type="error" message={this.state.error} />
        <form>
          <div>
            Username:
            <input
              type="text"
              name="username"
              value={username}
              onChange={this.handleFieldChange}
            />
          </div>
          <div>
            Password:
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleFieldChange}
            />
          </div>
          <button onClick={this.login}>Log In</button>
        </form>
      </div>
    );
  }
}
