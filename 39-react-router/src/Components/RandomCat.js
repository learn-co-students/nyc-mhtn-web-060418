import React, { Component } from 'react';

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
    fetch('https://aws.random.cat/meow')
      .then(res => res.json())
      .then(json => {
        this.setState({ picture: json.file });
      })
  }

  render() {
    return (
      <img style={catStyle} src={this.state.picture} alt='random cat pic' />
    )
  }
}

export default RandomCat;
