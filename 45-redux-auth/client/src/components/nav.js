import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { NavLink, withRouter } from 'react-router-dom'
import { Menu, Image } from 'semantic-ui-react'
import * as actions from '../actions'
import withAuth from '../hocs/withAuth'

const Nav = ({ user: { loggedIn }, location: { pathname } }) => {
  return (
    <Menu pointing secondary>
      {loggedIn ? (
        <Fragment>
          <Menu.Item as={NavLink} to="/profile" name="Profile" active={pathname === '/profile'} />
          <Menu.Menu position="right">
            {/* TODO: logout */}
            {/* <Menu.Item to="/logout" name="Logout" onClick={logout} /> */}
          </Menu.Menu>
        </Fragment>
      ) : (
        <Menu.Item as={NavLink} to="/login" name="Login" active={pathname === '/login'} />
      )}
    </Menu>
  )
}

const mapStateToProps = ({ usersReducer: user }) => ({ user })

export default withRouter(connect(mapStateToProps)(Nav))
