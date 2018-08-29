import React from 'react';
import { connect } from 'react-redux';

const UserList = ({ users }) => {
  // console.log(users);

  return (
    <ul>
      {users.map(user => <li key={user.id}>{user.name} | {user.email}</li>)}
    </ul>
  )
}

function mapStateToProps(state) {
  console.log(state, state.users);

  return {
    users: state.user.users
  }
}

export default connect(mapStateToProps)(UserList);
