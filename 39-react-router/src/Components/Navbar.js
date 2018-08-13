import React from 'react'
import '../assets/css/Navbar.css';
import { Link, NavLink } from 'react-router-dom';

const Navbar = (props) => (
  <div className="navbar">
    {/*
      <button onClick={() => props.handleClick('home')}>Home</button>
      <button onClick={() => props.handleClick('facts')}>Facts</button>
      <button onClick={() => props.handleClick('profiles')}>Profiles</button>
    */}
    <NavLink activeClassName="active" to="/home">Home</NavLink>
    <NavLink activeClassName="active" to="/facts">Facts</NavLink>
    <NavLink activeClassName="active" to="/profiles">Profiles</NavLink>
  </div>
)

export default Navbar;
