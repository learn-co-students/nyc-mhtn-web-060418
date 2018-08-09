import React from 'react';
import Room from './Room'

export default class extends React.Component {

  state = {
    name: ""
  }

  onChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.handleSubmit(this.state.name)
  }

  render(){
    return (<form onSubmit={ this.onSubmit }>
      <label htmlFor="name">Room name</label>
      <input type="text" name="name" value={ this.state.name } onChange={ this.onChange } />
      <input type="submit" />
    </form>);
  }
};
