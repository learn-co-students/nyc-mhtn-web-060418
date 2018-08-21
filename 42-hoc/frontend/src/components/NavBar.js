import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import SnackAdapter from '../apis/SnackAdapter';

const NavBar = (props) => {
  return (
    <header className="nav">
      <NavLink activeClassName="selected" exact to="/">Home</NavLink>
      {
        !SnackAdapter.isLoggedIn() ?
        <Fragment>
          <NavLink activeClassName="selected" exact to="/register">Registration</NavLink>
          <NavLink activeClassName="selected" exact to="/login">Login</NavLink>
        </Fragment>
        :
        <Fragment>
          <NavLink activeClassName="selected" exact to="/snacks">Snacks</NavLink>
          <NavLink activeClassName="selected" exact to="/my-snacks">My Snacks</NavLink>
        </Fragment>
      }
    </header>
  )
}

export default NavBar;
