import React from 'react'
import { connect } from 'react-redux'

const Profile = (props) => {
  return (
    <h1>Hello, {props.username}</h1>
  )
}

const mapStateToProps = (state) => ({ username: state.usersReducer.username })

export default connect(mapStateToProps)(Profile)
