import React, { Fragment } from 'react'
import { Route, NavLink, Switch, Redirect, withRouter } from 'react-router-dom'
import Profile from './components/profile'
import LoginForm from './components/loginForm'
import Nav from './components/nav'
import './App.css'

const App = props => {
  console.log('%c APP PROPS', props, 'color: red')
  return (
    <Fragment>
      <Nav />
      <Switch>
        {/* TODO: if we're logged in home goes to either profile or login lol */}
        <Route exact path="/" render={() => <Redirect to="/login" />} />

        <Route exact path="/profile" component={Profile} />
        <Route exact path="/login" component={LoginForm} />
        {/* <Route component={NotFound} /> */}
      </Switch>
    </Fragment>
  )
}

export default withRouter(App)
