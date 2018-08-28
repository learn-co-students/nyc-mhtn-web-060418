import React from 'react';
import { connect } from 'react-redux';

const UserList = ({ users }) => {
  return (
    <ul>
      {users.map(user => <li key={user.id}>{user.name} | {user.email}</li>)}
    </ul>
  )
}

function mapStateToProps(state) {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps)(UserList);
