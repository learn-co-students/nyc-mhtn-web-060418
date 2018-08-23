import React from 'react'
import '../assets/css/Navbar.css';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const Navbar = (props) => {
  console.log(props);

  return (
    <div className="navbar">
      {/*
        <button onClick={() => props.handleClick('home')}>Home</button>
        <button onClick={() => props.handleClick('facts')}>Facts</button>
        <button onClick={() => props.handleClick('profiles')}>Profiles</button>
      */}
      <p>{props.counter}</p>
      <NavLink activeClassName="active" exact to="/">Home</NavLink>
      <NavLink activeClassName="active" exact to="/facts">Facts</NavLink>
      <NavLink activeClassName="active" exact to="/profiles">Profiles</NavLink>
    </div>
  )
}


function mapStateToProps(state) {
  console.log('%c Navbar mapStateToProps', 'color: pink');
  return {
    randomProp: 1,
    counter: state.counter,
  }
}

export default connect(mapStateToProps)(Navbar);
