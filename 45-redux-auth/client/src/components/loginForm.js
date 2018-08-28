import React from 'react'
import { connect } from 'react-redux'
import { loginUser } from '../actions/user'

class LoginForm extends React.Component {
  state = {
    username: "",
    password: ""
  }

  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  handleLoginSubmit = (event) => {
    event.preventDefault()
    this.props.loginUser(this.state.username, this.state.password)
  }

  render() {
    return(
      <form onSubmit={this.handleLoginSubmit}>
        <input type="text" value={this.state.username} onChange={this.handleUsernameChange}></input>
        <input type="password" value={this.state.password} onChange={this.handlePasswordChange}></input>
        <button type="submit">Login</button>
      </form>
    )
  }
}

export default connect(null, { loginUser })(LoginForm)
