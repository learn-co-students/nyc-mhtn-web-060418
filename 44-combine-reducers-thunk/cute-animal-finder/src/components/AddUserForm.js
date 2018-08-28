import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUserAction } from '../redux/actions';

class AddUserForm extends Component {
  state = {
    name: "",
    email: "",
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.addUser(this.state.name, this.state.email);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Name: <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/></label>
        <label>Email: <input type="text" name="email" value={this.state.email} onChange={this.handleChange}/></label>
        <input type="submit" value="Add User" />
      </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addUser: (name, email) => dispatch(addUserAction(name, email))
  }
}

export default connect(null, mapDispatchToProps)(AddUserForm);
