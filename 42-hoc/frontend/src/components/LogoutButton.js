import React from 'react';
import SnackAdapter from '../apis/SnackAdapter';
import { withRouter } from 'react-router-dom';

const LogoutButton = (props) => {
  function handleLogout() {
    SnackAdapter.clearToken();
    props.history.push('/login')
  }

  return (
    <button onClick={handleLogout}>Logout</button>
  )
}

export default withRouter(LogoutButton);
