import React from 'react';
import Fact from './Fact'
import uuid from 'uuid';

// https://catfact.ninja/#!/Facts/facts

const PROXY = 'https://cors-anywhere.herokuapp.com';
const API = 'http://catfact.ninja';

class CatFacts extends React.Component {
  state = {
    facts: [{
      fact: "Cats are lit",
      comments: []
    }]
  }

  componentDidMount() {
    this.getCatFacts();
  }

  getCatFacts() {
    fetch(`${PROXY}/${API}/facts?limit=10`)
      .then(res => res.json())
      .then(json => this.setState({
        facts: json.data.map((fact) => {
          return {
          ...fact,
          comments: []
          }
        })
      }));
  }

  addComment = (commentObject, factToAddTo) => {
    //commentObject = { name: "kylie minogue", comment: "cats are great" }
    //fact = { fact: "cats!!!"}

    // find the fact we're after
    const newFacts = this.state.facts.map((fact) => {
      const isTheRightOne = fact === factToAddTo;
      if (isTheRightOne) {
        return {
          ...fact,
          comments: [
            ...fact.comments,
            { id: uuid(), ...commentObject }
          ]
        }
      } else {
        return fact;
      }
    });

    // console.log(JSON.stringify(this.state));

    this.setState({
      facts: newFacts
    });
  }

  renderFacts() {
    return this.state.facts.map((fact) => {
      return (
        <li className="cat-fact" key={ fact.fact }>
          <Fact fact={ fact } addComment={ this.addComment }/>
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="cat-facts">
        { this.renderFacts() }
      </ul>
    );
  }
}

export default CatFacts;
