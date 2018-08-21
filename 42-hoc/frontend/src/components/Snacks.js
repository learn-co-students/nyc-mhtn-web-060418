import React, { Component } from 'react';
import SnackList from './SnackList';
import SnackAdapter from '../apis/SnackAdapter';

class Snacks extends Component {
  state = {
    snacks: [],
  }

  componentDidMount() {
    this.getSnacks();
  }

  getSnacks = () => {
    SnackAdapter.getSnacks()
      .then(json => {
        this.setState({
          snacks: json,
        });
      });
  }

  render() {
    return (
      <div className="snacks">
        <h2>Snacks</h2>
        <SnackList snacks={this.state.snacks} />
      </div>
    )
  }
}

export default Snacks;
