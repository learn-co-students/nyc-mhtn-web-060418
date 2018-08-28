import React from 'react'
import { connect } from 'react-redux'
import { Card, Segment, Loader } from 'semantic-ui-react'
import withAuth from '../hocs/withAuth'

const Profile = props => {
  return <Segment>{/* <Loader size="medium" active={props.authenticatingUser} /> */}</Segment>
}

const mapStateToProps = state => ({
  username: state.usersReducer.username,
  profilePhoto: state.usersReducer.profilePhoto,
  authenticatingUser: state.usersReducer.authenticatingUser
})

export default withAuth(connect(mapStateToProps)(Profile))
