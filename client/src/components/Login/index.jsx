import React, {Component} from 'react';
import './login.scss';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };

    this.handleSubmit.bind(this);
  }
  
  handleSubmit (e) {
    console.log('this is handle Submit')
    e.preventDefault();
  }

  handleChange (e) {
    console.log('this is handleChange', this.state.username)
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return(
      <div id="login_container">
      <div id="login_header">
      <h1>Log In to Your Account</h1>
      </div>
      <div id="login_info_container">
        <form id="login_form" onSubmit={this.handleSubmit}>
          <label id="login_username">
            Username:
              <input type='text' placeholder='Email or username' name='username' onChange={this.handleChange.bind(this)}/>
          </label>
          <label id="login_password">
            Password:
              <input type='text' type='password' placeholder='Password' name='password' onChange={this.handleChange.bind(this)}/>
          </label>
          <input type='submit' value='Submit'/>
        </form>
        <div id="login_type">
          <ul>
            <li>Google</li>
            <li>Facebook</li>
            <li>Github</li>
          </ul>
        </div>
        </div>
      </div>
    )
  }
};

export default Login;