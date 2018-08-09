import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import House from './components/House'
import Form from './components/Form'
import UUID from 'uuid';

class App extends Component {

  state = {
    rooms: [
      {
        id: '5',
        isLightOn: false,
        name: 'potato rooom'
      },
      {
        id: '6',
        isLightOn: true,
        name: 'bathroom'
      }
    ]
  }


  submitNewRoom = (name) => {
    // event.preventDefault();
    const newRoom = {
      name,
      isLightOn: false,
      id: UUID()
    }
    this.setState({
      rooms: [newRoom, ...this.state.rooms
      ]
    })
    // this.state.rooms.push()
  }


  switchLightSwitch = (roomFromBelow) => {
    // iterate the rooms

    // const theRoom = this.find()//whatever
    const rooms = this.state.rooms.map((room) => {
      if (roomFromBelow === room) {
        return {
          ...room,
          isLightOn: !room.isLightOn
        }
      }
      else {
        return room;
      }
    })

    this.setState({
      rooms
    })

    // find the one that got clicked
    // change the isOn prop
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Form handleSubmit={ this.submitNewRoom } />
        <House rooms={ this.state.rooms } switchLightSwitch={ this.switchLightSwitch } />
      </div>
    );
  }
}

export default App;
