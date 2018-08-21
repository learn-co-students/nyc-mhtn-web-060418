import React, { Component } from 'react';
import SnackAdapter from '../apis/SnackAdapter';
import { Redirect } from 'react-router-dom';

// Whatever component it's given:
// 1. check if they're logged in
// 2. if not, send them to '/login'
export default function withAuth(WrappedComponent) {
  return class extends Component {
    // componentDidMount() {
    //   if (SnackAdapter.isLoggedIn()) {
    //     // state
    //   }
    // }

    render() {
      console.log('inside HOC', this.props);

      if (SnackAdapter.isLoggedIn()) {
        return <WrappedComponent {...this.props} />
      } else {
        return <Redirect to='/login'/>
      }
    }
  }
}
