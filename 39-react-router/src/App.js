import React, { Component } from 'react';
import './assets/css/App.css';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import RandomCat from './Components/RandomCat';
import CatFacts from './Components/CatFacts';
import CatProfiles from './Components/CatProfiles';

/*
  App
    Header
    Navbar
    RandomCat
    CatFacts
      Fact
        Comments
          Comment
        CommentForm
        ReactionButtons
    CatProfiles
      Profile
*/
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Navbar />
        <RandomCat />
        <CatFacts />
        <CatProfiles />
      </div>
    );
  }
}

export default App;
