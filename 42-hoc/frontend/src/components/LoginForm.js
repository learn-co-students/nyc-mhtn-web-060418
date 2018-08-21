import React, { Component } from 'react';

class LoginForm extends Component {
  state = {
    username: "",
    password: "",
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    // we're "creating" a "session"
    // we don't have sessions => user_id => token
    fetch('http://localhost:3000/sessions', {
      method: "POST",
      headers: { "Content-Type": 'application/json' },
      body: JSON.stringify(this.state)
      // body: JSON.stringify({ username: this.state.username, password: this.state.password })
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        throw new Error('Failed to login')
      })
      .then(json => {
        console.log('we have a "token" which is: ', json);
        localStorage.setItem("token", json.token);
        this.props.onSuccessfulLogin(json.id);
        // localStorage.removeItem("user_id");
        // console.log(localStorage.getItem("user_id"));
        this.props.history.push("/");
      })
      .catch(err => {
        console.warn('You have been warned.', err);
      })
  }

  render() {
    console.log('inside LoginForm', this.props);
    
    return (
      <div className="login">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={this.handleChange}
            value={this.state.username}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={this.handleChange}
            value={this.state.password}
          />
          <input type="submit" value="Login" />
        </form>
      </div>
    )
  }
}

LoginForm.defaultProps = {
  onLogin: (username, password) => {},
}

export default LoginForm;
