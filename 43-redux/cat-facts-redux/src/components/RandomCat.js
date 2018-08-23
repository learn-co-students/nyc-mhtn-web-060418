import React, { Component, Fragment } from 'react';

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
    this.props.history.push('/profiles');
  }

  render() {
    return (
      <Fragment>
        <img style={catStyle} src={this.state.picture} alt='random cat pic' />
        <button onClick={this.handleClick}>Click Me!</button>
      </Fragment>
    )
  }
}

export default RandomCat;
