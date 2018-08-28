import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateAnimalAction, fetchDogAction, thunkedFetchDogAction } from '../redux/actions';
import AnimalAdapter from '../apis/AnimalAdapter';

class AnimalPicture extends Component {
  state = { }

  handleClick = (event) => {
    // this.props.updateAnimal(url);
    // fetch()
    // .then(res => res.json())
    // .then(json => this.setState({ url: json }))

    // AnimalAdapter.getDog()
    //   .then(url => {
    //     // this.setState({ url });
    //     this.props.updateAnimal(url);
    //   })

    this.props.fetchDog()

    // Thunk is not necessary.

    // this.props.dispatch({ type: 'RESET' })
  }

  renderPicture = () => {
    if (!this.props.isFetching) {
      return <img src={this.props.animalSrc} alt="cute animal" />
    } else {
      return <img alt="Spinny GIF" src="https://cdn-images-1.medium.com/max/1600/1*9EBHIOzhE1XfMYoKz1JcsQ.gif" />
    }
  }

  render() {
    return (
      <div className="animal-picture">
        <button onClick={this.handleClick}>New Picture</button>
        {this.renderPicture()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    animalSrc: state.meat.animalSrc,
    isFetching: state.meat.isFetching
  }
}

function mapDispatchToProps(dispatch) {
  console.log('fetchDogAction', fetchDogAction());

  return {
    // updateAnimal: (url) => dispatch(updateAnimalAction(url)),
    fetchDog: () => dispatch(thunkedFetchDogAction()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnimalPicture);
