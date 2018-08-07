import React, { Component } from 'react';
import './App.css';
import RapperContainer from './RapperContainer';
import rapperList from './RapperList'
import Form from './Form'


class App extends Component {

    state = {
      rapperList: rapperList,
    }

    handleSubmit = (e, rapper) => {
      e.preventDefault()
      let newRapperList = [...this.state.rapperList]
      newRapperList.push(rapper)
      this.setState({
        rapperList: newRapperList
      })
    }

  render() {
    return(
      <div>
       <RapperContainer rapperList={this.state.rapperList}/>
       <Form onSubmit={this.handleSubmit}/>
      </div>
     )
  }
}

export default App;
