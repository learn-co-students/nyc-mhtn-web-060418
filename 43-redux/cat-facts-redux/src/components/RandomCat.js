import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { incrementAction, setAction, incrementCountererAction } from '../action';

const API_URL = 'https://aws.random.cat/meow';
const PROXY_URL = 'https://cors-anywhere.herokuapp.com';

const catStyle = {
  margin: '10px 0',
  border: '5px solid grey',
  borderRadius: '5px',
};

class RandomCat extends Component {
  state = {
    picture: null,
  }

  componentDidMount() {
    fetch(`${PROXY_URL}/${API_URL}`)
      .then(res => res.json())
      .then(json => {
        this.setState({ picture: json.file });
      })
  }

  handleClick = (event) => {
    // this.props.history.push('/profiles');
    // let action = { type: 'INCREMENT' }
    // this.props.dispatch(incrementAction());
    // this.props.dispatch(setAction(10));
    this.props.increment();
    this.props.incrementer();
    // this.props.setCounter(10);
  }

  render() {
    console.log('RandomCat', this.props); // this.props.dispatch => this.setState
    return (
      <Fragment>
        <p>{this.props.counter}</p>
        <img style={catStyle} src={this.state.picture} alt='random cat pic' />
        <button onClick={this.handleClick}>Click Me!</button>
      </Fragment>
    )
  }
}

// connect is a Higher Order Function
//  this returns a function
// Higher Order Component
//  functions that take in a component and return component
// let withRedux = connect();
// export default withRedux(RandomCat);

// passing store's state down as props
// This function will map your state in store to your props in your component.
// They will override any existing props if the key names are the same since it merges.
function mapStateToProps(state) {
  console.log('%c RandomCat mapStateToProps', 'color: green');

  return {
    randomProp: 1,
    counter: state.counter,
    // history: state.picture,
  }
}

// this.props.dispatch(incrementAction());
// this.props.dispatch(setAction(10));
function mapDispatchToProps(dispatch) {
  return {
    randomPropProp: 2,
    increment: () => dispatch(incrementAction()),
    incrementer: () => dispatch(incrementCountererAction()),
    setCounter: (value) => dispatch(setAction(value)),
    dispatch
  }
}

// let withRedux = connect(mapStateToProps);\
export default connect(mapStateToProps, mapDispatchToProps)(RandomCat);
