import React, { Component } from 'react';
import SnackList from './SnackList';
import SnackAdapter from '../apis/SnackAdapter';
import withLoading from '../hocs/withLoading';

class Snacks extends Component {
  state = {
    snacks: this.props.initialData,
  }

  // componentDidMount() {
  //   this.getSnacks();
  // }
  //
  // getSnacks = () => {
  //   SnackAdapter.getSnacks()
  //     .then(json => {
  //       this.setState({
  //         snacks: json,
  //       });
  //     });
  // }

  render() {
    return (
      <div className="snacks">
        <h2>Snacks</h2>
        <SnackList snacks={this.state.snacks} />
      </div>
    )
  }
}

export default withLoading(Snacks, SnackAdapter.getSnacks);
