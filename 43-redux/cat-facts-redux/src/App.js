import React, { Component } from 'react';
import './assets/css/App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import RandomCat from './components/RandomCat';
import CatFacts from './components/CatFacts';
import CatProfiles from './components/CatProfiles';
import Profile from './components/Profile';
import StatusCat from './components/StatusCat';
import { Switch, Route } from 'react-router-dom';
import CatAdapter from './apis/CatAdapter';
import withLoading from './hocs/withLoading';
import withDestructuredLoading from './hocs/withDestructuredLoading';

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
        <Navbar handleClick={this.handleClick} />

        <Switch>
          <Route path="/facts" component={CatFacts} />
          <Route path="/profiles/:id" render={(routerProps) => {
            const catId = parseInt(routerProps.match.params.id, 10);
            const loader = () => {
              return new Promise((resolve, reject) => {
                resolve(CatAdapter.getCat(catId));
              })
            };
            const DynamicProfile = withLoading(withDestructuredLoading(Profile), loader);

            return <DynamicProfile />;
          }}/>
          <Route path="/profiles" component={CatProfiles} />
          <Route exact path="/" component={RandomCat} />
          <Route component={StatusCat} />
        </Switch>
      </div>
    );
  }
}

export default App;
