import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import * as actions from '../actions'
import { Loader } from 'semantic-ui-react'

const withAuth = WrappedComponent => {
  class AuthorizedComponent extends React.Component {
    componentDidMount() {
      if (localStorage.getItem('jwt') && !this.props.loggedIn) {
        this.props.fetchCurrentUser()
      }
    }

    render() {
      if (localStorage.getItem('jwt') && this.props.loggedIn) {
        return <WrappedComponent />
      } else if (localStorage.getItem('jwt') && !this.props.loggedIn) {
        return <Loader active inline="centered" />
      } else {
        return <Redirect to="/home" />
      }
    }
  }

  return connect(
    mapStateToProps,
    actions
  )(AuthorizedComponent)
}

const mapStateToProps = state => ({ loggedIn: !!state.usersReducer.username })

export default withAuth
