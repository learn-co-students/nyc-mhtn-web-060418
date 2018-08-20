import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';
import NavBar from './NavBar';
import Welcome from './Welcome';
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';
import Snacks from './Snacks';
import MySnacks from './MySnacks';
import SnackAdapter from '../apis/SnackAdapter';

// sessions are stored in the server but where????
// database, memory, filesystem
// blacklist => refresh tokens => iat, exp => 2-factor-auth
class App extends Component {
  state = {
    userId: null
  }

  // Logout => remove token, redirect home (or login/registration), clear userId in App

  componentDidMount() {
    // fetch('http://localhost:3000/users/:id/')
    // route for fetching ID from token
    // setState: userId
  }

  updateUserId = (id) => {
    this.setState({ userId: id });
  }
  // How can we get back the userId after the app refreshes?

  render() {
    return (
        <div className="App">
          <NavBar />

          <Route exact path="/" component={Welcome} />

            {
              !SnackAdapter.isLoggedIn() ?
              <Fragment>
                <Route exact path="/register" component={RegistrationForm} />
                <Route exact path="/login" render={(routerProps) => <LoginForm {...routerProps} onSuccessfulLogin={this.updateUserId} />} />
              </Fragment>
              :
              <Fragment>
                <Route exact path="/snacks" component={Snacks} />
                <Route
                  exact
                  path="/my-snacks"
                  render={(routerProps) => <MySnacks {...routerProps} userId={this.state.userId} />}
                />
              </Fragment>
            }




        </div>
    );
  }
}

export default App;
