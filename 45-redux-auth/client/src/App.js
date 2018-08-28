import React from 'react'
import { Route, NavLink } from 'react-router-dom'
import Profile from './components/profile'
import LoginForm from './components/loginForm'
import './App.css'

const App = () => {
  return (
    <div>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/profile">Profile</NavLink>
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/login" component={LoginForm} />
    </div>
  )
}

export default App
