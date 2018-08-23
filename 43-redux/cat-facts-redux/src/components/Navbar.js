import React from 'react'
import '../assets/css/Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => (
  <div className="navbar">
    {/*
      <button onClick={() => props.handleClick('home')}>Home</button>
      <button onClick={() => props.handleClick('facts')}>Facts</button>
      <button onClick={() => props.handleClick('profiles')}>Profiles</button>
    */}
    <NavLink activeClassName="active" exact to="/">Home</NavLink>
    <NavLink activeClassName="active" exact to="/facts">Facts</NavLink>
    <NavLink activeClassName="active" exact to="/profiles">Profiles</NavLink>
  </div>
)

export default Navbar;
