import React, { Component, Fragment } from 'react';

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

  handleClick = (event) => {
    this.props.history.push('/profiles');
  }

  render() {
    console.log(this.props);

    return (
      <Fragment>
        <img style={catStyle} src={this.state.picture} alt='random cat pic' />
        <button onClick={this.handleClick}>Click Me!</button>
      </Fragment>
    )
  }
}

export default RandomCat;
