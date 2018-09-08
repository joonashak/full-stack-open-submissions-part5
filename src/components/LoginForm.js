import React from 'react';
import loginService from '../services/loginService';


export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
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
      alert('Kirjautuminen ei onnistunut"');

      this.setState({
        username: '',
        password: ''
      });
    }
  }


  render() {
    const { username, password } = this.state;

    return (
      <div>
        <form>
          <div>
            Käyttäjätunnus:
            <input
              type="text"
              name="username"
              value={username}
              onChange={this.handleFieldChange}
            />
          </div>
          <div>
            Salasana:
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleFieldChange}
            />
          </div>
          <button onClick={this.login}>Kirjaudu sisään</button>
        </form>
      </div>
    );
  }
}
