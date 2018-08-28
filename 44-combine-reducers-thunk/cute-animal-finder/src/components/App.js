import React, { Component } from 'react';
import '../assets/css/App.css';
import AddUserForm from './AddUserForm';
import UserList from './UserList';
import AnimalPicture from './AnimalPicture';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AnimalPicture />
        <div className="user-container">
          <AddUserForm />
          <UserList />
        </div>
      </div>
    );
  }
}

export default App;
