import React, { Component } from 'react';
import SnackList from './SnackList';
import SnackAdapter from '../apis/SnackAdapter';

class MySnacks extends Component {
  state = {
    snacks: this.props.initialData,
  }

  // componentDidMount() {
  //   this.getMySnacks();
  // }
  //
  // getMySnacks = () => {
  //   SnackAdapter.getMySnacks(this.props.userId)
  //     .then(json => {
  //       this.setState({
  //         snacks: json,
  //       });
  //     });
  // }

  render() {
    return (
      <div className="my-snacks">
        <h2>My Snacks</h2>
        <SnackList snacks={this.state.snacks} />
      </div>
    )
  }
}

MySnacks.defaultProps = {
  userId: null,
}

export default MySnacks;
