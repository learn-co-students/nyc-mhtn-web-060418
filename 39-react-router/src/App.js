import React, { Component } from 'react';
import './assets/css/App.css';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import RandomCat from './Components/RandomCat';
import CatFacts from './Components/CatFacts';
import CatProfiles from './Components/CatProfiles';
import Profile from './Components/Profile';
import FourOhFour from './Components/FourOhFour';
import { Switch, Route } from 'react-router-dom';

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
  state = {
    currentPage: 'home' // facts // profiles
  }

  renderPage = () => {
    switch(this.state.currentPage) {
      case 'home':
        return <RandomCat />
      case 'facts':
        return <CatFacts />
      case 'profiles':
        return <CatProfiles />
    }
  }

  handleClick = (page) => {
    this.setState({ currentPage: page });
  }

  // RESTful routes:
  // GET, PUT, PATCH, POST, NEW, CREATE, DELETE
  // "/profile/:id"
  // "/profile"
  // "/profile/:id/edit"
  render() {
    return (
      <div className="App">
        <Header />
        <Navbar handleClick={this.handleClick} />
        {/* this.renderPage() */}
        <Switch>
          <Route path="/facts" component={CatFacts} />
          <Route path="/profiles/:id" render={(routerProps) => (
            <Profile
              {...routerProps}
              name="Fake Hello Kitty"
              description="This one is a cat."
              avatar="Hello_Kitty.png"
            />
          )}/>
          <Route path="/profiles" component={CatProfiles} />
          <Route exact path="/" component={RandomCat} />
          <Route component={FourOhFour} />
        </Switch>

      </div>
    );
  }
}

export default App;
