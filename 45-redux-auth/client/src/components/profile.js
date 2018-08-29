import React from 'react'
import { connect } from 'react-redux'
import { Card, Image } from 'semantic-ui-react'
import withAuth from '../hocs/withAuth'

const Profile = ({ avatar, username, bio }) => (
  <Card>
    <Image src={avatar} />
    <Card.Content>
      <Card.Header>{username}</Card.Header>

      <Card.Description>{bio}</Card.Description>
    </Card.Content>
  </Card>
)

// instead of state.usersReducer.user.username, state.usersReducer.user.avatar
const mapStateToProps = ({ usersReducer: { user: { avatar, username, bio } } }) => ({
  avatar,
  username,
  bio
})

export default withAuth(connect(mapStateToProps)(Profile))
